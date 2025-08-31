const jwt = require("jsonwebtoken");

const ACCESS_SECRET = process.env.ACCESS_SECRET || "access_secret_example_123";

// Middleware to authenticate access token
function authenticate(token) {
  if (!token) return { error: "No token provided" };

  try {
    const decoded = jwt.verify(token, ACCESS_SECRET);
    return { user: decoded };
  } catch (err) {
    return { error: "Invalid or expired access token" };
  }
}

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

  const token = authHeader.split(" ")[1]; // Bearer <token>
  const authResult = authenticate(token);

  if (authResult.error) {
    return callback(null, {
      statusCode: 401,
      body: JSON.stringify({ error: authResult.error }),
    });
  }

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ username: `${authResult.user.name}` }),
  });
};
