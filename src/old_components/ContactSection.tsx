
const ContactSection = () => {
  return (
    <section
      id="contact"
      className="min-h-screen py-20 px-4 relative overflow-hidden bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364]"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-cyan rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-cyan-hover rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-accent-cyan rounded-full blur-2xl animate-float"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-primary-white">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-accent-cyan mx-auto mb-6"></div>
          <p className="text-xl max-w-2xl mx-auto text-secondary-gray">
            Ready to bring your next project to life? Let's collaborate and
            create something amazing together!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="space-y-8 animate-fade-in animation-delay-500">
            <div className="group flex items-center space-x-4 p-6 rounded-xl gradient-card border border-gray-600 shadow-modern hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-14 h-14 bg-accent-cyan rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <span className="text-2xl">📧</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-primary-white">
                  Email
                </h3>
                <p className="text-secondary-gray">
                  deveshpurohit275@gmail.com
                </p>
              </div>
            </div>

            <div className="group flex items-center space-x-4 p-6 rounded-xl gradient-card border border-gray-600 shadow-modern hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-14 h-14 bg-accent-cyan rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <span className="text-2xl">📍</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-primary-white">
                  Location
                </h3>
                <p className="text-secondary-gray">Bikaner, Rajasthan, India</p>
              </div>
            </div>

            <div className="group flex items-center space-x-4 p-6 rounded-xl gradient-card border border-gray-600 shadow-modern hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-14 h-14 bg-accent-cyan rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <span className="text-2xl">💼</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-primary-white">
                  Available For
                </h3>
                <p className="text-secondary-gray">Internships & Full-time</p>
              </div>
            </div>
          </div>

          <div className="animate-fade-in animation-delay-1000">
            <div className="p-8 rounded-2xl gradient-card border border-gray-600 shadow-modern">
              <h3 className="text-2xl font-bold mb-6 text-primary-white">
                Let's Connect!
              </h3>
              <p className="mb-6 leading-relaxed text-secondary-gray">
                I'm always excited to discuss new opportunities, collaborate on
                interesting projects, or simply connect with fellow developers
                and professionals in the tech industry.
              </p>
              <div className="space-y-4">
                <a
                  href="mailto:deveshpurohit275@gmail.com"
                  className="block w-full px-6 py-3 bg-accent-cyan text-white rounded-xl font-semibold hover:bg-accent-cyan-hover transform hover:scale-105 transition-all duration-300 shadow-modern hover:shadow-xl text-center"
                >
                  Send Mail
                </a>
                <a
                  href="https://www.linkedin.com/in/devesh-purohit-06557b245/"
                  className="block w-full px-6 py-3 bg-accent-cyan text-white rounded-xl font-semibold hover:bg-accent-cyan-hover transform hover:scale-105 transition-all duration-300 shadow-modern hover:shadow-xl text-center"
                >
                  Connect on LinkedIn
                </a>
                <a
                  href="https://github.com/devesh-2004"
                  className="block w-full px-6 py-3 bg-accent-cyan text-white rounded-xl font-semibold hover:bg-accent-cyan-hover transform hover:scale-105 transition-all duration-300 shadow-modern hover:shadow-xl text-center"
                >
                  Connect on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
