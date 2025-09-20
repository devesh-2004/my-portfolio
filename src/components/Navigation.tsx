
import { useState, useEffect } from 'react';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      setIsScrolled(window.scrollY > 50);

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className={`fixed top-8 left-1/2 transform -translate-x-1/2 z-30 transition-all duration-300 ${
      isScrolled 
        ? 'gradient-card backdrop-blur-md border border-gray-600 shadow-modern' 
        : 'bg-black/30 backdrop-blur-md border border-gray-700/50'
    } rounded-full px-6 py-3 hover:gradient-card`}>
      <ul className="flex space-x-6">
        {navItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => scrollToSection(item.id)}
              className={`text-sm font-medium transition-all duration-300 px-3 py-1 rounded-full ${
                activeSection === item.id 
                  ? 'text-white bg-accent-cyan shadow-modern' 
                  : 'text-secondary-gray hover:text-accent-cyan hover:bg-gray-800/50'
              }`}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
