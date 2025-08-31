const mysql = require("mysql2");
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

function generateAccessToken(name) {
  return jwt.sign({ name }, ACCESS_SECRET, { expiresIn: "30s" });
}

exports.handler = (event, context, callback) => {
  if (event.httpMethod !== "POST") {
    return callback(null, {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    });
  }

  const { token } = JSON.parse(event.body);
  if (!token) {
    return callback(null, {
      statusCode: 401,
      body: JSON.stringify({ error: "No refresh token provided" }),
    });
  }

  pool.query(
    "SELECT token FROM refresh_tokens WHERE token = ?",
    [token],
    (err, results) => {
      if (err) {
        console.error("Token error:", err);
        return callback(null, {
          statusCode: 500,
          body: JSON.stringify({ error: "Internal server error" }),
        });
      }

      if (results.length === 0) {
        return callback(null, {
          statusCode: 403,
          body: JSON.stringify({ error: "Invalid refresh token" }),
        });
      }

      try {
        const decoded = jwt.verify(token, REFRESH_SECRET);
        const accessToken = generateAccessToken(decoded.name);
        return callback(null, {
          statusCode: 200,
          body: JSON.stringify({ accessToken }),
        });
      } catch (verifyErr) {
        console.error("Token error:", verifyErr);
        return callback(null, {
          statusCode: 403,
          body: JSON.stringify({ error: "Expired or invalid refresh token" }),
        });
      }
    }
  );
};
