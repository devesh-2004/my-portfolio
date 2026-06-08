import { useState } from "react";
import { Github, Linkedin, Twitter, Mail, ArrowDown } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  // clicking "Download Resume" will open the PDF in a new tab (view in browser)
  const handleViewWork = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadResume = () => {
    // Open the resume in a new tab to view in browser (doesn't force download)
    const url = "/resume.pdf"; // <-- ensure this file is in your public/ folder
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.focus();
  };

  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] relative overflow-hidden p-8 lg:h-screen"
    >
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
        <div className="absolute top-1/3 left-1/2 w-2 h-2 bg-accent-cyan rounded-full animate-bounce animation-delay-300 opacity-50"></div>
        <div className="absolute bottom-1/2 right-1/3 w-3 h-3 bg-blue-400 rounded-full animate-bounce animation-delay-800 opacity-40"></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: Text Content */}
        <div className="text-center lg:text-left animate-fade-in flex flex-col items-center lg:items-start">
          <p className="text-2xl md:text-3xl text-secondary-gray mb-4 animation-delay-200">
            Hi, I'm
          </p>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-primary-white bg-gradient-to-r from-white via-blue-200 to-cyan-300 bg-clip-text text-transparent">
            Devesh Purohit
          </h1>

          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              2000,
              "Problem Solver",
              2000,
              "MERN Stack Specialist",
              2000,
            ]}
            wrapper="p"
            speed={50}
            className="text-xl md:text-2xl text-secondary-gray mb-6 h-8 flex-shrink-0"
            repeat={Infinity}
          />

          <p className="text-lg text-secondary-gray mb-8 max-w-2xl leading-relaxed">
            Engineering Student | Building Modern Web Solutions
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full mb-12">
            <button
              onClick={handleViewWork}
              className="group px-8 py-4 bg-accent-cyan text-white rounded-full font-semibold hover:bg-accent-cyan-hover transform hover:scale-105 transition-all duration-300 shadow-modern hover:shadow-xl"
            >
              <span className="group-hover:animate-pulse">View My Work</span>
            </button>
            <button
              onClick={handleDownloadResume}
              className="group px-8 py-4 border-2 border-accent-cyan text-accent-cyan rounded-full font-semibold hover:bg-accent-cyan hover:text-white hover:border-transparent transform hover:scale-105 transition-all duration-300"
            >
              <span className="group-hover:animate-pulse">Download Resume</span>
            </button>
          </div>

          {/* Social Media Links */}
          <div className="flex gap-6 justify-center lg:justify-start w-full">
            <a
              href="https://github.com/devesh-2004"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary-gray hover:text-accent-cyan hover:scale-125 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="w-7 h-7" />
            </a>
            <a
              href="https://www.linkedin.com/in/devesh-purohit-06557b245/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary-gray hover:text-accent-cyan hover:scale-125 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-7 h-7" />
            </a>
            <a
              href="https://x.com/_devesh_21_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary-gray hover:text-accent-cyan hover:scale-125 transition-all duration-300"
              aria-label="Twitter"
            >
              <Twitter className="w-7 h-7" />
            </a>
            <a
              href="mailto:deveshpurohit275@gmail.com"
              className="text-secondary-gray hover:text-accent-cyan hover:scale-125 transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="w-7 h-7" />
            </a>
          </div>

          {/* New Scroll Button under social media */}
          <button
            onClick={() => handleScrollToSection("services")}
            className="flex items-center gap-2 mt-8 px-6 py-3 border border-accent-cyan text-accent-cyan rounded-full hover:bg-accent-cyan hover:text-white transition-colors duration-300 transform hover:scale-105"
            aria-label="Scroll down to learn more"
          >
            Learn More <ArrowDown className="w-5 h-5 animate-bounce" />
          </button>
        </div>

        {/* Right Column: Image */}
        <div className="flex justify-center items-center p-6 lg:p-0 mt-12 lg:mt-0">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[50vh] lg:h-[50vh] rounded-full overflow-hidden border-4 border-accent-cyan shadow-lg animate-float-alt">
            {/* IMPORTANT: Replace '/profile.png' with your actual image path in public/ */}
            <img
              src="/profile.png"
              alt="Devesh Purohit Profile"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
            {/* Optional: Add a subtle overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black/20"></div>
          </div>
        </div>
      </div>

      {/* NOTE: Modal removed — clicking the resume button opens the PDF in a new tab */}
    </section>
  );
};

export default HeroSection;
