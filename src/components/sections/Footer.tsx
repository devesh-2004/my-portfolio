"use client";

import { socialLinks } from "@/data/portfolio";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
  const getIcon = (name: string) => {
    switch (name) {
      case "GitHub": return <Github className="w-5 h-5" />;
      case "LinkedIn": return <Linkedin className="w-5 h-5" />;
      case "Twitter": return <Twitter className="w-5 h-5" />;
      case "Email": return <Mail className="w-5 h-5" />;
      default: return null;
    }
  };

  return (
    <footer className="border-t border-border bg-[#0a0a0c] py-12 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-accent-purple mb-4">
              Devesh Purohit
            </h3>
            <p className="text-secondary-gray mb-6 leading-relaxed max-w-sm">
              Full Stack Developer passionate about solving complex problems and creating amazing digital experiences.
            </p>
            <div className="flex space-x-4">
              {socialLinks.slice(0, 4).map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-900 border border-gray-700 rounded-full flex items-center justify-center hover:bg-accent-purple hover:text-white hover:border-transparent transition-all duration-300 transform hover:scale-110 shadow-lg text-secondary-gray"
                  aria-label={link.name}
                >
                  {getIcon(link.name)}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Experience', 'Services', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-secondary-gray hover:text-accent-cyan transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan/0 group-hover:bg-accent-cyan transition-colors" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">Core Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {['React.js', 'Next.js', 'Node.js', 'MongoDB', 'TypeScript', 'Tailwind CSS'].map((tech) => (
                <span 
                  key={tech}
                  className="text-secondary-gray text-sm px-3 py-1.5 bg-gray-900 rounded-lg border border-gray-800 hover:border-accent-purple hover:text-white transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center flex flex-col items-center">
          <p className="text-secondary-gray text-sm">
            © {new Date().getFullYear()} Devesh Purohit. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs mt-2">
            Built with Next.js, Framer Motion, and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
