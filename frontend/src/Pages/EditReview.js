import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar"; // Import Navbar
import Select from "react-select";
import "tailwindcss/tailwind.css";
import { motion } from "framer-motion";

// Animation Variants
const slideVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

// Font Options for react-select
const fontOptions = [
  { value: "poppins", label: "Poppins" },
  { value: "russoone", label: "Russo One" },
  { value: "kdamThmorPro", label: "Kdam Thmor Pro" },
  { value: "lorniasolid", label: "Londrina Solid" },
  { value: "bebasneue", label: "Bebas Neue" },
  { value: "bricolagegrotesque", label: "Bricolage Grotesque" },
  { value: "kanit", label: "Kanit" },
];

// Image transition options
const transitionOptions = [
  { value: "fade", label: "Fade" },
  { value: "slide", label: "Slide" },
  { value: "zoom", label: "Zoom" },
];

const EditReview = () => {
  const { id } = useParams(); // Get the review ID from the URL
  const navigate = useNavigate(); // Use useNavigate for navigation
  const [review, setReview] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedFont, setSelectedFont] = useState(fontOptions[0]);
  const [fontSize, setFontSize] = useState(16);
  const [transitionType, setTransitionType] = useState(transitionOptions[0]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchReview = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/reviews/${id}`
        );
        setReview(response.data);
        setSelectedFont({
          value: response.data.font,
          label: response.data.font,
        });
        setFontSize(response.data.fontSize);
        setTransitionType({
          value: response.data.transitionType,
          label: response.data.transitionType,
        });
        setImages(response.data.images || []);
      } catch (error) {
        console.error("Error fetching review:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReview();
  }, [id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setReview({ ...review, [name]: value });
  };

  const handleImageUpload = (e) => {
    const files = e.target.files;
    const imageUrls = [];
    for (let i = 0; i < files.length; i++) {
      imageUrls.push(URL.createObjectURL(files[i]));
    }
    setImages(imageUrls);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const updatedReview = {
        ...review,
        font: selectedFont.value,
        fontSize,
        transitionType: transitionType.value,
        images,
      };
      const response = await axios.put(
        `http://localhost:5000/api/reviews/${id}`,
        updatedReview
      );
      if (response.status === 200) {
        alert("Review updated successfully!");
        navigate("/review");
      } else {
        throw new Error("Failed to update review");
      }
    } catch (error) {
      console.error("Error updating review:", error);
      alert("Error updating review");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="relative min-h-screen w-full bg-baseextra5 flex flex-col items-center">
      <Navbar /> {/* Using Navbar for consistency */}
      <div className="pt-16 flex flex-col items-center w-full p-4">
        <motion.div
          className="bg-baseextra4 shadow-lg rounded-lg p-8 w-full max-w-2xl relative border-2 border-baseprimary"
          variants={slideVariants}
          initial="hidden"
          animate="visible"
          transition={{ type: "spring", stiffness: 120, damping: 10 }}
        >
          <h2 className="text-white font-russoone text-3xl font-bold text-center mb-6">
            Edit Review
          </h2>
          <div className="w-1/2 h-1 bg-baseprimary animate-pulse mx-auto mb-6"></div>
          <div className="absolute inset-0 rounded-lg shadow-lg glow-effect"></div>
          <form onSubmit={handleUpdate} className="relative z-10">
            <div className="mb-4">
              <label className="block text-white font-semibold mb-2">
                Title
              </label>
              <input
                type="text"
                name="title"
                value={review.title}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-white font-semibold mb-2">
                Category
              </label>
              <input
                type="text"
                name="category"
                value={review.category}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-white font-semibold mb-2">
                Brand
              </label>
              <input
                type="text"
                name="brand"
                value={review.brand}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-white font-semibold mb-2">
                Images
              </label>
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageUpload}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-white font-semibold mb-2">
                Description
              </label>
              <textarea
                name="description"
                value={review.description}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                rows="5"
                style={{
                  fontFamily: selectedFont.value,
                  fontSize: `${fontSize}px`,
                }}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-white font-semibold mb-2">
                Author
              </label>
              <input
                type="text"
                name="author"
                value={review.author}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-white font-semibold mb-2">
                Font Style
              </label>
              <Select
                value={selectedFont}
                onChange={(option) => setSelectedFont(option)}
                options={fontOptions}
                className="w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-white font-semibold mb-2">
                Font Size (px)
              </label>
              <input
                type="number"
                value={fontSize}
                onChange={(e) => setFontSize(e.target.value)}
                min="12"
                max="48"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-white font-semibold mb-2">
                Image Transition
              </label>
              <Select
                value={transitionType}
                onChange={(option) => setTransitionType(option)}
                options={transitionOptions}
                className="w-full"
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-2 bg-baseprimary text-white font-bold rounded-lg hover:bg-indigo-600 focus:outline-none transition duration-200"
              >
                Update Review
              </button>
            </div>
          </form>
          <div className="mt-6 flex justify-center space-x-4">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Preview ${index + 1}`}
                className="w-32 h-32 object-cover rounded-lg"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EditReview;
