
import { ThemeProvider } from '@/contexts/ThemeContext';
import CursorFollower from '@/components/CursorFollower';
import ScrollIndicator from '@/components/ScrollIndicator';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <ThemeProvider>
      <div className="bg-background text-foreground overflow-x-hidden transition-colors duration-500">
        <CursorFollower />
        <ScrollIndicator />
        <Navigation />
        
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
