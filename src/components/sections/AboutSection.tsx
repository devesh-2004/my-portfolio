"use client";

import { motion } from "framer-motion";
import { aboutData } from "@/data/portfolio";

export default function AboutSection() {
  return (
    <section id="about" className="py-32 px-4 relative z-10">
      <div className="max-w-6xl mx-auto relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
        
        {/* Sticky Left Column: Title */}
        <div className="lg:sticky lg:top-32 w-full lg:w-1/3">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-black mb-6 text-white leading-tight tracking-tighter">
              About <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Me.</span>
            </h2>
            <div className="w-24 h-2 bg-gradient-to-r from-accent-cyan to-accent-purple rounded-full" />
          </motion.div>
        </div>

        {/* Scrollable Right Column: Bio & Skills */}
        <div className="w-full lg:w-2/3 flex flex-col gap-24">
          
          {/* Typography Bio */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
            }}
            className="space-y-8"
          >
            <motion.h3 
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
              }}
              className="text-3xl font-bold text-white mb-2"
            >
              Engineering Student & Developer
            </motion.h3>
            {aboutData.shortBio.map((paragraph, idx) => (
              <motion.p 
                key={idx} 
                variants={{
                  hidden: { opacity: 0, x: 50, filter: "blur(5px)" },
                  visible: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: "easeOut" } }
                }}
                className="text-xl md:text-2xl text-secondary-gray leading-relaxed font-light"
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>

          {/* Flowing Skills */}
          <div className="space-y-16">
            {aboutData.skillCategories.map((category, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative"
              >
                {/* Decorative glowing line */}
                <div className="absolute -left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-purple/50 to-transparent rounded-full hidden md:block" />
                
                <h4 className="text-2xl font-semibold mb-8 text-white relative">
                  <span className="absolute -left-[1.65rem] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-accent-cyan hidden md:block shadow-[0_0_10px_#06b6d4]" />
                  {category.title}
                </h4>
                
                <div className="flex flex-wrap gap-4">
                  {category.skills.map((skill, sIdx) => (
                    <motion.span
                      key={sIdx}
                      whileHover={{ scale: 1.1, y: -5 }}
                      className="px-6 py-3 text-lg font-medium rounded-full bg-white/5 text-gray-300 border border-white/10 hover:bg-accent-purple/20 hover:text-white hover:border-accent-purple transition-all duration-300 shadow-lg cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
