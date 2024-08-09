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


const transitionOptions = [
  { value: "fade", label: "Fade" },
  { value: "slide", label: "Slide" },
  { value: "zoom", label: "Zoom" },
];

const AddArticle = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [images, setImages] = useState([]);
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [selectedFont, setSelectedFont] = useState(fontOptions[0]);
  const [fontSize, setFontSize] = useState(16);
  const [transitionType, setTransitionType] = useState(transitionOptions[0]);


  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setImages(files); 
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("category", category);
    formData.append("description", description);
    formData.append("author", author);


    images.forEach((file) => {
      formData.append("images", file);
    });

    try {
      const response = await axios.post(
        "http://localhost:5000/api/articles/add",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      alert("Article created successfully!");
      setTitle("");
      setCategory("");
      setImages([]);
      setDescription("");
      setAuthor("");
      navigate("/articles");
    } catch (err) {
      console.error(err);
      alert("Error creating article");
    }
  };

  const imagePreviews = images.map((file, index) => URL.createObjectURL(file));

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
                Create Article
              </button>
            </div>
          </form>
          {imagePreviews.length > 0 && (
            <div className="mt-6">
              <h3 className="text-white font-semibold mb-2">Image Previews:</h3>
              <motion.div
                className="grid grid-cols-3 gap-2"
                initial="hidden"
                animate="visible"
                transition={{ type: "spring", stiffness: 120, damping: 10 }}
              >
                {imagePreviews.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Preview ${index + 1}`}
                    className={`w-full h-32 object-cover rounded-lg shadow-md transition-${transitionType.value}`}
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

export default AddArticle;
