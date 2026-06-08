import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
// Import other sections here as you migrate them
import ExperienceSection from "@/components/sections/ExperienceSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";
import GlobalScene from "@/components/3d/GlobalScene";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-transparent text-white w-full overflow-hidden">
      <GlobalScene />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
