import * as React from "react";

/* --- Skill & Social data --- */
const skillCategories = [
  {
    title: "Languages",
    skills: ["C", "C++", "JavaScript", "TypeScript"],
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
      "RESTful API",
      "Axios / Fetch",
      "JWT",
    ],
    delay: 800,
  },
  {
    title: "Tools",
    skills: ["Git & GitHub", "VS Code", "Postman", "Canva"],
    delay: 900,
  },
  {
    title: "Databases & Cloud",
    skills: ["MongoDB", "Mongoose", "Supabase", "Vercel"],
    delay: 1000,
  },
  {
    title: "Relevant Coursework",
    skills: [
      "Data Structures",
      "Algorithms",
      "Operating Systems",
      "Databases",
      "Computer Networks",
      "Software Engineering",
      "OOP's",
    ],
    delay: 1100,
    fullWidth: true,
  },
];

const socialProfiles = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/devesh-purohit-06557b245/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
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
        width="28"
        height="28"
        viewBox="0 0 24 24"
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
        width="28"
        height="28"
        viewBox="0 0 24 24"
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
        width="28"
        height="28"
        viewBox="0 0 24 24"
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
        width="28"
        height="28"
        viewBox="0 0 24 24"
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
  {
    name: "Codolio",
    href: "https://codolio.com/profile/Devesh21_", // <- replace with your real Codolio profile URL
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 12h18M12 3v18" />
      </svg>
    ),
  },
];

/* --- Component --- */
const AboutSection = () => {
  return (
    <section
      id="about"
      className="min-h-screen py-20 px-4 relative overflow-hidden bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364]"
    >
      {/* Background Glow Effects */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-accent-cyan rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-accent-cyan-hover rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-primary-white">
            About Me
          </h2>
          <div className="w-24 h-1 bg-accent-cyan mx-auto mb-6"></div>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left: Short About Card */}
          <div className="lg:col-span-1 animate-fade-in">
            <div className="p-8 h-full rounded-2xl bg-gray-800/30 border border-gray-600 shadow-lg backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-accent-cyan">
              <h3 className="text-2xl font-bold mb-3 text-primary-white">
                Engineering Student & Developer
              </h3>
              <p className="mb-3 text-secondary-gray leading-relaxed">
                I'm a Computer Science engineering student building modern web
                applications with the MERN stack. I focus on clean UI,
                performant code, and practical, real-world projects.
              </p>

              <p className="mb-3 text-secondary-gray leading-relaxed">
                I enjoy building realtime features (Socket.io/WebSockets),
                optimizing backend services, and deploying apps on Vercel.
              </p>

              <p className="text-secondary-gray leading-relaxed">
                Seeking internships / early roles to contribute and grow with a
                product-focused team.
              </p>
            </div>
          </div>

          {/* Center & Right: Skills laid out across the remaining columns */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category, catIndex) => (
              <div
                key={catIndex}
                className={`p-6 rounded-2xl bg-gray-800/30 border border-gray-600 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-accent-cyan hover:scale-105 ${
                  category.fullWidth ? "md:col-span-2" : ""
                }`}
                style={{ animationDelay: `${category.delay}ms` }}
              >
                <h4 className="text-xl font-semibold mb-4 text-primary-white text-center">
                  {category.title}
                </h4>

                {/* Skills grid: responsive columns */}
                <div
                  className={`grid gap-3 ${
                    category.title === "Relevant Coursework"
                      ? "grid-cols-2 sm:grid-cols-3"
                      : "grid-cols-2"
                  }`}
                >
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="p-2 rounded-lg text-center bg-gray-900/50 text-accent-cyan border border-gray-600 transition-all duration-200 hover:scale-105 hover:bg-accent-cyan hover:text-gray-900 font-medium cursor-default text-sm"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Social Links (full-width card) */}
        <div className="mt-12 animate-fade-in">
          <div className="p-6 rounded-2xl bg-gray-800/30 border border-gray-600 shadow-lg backdrop-blur-sm transition-colors duration-300 hover:border-accent-cyan">
            <h4 className="text-3xl font-bold mb-4 text-primary-white text-center">
              Social Links
            </h4>
            <div className="flex justify-center items-center flex-wrap gap-6">
              {socialProfiles.map((profile) => (
                <a
                  key={profile.name}
                  href={profile.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={profile.name}
                  className="text-secondary-gray hover:text-accent-cyan transition-transform duration-300 hover:scale-110"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-900/40 border border-gray-600 hover:bg-accent-cyan-hover transition-colors">
                    {profile.icon}
                  </div>
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
