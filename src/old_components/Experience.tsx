import { Briefcase, Calendar } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Avinya Web (Internship)",
      role: "Frontend Developer Intern",
      period: "Jun 2025 - July 2025",
      description:
        "Worked on building responsive UI components, and improving site performance. Implemented interactive animations and accessibility improvements.",
      tech: ["React", "Next.js", "Tailwind CSS", "Vercel", "Git"],
      icon: "🛠️",
      accent: "bg-accent-cyan",
    },
    {
      company: "Laxmi Enterprises (Freelance)",
      role: "Frontend Developer",
      period: "Sep 2025 - Oct 2025",
      description:
        "Built the product catalog, cart & checkout flows, and server-side logic. Implemented secure authentication and responsive product pages with smooth UX.",
      tech: ["Next.js", "Node.js","Framer-motion"],
      icon: "👟",
      accent: "bg-accent-cyan-hover",
    },
     {
      company: "Togeno (Internship)",
      role: "Frontend Developer",
      period: "Jan 2026 - Feb 2026",
      description: "Built a product catalog with smooth animations, and implemented a cart & checkout flow with server-side logic. Collaborated with the backend team to integrate the frontend with the backend.",
      tech: ["Next.js", "Node.js","Framer-motion"],
      icon: "👟",
      accent: "bg-accent-cyan-hover",
    }
  ];

  return (
    <section
      id="experience"
      className="min-h-screen py-20 px-4 bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] relative overflow-hidden"
    >
      {/* subtle background glows */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-16 left-12 w-72 h-72 bg-accent-cyan rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-12 w-60 h-60 bg-accent-cyan-hover rounded-full blur-3xl animate-pulse animation-delay-1000" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-primary-white">
            Experience
          </h2>
          <div className="w-24 h-1 bg-accent-cyan mx-auto mb-6" />
          <p className="text-secondary-gray text-lg max-w-2xl mx-auto">
            Roles, internships and contributions where I built, shipped and
            learned — focusing on modern web stacks and real-world product work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, idx) => (
            <article
              key={idx}
              className="group gradient-card border border-gray-600 rounded-2xl p-6 hover:border-accent-cyan transition-all duration-500 hover:scale-105 shadow-modern hover:shadow-xl flex flex-col"
              style={{ animationDelay: `${idx * 120}ms` }}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`flex items-center justify-center w-14 h-14 rounded-lg text-2xl ${exp.accent} shrink-0`}
                  aria-hidden
                >
                  {exp.icon}
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-primary-white">
                    {exp.role}
                  </h3>
                  <p className="text-secondary-gray mt-1">{exp.company}</p>
                </div>

                <div className="text-secondary-gray text-sm flex flex-col items-end gap-1">
                  <Calendar className="w-4 h-4" />
                  <time className="text-xs">{exp.period}</time>
                </div>
              </div>

              <p className="text-secondary-gray mt-4 mb-4 leading-relaxed flex-grow">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {exp.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-800/50 text-accent-cyan rounded-full text-sm border border-gray-600 hover:bg-accent-cyan hover:text-white transition-colors"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
