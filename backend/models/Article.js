import mongoose from "mongoose";

// Define the schema for articles
const ArticleSchema = new mongoose.Schema(
  {
    createdDate: {
      type: Date,
      default: Date.now, // Automatically set to the current date
    },
    title: {
      type: String,
      required: true, // Title is mandatory
    },
    category: {
      type: String,
      required: true, // Category is mandatory
    },
    images: {
      type: [String], // Store image paths as strings
      default: [], // Default to an empty array if no images are provided
    },
    description: {
      type: String,
      required: true, // Description is mandatory
    },
    author: {
      type: String,
      required: true, // Author is mandatory
    },
  },
  { timestamps: true } // Automatically manage createdAt and updatedAt fields
);

// Export the model
export default mongoose.model("Article", ArticleSchema);
