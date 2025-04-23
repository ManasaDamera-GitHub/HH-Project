import "./App.css";
import Header from "./components/Navbar";
import MyCarousel from "./pages/LandingPage/Lp1";
import DoorStep from "./pages/LandingPage/Lp2";
import ThirdPart from "./pages/LandingPage/Lp3";
import FourthPart from "./pages/LandingPage/Lp4";

function App() {
  return (
    <>
      <div>
        <Header />
        <MyCarousel />
        <DoorStep />
        <ThirdPart />
        <FourthPart />
      </div>
    </>
  );
}

export default App;
