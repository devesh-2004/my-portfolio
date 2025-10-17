
// import { useState, useEffect } from 'react';

// const Navigation = () => {
//   const [activeSection, setActiveSection] = useState('home');
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = ['home', 'about', 'services', 'projects', 'contact'];
//       const scrollPosition = window.scrollY + 100;
      
//       setIsScrolled(window.scrollY > 50);

//       sections.forEach((section) => {
//         const element = document.getElementById(section);
//         if (element) {
//           const offsetTop = element.offsetTop;
//           const offsetHeight = element.offsetHeight;
          
//           if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
//             setActiveSection(section);
//           }
//         }
//       });
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollToSection = (sectionId: string) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth', block: 'start' });
//     }
//   };

//   const navItems = [
//     { id: 'home', label: 'Home' },
//     { id: 'about', label: 'About' },
//     { id: 'services', label: 'Services' },
//     { id: 'projects', label: 'Projects' },
//     { id: 'contact', label: 'Contact' }
//   ];

//   return (
//     <nav className={`fixed top-8 left-1/2 transform -translate-x-1/2 z-30 transition-all duration-300 ${
//       isScrolled 
//         ? 'gradient-card backdrop-blur-md border border-gray-600 shadow-modern' 
//         : 'bg-black/30 backdrop-blur-md border border-gray-700/50'
//     } rounded-full px-6 py-3 hover:gradient-card`}>
//       <ul className="flex space-x-6">
//         {navItems.map((item) => (
//           <li key={item.id}>
//             <button
//               onClick={() => scrollToSection(item.id)}
//               className={`text-sm font-medium transition-all duration-300 px-3 py-1 rounded-full ${
//                 activeSection === item.id 
//                   ? 'text-white bg-accent-cyan shadow-modern' 
//                   : 'text-secondary-gray hover:text-accent-cyan hover:bg-gray-800/50'
//               }`}
//             >
//               {item.label}
//             </button>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// };

// export default Navigation;
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "services", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      setIsScrolled(window.scrollY > 50);

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false); // close mobile menu on click
    }
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 w-[90%] md:w-auto ${
        isScrolled
          ? "gradient-card backdrop-blur-md border border-gray-600 shadow-modern"
          : "bg-black/30 backdrop-blur-md border border-gray-700/50"
      } rounded-full px-4 py-3 md:px-6 md:py-3`}
    >
      {/* Desktop Navigation */}
      <ul className="hidden md:flex space-x-6 items-center justify-center">
        {navItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => scrollToSection(item.id)}
              className={`text-sm font-medium transition-all duration-300 px-3 py-1 rounded-full ${
                activeSection === item.id
                  ? "text-white bg-accent-cyan shadow-modern"
                  : "text-secondary-gray hover:text-accent-cyan hover:bg-gray-800/50"
              }`}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>

      {/* Mobile Header (Logo + Menu Button) */}
      <div className="flex items-center justify-between md:hidden">
        {/* Placeholder for left alignment */}
        <div className="w-6" />

        {/* Centered Logo */}
        <div
          className="text-white text-lg font-bold select-none cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          <span className="text-accent-cyan">My</span> Portfolio
        </div>

        {/* Menu Toggle on Right */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white focus:outline-none"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`absolute top-full left-0 w-full mt-2 bg-black/80 backdrop-blur-md rounded-2xl shadow-lg border border-gray-700/50 transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center space-y-2 py-4">
          {navItems.map((item) => (
            <li key={item.id} className="w-full text-center">
              <button
                onClick={() => scrollToSection(item.id)}
                className={`w-full py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                  activeSection === item.id
                    ? "text-white bg-accent-cyan shadow-modern"
                    : "text-secondary-gray hover:text-accent-cyan hover:bg-gray-800/50"
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
