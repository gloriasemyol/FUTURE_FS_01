import { useState } from "react";
import { ExternalLink, X, Clock, Sparkles, PlayCircle } from "lucide-react";
import { SiGithub } from "react-icons/si";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "My Portfolio",
      description:
        "This very portfolio website! Built with React, Vite, and Tailwind CSS, featuring dark mode, smooth animations, and a purple gradient theme.",
      tech: ["React", "Vite", "Tailwind CSS"],
      github: "https://github.com/gloriasemyol/FUTURE_FS_01",
      modalType: "self",
    },
    {
      title: "Mini CRM",
      description:
        "A customer relationship management tool built during my Future Interns internship, handling contacts, deals, and activity tracking.",
      tech: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/gloriasemyol/FUTURE_FS_02",
      modalType: "video",
      driveLink: "https://drive.google.com/open?id=1xBlNfxz2GV0UXs0JU3ng2tM-rTFQU07U&usp=drive_copy",
    },
    {
      title: "Espresso Voila",
      description:
        "A full-stack café website with a dynamic digital menu, WhatsApp integration, and Google Maps — built with the MERN stack.",
      tech: ["React", "Node.js", "Express.js", "MongoDB"],
      github: "https://github.com/gloriasemyol/FUTURE_FS_03",
      modalType: "video",
      driveLink: "https://drive.google.com/open?id=1RzsDt5sEttuHNmKGMNLKQlf91-HBWxdA&usp=drive_copy",
    },
    {
      title: "DocSign Web App",
      description:
        "A secure digital document signing and management application with JWT authentication, cryptographic signatures, and audit trails.",
      tech: ["React", "Node.js", "Express.js", "JWT"],
      github: "https://github.com/gloriasemyol/docsign-app",
      modalType: "video",
      driveLink: "https://drive.google.com/open?id=1nlxjcS5jC3PtbcqU2kx9zFFY0Ham5kof&usp=drive_copy",
    },
    {
      title: "AI Code Review",
      description:
        "An automated code review tool that analyzes source code for syntax errors, security vulnerabilities, and code quality recommendations.",
      tech: ["React", "Node.js", "Express.js", "Postman"],
      github: "https://github.com/gloriasemyol/ai-code-review-assistant",
      modalType: "video",
      driveLink: "https://drive.google.com/open?id=1jnXzIY4M9lzCi9KCqI6jY0U6b5vMmTuh&usp=drive_copy",
    },
    {
      title: "Prodigy Projects",
      description:
        "A collection of full-stack web development internship tasks including authentication systems, real-time apps, and CRUD administrative dashboards.",
      tech: ["React", "Node.js", "MongoDB", "PostgreSQL"],
      github: "https://github.com/gloriasemyol",
      modalType: "prodigy",
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-white dark:bg-[#0F0A1F] relative">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-violet-600 dark:text-violet-400 font-semibold text-lg mb-2 tracking-wide">
          My work
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-14 text-gray-900 dark:text-white">
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
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-base text-gray-600 dark:text-gray-400 mb-4 flex-grow">
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
                  className="flex items-center gap-1.5 text-base text-gray-600 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 font-medium"
                >
                  <SiGithub size={18} /> Code
                </a>

                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="flex items-center gap-1.5 text-base text-gray-600 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 font-medium cursor-pointer"
                >
                  <ExternalLink size={18} /> Live Demo
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Shared Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white dark:bg-[#1E1433] border border-violet-200 dark:border-violet-900/50 rounded-3xl p-8 w-full max-w-lg shadow-2xl relative text-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Icon */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 dark:hover:text-white transition-colors cursor-pointer"
            >
              <X size={24} />
            </button>

            {/* Portfolio message */}
            {selectedProject.modalType === "self" && (
              <>
                <div className="w-16 h-16 bg-violet-100 dark:bg-violet-900/40 text-violet-600 dark:text-violet-300 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles size={32} />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                  You're looking at it right now! This very portfolio website
                  you're browsing is the live demo of this project — built
                  from scratch with React, Vite, and Tailwind CSS.
                </p>
              </>
            )}

            {/* Prodigy message */}
            {selectedProject.modalType === "prodigy" && (
              <>
                <div className="w-16 h-16 bg-violet-100 dark:bg-violet-900/40 text-violet-600 dark:text-violet-300 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock size={32} />
                </div>
                <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-900/30 rounded-full mb-3">
                  5 Projects
                </span>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed mb-6">
                  These are five separate full-stack projects built during my
                  Prodigy InfoTech internship. Visit my GitHub to explore each
                  one's source code, README, and setup instructions.
                </p>
                
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-medium text-base shadow-lg shadow-violet-300/50 dark:shadow-violet-900/50 hover:scale-105 transition-transform"
                >
                  <SiGithub size={18} /> View on GitHub
                </a>
              </>
            )}

            {/* Video demo link */}
            {selectedProject.modalType === "video" && (
              <>
                <div className="w-16 h-16 bg-violet-100 dark:bg-violet-900/40 text-violet-600 dark:text-violet-300 rounded-full flex items-center justify-center mx-auto mb-4">
                  <PlayCircle size={32} />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed mb-6">
                  {selectedProject.description}
                </p>
                
                <a
                  href={selectedProject.driveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-medium text-base shadow-lg shadow-violet-300/50 dark:shadow-violet-900/50 hover:scale-105 transition-transform"
                >
                  <PlayCircle size={18} /> Click to Watch Demo Video
                </a>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;