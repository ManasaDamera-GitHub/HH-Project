import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App";
// import LandingPage from "./LandingPage";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <>
      <App />
      {/* <LandingPage /> */}
    </>
  </StrictMode>
);
