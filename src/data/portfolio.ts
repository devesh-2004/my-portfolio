import React from 'react';

// You can edit all your personal data here without touching the UI code!

export const heroData = {
  name: "Devesh Purohit",
  titles: [
    "Full Stack Developer",
    "Problem Solver",
    "MERN Stack Specialist"
  ],
  description: "Engineering Student | Building Modern Web Solutions",
  resumeUrl: "/resume.pdf",
  profileImage: "/profile.png"
};

export const aboutData = {
  shortBio: [
    "I'm a Computer Science engineering undergraduate building modern web applications with the MERN stack. I focus on clean UI, performant code, and practical, real-world projects.",
    "I enjoy building realtime features, optimizing backend services, and deploying apps on Vercel.",
    "Seeking internships / full-time roles to contribute and grow with a product-focused team."
  ],
  skillCategories: [
    {
      title: "Languages",
      skills: ["C", "C++", "JavaScript", "TypeScript", "Python"],
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
    },
    {
      title: "Tools",
      skills: ["Git & GitHub", "VS Code", "Postman", "Canva"],
    },
    {
      title: "Databases & Cloud",
      skills: ["MongoDB", "Mongoose", "SQL", "Supabase", "Vercel"],
    },
    {
      title: "AI Tools I Use",
      skills: ["Claude", "Gemini", "ChatGPT", "Antigravity"],
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
      fullWidth: true,
    },
  ]
};

export const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/devesh-purohit-06557b245/",
  },
  {
    name: "GitHub",
    href: "https://github.com/devesh-2004",
  },
  {
    name: "Twitter",
    href: "https://x.com/_devesh_21_",
  },
  {
    name: "LeetCode",
    href: "https://leetcode.com/u/Devesh21_/",
  },
  {
    name: "GeeksForGeeks",
    href: "https://www.geeksforgeeks.org/user/deveshpur5gbo/",
  },
  {
    name: "Codolio",
    href: "https://codolio.com/profile/Devesh21_",
  },
  {
    name: "Email",
    href: "mailto:deveshpurohit275@gmail.com",
  }
];

export const projectsData = [
  {
    title: "Bill Mate",
    description: "A full stack application where users can create, and manage their bills. It also includes features like payment reminders, and payment tracking.",
    tech: ["React.js", "Next.js", "Node.js", "Socket.io", "Supabase", "Framer-motion", "TypeScript"],
    image: "🧾",
    link: "https://bill-mate-ten.vercel.app/"
  },
  {
    title: "Shoe-Store",
    description: "A full-stack e-commerce platform for shoes. Features a responsive interface, smooth animations, and product filtering by category, size, and price.",
    tech: ["Next.js", "Node.js", "Framer-motion", "MongoDB"],
    image: "👟",
    link: "https://online-store-beryl-phi.vercel.app/"
  },
  {
    title: "Image Compressor",
    description: "A web app that compresses and optimizes images without noticeable quality loss. Supports multiple formats, drag-and-drop uploads, and instant downloads of the compressed files.",
    tech: ["React.js", "Next.js", "Tailwind CSS", "TypeScript"],
    image: "🖼️",
    link: "#"
  },
  {
    title: "EatoAI",
    description: "An AI-powered app that generates personalized recipes and meal suggestions based on available ingredients and dietary preferences.",
    tech: ["React.js", "Next.js", "Node.js", "Gemini API", "Tailwind CSS"],
    image: "🍽️",
    link: "#"
  },
  {
    title: "EV Charging",
    description: "A full-stack platform to locate, book, and manage EV charging stations. Features real-time station availability, map-based search, and slot booking.",
    tech: ["React.js", "Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
    image: "⚡",
    link: "#"
  }
];

export const experienceData = [
  {
    company: "Avinya Web (Internship)",
    role: "Frontend Developer Intern",
    period: "Jun 2025 - July 2025",
    description: "Worked on building responsive UI components, and improving site performance. Implemented interactive animations and accessibility improvements.",
    tech: ["React", "Next.js", "Tailwind CSS", "Vercel", "Git"],
    icon: "🛠️",
  },
  {
    company: "Laxmi Enterprises (Freelance)",
    role: "Frontend Developer",
    period: "Sep 2025 - Oct 2025",
    description: "Built the product catalog, cart & checkout flows, and server-side logic. Implemented secure authentication and responsive product pages with smooth UX.",
    tech: ["Next.js", "Node.js", "Framer-motion"],
    icon: "👟",
  },
  {
    company: "Trodec (Internship)",
    role: "Frontend Developer",
    period: "Jan 2026 - Feb 2026",
    description: "Built a product catalog with smooth animations, and implemented a cart & checkout flow with server-side logic. Collaborated with the backend team to integrate the frontend with the backend.",
    tech: ["Next.js", "Node.js", "Framer-motion"],
    icon: "👟",
  },
  {
    company: "Punchrakha (Freelance)",
    role: "Full Stack Developer",
    period: "Mar 2026 - Present",
    description: "Currently building and maintaining a full-stack web solution for the client, handling responsive UI, server-side logic, and database integration with a focus on performance and clean UX.",
    tech: ["Next.js", "Node.js", "Tailwind CSS", "MongoDB"],
    icon: "💼",
  }
];

export const servicesData = [
  {
    title: "Full Stack Web Development",
    description: "Building responsive, interactive, and scalable web applications using the MERN stack. I focus on creating efficient architectures, smooth user experiences, and maintainable backend systems.",
    tags: ["JavaScript", "React.js", "Node.js", "MongoDB", "Express.js", "Next.js", "Tailwind CSS"],
    iconName: "Layers"
  },
  {
    title: "Frontend Engineering",
    description: "Designing modern, performant, and visually appealing user interfaces. I prioritize clean design, responsiveness, and accessibility while maintaining optimal performance.",
    tags: ["JavaScript", "React.js", "Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    iconName: "LayoutTemplate"
  },
  {
    title: "Backend Development & API Design",
    description: "Developing secure and scalable server-side applications with RESTful APIs, authentication, and data management systems. Skilled in integrating databases and optimizing backend logic.",
    tags: ["JavaScript", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "Supabase"],
    iconName: "Server"
  },
  {
    title: "Data Structures & Algorithms",
    description: "Actively practicing and implementing advanced problem-solving techniques through LeetCode, GeeksforGeeks, and CodeStudio. Strong focus on improving time complexity and algorithmic logic.",
    tags: ["C++", "LeetCode", "GeeksforGeeks", "Problem Solving"],
    iconName: "Brain"
  },
  {
    title: "Deployment & Cloud Integration",
    description: "Deploying and managing full-stack applications on modern cloud platforms with continuous integration and delivery pipelines.",
    tags: ["Vercel", "GitHub", "Netlify", "CI/CD"],
    iconName: "Cloud"
  },
  {
    title: "Database Design & Management",
    description: "Designing efficient database schemas and integrating them seamlessly into web applications. Experienced in both NoSQL and SQL structures for scalable data management.",
    tags: ["MongoDB", "Supabase", "Mongoose", "Data Modeling", "Indexing"],
    iconName: "Database"
  }
];



