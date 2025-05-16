import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
// import Signup, { Login } from "./pages/Login/Signup";
// import { Threading } from "./pages/WomenSalon/Threading";
import { Signup } from "./pages/Login/Signup";
import Login from "./pages/Login/Login";
// import CleanUp from "./pages/WomenSalon/CleanUp";
import Waxing from "./pages/WomenSalon/Waxing";
import Manicure from "./pages/WomenSalon/Manicure";
import HairCare from "./pages/WomenSalon/HairCare";
import Threading from "./pages/WomenSalon/Threading";
import AllServices from "./pages/WomenSalon/AllServices";
import AllSpaServices from "./pages/WomenSalon/Spa/AllSpaServices";
import CleanUp from "./pages/WomenSalon/CleanUp";
import HairCut from "./pages/MenSalon/HairCut";
import BeardStyling from "./pages/MenSalon/BeardStyling";
import StressRelief from "./pages/MenSalon/StressRelief";
import Pedicure from "./pages/MenSalon/Pedicure";
import HairColor from "./pages/MenSalon/HairColor";
import Facial from "./pages/MenSalon/Facial";
import AllMenServices from "./pages/MenSalon/AllMenServices";
import Cart from "./pages/context/Cart";

export const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/home" element={<LandingPage />} />
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
          <Route path="/m_salon/haircut" element={<HairCut />} />
          <Route path="/m_salon/beard" element={<BeardStyling />} />
          <Route path="/m_salon/stress" element={<StressRelief />} />
          <Route path="/m_salon/pedicure" element={<Pedicure />} />
          <Route path="/m_salon/haircolor" element={<HairColor />} />
          <Route path="/m_salon/facial" element={<Facial />} />
          <Route path="/men-salon/all-services" element={<AllMenServices />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
};
