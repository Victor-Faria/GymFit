import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Cards from "./components/Cards";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Classes from "./components/Classes";
import GymApp from "./components/GymApp";
import "./App.css";

function App() {
  return (
    <div>
      <Hero />
      <Cards />
      <CTA />
      <Pricing />
      <GymApp />
      <Classes />
      <Footer />
    </div>
  );
}

export default App;
