import express from "express";
import mongoose from "mongoose"; // Import mongoose
import Review from "../models/Review.js"; // Update this path if necessary

const router = express.Router();

// Create a new review
router.post("/", async (req, res) => {
  const { title, category, brand, images, description, author } = req.body;

  try {
    const newReview = new Review({
      title,
      category,
      brand,
      images,
      description,
      author,
    });

    const review = await newReview.save();
    res.status(201).json(review);
  } catch (err) {
    console.error("Error creating review:", err.message);
    res.status(500).json({ message: "Server error while creating review" });
  }
});

// Get all reviews
router.get("/", async (req, res) => {
  try {
    const reviews = await Review.find();
    res.json(reviews);
  } catch (err) {
    console.error("Error fetching reviews:", err.message);
    res.status(500).json({ message: "Server eror while fetching reviews" });
  }
});

// Get a review by ID
router.get("/:id", async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);

    if (!review) {
      return res.status(404).json({ msg: "Review not found" });
    }

    res.json(review);
  } catch (err) {
    console.error("Error fetching review by ID:", err.message);
    res.status(500).json({ message: "Server error while fetching review" });
  }
});

// Update a review
router.put("/:id", async (req, res) => {
  const { title, category, brand, images, description, author } = req.body;

  try {
    const review = await Review.findById(req.params.id);

    if (!review) {
      return res.status(404).json({ msg: "Review not found" });
    }

    review.title = title || review.title;
    review.category = category || review.category;
    review.brand = brand || review.brand;
    review.images = images || review.images;
    review.description = description || review.description;
    review.author = author || review.author;

    await review.save();
    res.json(review);
  } catch (err) {
    console.error("Error updating review:", err.message);
    res.status(500).json({ message: "Server error while updating review" });
  }
});

// Delete a review
router.delete("/:id", async (req, res) => {
  try {
    console.log(`Delete request received for ID: ${req.params.id}`);

    // Check if the ID is valid
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ msg: "Invalid review ID" });
    }

    // Attempt to delete the review
    const result = await Review.deleteOne({ _id: req.params.id });

    if (result.deletedCount === 0) {
      return res.status(404).json({ msg: "Review not found" });
    }

    console.log(`Review with ID ${req.params.id} removed successfully.`);
    res.json({ msg: "Review removed" });
  } catch (err) {
    console.error("Error deleting review:", err.message);
    res.status(500).json({
      message: "Server error while deleting review",
      error: err.message,
    });
  }
});

export default router;
