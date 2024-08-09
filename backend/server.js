import express from "express";
import cors from "cors";
import { connect } from "./utils/dbconnection.js";
import reviewRoute from "./routes/review.js";
import articleRoute from "./routes/article.js"; 

// Initialize the express app
const app = express();
const PORT = process.env.PORT || 5000;


app.use(
  cors({
    origin: "http://localhost:3001",
    credentials: true,
  })
);


app.use(express.json({ limit: "40mb" }));


app.get("/", (req, res) => {
  res.send("<h2>Your API is Working...</h2>");
});




app.listen(PORT, () => {
  console.log(`API is running on port ${PORT}`);
  connect();
});

 
app.use("/api/reviews", reviewRoute);
app.use("/api/articles", articleRoute);
