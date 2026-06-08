
const Footer = () => {
  const socialLinks = [
    { name: "GitHub", icon: "🐙", href: "#" },
    { name: "LinkedIn", icon: "💼", href: "#" },
    { name: "Twitter", icon: "🐦", href: "#" },
    { name: "Instagram", icon: "📷", href: "#" }
  ];

  return (
    <footer className="gradient-card border-t border-gray-600 py-12 px-4 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold text-accent-cyan mb-4">
              Devesh Purohit
            </h3>
            <p className="text-secondary-gray mb-6 leading-relaxed">
              Full Stack Developer passionate about solving complex problems and creating amazing digital experiences. Currently seeking internship opportunities.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="w-12 h-12 bg-gray-800/50 border border-gray-600 rounded-full flex items-center justify-center hover:bg-accent-cyan hover:text-white transition-all duration-300 transform hover:scale-110 shadow-modern"
                  title={link.name}
                >
                  <span className="text-lg">{link.icon}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="animate-fade-in animation-delay-500">
            <h4 className="text-primary-white font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-secondary-gray hover:text-accent-cyan transition-colors duration-300 hover:underline"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="animate-fade-in animation-delay-1000">
            <h4 className="text-primary-white font-semibold mb-4 text-lg">Technologies</h4>
            <div className="grid grid-cols-2 gap-2">
              {['React', 'Node.js', 'MongoDB', 'Next.js', 'JavaScript', 'Git/GitHub', 'Tailwind CSS', 'Vite', 'TypeScript', 'MySQL'].map((tech) => (
                <span 
                  key={tech}
                  className="text-secondary-gray text-sm px-2 py-1 bg-gray-800/50 rounded border border-gray-600 hover:bg-accent-cyan hover:text-white hover:border-transparent transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 pt-8 text-center animate-fade-in">
          <p className="text-secondary-gray">
            © 2025 Devesh Purohit. All rights reserved. Built with ❤️ using React & Modern Web Technologies.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
