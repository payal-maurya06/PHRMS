const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
require("./config/db");

// Import routes
const AuthRouter = require("./routes/AuthRouter");

// Middleware
app.use(bodyParser.json()); // instead of body-parser
app.use(cors());


// Test route
app.get("/ping", (req, res) => {
  res.send("PONG");
});

// Routes
app.use("/auth", AuthRouter);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
