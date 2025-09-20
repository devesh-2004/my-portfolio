
import { useState } from 'react';

const HeroSection = () => {
  const [showCV, setShowCV] = useState(false);

  const handleViewWork = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadCV = () => {
    setShowCV(false);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] relative overflow-hidden p-8">
      {/* Animated background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-cyan rounded-full blur-3xl animate-pulse opacity-30"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500 rounded-full blur-3xl animate-pulse animation-delay-1000 opacity-20"></div>
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-accent-cyan rounded-full blur-2xl animate-float opacity-15"></div>
        </div>
        
        {/* Floating particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-accent-cyan rounded-full animate-bounce opacity-60"></div>
        <div className="absolute top-32 right-32 w-3 h-3 bg-blue-400 rounded-full animate-bounce animation-delay-500 opacity-40"></div>
        <div className="absolute bottom-32 left-32 w-2 h-2 bg-accent-cyan rounded-full animate-bounce animation-delay-1000 opacity-50"></div>
        <div className="absolute bottom-20 right-20 w-4 h-4 bg-blue-300 rounded-full animate-bounce animation-delay-700 opacity-30"></div>
      </div>

      <div className="text-center z-10 px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-primary-white bg-gradient-to-r from-white via-blue-200 to-cyan-300 bg-clip-text text-transparent">
            Devesh Purohit
          </h1>
        </div>
        <div className="animate-fade-in animation-delay-500">
          <p className="text-xl md:text-2xl text-secondary-gray mb-6">
            Full Stack Developer & Problem Solver
          </p>
          <p className="text-lg text-secondary-gray mb-8 max-w-2xl mx-auto leading-relaxed">
            Engineering Student | MERN Stack Specialist | Building Modern Web Solutions
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-1000">
          <button 
            onClick={handleViewWork}
            className="group px-8 py-4 bg-accent-cyan text-white rounded-full font-semibold hover:bg-accent-cyan-hover transform hover:scale-105 transition-all duration-300 shadow-modern hover:shadow-xl"
          >
            <span className="group-hover:animate-pulse">View My Work</span>
          </button>
          <button 
            onClick={handleDownloadCV}
            className="group px-8 py-4 border-2 border-accent-cyan text-accent-cyan rounded-full font-semibold hover:bg-accent-cyan hover:text-white hover:border-transparent transform hover:scale-105 transition-all duration-300"
          >
            <span className="group-hover:animate-pulse">Download CV</span>
          </button>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent-cyan rounded-full flex justify-center group cursor-pointer">
          <div className="w-1 h-3 bg-accent-cyan rounded-full mt-2 animate-pulse group-hover:animate-bounce"></div>
        </div>
      </div>

      {/* CV Modal */}
      {showCV && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="gradient-card rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-600 shadow-modern">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-accent-cyan">
                Devesh Purohit - CV
              </h2>
              <button 
                onClick={() => setShowCV(false)}
                className="text-secondary-gray hover:text-white text-2xl"
              >
                ×
              </button>
            </div>
            <div className="space-y-6 text-primary-white">
              <div>
                <h3 className="text-lg font-semibold text-accent-cyan mb-2">Personal Information</h3>
                <p>Email: devesh@example.com</p>
                <p>Phone: +91 98765 43210</p>
                <p>Location: India</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-accent-cyan mb-2">Education</h3>
                <p>3rd Year Engineering Student</p>
                <p>Computer Science & Engineering</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-accent-cyan mb-2">Skills</h3>
                <p>HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, Git/GitHub, DSA</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-accent-cyan mb-2">Projects</h3>
                <p>• E-Commerce Platform with MERN Stack</p>
                <p>• AI-Powered Applications</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
