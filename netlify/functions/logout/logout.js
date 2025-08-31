const mysql = require("mysql2");

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

  pool.query("DELETE FROM refresh_tokens WHERE token = ?", [token], (err) => {
    if (err) {
      console.error("Logout error:", err);
      return callback(null, {
        statusCode: 500,
        body: JSON.stringify({ error: "Internal server error" }),
      });
    }
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({ message: "Logged out successfully" }),
    });
  });
};
