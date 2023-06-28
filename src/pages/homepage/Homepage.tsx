import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import { dummyDataExpertise } from "../../development/data";
import "./Homepage.scss";
import AboutSection from "./about/Aboutsection";
import ContactSection from "./contact/ContactSection";
import CvSection from "./cv/CvSection";
import ExpertiseSection from "./expertise/ExpertiseSection";
import { HeroSection } from "./hero/HeroSection";
import ProjectsSection from "./projects/ProjectsSection";

const Homepage = () => {
  return (
    <div className="homepage__container">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CvSection />
      <ExpertiseSection expertiseList={dummyDataExpertise} />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Homepage;
