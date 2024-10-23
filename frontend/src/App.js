import React from "react";
import { Routes, Route } from "react-router-dom";

//other paths for the login process
import RequireAuth from "./auth/RequireAuth";

//pages
import LoginPage from "./Pages/LoginPage";
import AdminDashboard from "./Pages/Admin_Dashboard";
import AddArticle from "./Pages/AddArticle";
import Articles from './Pages/Articles';
import Reviews from './Pages/Reviews';
import AddReviews from './Pages/AddReview';



function App() {
  return (
    <Routes>
        {/* Public Interface */}
        <Route path="/Login" element={<LoginPage />} />

       {/* Private Interfaces */}
        <Route element={<RequireAuth />}>
          <Route path="/Dashboard" element={<AdminDashboard />} />
          <Route path="/Articles" element={<Articles />}/>
          <Route path="/AddArticle" element={<AddArticle />}/>
          <Route path="/Reviews" element={<Reviews />}/>
          <Route path="/AddReview" element={<AddReviews />}/>
        </Route>
    </Routes>
  );
}

export default App;



