import "./App.css";
import Header from "./components/Navbar";
import MyCarousel from "./pages/LandingPage/Lp1";
import DoorStep from "./pages/LandingPage/Lp2";
import ThirdPart from "./pages/LandingPage/Lp3";
import FourthPart from "./pages/LandingPage/Lp4";
import { FifthPart } from "./pages/LandingPage/Lp5";
import { W_Salon } from "./pages/LandingPage/Lp6";
import { SpaPage } from "./pages/LandingPage/Lp7";
import { SmartLock } from "./pages/LandingPage/Lp8";

function App() {
  return (
    <>
      <div>
        <Header />
        <MyCarousel />
        <DoorStep />
        <ThirdPart />
        <FourthPart />
        <FifthPart />
        <W_Salon />
        <SpaPage />
        <SmartLock />
      </div>
    </>
  );
}

export default App;
