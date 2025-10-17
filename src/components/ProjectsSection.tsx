// import { Link } from "lucide-react";

// const ProjectsSection = () => {
//   const projects = [
//     {
//       title: "Real Time Code-Editor",
//       description:
//         "Real Time Code-Editor is a platform where users can collaborate on code in real-time, with features like syntax highlighting, real-time collaboration, and code sharing.",
//       tech: [
//         "Next.js",
//         "Node.js",
//         "Socket.io",
//         "MongoDB",
//         "Framer-motion",
//         "TypeScript",
//         "VS Code",
//       ],
//       image: "✍️",
//       primaryColor: "bg-accent-cyan-hover",
//       ProjectLink: "https://online-store-beryl-phi.vercel.app/",
//     },
//     {
//       title: "Shoe-Store",
//       description:
//         "Shoe-Store is a e-commerce platform where users can buy shoes online. A responsive and user-friendly interface with smooth animations and transitions. Filter product accordinng to the category, size, and price.",
//       tech: ["Next.js", "Node.js", "Framer-motion", "MongoDB"],
//       image: "✌🏻",
//       primaryColor: "bg-accent-cyan",
//       ProjectLink: "https://online-store-beryl-phi.vercel.app/",
//     },
//   ];

//   return (
//     <section id="projects" className="min-h-screen py-20 px-4 bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] relative overflow-hidden">
//       {/* Background effects */}
//       <div className="absolute inset-0 opacity-20">
//         <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-accent-cyan rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-accent-cyan-hover rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
//       </div>

