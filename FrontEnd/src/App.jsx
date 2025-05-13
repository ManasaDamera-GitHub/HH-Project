import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
// import Signup, { Login } from "./pages/Login/Signup";
// import { Threading } from "./pages/WomenSalon/Threading";
import { Signup } from "./pages/Login/Signup";
import Login from "./pages/Login/Login";
import CleanUp from "./pages/WomenSalon/CleanUp";
import Waxing from "./pages/WomenSalon/Waxing";
import Manicure from "./pages/WomenSalon/Manicure";
import HairCare from "./pages/WomenSalon/HairCare";
import Threading from "./pages/WomenSalon/Threading";
import AllServices from "./pages/WomenSalon/AllServices";
import AllSpaServices from "./pages/WomenSalon/Spa/AllSpaServices";

export const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* <Route path="/login" element={<Login/>} /> */}
          {/* <Route path="/register" element={<Signup />} /> */}
          <Route path="/w_salon/waxing" element={<Waxing />} />
          <Route path="/w_salon/manicure" element={<Manicure />} />
          <Route path="/w_salon/haircare" element={<HairCare />} />
          <Route path="/w_salon/cleanup" element={<CleanUp />} />
          <Route path="/salon/threading" element={<Threading />} />
          <Route path="/women-salon/all-services" element={<AllServices />} />
          <Route
            path="/women-salon/spa-services"
            element={<AllSpaServices />}
          />
        </Routes>
      </div>
    </Router>
  );
};
