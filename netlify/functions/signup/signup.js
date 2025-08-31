const mysql = require("mysql2");
const bcrypt = require("bcrypt");

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

exports.handler = (event, context, callback) => {
  // Only allow POST
  if (event.httpMethod !== "POST") {
    return callback(null, {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    });
  }

  const { name, password, email } = JSON.parse(event.body);

  // Check if username already exists
  pool.query(
    "SELECT * FROM hypercoin_users WHERE username = ?",
    [name],
    (err, results) => {
      if (err) {
        console.error("Signup error:", err);
        return callback(null, {
          statusCode: 500,
          body: JSON.stringify({
            error: "Internal Error..Try signing up again",
          }),
        });
      }

      if (results.length > 0) {
        return callback(null, {
          statusCode: 400,
          body: JSON.stringify({ error: "Username already exists" }),
        });
      }

      // Hash password
      bcrypt.hash(password, 10, (hashErr, hashedPassword) => {
        if (hashErr) {
          console.error("Signup error:", hashErr);
          return callback(null, {
            statusCode: 500,
            body: JSON.stringify({
              error: "Internal Error..Try signing up again",
            }),
          });
        }

        // Insert new user
        pool.query(
          "INSERT INTO hypercoin_users (username, password, email) VALUES (?, ?, ?)",
          [name, hashedPassword, email],
          (insertErr) => {
            if (insertErr) {
              console.error("Signup error:", insertErr);
              return callback(null, {
                statusCode: 500,
                body: JSON.stringify({
                  error: "Internal Error..Try signing up again",
                }),
              });
            }

            callback(null, {
              statusCode: 201,
              body: JSON.stringify({
                message: "Account created successfully!",
              }),
            });
          }
        );
      });
    }
  );
};
