import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema(
  {
    date: {
      type: String,
      default: new Date().toISOString().slice(2, 10).replace(/-/g, '/'),
    },
    title: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
      default: [],
    },
    overview: {
      type: String,
      required: true,
    },
    exterior: {
      type: String,
      required: true,
    },
    interior: {
      type: String,
      required: true,
    },
    performance: {
      type: String,
      required: true,
    },
    safety: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Review", ReviewSchema);
