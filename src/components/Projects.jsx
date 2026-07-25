import { ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";

function Projects() {
  const projects = [
    {
      title: "FUTURE_FS_01 — Portfolio Website",
      description:
        "This very portfolio! Built with React, Vite, and Tailwind CSS, featuring dark mode, smooth animations, and a purple gradient theme.",
      tech: ["React", "Vite", "Tailwind CSS"],
      github: "https://github.com/gloriasemyol/FUTURE_FS_01",
      live: "#",
    },
    {
      title: "PRODIGY_FS_05 — Social Media Platform",
      description:
        "A full-stack social platform with JWT auth, image uploads via Cloudinary, and a PostgreSQL database managed with Prisma ORM.",
      tech: ["React", "Node.js", "PostgreSQL", "Prisma"],
      github: "https://github.com/gloriasemyol/PRODIGY_FS_05",
      live: "#",
    },
    {
      title: "PRODIGY_FS_04 — Real-Time Chat App",
      description:
        "A live chat application using Socket.io for real-time messaging, complete with typing indicators and JWT-based authentication.",
      tech: ["React", "Socket.io", "MongoDB", "Node.js"],
      github: "https://github.com/gloriasemyol/PRODIGY_FS_04",
      live: "#",
    },
    {
      title: "PRODIGY_FS_03 — Local Store E-Commerce",
      description:
        "A bakery-themed e-commerce site with full cart functionality, checkout flow, and an animated loading experience.",
      tech: ["React", "MongoDB", "Tailwind CSS"],
      github: "https://github.com/gloriasemyol/PRODIGY_FS_03",
      live: "#",
    },
    {
      title: "PRODIGY_FSD_02 — Employee Management System",
      description:
        "A full CRUD admin system with JWT authentication, password hashing, and toast notifications for a smooth user experience.",
      tech: ["React", "Node.js", "MongoDB", "JWT"],
      github: "https://github.com/gloriasemyol/PRODIGY_FSD_02",
      live: "#",
    },
    {
      title: "PRODIGY_FSD_01 — Secure Authentication System",
      description:
        "A 14-day authentication system built with Next.js and PostgreSQL, deployed across Neon, Render, and Vercel.",
      tech: ["Next.js", "PostgreSQL", "JWT"],
      github: "https://github.com/gloriasemyol/PRODIGY_FSD_01",
      live: "#",
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-white dark:bg-[#0F0A1F]">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-violet-600 dark:text-violet-400 font-medium mb-2 tracking-wide">
          My work
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-14 text-gray-900 dark:text-white">
          Featured{" "}
          <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white dark:bg-[#1E1433] rounded-2xl p-6 border border-violet-100 dark:border-violet-900/40 shadow-lg shadow-violet-100 dark:shadow-none hover:-translate-y-1 hover:shadow-xl transition-all flex flex-col"
            >
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300 font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 pt-4 border-t border-violet-50 dark:border-violet-900/30">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 font-medium"
                >
                  <SiGithub size={16} /> Code
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 font-medium"
                >
                  <ExternalLink size={16} /> Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;