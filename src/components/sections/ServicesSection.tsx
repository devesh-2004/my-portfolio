"use client";

import { motion } from "framer-motion";
import { Layers, LayoutTemplate, Server, Brain, Cloud, Database } from "lucide-react";
import { servicesData } from "@/data/portfolio";

export default function ServicesSection() {
  const getIcon = (name: string) => {
    const props = { className: "w-8 h-8" };
    switch (name) {
      case "Layers": return <Layers {...props} />;
      case "LayoutTemplate": return <LayoutTemplate {...props} />;
      case "Server": return <Server {...props} />;
      case "Brain": return <Brain {...props} />;
      case "Cloud": return <Cloud {...props} />;
      case "Database": return <Database {...props} />;
      default: return <Layers {...props} />;
    }
  };

  return (
    <section id="services" className="py-32 px-4 relative z-10">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-4xl bg-accent-cyan/5 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Services</span>
          </h2>
          <div className="w-24 h-1 bg-accent-cyan mx-auto rounded-full mb-6" />
          <p className="text-secondary-gray max-w-2xl mx-auto text-lg">
            Transforming ideas into digital reality with cutting-edge solutions and modern technologies.
          </p>
        </motion.div>

        {/* Asymmetrical Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {servicesData.map((service, idx) => {
            const isRightColumn = idx % 2 === 1;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 100, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: idx * 0.1, type: "spring", bounce: 0.3 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`relative group p-8 md:p-10 rounded-[2rem] bg-gradient-to-br from-white/5 to-transparent border border-white/10 backdrop-blur-xl hover:border-accent-cyan/50 transition-all duration-500 shadow-xl ${
                  isRightColumn ? "md:mt-24" : "md:-mt-12"
                }`}
              >
                {/* Glowing orb behind the icon */}
                <div className="absolute top-12 left-12 w-20 h-20 bg-accent-purple/20 rounded-full blur-2xl group-hover:bg-accent-cyan/30 transition-colors duration-500" />
                
                <div className="relative w-16 h-16 rounded-2xl bg-black/40 border border-white/10 text-accent-purple flex items-center justify-center mb-8 group-hover:text-accent-cyan transition-colors duration-500 z-10">
                  {getIcon(service.iconName)}
                </div>
                
                <h3 className="relative text-2xl font-bold text-white mb-4 group-hover:text-accent-cyan transition-colors z-10">
                  {service.title}
                </h3>
                
                <p className="relative text-secondary-gray leading-relaxed mb-8 z-10 text-lg">
                  {service.description}
                </p>
                
                <div className="relative flex flex-wrap gap-2 z-10">
                  {service.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-4 py-1.5 rounded-full bg-black/30 text-xs font-semibold tracking-wide text-secondary-gray border border-white/5 group-hover:border-accent-cyan/20 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
