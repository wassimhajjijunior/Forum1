// server/server.js
const express = require("express");
const cors = require("cors");
const db = require("./db");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// POST route
app.post("/api/register", async (req, res) => {
  const { fullName, university, email } = req.body;

  if (!fullName || !university || !email) {
    return res.status(400).json({ success: false, message: "All fields are required!" });
  }

  console.log("New registration:", req.body);

  try {
    await db.execute(
      "INSERT INTO registrations (fullName, university, email) VALUES (?, ?, ?)",
      [fullName, university, email]
    );

    res.json({ success: true, message: "Registration saved successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Database error." });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
