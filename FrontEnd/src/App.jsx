import "./App.css";
import Header from "./components/Navbar";
import MyCarousel from "./pages/LandingPage/Lp1";
import DoorStep from "./pages/LandingPage/Lp2";
import CarouselComponent from "./pages/LandingPage/Lp3";

function App() {
  return (
    <>
      <div>
        <Header />
        <MyCarousel />
        <DoorStep />
        <CarouselComponent />
      </div>
    </>
  );
}

export default App;
