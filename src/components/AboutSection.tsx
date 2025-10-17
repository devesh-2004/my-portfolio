// import * as React from "react";

// // Data for skill categories, making it easy to manage and update
// const skillCategories = [
//   {
//     title: "Languages",
//     skills: ["C", "C++", "Python", "JavaScript"],
//     delay: 700,
//   },
//   {
//     title: "Web Development",
//     skills: [
//       "HTML",
//       "Tailwind CSS",
//       "React.js",
//       "TypeScript",
//       "Next.js",
//       "Node.js",
//       "Express.js",
//       "Socket.io",
//     ],
//     delay: 800,
//   },
//   {
//     title: "Tools",
//     skills: ["Git & GitHub", "VS Code", "Canva"],
//     delay: 900,
//   },
//   {
//     title: "Cloud Services",
//     skills: ["MongoDB", "Mongoose", "Vercel", "MySQL"],
//     delay: 1000,
//   },
//   {
//     title: "Relevant Coursework",
//     skills: [
//       "Data Structures",
//       "Algorithms",
//       "Operating System",
//       "Database Management",
//       "Computer Networks",
//       "Software Engineering",
//       "Data Management",
//       "Object Oriented Programming",
//     ],
//     delay: 1100,
//     fullWidth: true, // Custom flag to make this section span the full width
//   },
// ];

// // Data for social profiles with SVG icons
// const socialProfiles = [
//   {
//     name: "LinkedIn",
//     href: "https://www.linkedin.com/in/devesh-purohit-06557b245/",
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="24"
//         height="24"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       >
//         <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
//         <rect x="2" y="9" width="4" height="12"></rect>
//         <circle cx="4" cy="4" r="2"></circle>
//       </svg>
//     ),
//   },
//   {
//     name: "GitHub",
//     href: "https://github.com/devesh-2004",
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="24"
//         height="24"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       >
//         <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
//       </svg>
//     ),
//   },
//   {
//     name: "Twitter",
//     href: "https://www.twitter.com/devesh_purohit_275",
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="24"
//         height="24"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       >
//         <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
//       </svg>
//     ),
//   },
//   {
//     name: "LeetCode",
//     href: "https://leetcode.com/u/Devesh21_/",
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="24"
//         height="24"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       >
//         <path d="M12 8V2l6 6H12z" />
//         <path d="M12 16.5l-4.5 4.5 1.5-4.5-4.5-2.5h5.5l2-5 2 5h5.5l-4.5 2.5 1.5 4.5z" />
//       </svg>
//     ),
//   },
//   {
//     name: "GeeksForGeeks",
//     href: "https://www.geeksforgeeks.org/user/deveshpur5gbo/",
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="24"
//         height="24"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       >
//         <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
//       </svg>
//     ),
//   },
// ];

// const AboutSection = () => {
//   return (
//     <section
//       id="about"
//       className="min-h-screen py-20 px-4 relative overflow-hidden bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364]"
//     >
//       {/* Background effects */}
//       <div className="absolute inset-0 opacity-10">
//         <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-cyan-500 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-blue-500 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
//       </div>

//       {/* Content */}
//       <div className="max-w-6xl mx-auto relative z-10">
//         {/* Section Header */}
//         <div className="text-center mb-16 animate-fade-in">
//           <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
//             About Me
//           </h2>
//           <div className="w-24 h-1 bg-cyan-400 mx-auto mb-6"></div>
//         </div>

//         {/* Main Content Grid */}
//         <div className="grid md:grid-cols-2 gap-12 items-start">
//           {/* About Card */}
//           <div className="animate-fade-in animation-delay-500">
//             <div className="p-8 h-full rounded-2xl bg-gray-800/30 border border-gray-600 shadow-lg backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-cyan-400">
//               <h3 className="text-2xl font-bold mb-4 text-white">
//                 Engineering Student & Full Stack Developer
//               </h3>
//               <p className="mb-4 leading-relaxed text-gray-300">
//                 I'm a passionate Final year Computer Science Engineering student
//                 with a strong foundation in modern Web development technologies.
//                 My journey began with HTML and CSS, and has evolved into
//                 mastering full-stack development with the MERN stack.
//               </p>
//               <p className="mb-4 leading-relaxed text-gray-300">
//                 Beyond web development, I actively solve Data Structures and
//                 Algorithms problems to strengthen my problem-solving skills and
//                 prepare for technical interviews. I'm also experienced with
//                 various internet services and cloud technologies.
//               </p>
//               <p className="leading-relaxed text-gray-300">
//                 Currently seeking internship opportunities where I can
//                 contribute my skills, learn from experienced professionals, and
//                 grow as a developer in a collaborative environment.
//               </p>
//             </div>
//           </div>

