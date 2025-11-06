// server/db.js
const mysql = require("mysql2");

// create a connection pool
const pool = mysql.createPool({
  host: "localhost",
  user: "root",       // replace with your MySQL username
  password: "921997", // replace with your MySQL password
  database: "forum2025",
});

module.exports = pool.promise(); // allows async/await
