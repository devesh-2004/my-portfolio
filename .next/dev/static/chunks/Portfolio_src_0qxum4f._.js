(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Portfolio/src/components/Navigation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Portfolio/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Portfolio/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/Portfolio/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Portfolio/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Navigation() {
    _s();
    const [isScrolled, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const navLinks = [
        {
            name: "Home",
            href: "#home"
        },
        {
            name: "About",
            href: "#about"
        },
        {
            name: "Experience",
            href: "#experience"
        },
        {
            name: "Projects",
            href: "#projects"
        },
        {
            name: "Contact",
            href: "#contact"
        }
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navigation.useEffect": ()=>{
            const handleScroll = {
                "Navigation.useEffect.handleScroll": ()=>{
                    setIsScrolled(window.scrollY > 50);
                }
            }["Navigation.useEffect.handleScroll"];
            window.addEventListener("scroll", handleScroll);
            return ({
                "Navigation.useEffect": ()=>window.removeEventListener("scroll", handleScroll)
            })["Navigation.useEffect"];
        }
    }["Navigation.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].nav, {
        initial: {
            y: -100
        },
        animate: {
            y: 0
        },
        transition: {
            duration: 0.8
        },
        className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-[#0a0a0c]/80 backdrop-blur-lg border-b border-gray-800 py-4 shadow-lg" : "bg-transparent py-6"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#home",
                        className: "text-2xl font-black text-white tracking-tighter hover:text-accent-cyan transition-colors",
                        children: [
                            "DP",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-accent-purple",
                                children: "."
                            }, void 0, false, {
                                fileName: "[project]/Portfolio/src/components/Navigation.tsx",
                                lineNumber: 40,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Portfolio/src/components/Navigation.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:flex items-center gap-8",
                        children: [
                            navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: link.href,
                                    className: "text-sm font-medium text-secondary-gray hover:text-white transition-colors relative group",
                                    children: [
                                        link.name,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-purple to-accent-cyan group-hover:w-full transition-all duration-300"
                                        }, void 0, false, {
                                            fileName: "[project]/Portfolio/src/components/Navigation.tsx",
                                            lineNumber: 52,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, link.name, true, {
                                    fileName: "[project]/Portfolio/src/components/Navigation.tsx",
                                    lineNumber: 46,
                                    columnNumber: 13
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: navLinks[4].href,
                                className: "px-5 py-2 text-sm font-semibold rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-accent-cyan transition-all text-white",
                                children: "Hire Me"
                            }, void 0, false, {
                                fileName: "[project]/Portfolio/src/components/Navigation.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Portfolio/src/components/Navigation.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "md:hidden text-white",
                        onClick: ()=>setIsMobileMenuOpen(!isMobileMenuOpen),
                        children: isMobileMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {}, void 0, false, {
                            fileName: "[project]/Portfolio/src/components/Navigation.tsx",
                            lineNumber: 68,
                            columnNumber: 31
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {}, void 0, false, {
                            fileName: "[project]/Portfolio/src/components/Navigation.tsx",
                            lineNumber: 68,
                            columnNumber: 39
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Portfolio/src/components/Navigation.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Portfolio/src/components/Navigation.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: isMobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Portfolio$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        height: 0
                    },
                    animate: {
                        opacity: 1,
                        height: "auto"
                    },
                    exit: {
                        opacity: 0,
                        height: 0
                    },
                    className: "md:hidden bg-[#0a0a0c]/95 backdrop-blur-xl border-b border-gray-800 overflow-hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col px-4 py-6 gap-4",
                        children: navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: link.href,
                                onClick: ()=>setIsMobileMenuOpen(false),
                                className: "text-lg font-medium text-secondary-gray hover:text-white transition-colors block py-2 border-b border-gray-800/50",
                                children: link.name
                            }, link.name, false, {
                                fileName: "[project]/Portfolio/src/components/Navigation.tsx",
                                lineNumber: 83,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Portfolio/src/components/Navigation.tsx",
                        lineNumber: 81,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Portfolio/src/components/Navigation.tsx",
                    lineNumber: 75,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Portfolio/src/components/Navigation.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Portfolio/src/components/Navigation.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_s(Navigation, "0+zEKVBL95ILuBb5rHE6ViYOHu8=");
_c = Navigation;
var _c;
__turbopack_context__.k.register(_c, "Navigation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Portfolio/src/data/portfolio.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "aboutData",
    ()=>aboutData,
    "experienceData",
    ()=>experienceData,
    "heroData",
    ()=>heroData,
    "projectsData",
    ()=>projectsData,
    "servicesData",
    ()=>servicesData,
    "socialLinks",
    ()=>socialLinks
]);
const heroData = {
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
const aboutData = {
    shortBio: [
        "I'm a Computer Science engineering undergraduate building modern web applications with the MERN stack. I focus on clean UI, performant code, and practical, real-world projects.",
        "I enjoy building realtime features, optimizing backend services, and deploying apps on Vercel.",
        "Seeking internships / full-time roles to contribute and grow with a product-focused team."
    ],
    skillCategories: [
        {
            title: "Languages",
            skills: [
                "C",
                "C++",
                "JavaScript",
                "TypeScript"
            ]
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
                "JWT"
            ]
        },
        {
            title: "Tools",
            skills: [
                "Git & GitHub",
                "VS Code",
                "Postman",
                "Canva"
            ]
        },
        {
            title: "Databases & Cloud",
            skills: [
                "MongoDB",
                "Mongoose",
                "Supabase",
                "Vercel"
            ]
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
                "OOP's"
            ],
            fullWidth: true
        }
    ]
};
const socialLinks = [
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/devesh-purohit-06557b245/"
    },
    {
        name: "GitHub",
        href: "https://github.com/devesh-2004"
    },
    {
        name: "Twitter",
        href: "https://x.com/_devesh_21_"
    },
    {
        name: "LeetCode",
        href: "https://leetcode.com/u/Devesh21_/"
    },
    {
        name: "GeeksForGeeks",
        href: "https://www.geeksforgeeks.org/user/deveshpur5gbo/"
    },
    {
        name: "Codolio",
        href: "https://codolio.com/profile/Devesh21_"
    },
    {
        name: "Email",
        href: "mailto:deveshpurohit275@gmail.com"
    }
];
const projectsData = [
    {
        title: "Bill Mate",
        description: "A full stack application where users can create, and manage their bills. It also includes features like payment reminders, and payment tracking.",
        tech: [
            "React.js",
            "Next.js",
            "Node.js",
            "Socket.io",
            "Supabase",
            "Framer-motion",
            "TypeScript"
        ],
        image: "🧾",
        link: "https://bill-mate-ten.vercel.app/"
    },
    {
        title: "Shoe-Store",
        description: "A full-stack e-commerce platform for shoes. Features a responsive interface, smooth animations, and product filtering by category, size, and price.",
        tech: [
            "Next.js",
            "Node.js",
            "Framer-motion",
            "MongoDB"
        ],
        image: "👟",
        link: "https://online-store-beryl-phi.vercel.app/"
    },
    {
        title: "AI Project Analyzer",
        description: "A full-stack app that analyzes projects and provides insights. Users can log in (JWT auth) to create, save, categorize, and search their own private projects.",
        tech: [
            "JavaScript",
            "React.js",
            "Next.js",
            "Tailwind CSS",
            "Gemini API",
            "Vercel",
            "Lucide React"
        ],
        image: "🗃️",
        link: "https://project-analyzer-pi.vercel.app/"
    }
];
const experienceData = [
    {
        company: "Avinya Web (Internship)",
        role: "Frontend Developer Intern",
        period: "Jun 2025 - July 2025",
        description: "Worked on building responsive UI components, and improving site performance. Implemented interactive animations and accessibility improvements.",
        tech: [
            "React",
            "Next.js",
            "Tailwind CSS",
            "Vercel",
            "Git"
        ],
        icon: "🛠️"
    },
    {
        company: "Laxmi Enterprises (Freelance)",
        role: "Frontend Developer",
        period: "Sep 2025 - Oct 2025",
        description: "Built the product catalog, cart & checkout flows, and server-side logic. Implemented secure authentication and responsive product pages with smooth UX.",
        tech: [
            "Next.js",
            "Node.js",
            "Framer-motion"
        ],
        icon: "👟"
    },
    {
        company: "Togeno (Internship)",
        role: "Frontend Developer",
        period: "Jan 2026 - Feb 2026",
        description: "Built a product catalog with smooth animations, and implemented a cart & checkout flow with server-side logic. Collaborated with the backend team to integrate the frontend with the backend.",
        tech: [
            "Next.js",
            "Node.js",
            "Framer-motion"
        ],
        icon: "👟"
    }
];
const servicesData = [
    {
        title: "Full Stack Web Development",
        description: "Building responsive, interactive, and scalable web applications using the MERN stack. I focus on creating efficient architectures, smooth user experiences, and maintainable backend systems.",
        tags: [
            "JavaScript",
            "React.js",
            "Node.js",
            "MongoDB",
            "Express.js",
            "Next.js",
            "Tailwind CSS"
        ],
        iconName: "Layers"
    },
    {
        title: "Frontend Engineering",
        description: "Designing modern, performant, and visually appealing user interfaces. I prioritize clean design, responsiveness, and accessibility while maintaining optimal performance.",
        tags: [
            "JavaScript",
            "React.js",
            "Next.js",
            "Tailwind CSS",
            "Framer Motion",
            "TypeScript"
        ],
        iconName: "LayoutTemplate"
    },
    {
        title: "Backend Development & API Design",
        description: "Developing secure and scalable server-side applications with RESTful APIs, authentication, and data management systems. Skilled in integrating databases and optimizing backend logic.",
        tags: [
            "JavaScript",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Mongoose",
            "JWT",
            "Supabase"
        ],
        iconName: "Server"
    },
    {
        title: "Data Structures & Algorithms",
        description: "Actively practicing and implementing advanced problem-solving techniques through LeetCode, GeeksforGeeks, and CodeStudio. Strong focus on improving time complexity and algorithmic logic.",
        tags: [
            "C++",
            "LeetCode",
            "GeeksforGeeks",
            "Problem Solving"
        ],
        iconName: "Brain"
    },
    {
        title: "Deployment & Cloud Integration",
        description: "Deploying and managing full-stack applications on modern cloud platforms with continuous integration and delivery pipelines.",
        tags: [
            "Vercel",
            "GitHub",
            "Netlify",
            "CI/CD"
        ],
        iconName: "Cloud"
    },
    {
        title: "Database Design & Management",
        description: "Designing efficient database schemas and integrating them seamlessly into web applications. Experienced in both NoSQL and SQL structures for scalable data management.",
        tags: [
            "MongoDB",
            "Supabase",
            "Mongoose",
            "Data Modeling",
            "Indexing"
        ],
        iconName: "Database"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Portfolio/src/components/sections/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Portfolio$2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Portfolio/src/data/portfolio.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__ = __turbopack_context__.i("[project]/Portfolio/node_modules/lucide-react/dist/esm/icons/github.js [app-client] (ecmascript) <export default as Github>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__ = __turbopack_context__.i("[project]/Portfolio/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-client] (ecmascript) <export default as Linkedin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__ = __turbopack_context__.i("[project]/Portfolio/node_modules/lucide-react/dist/esm/icons/twitter.js [app-client] (ecmascript) <export default as Twitter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/Portfolio/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
"use client";
;
;
;
function Footer() {
    const getIcon = (name)=>{
        switch(name){
            case "GitHub":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/Portfolio/src/components/sections/Footer.tsx",
                    lineNumber: 9,
                    columnNumber: 29
                }, this);
            case "LinkedIn":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__["Linkedin"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/Portfolio/src/components/sections/Footer.tsx",
                    lineNumber: 10,
                    columnNumber: 31
                }, this);
            case "Twitter":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__["Twitter"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/Portfolio/src/components/sections/Footer.tsx",
                    lineNumber: 11,
                    columnNumber: 30
                }, this);
            case "Email":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Portfolio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/Portfolio/src/components/sections/Footer.tsx",
                    lineNumber: 12,
                    columnNumber: 28
                }, this);
            default:
                return null;
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "border-t border-border bg-[#0a0a0c] py-12 px-4 relative z-10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid md:grid-cols-3 gap-12 mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-2xl font-bold text-accent-purple mb-4",
                                    children: "Devesh Purohit"
                                }, void 0, false, {
                                    fileName: "[project]/Portfolio/src/components/sections/Footer.tsx",
                                    lineNumber: 22,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-secondary-gray mb-6 leading-relaxed max-w-sm",
                                    children: "Full Stack Developer passionate about solving complex problems and creating amazing digital experiences."
                                }, void 0, false, {
                                    fileName: "[project]/Portfolio/src/components/sections/Footer.tsx",
                                    lineNumber: 25,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex space-x-4",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$Portfolio$2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["socialLinks"].slice(0, 4).map((link, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: link.href,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "w-10 h-10 bg-gray-900 border border-gray-700 rounded-full flex items-center justify-center hover:bg-accent-purple hover:text-white hover:border-transparent transition-all duration-300 transform hover:scale-110 shadow-lg text-secondary-gray",
                                            "aria-label": link.name,
                                            children: getIcon(link.name)
                                        }, index, false, {
                                            fileName: "[project]/Portfolio/src/components/sections/Footer.tsx",
                                            lineNumber: 30,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Portfolio/src/components/sections/Footer.tsx",
                                    lineNumber: 28,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Portfolio/src/components/sections/Footer.tsx",
                            lineNumber: 21,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-white font-semibold mb-6 text-lg",
                                    children: "Quick Links"
                                }, void 0, false, {
                                    fileName: "[project]/Portfolio/src/components/sections/Footer.tsx",
                                    lineNumber: 45,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-4",
                                    children: [
                                        'Home',
                                        'About',
                                        'Experience',
                                        'Services',
                                        'Projects',
                                        'Contact'
                                    ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: `#${item.toLowerCase()}`,
                                                className: "text-secondary-gray hover:text-accent-cyan transition-colors duration-300 flex items-center gap-2 group",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-1.5 h-1.5 rounded-full bg-accent-cyan/0 group-hover:bg-accent-cyan transition-colors"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Portfolio/src/components/sections/Footer.tsx",
                                                        lineNumber: 53,
                                                        columnNumber: 21
                                                    }, this),
                                                    item
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Portfolio/src/components/sections/Footer.tsx",
                                                lineNumber: 49,
                                                columnNumber: 19
                                            }, this)
                                        }, item, false, {
                                            fileName: "[project]/Portfolio/src/components/sections/Footer.tsx",
                                            lineNumber: 48,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Portfolio/src/components/sections/Footer.tsx",
                                    lineNumber: 46,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Portfolio/src/components/sections/Footer.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-white font-semibold mb-6 text-lg",
                                    children: "Core Tech Stack"
                                }, void 0, false, {
                                    fileName: "[project]/Portfolio/src/components/sections/Footer.tsx",
                                    lineNumber: 62,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-2",
                                    children: [
                                        'React.js',
                                        'Next.js',
                                        'Node.js',
                                        'MongoDB',
                                        'TypeScript',
                                        'Tailwind CSS'
                                    ].map((tech)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-secondary-gray text-sm px-3 py-1.5 bg-gray-900 rounded-lg border border-gray-800 hover:border-accent-purple hover:text-white transition-colors cursor-default",
                                            children: tech
                                        }, tech, false, {
                                            fileName: "[project]/Portfolio/src/components/sections/Footer.tsx",
                                            lineNumber: 65,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Portfolio/src/components/sections/Footer.tsx",
                                    lineNumber: 63,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Portfolio/src/components/sections/Footer.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Portfolio/src/components/sections/Footer.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border-t border-gray-800 pt-8 text-center flex flex-col items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-secondary-gray text-sm",
                            children: [
                                "© ",
                                new Date().getFullYear(),
                                " Devesh Purohit. All rights reserved."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Portfolio/src/components/sections/Footer.tsx",
                            lineNumber: 77,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600 text-xs mt-2",
                            children: "Built with Next.js, Framer Motion, and Tailwind CSS."
                        }, void 0, false, {
                            fileName: "[project]/Portfolio/src/components/sections/Footer.tsx",
                            lineNumber: 80,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Portfolio/src/components/sections/Footer.tsx",
                    lineNumber: 76,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Portfolio/src/components/sections/Footer.tsx",
            lineNumber: 19,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Portfolio/src/components/sections/Footer.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Portfolio_src_0qxum4f._.js.map