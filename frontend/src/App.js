import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./auth/AuthContext";
import ProtectedRoute from "./auth/ProtectedRoute";
import LoginPage from "./Pages/LoginPage";
import AdminDashboard from "./Pages/Admin_Dashboard";
import Review from "./Pages/Reviews";
import Articles from "./Pages/Articles";
import Users from "./Pages/Users";
import AddArticle from "./Pages/AddArticle";
import AddReview from "./Pages/AddReview";
import EditReview from "./Pages/EditReview";
import EditArticle from "./Pages/EditArticle";
import Errorpage from "./Pages/Errorpage";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/error" element={<Errorpage />} />
          <Route
            path="/dashboard"
            element={<ProtectedRoute component={AdminDashboard} />}
          />
          <Route
            path="/Review"
            element={<ProtectedRoute component={Review} />}
          />
          <Route
            path="/Articles"
            element={<ProtectedRoute component={Articles} />}
          />
          <Route
            path="/Users"
            element={<ProtectedRoute component={Users} />}
          />
          <Route
            path="/AddArticle"
            element={<ProtectedRoute component={AddArticle} />}
          />
          <Route
            path="/AddReview"
            element={<ProtectedRoute component={AddReview} />}
          />
          <Route
            path="/editReview/:id"
            element={<ProtectedRoute component={EditReview} />}
          />
          <Route
            path="/editArticle/:id"
            element={<ProtectedRoute component={EditArticle} />}
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