//           {/* REFACTORED Skills Section */}
//           <div className="flex flex-wrap gap-8">
//             {skillCategories.map((category, catIndex) => (
//               <div
//                 key={catIndex}
//                 className={`animate-fade-in ${
//                   category.fullWidth ? "w-full" : "flex-1 min-w-[280px]"
//                 }`}
//                 style={{ animationDelay: `${category.delay}ms` }}
//               >
//                 <div className="p-8 h-full rounded-2xl bg-gray-800/30 border border-gray-600 shadow-lg backdrop-blur-sm transition-colors duration-300 hover:border-cyan-400">
//                   <h4 className="text-xl font-semibold mb-6 text-white">
//                     {category.title}
//                   </h4>
//                   <div
//                     className={`grid ${
//                       category.title === "Relevant Coursework"
//                         ? "grid-cols-2 sm:grid-cols-3"
//                         : "grid-cols-2"
//                     } gap-4`}
//                   >
//                     {category.skills.map((skill, skillIndex) => (
//                       <div
//                         key={skillIndex}
//                         className="p-3 rounded-lg text-center bg-gray-900/50 text-cyan-400 border border-gray-600 transition-all duration-300 hover:scale-105 hover:bg-cyan-400 hover:text-gray-900 font-medium cursor-default"
//                       >
//                         {skill}
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Profiles Section */}
//           <div
//             className="md:col-span-2 animate-fade-in"
//             style={{ animationDelay: "1200ms" }}
//           >
//             <div className="p-8 rounded-2xl bg-gray-800/30 border border-gray-600 shadow-lg backdrop-blur-sm transition-colors duration-300 hover:border-cyan-400">
//               <h4 className="text-4xl font-bold mb-6 text-white text-center">
//                 Find Me On
//               </h4>
//               <div className="flex justify-center items-center flex-wrap gap-6">
//                 {socialProfiles.map((profile) => (
//                   <a
//                     key={profile.name}
//                     href={profile.href}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label={profile.name}
//                     className="text-gray-300 hover:text-cyan-400 transition-transform duration-300 hover:scale-110"
//                   >
//                     {profile.icon}
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;

import * as React from "react";

// Data for skill categories
const skillCategories = [
  {
    title: "Languages",
    skills: ["C", "C++", "Javascript", "Typescript", "SQL", "Bash"],
    delay: 700,
  },
  {
    title: "Web Development",
    skills: [
      "Tailwind CSS",
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "Socket.io",
      "RESTFUL API",
      "Axios & Fetch API",
      "JWT Authentication",

    ],
    delay: 800,
  },
  {
    title: "Tools",
    skills: ["Git & GitHub", "VS Code", "Canva", "Postman", "Docker", ],
    delay: 900,
  },
  {
    title: "Cloud Services",
    skills: ["MongoDB", "Mongoose", "Vercel", "MySQL", "Supabase"],
    delay: 1000,
  },
  {
    title: "Relevant Coursework",
    skills: [
      "Data Structures",
      "Algorithms",
      "Operating System",
      "Database Management",
      "Computer Networks",
      "Software Engineering",
      "Data Management",
      "Object Oriented Programming",
      
    ],
    delay: 1100,
    fullWidth: true,
  },
];

// Data for social profiles with SVG icons
const socialProfiles = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/devesh-purohit-06557b245/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: "https://github.com/devesh-2004",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: "https://www.twitter.com/devesh_purohit_275",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
      </svg>
    ),
  },
  {
    name: "LeetCode",
    href: "https://leetcode.com/u/Devesh21_/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 8V2l6 6H12z" />
        <path d="M12 16.5l-4.5 4.5 1.5-4.5-4.5-2.5h5.5l2-5 2 5h5.5l-4.5 2.5 1.5 4.5z" />
      </svg>
    ),
  },
  {
    name: "GeeksForGeeks",
    href: "https://www.geeksforgeeks.org/user/deveshpur5gbo/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
    ),
  },
];

