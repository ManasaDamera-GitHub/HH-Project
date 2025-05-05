import React from "react";
// import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import { Login } from "./pages/Login/Login";
import { Waxing } from "./pages/WomenSalon/waxing";
import { Manicure } from "./pages/WomenSalon/Manicure";
import { HairCare } from "./pages/WomenSalon/HairCare";
import { CleanUp } from "./pages/WomenSalon/CleanUp";
import { Threading } from "./pages/WomenSalon/Threading";

export const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Login />} />
          <Route path="/w_salon/waxing" element={<Waxing />} />
          <Route path="/w_salon/manicure" element={<Manicure />} />
          <Route path="/w_salon/haircare" element={<HairCare />} />
          <Route path="/w_salon/cleanup" element={<CleanUp />} />
          <Route path="/w_salon/threading" element={<Threading />} />
        </Routes>
      </div>
    </Router>
  );
};
