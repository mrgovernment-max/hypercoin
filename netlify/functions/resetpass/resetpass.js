const mysql = require("mysql2");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");

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
  if (!token) {
    return callback(null, {
      statusCode: 400,
      body: JSON.stringify({ error: "No token provided" }),
    });
  }

  let decoded;
  try {
    decoded = jwt.verify(token, ACCESS_SECRET);
  } catch (err) {
    console.log("JWT Error:", err);
    return callback(null, {
      statusCode: 401,
      body: JSON.stringify({ error: "Invalid token" }),
    });
  }

  const username = decoded.name;

  const sql = "SELECT email FROM hypercoin_users WHERE username = ? LIMIT 1";

  pool.query(sql, [username], (err, results) => {
    if (err) {
      console.error("Database error:", err);
      return callback(null, {
        statusCode: 500,
        body: JSON.stringify({ error: "DB error" }),
      });
    }

    if (results.length === 0) {
      return callback(null, {
        statusCode: 404,
        body: JSON.stringify({ error: "User not found" }),
      });
    }

    const resetmail = results[0].email;
    const resetCode = Math.floor(100000 + Math.random() * 900000).toString();

    // Hash the reset code
    bcrypt.hash(resetCode, 10, (hashErr, hashResetcode) => {
      if (hashErr) {
        console.error("Error hashing reset code:", hashErr);
        return callback(null, {
          statusCode: 500,
          body: JSON.stringify({ error: "Server error" }),
        });
      }

      const updateSql =
        "UPDATE hypercoin_users SET reset_code_hash = ?, reset_expires = NOW() + INTERVAL 1 MINUTE WHERE email = ?";

      pool.query(updateSql, [hashResetcode, resetmail], (updateErr) => {
        if (updateErr) {
          console.error("Error updating reset code:", updateErr);
          return callback(null, {
            statusCode: 500,
            body: JSON.stringify({ error: "Unable to save reset code" }),
          });
        }

        // Send email
        let transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.EMAIL_USER || "efenteng1@gmail.com",
            pass: process.env.EMAIL_PASS || "hrzc cuih sssd ttja",
          },
        });

        let mailOptions = {
          from: '"HYPERCOIN" <efenteng1@gmail.com>',
          to: resetmail,
          subject: "Password Reset",
          text: `Enter this code to reset your password: ${resetCode}`,
        };

        transporter.sendMail(mailOptions, (emailError) => {
          if (emailError) {
            console.error("Error sending email:", emailError);
            // Still respond success even if email fails
            return callback(null, {
              statusCode: 200,
              body: JSON.stringify({ message: "Reset process completed" }),
            });
          }

          console.log("Email sent successfully");
          callback(null, {
            statusCode: 200,
            body: JSON.stringify({ message: "Reset code sent to email" }),
          });
        });
      });
    });
  });
};
