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
  if (event.httpMethod !== "POST") {
    return callback(null, {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    });
  }

  const { token } = JSON.parse(event.body);

  try {
    const decoded = jwt.verify(token, ACCESS_SECRET);
    const username = decoded.name;

    // Mark user as premium in DB
    pool.query(
      "UPDATE hypercoin_users SET isPremium = 1 WHERE username = ?",
      [username],
      (err, results) => {
        if (err) {
          console.log("ERROR", err);
          return callback(null, {
            statusCode: 500,
            body: JSON.stringify({ error: "unable to update" }),
          });
        }

        callback(null, {
          statusCode: 200,
          body: JSON.stringify({
            success: true,
            message: "User upgraded to premium",
          }),
        });
      }
    );
  } catch (err) {
    console.log(err);
    callback(null, {
      statusCode: 401,
      body: JSON.stringify({ error: "Invalid token" }),
    });
  }
};
