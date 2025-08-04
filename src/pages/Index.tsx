import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Timeline from "../components/Timeline";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Resume from "../components/Resume";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import QAAssistant from "@/components/QAAssistant";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Timeline />
      <Skills />
      <Projects />
      <Resume />
      <QAAssistant />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
