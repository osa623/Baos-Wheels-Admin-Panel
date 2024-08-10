import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "tailwindcss/tailwind.css";
import { motion } from "framer-motion";
import Select from "react-select";
import Navbar from "../Components/Navbar";

const slideVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

const fontOptions = [
  { value: "poppins", label: "Poppins" },
  { value: "russoone", label: "Russo One" },
  { value: "kdamThmorPro", label: "Kdam Thmor Pro" },
  { value: "lorniasolid", label: "Londrina Solid" },
  { value: "bebasneue", label: "Bebas Neue" },
  { value: "bricolagegrotesque", label: "Bricolage Grotesque" },
  { value: "kanit", label: "Kanit" },
];

const AddArticle = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [imageUrls, setImageUrls] = useState([""]); // Updated state to manage image URLs
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [selectedFont, setSelectedFont] = useState(fontOptions[0]);
  const [fontSize, setFontSize] = useState(16);

  const handleImageUrlChange = (index, value) => {
    const newImageUrls = [...imageUrls];
    newImageUrls[index] = value;
    setImageUrls(newImageUrls);
  };

  const addImageUrlField = () => {
    setImageUrls([...imageUrls, ""]);
  };

  const removeImageUrlField = (index) => {
    const newImageUrls = imageUrls.filter((_, i) => i !== index);
    setImageUrls(newImageUrls);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const articleData = {
      title,
      category,
      description,
      author,
      images: imageUrls,
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/api/articles/add",
        articleData
      );
      console.log(response.data);
      alert("Article created successfully!");
      setTitle("");
      setCategory("");
      setImageUrls([""]); // Reset to a single empty field
      setDescription("");
      setAuthor("");
      navigate("/articles");
    } catch (err) {
      console.error(err);
      alert("Error creating article");
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-baseextra5 flex flex-col items-center">
      <Navbar />
      <div className="pt-16 flex flex-col items-center w-full p-4">
        <motion.div
          className="bg-baseextra4 shadow-lg rounded-lg p-8 w-full max-w-2xl relative border-2 border-baseprimary"
          variants={slideVariants}
          initial="hidden"
          animate="visible"
          transition={{ type: "spring", stiffness: 120, damping: 10 }}
        >
          <h2 className="text-white font-russoone text-3xl font-bold text-center mb-6">
            Create Article
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
                Image URLs
              </label>
              {imageUrls.map((url, index) => (
                <div key={index} className="flex items-center mb-2">
                  <input
                    type="text"
                    value={url}
                    onChange={(e) => handleImageUrlChange(index, e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                    placeholder="Enter image URL"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => removeImageUrlField(index)}
                    className="ml-2 px-2 py-1 bg-red-500 text-white rounded"
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={addImageUrlField}
                className="mt-2 px-4 py-2 bg-green-500 text-white rounded"
              >
                Add Image URL
              </button>
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
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-2 bg-baseprimary text-white font-bold rounded-lg hover:bg-indigo-600 focus:outline-none transition duration-200"
              >
                Create Article
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default AddArticle;
