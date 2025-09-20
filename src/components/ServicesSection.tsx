
import { Code } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Development",
      description: "Creating responsive and interactive web applications using modern technologies like React, Node.js, and MongoDB with focus on performance and user experience",
      bgColor: "bg-accent-cyan"
    }
  ];

  return (
    <section id="services" className="min-h-screen py-20 px-4 bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-accent-cyan rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-accent-cyan-hover rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent-cyan rounded-full blur-2xl animate-float"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-primary-white">
            Services
          </h2>
          <div className="w-24 h-1 bg-accent-cyan mx-auto mb-6"></div>
          <p className="text-secondary-gray text-lg max-w-2xl mx-auto">
            Transforming ideas into digital reality with cutting-edge solutions and modern technologies
          </p>
        </div>

        <div className="flex justify-center animate-fade-in animation-delay-500">
          {services.map((service, index) => (
            <div
              key={index}
              className="group gradient-card border border-gray-600 rounded-2xl p-8 hover:scale-105 transition-all duration-500 shadow-modern hover:shadow-xl max-w-md"
            >
              <div className={`w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:rotate-12 transition-transform duration-300 shadow-modern`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-primary-white mb-3 group-hover:text-accent-cyan transition-colors">
                {service.title}
              </h3>
              <p className="text-secondary-gray leading-relaxed">
                {service.description}
              </p>
              
              {/* Skills showcase */}
              <div className="mt-6 flex flex-wrap gap-2">
                {['React', 'Node.js', 'MongoDB', 'Express'].map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-gray-800/50 text-accent-cyan rounded-full text-sm border border-gray-600 hover:bg-accent-cyan hover:text-white transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
