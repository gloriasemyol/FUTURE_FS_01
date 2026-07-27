import { useState } from "react";
import { ExternalLink, X, ArrowLeft, Clock } from "lucide-react";
import { SiGithub } from "react-icons/si";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      title: "FUTURE_FS_01 — Portfolio Website",
      description:
        "This very portfolio! Built with React, Vite, and Tailwind CSS, featuring dark mode, smooth animations, and a purple gradient theme.",
      tech: ["React", "Vite", "Tailwind CSS"],
      github: "https://github.com/gloriasemyol/FUTURE_FS_01",
      live: null,
    },
    {
      title: "Prodigy Projects",
      description:
        "A collection of full-stack web development internship tasks including authentication systems, real-time apps, and CRUD administrative dashboards.",
      tech: ["React", "Node.js", "MongoDB", "PostgreSQL"],
      github: "https://github.com/gloriasemyol",
      live: null,
    },
    {
      title: "DocSign",
      description:
        "A secure digital document signing and management application with JWT authentication, cryptographic signatures, and audit trails.",
      tech: ["React", "Node.js", "Express.js", "JWT"],
      github: "https://github.com/gloriasemyol",
      live: null,
    },
    {
      title: "SmartERP",
      description:
        "An enterprise resource planning dashboard designed for managing inventory, tracking orders, and handling employee role permissions.",
      tech: ["React", "PostgreSQL", "Prisma", "Tailwind CSS"],
      github: "https://github.com/gloriasemyol",
      live: null,
    },
    {
      title: "AI Code Review and Analyzer",
      description:
        "An automated code review tool that analyzes source code for syntax errors, security vulnerabilities, and code quality recommendations.",
      tech: ["React", "Node.js", "Express.js", "Postman"],
      github: "https://github.com/gloriasemyol",
      live: null,
    },
    {
      title: "GreenField Insight",
      description:
        "An environmental data analytics platform offering visualization tools for tracking sustainability metrics and resource distribution.",
      tech: ["Next.js", "Tailwind CSS", "MongoDB", "Chart.js"],
      github: "https://github.com/gloriasemyol",
      live: null,
    },
  ];

  const handleLiveDemoClick = (project) => {
    if (!project.live || project.live === "#") {
      setSelectedProject(project);
      setIsModalOpen(true);
    } else {
      window.open(project.live, "_blank");
    }
  };

  return (
    <section id="projects" className="py-24 px-6 bg-white dark:bg-[#0F0A1F] relative">
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

                <button
                  type="button"
                  onClick={() => handleLiveDemoClick(project)}
                  className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 font-medium cursor-pointer"
                >
                  <ExternalLink size={16} /> Live Demo
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Coming Soon Modal */}
      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white dark:bg-[#1E1433] border border-violet-200 dark:border-violet-900/50 rounded-3xl p-8 w-full max-w-lg shadow-2xl relative text-center">
            {/* Close Icon Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 dark:hover:text-white transition-colors cursor-pointer"
            >
              <X size={22} />
            </button>

            {/* Status Icon */}
            <div className="w-16 h-16 bg-violet-100 dark:bg-violet-900/40 text-violet-600 dark:text-violet-300 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock size={32} />
            </div>

            {/* Status Badge */}
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-900/30 rounded-full mb-3">
              Status: In Progress
            </span>

            <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {selectedProject.title}
            </h3>

            <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 leading-relaxed">
              The live interactive preview for this project is currently under deployment. Check back soon or visit the GitHub repository for full source code!
            </p>

            {/* Coming Soon Banner */}
            <div className="bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-extrabold text-xl py-3 rounded-2xl mb-6 shadow-md shadow-violet-500/20">
              🚀 Coming Soon!
            </div>

            {/* Back to Home / Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-gray-100 dark:bg-[#150c28] hover:bg-gray-200 dark:hover:bg-violet-900/50 text-gray-800 dark:text-gray-200 font-medium transition-colors cursor-pointer"
            >
              <ArrowLeft size={18} />
              Back to Home
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;