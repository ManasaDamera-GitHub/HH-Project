import React from "react";
// import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import { Login } from "./pages/Login/Login";

export const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};
