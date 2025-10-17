
// import { Code } from 'lucide-react';

// const ServicesSection = () => {
//   const services = [
//     {
//       icon: <Code className="w-8 h-8" />,
//       title: "Web Development",
//       description: "Creating responsive and interactive web applications using modern technologies like React, Node.js, and MongoDB with focus on performance and user experience",
//       bgColor: "bg-accent-cyan"
//     }
//   ];

//   return (
//     <section id="services" className="min-h-screen py-20 px-4 bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] relative overflow-hidden">
//       {/* Background decoration */}
//       <div className="absolute inset-0 opacity-20">
//         <div className="absolute top-20 left-20 w-72 h-72 bg-accent-cyan rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-20 right-20 w-72 h-72 bg-accent-cyan-hover rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
//         <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent-cyan rounded-full blur-2xl animate-float"></div>
//       </div>

//       <div className="max-w-6xl mx-auto relative z-10">
//         <div className="text-center mb-16 animate-fade-in">
//           <h2 className="text-5xl md:text-6xl font-bold mb-6 text-primary-white">
//             Services
//           </h2>
//           <div className="w-24 h-1 bg-accent-cyan mx-auto mb-6"></div>
//           <p className="text-secondary-gray text-lg max-w-2xl mx-auto">
//             Transforming ideas into digital reality with cutting-edge solutions and modern technologies
//           </p>
//         </div>

//         <div className="flex justify-center animate-fade-in animation-delay-500">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="group gradient-card border border-gray-600 rounded-2xl p-8 hover:scale-105 transition-all duration-500 shadow-modern hover:shadow-xl max-w-md"
//             >
//               <div className={`w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:rotate-12 transition-transform duration-300 shadow-modern`}>
//                 {service.icon}
//               </div>
//               <h3 className="text-xl font-bold text-primary-white mb-3 group-hover:text-accent-cyan transition-colors">
//                 {service.title}
//               </h3>
//               <p className="text-secondary-gray leading-relaxed">
//                 {service.description}
//               </p>
              
//               {/* Skills showcase */}
//               <div className="mt-6 flex flex-wrap gap-2">
//                 {['React', 'Node.js', 'MongoDB', 'Express'].map((skill, skillIndex) => (
//                   <span
//                     key={skillIndex}
//                     className="px-3 py-1 bg-gray-800/50 text-accent-cyan rounded-full text-sm border border-gray-600 hover:bg-accent-cyan hover:text-white transition-colors"
//                   >
//                     {skill}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;


import {
  Layers,
  LayoutTemplate,
  Server,
  Brain,
  Cloud,
  Database,
  Radio,
  Paintbrush,
} from "lucide-react";

const ServicesSection = () => {
  // Updated services array with all 8 services
  const services = [
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Full Stack Web Development",
      description:
        "Building responsive, interactive, and scalable web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js). I focus on creating efficient architectures, smooth user experiences, and maintainable backend systems.",
      tags: [
        "React.js",
        "Node.js",
        "MongoDB",
        "Express.js",
        "Next.js",
        "Tailwind CSS",
      ],
      bgColor: "bg-accent-cyan",
    },
    {
      icon: <LayoutTemplate className="w-8 h-8" />,
      title: "Frontend Engineering",
      description:
        "Designing modern, performant, and visually appealing user interfaces. I prioritize clean design, responsiveness, and accessibility while maintaining optimal performance and reusability of components.",
      tags: [
        "React.js",
        "Next.js",
        "Tailwind CSS",
        "Framer Motion",
        "TypeScript",
      ],
      bgColor: "bg-accent-cyan",
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Backend Development & API Design",
      description:
        "Developing secure and scalable server-side applications with RESTful APIs, authentication, and data management systems. Skilled in integrating databases and optimizing backend logic for efficiency.",
      tags: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "Postman"],
      bgColor: "bg-accent-cyan",
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Data Structures & Algorithms Problem Solving",
      description:
        "Actively practicing and implementing advanced problem-solving techniques through LeetCode, GeeksforGeeks, and CodeStudio. Strong focus on improving time complexity, algorithmic logic, and competitive programming fundamentals.",
      tags: ["C++", "Python", "LeetCode", "GeeksforGeeks", "Problem Solving"],
      bgColor: "bg-accent-cyan",
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Deployment & Cloud Integration",
      description:
        "Deploying and managing full-stack applications on modern cloud platforms with continuous integration and delivery pipelines. Skilled in hosting, version control, and performance optimization.",
      tags: ["Vercel", "Render", "GitHub", "Netlify", "Firebase", "CI/CD"],
      bgColor: "bg-accent-cyan",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database Design & Management",
      description:
        "Designing efficient database schemas and integrating them seamlessly into web applications. Experienced in both NoSQL (MongoDB) and SQL (MySQL) structures for scalable data management.",
      tags: ["MongoDB", "MySQL", "Mongoose", "Data Modeling", "Indexing"],
      bgColor: "bg-accent-cyan",
    },
    {
      icon: <Radio className="w-8 h-8" />,
      title: "Real-Time Applications",
      description:
        "Developing interactive real-time features like chat systems, live updates, and notifications using WebSockets and Socket.io to enhance user engagement and dynamic data flow.",
      tags: ["Socket.io", "WebSockets", "Node.js", "React.js"],
      bgColor: "bg-accent-cyan",
    },
    {
      icon: <Paintbrush className="w-8 h-8" />,
      title: "Portfolio / UI Projects",
      description:
        "Creating elegant personal portfolios, dashboards, and modern UI experiences that merge creativity with functionality — reflecting my design sense and frontend engineering expertise.",
      tags: ["React.js", "Framer Motion", "Tailwind CSS", "Vercel"],
      bgColor: "bg-accent-cyan",
    },
  ];

  return (
    <section
      id="services"
      className="min-h-screen py-20 px-4 bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] relative overflow-hidden"
    >
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
            Transforming ideas into digital reality with cutting-edge solutions
            and modern technologies
          </p>
        </div>

        {/* Updated to a responsive grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group gradient-card border border-gray-600 rounded-2xl p-8 hover:scale-105 transition-all duration-500 shadow-modern hover:shadow-xl animate-fade-in flex flex-col" // Added flex flex-col
              style={{ animationDelay: `${index * 150}ms` }} // Staggered animation
            >
              <div
                className={`w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:rotate-12 transition-transform duration-300 shadow-modern flex-shrink-0`}
              >
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-primary-white mb-3 group-hover:text-accent-cyan transition-colors">
                {service.title}
              </h3>
              <p className="text-secondary-gray leading-relaxed flex-grow">
                {" "}
                {/* Added flex-grow */}
                {service.description}
              </p>

              {/* Skills showcase - Updated to use service.tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                {service.tags.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-gray-800/50 text-accent-cyan rounded-full text-sm border border-gray-600 hover:bg-accent-cyan hover:text-white transition-colors cursor-default"
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