//       <div className="max-w-6xl mx-auto relative z-10">
//         <div className="text-center mb-16 animate-fade-in">
//           <h2 className="text-5xl md:text-6xl font-bold mb-6 text-primary-white">
//             Projects
//           </h2>
//           <div className="w-24 h-1 bg-accent-cyan mx-auto mb-6"></div>
//           <p className="text-secondary-gray text-lg max-w-2xl mx-auto">
//             Showcasing innovative solutions and creative problem-solving with modern technologies
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
//           {projects.map((project, index) => (
//             <div
//               key={index}
//               className="group gradient-card border border-gray-600 rounded-2xl p-6 hover:border-accent-cyan transition-all duration-500 hover:scale-105 shadow-modern hover:shadow-xl animate-fade-in animation-delay-500"
//             >
//               <div className="text-6xl mb-4 text-center group-hover:scale-110 transition-transform duration-300 animate-float">
//                 {project.image}
//               </div>
//               <h3 className="text-xl font-bold text-primary-white mb-3 group-hover:text-accent-cyan transition-colors">
//                 {project.title}
//               </h3>
//               <p className="text-secondary-gray mb-4 leading-relaxed">{project.description}</p>
//               <div className="flex flex-wrap gap-2 mb-6">
//                 {project.tech.map((tech, techIndex) => (
//                   <span
//                     key={techIndex}
//                     className="px-3 py-1 bg-gray-800/50 text-accent-cyan rounded-full text-sm border border-gray-600 hover:bg-accent-cyan hover:text-white transition-colors"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//               <div className="flex gap-4">
//                 <button className="flex-1 px-4 py-2 border border-accent-cyan text-accent-cyan rounded-lg hover:bg-accent-cyan hover:text-white hover:border-transparent transition-all duration-300 transform hover:scale-105">
//                   Project Link
//                   <Link href={project.ProjectLink} target="_blank" className="ml-2">
//                     <Link />
//                   </Link>
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProjectsSection;
import { Link } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Real Time Code-Editor",
      description:
        "A platform where users can collaborate on code in real-time, with features like syntax highlighting, real-time collaboration, and code sharing.",
      tech: [
        "Next.js",
        "Node.js",
        "Socket.io",
        "MongoDB",
        "Framer-motion",
        "TypeScript",
      ],
      image: "✍️",
      primaryColor: "bg-accent-cyan-hover",
      ProjectLink: "https://online-store-beryl-phi.vercel.app/", // Placeholder, update as needed
    },
    {
      title: "Shoe-Store",
      description:
        "A full-stack e-commerce platform for shoes. Features a responsive interface, smooth animations, and product filtering by category, size, and price.",
      tech: ["Next.js", "Node.js", "Framer-motion", "MongoDB"],
      image: "✌🏻",
      primaryColor: "bg-accent-cyan",
      ProjectLink: "https://online-store-beryl-phi.vercel.app/", // Placeholder, update as needed
    },
    {
      title: "Personal 'Code Snippet' Manager",
      description:
        "A full-stack MERN app for developers. Users can log in (JWT auth) to create, save, categorize, and search their own private code snippets with syntax highlighting.",
      tech: [
        "React.js",
        "Node.js",
        "MongoDB",
        "Express.js",
        "JWT",
        "Tailwind CSS",
      ],
      image: "🗃️",
      primaryColor: "bg-accent-cyan",
      ProjectLink: "#", // Placeholder, update as needed
    },
    {
      title: "Weather Dashboard",
      description:
        "An intermediate React app that fetches data from a third-party weather API. Users can search for a city to see the current conditions and a 5-day forecast.",
      tech: ["React.js", "TypeScript", "Tailwind CSS", "Chart.js", "REST API"],
      image: "⛅️",
      primaryColor: "bg-accent-cyan-hover",
      ProjectLink: "#", // Placeholder, update as needed
    },
    {
      title: "Animated UI Landing Page",
      description:
        "A basic, modern, single-page portfolio or product landing page. The primary focus is on clean UI/UX design and complex layout animations.",
      tech: ["React.js", "Framer-motion", "Tailwind CSS", "Vercel"],
      image: "✨",
      primaryColor: "bg-accent-cyan-hover",
      ProjectLink: "#", // Placeholder, update as needed
    },
    {
      title: "Real-Time Chat App",
      description:
        "A full-stack chat application demonstrating real-time communication. Features user authentication, private messaging, and 'typing...' indicators.",
      tech: ["React.js", "Node.js", "Socket.io", "Express.js", "MongoDB"],
      image: "💬",
      primaryColor: "bg-accent-cyan",
      ProjectLink: "#", // Placeholder, update as needed
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen py-20 px-4 bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-accent-cyan rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-accent-cyan-hover rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-primary-white">
            Projects
          </h2>
          <div className="w-24 h-1 bg-accent-cyan mx-auto mb-6"></div>
          <p className="text-secondary-gray text-lg max-w-2xl mx-auto">
            Showcasing innovative solutions and creative problem-solving with
            modern technologies
          </p>
        </div>

        {/* Grid layout handles 1, 2, or 3 columns based on screen size */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group gradient-card border border-gray-600 rounded-2xl p-6 hover:border-accent-cyan transition-all duration-500 hover:scale-105 shadow-modern hover:shadow-xl animate-fade-in flex flex-col" // Added flex flex-col
              style={{ animationDelay: `${index * 150}ms` }} // Staggered animation
            >
              <div className="text-6xl mb-4 text-center group-hover:scale-110 transition-transform duration-300 animate-float">
                {project.image}
              </div>
              <h3 className="text-xl font-bold text-primary-white mb-3 group-hover:text-accent-cyan transition-colors">
                {project.title}
              </h3>
              <p className="text-secondary-gray mb-4 leading-relaxed flex-grow">
                {project.description}
              </p>{" "}
              {/* Added flex-grow */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-gray-800/50 text-accent-cyan rounded-full text-sm border border-gray-600 hover:bg-accent-cyan hover:text-white transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.ProjectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-2 border border-accent-cyan text-accent-cyan rounded-lg hover:bg-accent-cyan hover:text-white hover:border-transparent transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  Project Link
                  <Link className="w-4 h-4" /> {/* Use imported Link icon */}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;