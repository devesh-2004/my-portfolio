"use client";

import { motion } from "framer-motion";
import { Link as LinkIcon } from "lucide-react";
import { projectsData } from "@/data/portfolio";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-32 px-4 relative z-10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-accent-cyan mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {projectsData.map((project, index) => {
            const topPosition = `calc(10vh + ${index * 40}px)`;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.1, type: "spring", bounce: 0.3 }}
                className="sticky mb-24 last:mb-0 w-full"
                style={{ top: topPosition }}
              >
                <div className="w-full flex flex-col md:flex-row gap-8 p-8 md:p-12 rounded-3xl bg-[#0f0f13] border border-white/10 shadow-[0_-10px_30px_rgba(0,0,0,0.5)] origin-top backdrop-blur-md">
                  {/* Icon/Visual side */}
                  <div className="w-full md:w-1/3 flex items-center justify-center bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-white/5 p-12 group-hover:border-accent-purple transition-colors">
                    <span className="text-8xl md:text-9xl filter drop-shadow-[0_0_15px_rgba(139,92,246,0.3)] hover:scale-110 transition-transform duration-500">
                      {project.image}
                    </span>
                  </div>

                  {/* Content side */}
                  <div className="w-full md:w-2/3 flex flex-col">
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                      {project.title}
                    </h3>
                    
                    <p className="text-secondary-gray text-lg mb-8 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-3 mb-10">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-4 py-2 rounded-full bg-white/5 text-sm font-medium text-accent-cyan border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="mt-auto">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-accent-purple/10 border border-accent-purple text-white rounded-full hover:bg-accent-purple transition-all duration-300 font-semibold group"
                      >
                        View Project
                        <LinkIcon className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
