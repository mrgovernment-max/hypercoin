const mysql = require("mysql2");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const ACCESS_SECRET = process.env.ACCESS_SECRET || "access_secret_example_123";
const REFRESH_SECRET =
  process.env.REFRESH_SECRET || "refresh_secret_example_456";

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Generate tokens
function generateAccessToken(name) {
  return jwt.sign({ name }, ACCESS_SECRET, { expiresIn: "30s" });
}

function generateRefreshToken(name, callback) {
  const refreshToken = jwt.sign({ name }, REFRESH_SECRET, { expiresIn: "2m" });

  const sql = `
    INSERT INTO refresh_tokens (username, token) 
    VALUES (?, ?)
    ON DUPLICATE KEY UPDATE token = VALUES(token)
  `;

  pool.query(sql, [name, refreshToken], (err) => {
    if (err) {
      console.error("Error saving refresh token:", err);
      return callback(err);
    }
    console.log("Refresh token upserted in DB");
    callback(null, refreshToken);
  });
}

exports.handler = (event, context, callback) => {
  if (event.httpMethod !== "POST") {
    return callback(null, {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    });
  }

  const { name, password } = JSON.parse(event.body);

  pool.query(
    "SELECT * FROM hypercoin_users WHERE username = ?",
    [name],
    (err, results) => {
      if (err) {
        console.error("Login error:", err);
        return callback(null, {
          statusCode: 500,
          body: JSON.stringify({
            error: "Internal server error try signing in again",
          }),
        });
      }

      if (results.length === 0) {
        return callback(null, {
          statusCode: 401,
          body: JSON.stringify({ error: "Invalid credentials" }),
        });
      }

      const user = results[0];
      bcrypt.compare(password, user.password, (compareErr, match) => {
        if (compareErr) {
          console.error("Login error:", compareErr);
          return callback(null, {
            statusCode: 500,
            body: JSON.stringify({
              error: "Internal server error try signing in again",
            }),
          });
        }

        if (!match) {
          return callback(null, {
            statusCode: 401,
            body: JSON.stringify({ error: "Invalid credentials" }),
          });
        }

        // Generate tokens
        const accessToken = generateAccessToken(name);
        generateRefreshToken(name, (refreshErr, refreshToken) => {
          if (refreshErr) {
            console.error("Login error:", refreshErr);
            return callback(null, {
              statusCode: 500,
              body: JSON.stringify({
                error: "Internal server error try signing in again",
              }),
            });
          }

          callback(null, {
            statusCode: 200,
            body: JSON.stringify({ accessToken, refreshToken, name }),
          });
        });
      });
    }
  );
};
