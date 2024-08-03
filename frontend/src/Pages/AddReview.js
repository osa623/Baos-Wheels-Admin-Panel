import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "tailwindcss/tailwind.css";
import { motion } from "framer-motion";
import Select from "react-select";
import Navbar from "../Components/Navbar"; // Assuming Navbar is a common component

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

const AddReview = () => {
  const navigate = useNavigate(); // Use useNavigate instead of useHistory
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [images, setImages] = useState([]);
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [selectedFont, setSelectedFont] = useState(fontOptions[0]);
  const [fontSize, setFontSize] = useState(16);
  const [transitionType, setTransitionType] = useState(transitionOptions[0]);

  // Handle image upload
  const handleImageUpload = (e) => {
    const files = e.target.files;
    const imageUrls = [];
    for (let i = 0; i < files.length; i++) {
      imageUrls.push(URL.createObjectURL(files[i]));
    }
    setImages(imageUrls);
  };

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newReview = {
        title,
        category,
        brand,
        images,
        description,
        author,
        font: selectedFont.value,
        fontSize,
        transitionType: transitionType.value,
      };
      const response = await axios.post(
        "http://localhost:5000/api/reviews",
        newReview
      );
      console.log(response.data);
      alert("Review added successfully!");
      navigate("/reviews"); // Use navigate instead of history.push
    } catch (err) {
      console.error(err);
      alert("Error adding review");
    }
  };

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
            Add Review
          </h2>
          <div className="w-1/2 h-1 bg-baseprimary animate-pulse mx-auto mb-6"></div>
          <div className="absolute inset-0 rounded-lg shadow-lg glow-effect"></div>
          <form onSubmit={handleSubmit} className="relative z-10">
            <div className="mb-4">
              <label className="block text-white font-semibold mb-2">
                Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
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
                value={category}
                onChange={(e) => setCategory(e.target.value)}
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
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
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
                value={description}
                onChange={(e) => setDescription(e.target.value)}
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
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
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
                Add Review
              </button>
            </div>
          </form>
          {images.length > 0 && (
            <div className="mt-6">
              <h3 className="text-white font-semibold mb-2">Image Previews:</h3>
              <motion.div
                className="grid grid-cols-3 gap-2"
                initial="hidden"
                animate="visible"
                transition={{ type: "spring", stiffness: 120, damping: 10 }}
              >
                {images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Preview ${index + 1}`}
                    className="w-full h-32 object-cover rounded-lg shadow-md"
                  />
                ))}
              </motion.div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default AddReview;
