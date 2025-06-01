import "./App.css";
import Header from "./components/Navbar";
import MyCarousel from "./pages/LandingPage/Lp1";
import { Purifier } from "./pages/LandingPage/Lp10";
import Repair from "./pages/LandingPage/Lp11";
import HomeRepair from "./pages/LandingPage/Lp12";
import MSB from "./pages/LandingPage/Lp13";
import DoorStep from "./pages/LandingPage/Lp2";
import ThirdPart from "./pages/LandingPage/Lp3";
import FourthPart from "./pages/LandingPage/Lp4";
import { FifthPart } from "./pages/LandingPage/Lp5";
import { W_Salon } from "./pages/LandingPage/Lp6";
import { SpaPage } from "./pages/LandingPage/Lp7";
import { SmartLock } from "./pages/LandingPage/Lp8";
import { M_Salon } from "./pages/LandingPage/Lp9";

function LandingPage() {
  return (
    <>
      <div>
        <Header />
        <MyCarousel />
        <DoorStep />
        <ThirdPart />
        <FourthPart />
        <FifthPart />
        <MSB />
        <W_Salon />
        <SpaPage />
        <Repair />
        <SmartLock />
        <M_Salon />
        {/* <Purifier /> */}
        <HomeRepair />
      </div>
    </>
  );
}

export default LandingPage;
