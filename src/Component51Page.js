import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { Component51, Component54Page } from './ui-components'; // Import your components
import Component51Page from "./Component51Page"; // Correct the path as needed

function App() {
  const navigate = useNavigate(); // React Router navigation hook

  const handleComponent51Click = () => {
    navigate("/Component51Page"); // Navigate to Component51Page
  };

  return (
    <div className="form-container">
      {/* Your other components */}
      
      <div className="components-wrapper">
        <Component51 onClick={handleComponent51Click} />
      </div>

      <Router>
        <Routes>
          <Route path="/Component54Page" element={<Component54Page />} />
          <Route path="/Component51Page" element={<Component51Page />} />
          {/* Add other routes here */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
