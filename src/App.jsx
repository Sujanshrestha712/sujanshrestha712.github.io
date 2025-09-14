import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NotFound } from "./pages/NotFound";
import { StarBackground } from "./components/StarBackground";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { SkillsSection } from "./components/SkillsSection";
import { ProjectSection } from "./components/ProjectSection"; 
import { ContactSection } from "./components/ContactSection";
import {FooterSection} from "./components/FooterSection";
import { ToastProvider } from "./hooks/use-toast";


function HomePage() {
  return (
    <div className="p-4">
      <StarBackground />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectSection />
      <ContactSection />
      <FooterSection/>
    </div>
  );
}

function App() {
  return (
    <ToastProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ToastProvider>
  );
}

export default App;
