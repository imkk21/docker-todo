require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
app.use("/todos", require("./routes/todoRoutes"));


const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ MongoDB Connection Error:", err));

// Simple Route
app.get("/", (req, res) => {
  res.send("Welcome to the To-Do API!");
});

// Start Server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
