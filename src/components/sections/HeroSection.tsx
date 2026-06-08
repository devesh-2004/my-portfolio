"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, ArrowDown } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { heroData, socialLinks } from "@/data/portfolio";
import Image from "next/image";

export default function HeroSection() {
  const handleScrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getIcon = (name: string) => {
    switch (name) {
      case "GitHub": return <Github className="w-6 h-6" />;
      case "LinkedIn": return <Linkedin className="w-6 h-6" />;
      case "Twitter": return <Twitter className="w-6 h-6" />;
      case "Email": return <Mail className="w-6 h-6" />;
      default: return null;
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20 lg:h-screen"
    >
      {/* Main Content Overlay */}
      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-accent-cyan mb-2 tracking-wide font-medium"
          >
            Hi, I'm
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-300 to-purple-500"
          >
            {heroData.name}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="h-10 mb-6"
          >
            <TypeAnimation
              sequence={heroData.titles.flatMap(title => [title, 2000])}
              wrapper="p"
              speed={50}
              className="text-2xl md:text-3xl text-secondary-gray font-semibold"
              repeat={Infinity}
            />
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-lg text-secondary-gray mb-10 max-w-xl leading-relaxed"
          >
            {heroData.description}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 w-full justify-center lg:justify-start mb-12"
          >
            <button
              onClick={() => handleScrollToSection("projects")}
              className="px-8 py-4 bg-accent-purple text-white rounded-full font-bold hover:bg-opacity-80 transition-all duration-300 shadow-neon transform hover:scale-105"
            >
              View My Work
            </button>
            <a
              href={heroData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-accent-cyan text-accent-cyan rounded-full font-bold hover:bg-accent-cyan hover:text-black transition-all duration-300 transform hover:scale-105 text-center"
            >
              Download Resume
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex gap-6 justify-center lg:justify-start"
          >
            {socialLinks.slice(0, 4).map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-gray hover:text-accent-cyan transition-colors transform hover:scale-125 duration-300"
                aria-label={link.name}
              >
                {getIcon(link.name)}
              </a>
            ))}
          </motion.div>

          {/* Scroll Down */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            onClick={() => handleScrollToSection("about")}
            className="mt-12 flex items-center gap-2 text-secondary-gray hover:text-white transition-colors group"
          >
            <span className="text-sm tracking-widest uppercase">Scroll to explore</span>
            <ArrowDown className="w-4 h-4 group-hover:animate-bounce text-accent-cyan" />
          </motion.button>
        </motion.div>

        {/* Right Column: Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex justify-center items-center lg:justify-end"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-2 border-accent-purple shadow-neon bg-gray-900/50 backdrop-blur-sm">
            <Image
              src={heroData.profileImage}
              alt={heroData.name}
              fill
              className="object-cover hover:scale-110 transition-transform duration-700"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
