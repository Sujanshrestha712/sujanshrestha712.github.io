import { AboutSection } from "../components/AboutSection";
import { Navbar } from "../components/Navbar";
import { ProjectSection } from "../components/ProjectSection";
import { SkillsSection } from "../components/SkillsSection";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground} from "@/components/StarBackground";

export const Home = ()=>{
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/*Theme toggle*/}
        <ThemeToggle/>
        {/* Background Effects*/}
        <StarBackground/>
        {/**Navbar */}
        <Navbar/>
        {/**Main Content */}
        <main>
            <HeroSection/>
            <AboutSection/>
            <SkillsSection/>
            <ProjectSection/>
            <ContactSection/>
            <FooterSection/>
        </main>
         

    </div>
    );
};