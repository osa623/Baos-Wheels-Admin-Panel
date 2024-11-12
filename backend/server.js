import express from "express";
import cors from "cors";
import pkg from "./utils/dbconnection.js"; // Import the entire module as a default import
const { connect } = pkg;// Make sure this path is correct
import reviewRoute from "./routes/review.js"; // Import review route
import articleRoute from "./routes/article.js"; // Import article route

// Initialize the express app
const app = express();
const PORT = process.env.PORT || 5000;

// Use CORS middleware to allow access from your frontend domain
app.use(
  cors({
    origin: "https://osa623.github.io/Baos_wheels_Web_Application/", // Replace with the URL of your frontend (GitHub Pages or any live server)
    credentials: true,
  })
);

// Use express.json middleware to parse JSON requests
app.use(express.json({ limit: "40mb" }));

// Test route to ensure the API is working
app.get("/", (req, res) => {
  res.send("<h2>Your API is Working...</h2>");
});

// Use review route
app.use("/api/reviews", reviewRoute);

// Use article route
app.use("/api/articles", articleRoute);

// Start the server and connect to the database
app.listen(PORT, '0.0.0.0', () => {
  console.log(`API is running on port ${PORT}`);
  connect(); // Connect to MongoDB
});
