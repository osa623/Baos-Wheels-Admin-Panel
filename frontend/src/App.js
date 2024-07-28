// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './Pages/LoginPage.js';
import AdminDashboard from './Pages/Admin_Dashboard.js';
import RegisterPage from './Pages/RegisterPage.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path=' ' element={<LoginPage />} />
        <Route path='/dashboard' element={<AdminDashboard/>}/>
        <Route path='/Registration' element={<RegisterPage/>}/>

      </Routes>
    </Router>
  );
}

export default App;
