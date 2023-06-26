import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./Homepage.scss";
import AboutSection from "./about/Aboutsection";
import { HeroSection } from "./hero/HeroSection";

const Homepage = () => {
  return (
    <div className="homepage__container">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Homepage;
