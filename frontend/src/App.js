import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./auth/AuthProvider";
//import ProtectedRoute from "./auth/ProtectedRoute";
import LoginPage from "./Pages/LoginPage";
//import AdminDashboard from "./Pages/Admin_Dashboard";
//import Review from "./Pages/Reviews";
///import Articles from "./Pages/Articles";
//import Users from "./Pages/Users";
////import AddArticle from "./Pages/AddArticle";
//import AddReview from "./Pages/AddReview";
//import EditReview from "./Pages/EditReview";
//import EditArticle from "./Pages/EditArticle";
import Errorpage from "./Pages/Errorpage";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/error" element={<Errorpage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
