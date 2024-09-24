import React from "react";
import { Routes, Route } from "react-router-dom";

//other paths for the login process
import RequireAuth from "./auth/RequireAuth";

//pages
import LoginPage from "./Pages/LoginPage";
import AdminDashboard from "./Pages/Admin_Dashboard";



function App() {
  return (
    <Routes>
        {/* Public Interface */}
        <Route path="/Login" element={<LoginPage />} />

       {/* Private Interfaces */}
        <Route element = {<RequireAuth/>}/>
          <Route path="/Dashboard" element={<AdminDashboard/>}/>



    </Routes>
  );
}

export default App;
