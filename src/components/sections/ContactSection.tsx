"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Briefcase } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 px-4 relative bg-[#0a0a0c]">
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-accent-purple mx-auto rounded-full mb-6" />
          <p className="text-secondary-gray text-lg max-w-2xl mx-auto">
            Ready to bring your next project to life? Let's collaborate and create something amazing together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {[
              { icon: <Mail />, title: "Email", info: "deveshpurohit275@gmail.com" },
              { icon: <MapPin />, title: "Location", info: "Bikaner, Rajasthan, India" },
              { icon: <Briefcase />, title: "Available For", info: "Internships & Full-time" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group flex items-center gap-6 p-6 rounded-2xl bg-gray-900/40 border border-border backdrop-blur-md shadow-lg hover:border-accent-cyan transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-black/50 border border-gray-700 text-accent-cyan flex items-center justify-center group-hover:scale-110 group-hover:bg-accent-cyan group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-secondary-gray">{item.info}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right: CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-2xl bg-gray-900/40 border border-border backdrop-blur-md shadow-lg flex flex-col justify-center"
          >
            <h3 className="text-3xl font-bold text-white mb-6">Let's Connect!</h3>
            <p className="text-secondary-gray leading-relaxed mb-8">
              I'm always excited to discuss new opportunities, collaborate on interesting projects, or simply connect with fellow developers and professionals in the tech industry.
            </p>
            <div className="space-y-4">
              <a
                href="mailto:deveshpurohit275@gmail.com"
                className="block w-full px-6 py-4 bg-accent-purple text-white text-center rounded-xl font-bold hover:bg-opacity-80 transition-all duration-300 shadow-neon transform hover:scale-[1.02]"
              >
                Send Mail
              </a>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://www.linkedin.com/in/devesh-purohit-06557b245/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-4 border border-accent-cyan text-accent-cyan text-center rounded-xl font-semibold hover:bg-accent-cyan hover:text-black transition-all duration-300"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/devesh-2004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-4 border border-accent-cyan text-accent-cyan text-center rounded-xl font-semibold hover:bg-accent-cyan hover:text-black transition-all duration-300"
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
