import express from "express";
import multer from "multer";
import path from "path";
import fs from "fs";
import mongoose from "mongoose";
import Article from "../models/Article.js";

const router = express.Router();

// Ensure the 'uploads/' directory exists
const uploadDir = "uploads/";
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Configure multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// Middleware to check for multer errors
const checkMulterErrors = (err, req, res, next) => {
  if (err) {
    console.error("Multer error:", err);
    return res.status(500).json({ error: "Failed to upload files" });
  }
  next();
};

// POST route to add a new article
router.post(
  "/",
  upload.array("images", 10),
  checkMulterErrors,
  async (req, res) => {
    const { title, category, description, author } = req.body;

    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ error: "No files uploaded" });
    }

    const images = req.files.map((file) => file.path);

    try {
      const newArticle = new Article({
        title,
        category,
        images,
        description,
        author,
      });

      const article = await newArticle.save();
      res.status(201).json(article);
    } catch (err) {
      console.error("Error creating article:", err.message);
      res.status(500).send("Server error");
    }
  }
);

// GET route to fetch all articles
router.get("/", async (req, res) => {
  try {
    const articles = await Article.find();
    res.json(articles);
  } catch (err) {
    console.error("Error fetching articles:", err.message);
    res.status(500).send("Server error");
  }
});

// GET route to fetch a single article by ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const article = await Article.findById(id);
    if (!article) {
      return res.status(404).json({ error: "Article not found" });
    }
    res.json(article);
  } catch (err) {
    console.error("Error fetching article:", err.message);
    res.status(500).send("Server error");
  }
});

// PUT route to update an article by ID
router.put(
  "/:id",
  upload.array("images", 10),
  checkMulterErrors,
  async (req, res) => {
    const { id } = req.params;
    const { title, category, description, author } = req.body;

    const images = req.files ? req.files.map((file) => file.path) : [];

    try {
      const updatedArticle = await Article.findByIdAndUpdate(
        id,
        { title, category, images, description, author },
        { new: true }
      );

      if (!updatedArticle) {
        return res.status(404).json({ error: "Article not found" });
      }

      res.json(updatedArticle);
    } catch (err) {
      console.error("Error updating article:", err.message);
      res.status(500).send("Server error");
    }
  }
);

// DELETE route to remove an article by ID
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedArticle = await Article.findByIdAndDelete(id);
    if (!deletedArticle) {
      return res.status(404).json({ error: "Article not found" });
    }
    res.json({ message: "Article deleted successfully" });
  } catch (err) {
    console.error("Error deleting article:", err.message);
    res.status(500).send("Server error");
  }
});

export default router;
