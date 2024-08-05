import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import AdminDashboard from "./Pages/Admin_Dashboard";
import RegisterPage from "./Pages/RegisterPage";
import Review from "./Pages/Reviews";
import Articles from "./Pages/Articles";
import Users from "./Pages/Users";
import AddArticle from "./Pages/AddArticle";
import AddReview from "./Pages/AddReview";
import EditReview from "./Pages/EditReview";
import EditArticle from "./Pages/EditArticle"; // Import EditArticle component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/Registration" element={<RegisterPage />} />
        <Route path="/Review" element={<Review />} />
        <Route path="/Articles" element={<Articles />} />
        <Route path="/Users" element={<Users />} />
        <Route path="/AddArticle" element={<AddArticle />} />
        <Route path="/AddReview" element={<AddReview />} />
        <Route path="/editReview/:id" element={<EditReview />} />
        <Route path="/editArticle/:id" element={<EditArticle />} />{" "}
        
      </Routes>
    </Router>
  );
}

export default App;
