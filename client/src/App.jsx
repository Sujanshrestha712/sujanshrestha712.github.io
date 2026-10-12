import { useEffect } from "react";
import { warmUpApi } from "@/lib/api";
import { StarField } from "@/components/effects/StarField";
import { CursorGlow } from "@/components/effects/CursorGlow";
import { ScrollProgress } from "@/components/effects/ScrollProgress";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Skills } from "@/sections/Skills";
import { Experience } from "@/sections/Experience";
import { Projects } from "@/sections/Projects";
import { Contact } from "@/sections/Contact";

export default function App() {
  useEffect(warmUpApi, []);

  return (
    <>
      <StarField />
      <CursorGlow />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