const AboutSection = () => {
  return (
    <section
      id="about"
      className="min-h-screen py-20 px-4 relative overflow-hidden bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364]"
    >
      {/* Background Glow Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-cyan-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-blue-500 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            About Me
          </h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto mb-6"></div>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-10">
          {/* About Card */}
          <div className="animate-fade-in animation-delay-500">
            <div className="p-8 h-full rounded-2xl bg-gray-800/30 border border-gray-600 shadow-lg backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-cyan-400">
              <h3 className="text-2xl font-bold mb-4 text-white">
                Engineering Student & Full Stack Developer
              </h3>
              <p className="mb-4 leading-relaxed text-gray-300">
                I’m a final-year{" "}
                <span className="text-cyan-400 font-medium">
                  Computer Science Engineering
                </span>{" "}
                student with a passion for designing and developing
                high-quality, user-centric web applications. My technical
                foundation combines both creativity and problem-solving,
                enabling me to build full-stack solutions that are not only
                functional but also visually engaging and performance-driven.
              </p>

              <p className="mb-4 leading-relaxed text-gray-300">
                I specialize in the{" "}
                <span className="text-cyan-400 font-medium">MERN stack</span> —
                MongoDB, Express.js, React.js, and Node.js — along with
                technologies like{" "}
                <span className="text-cyan-400 font-medium">
                  TypeScript, Next.js
                </span>
                , and{" "}
                <span className="text-cyan-400 font-medium">Tailwind CSS</span>{" "}
                to create modern, responsive, and scalable applications. My
                journey began with the basics of HTML and CSS, and has since
                evolved into crafting full-stack projects that integrate APIs,
                databases, and cloud services seamlessly.
              </p>

              <p className="mb-4 leading-relaxed text-gray-300">
                Over time, I’ve developed a strong interest in building
                interactive and real-time applications using{" "}
                <span className="text-cyan-400 font-medium">WebSockets</span>{" "}
                and <span className="text-cyan-400 font-medium">Socket.io</span>
                , while exploring backend optimization and deployment strategies
                on platforms like{" "}
                <span className="text-cyan-400 font-medium">Vercel</span> and{" "}
                <span className="text-cyan-400 font-medium">Render</span>. I’m
                deeply familiar with{" "}
                <span className="text-cyan-400 font-medium">
                  RESTful API design, authentication systems
                </span>
                , and{" "}
                <span className="text-cyan-400 font-medium">
                  database management
                </span>{" "}
                using MongoDB and MySQL.
              </p>

              <p className="mb-4 leading-relaxed text-gray-300">
                Beyond web development, I’m highly focused on strengthening my
                core fundamentals in{" "}
                <span className="text-cyan-400 font-medium">
                  Data Structures and Algorithms
                </span>
                . I regularly practice coding problems on platforms like{" "}
                <span className="text-cyan-400 font-medium">LeetCode</span> and{" "}
                <span className="text-cyan-400 font-medium">GeeksforGeeks</span>{" "}
                to enhance my logical reasoning and technical problem-solving
                skills — an essential part of my growth as a developer.
              </p>
              <p className="leading-relaxed text-gray-300">
                I’m currently seeking an{" "}
                <span className="text-cyan-400 font-medium">
                  internship or entry-level opportunity
                </span>{" "}
                where I can contribute to impactful projects, collaborate with
                experienced engineers, and continue to evolve as a developer. My
                ultimate goal is to build technologies that empower people and
                make a real-world difference through innovation and creativity.
              </p>
            </div>
          </div>

          {/* Skills Section */}
          <div className="grid sm:grid-cols-2 gap-6 animate-fade-in animation-delay-600">
            {skillCategories.map((category, catIndex) => (
              <div
                key={catIndex}
                className={`${
                  category.fullWidth ? "sm:col-span-2" : ""
                } p-6 rounded-2xl bg-gray-800/30 border border-gray-600 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-cyan-400`}
                style={{ animationDelay: `${category.delay}ms` }}
              >
                <h4 className="text-xl font-semibold mb-4 text-white text-center">
                  {category.title}
                </h4>
                <div
                  className={`grid ${
                    category.title === "Relevant Coursework"
                      ? "grid-cols-2 sm:grid-cols-3"
                      : "grid-cols-2"
                  } gap-3`}
                >
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="p-2 rounded-lg text-center bg-gray-900/50 text-cyan-400 border border-gray-600 transition-all duration-300 hover:scale-105 hover:bg-cyan-400 hover:text-gray-900 font-medium cursor-default text-sm"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div
          className="mt-16 animate-fade-in"
          style={{ animationDelay: "1200ms" }}
        >
          <div className="p-8 rounded-2xl bg-gray-800/30 border border-gray-600 shadow-lg backdrop-blur-sm transition-colors duration-300 hover:border-cyan-400">
            <h4 className="text-4xl font-bold mb-6 text-white text-center">
              Find Me On
            </h4>
            <div className="flex justify-center items-center flex-wrap gap-6">
              {socialProfiles.map((profile) => (
                <a
                  key={profile.name}
                  href={profile.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={profile.name}
                  className="text-gray-300 hover:text-cyan-400 transition-transform duration-300 hover:scale-110"
                >
                  {profile.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
