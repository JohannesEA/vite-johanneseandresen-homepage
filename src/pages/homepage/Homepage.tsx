import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import { dummyDataExpertise } from "../../development/data";
import "./Homepage.scss";
import AboutSection from "./about/Aboutsection";
import ExpertiseSection from "./expertise/ExpertiseSection";
import { HeroSection } from "./hero/HeroSection";
import ProjectsSection from "./projects/ProjectsSection";

const Homepage = () => {
  return (
    <div className="homepage__container">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExpertiseSection expertiseList={dummyDataExpertise} />
      <ProjectsSection />
      <Footer />
    </div>
  );
};

export default Homepage;
