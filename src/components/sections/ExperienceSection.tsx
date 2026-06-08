"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Calendar } from "lucide-react";
import { experienceData } from "@/data/portfolio";

export default function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Grow the line based on scroll
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="py-32 px-4 relative z-10" ref={containerRef}>
      <div className="max-w-4xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-accent-purple mx-auto rounded-full" />
        </motion.div>

        {/* The Timeline Track (unfilled) */}
        <div className="absolute left-4 md:left-1/2 top-48 bottom-0 w-0.5 bg-gray-800 -translate-x-1/2 rounded-full hidden md:block" />
        
        {/* The Animated Timeline Line (filled) */}
        <motion.div
          style={{ height: lineHeight }}
          className="absolute left-4 md:left-1/2 top-48 w-0.5 bg-gradient-to-b from-accent-cyan via-accent-purple to-transparent -translate-x-1/2 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.5)] hidden md:block"
        />

        <div className="space-y-24 relative">
          {experienceData.map((exp, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: isEven ? -50 : 50, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`relative flex items-center justify-between flex-col md:flex-row ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.3, type: "spring" }}
                  className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#0a0a0c] border-2 border-accent-purple shadow-[0_0_20px_rgba(139,92,246,0.4)] items-center justify-center z-10 text-xl"
                >
                  {exp.icon}
                </motion.div>

                {/* Content Card (no more generic boxes, using gradient borders and clear spacing) */}
                <div className={`w-full md:w-[45%] ${isEven ? "md:pr-8" : "md:pl-8"}`}>
                  <div className="group relative p-[1px] rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 hover:from-accent-cyan hover:to-accent-purple transition-all duration-500">
                    <div className="bg-[#0a0a0c]/80 backdrop-blur-xl p-8 rounded-2xl h-full border border-white/5">
                      <div className="md:hidden w-12 h-12 rounded-full border border-accent-purple flex items-center justify-center mb-6 text-xl bg-gray-900">
                        {exp.icon}
                      </div>
                      
                      <div className="flex flex-col gap-2 mb-4">
                        <h3 className="text-2xl font-bold text-white group-hover:text-accent-cyan transition-colors">
                          {exp.role}
                        </h3>
                        <p className="text-lg text-accent-purple font-semibold tracking-wide">
                          {exp.company}
                        </p>
                        <div className="flex items-center gap-2 text-secondary-gray text-sm mt-1">
                          <Calendar className="w-4 h-4 text-accent-cyan" />
                          <time>{exp.period}</time>
                        </div>
                      </div>

                      <p className="text-secondary-gray leading-relaxed mb-6">
                        {exp.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mt-auto">
                        {exp.tech.map((t, i) => (
                          <span
                            key={i}
                            className="px-3 py-1.5 bg-white/5 text-accent-cyan rounded-full text-xs font-medium border border-white/10"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Empty Space for the other side */}
                <div className="hidden md:block w-[45%]" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
