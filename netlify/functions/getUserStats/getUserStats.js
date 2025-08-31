const mysql = require("mysql2");
const jwt = require("jsonwebtoken");

const ACCESS_SECRET = process.env.ACCESS_SECRET || "access_secret_example_123";

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
  if (event.httpMethod !== "GET") {
    return callback(null, {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    });
  }

  const authHeader = event.headers.authorization;
  if (!authHeader) {
    return callback(null, {
      statusCode: 401,
      body: JSON.stringify({ error: "No token provided" }),
    });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, ACCESS_SECRET);
    const username = decoded.name;

    pool.query(
      "SELECT * FROM hypercoin_users WHERE username = ? AND user_type IS NOT NULL AND user_type != ''",
      [username],
      (err, rows) => {
        if (err) {
          console.error("Error in /getUserStats:", err);
          return callback(null, {
            statusCode: 500,
            body: JSON.stringify({ error: "Internal server error" }),
          });
        }

        if (rows.length === 0) {
          return callback(null, {
            statusCode: 404,
            body: JSON.stringify({ message: "User is not on premium perks" }),
          });
        }

        const user = rows[0];

        // Generate stats for premium users
        const efficiency = (
          user.efficiency_min +
          Math.random() * user.efficiency_range
        ).toFixed(2); // 80%–100%
        const hashRate = (
          user.hashRate_min +
          Math.random() * user.hashRate_range
        ).toFixed(0); // 2000-3000 MH/s

        callback(null, {
          statusCode: 200,
          body: JSON.stringify({
            efficiency,
            hashRate,
            usertype: user.user_type,
          }),
        });
      }
    );
  } catch (err) {
    console.error("Error in /getUserStats:", err);

    if (err.name === "JsonWebTokenError") {
      return callback(null, {
        statusCode: 401,
        body: JSON.stringify({ error: "Invalid token" }),
      });
    }

    if (err.name === "TokenExpiredError") {
      return callback(null, {
        statusCode: 401,
        body: JSON.stringify({ error: "Token expired" }),
      });
    }

    callback(null, {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal server error" }),
    });
  }
};
