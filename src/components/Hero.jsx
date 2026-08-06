import profilePhoto from "../assets/profile-photo.jpeg";
import resumeFile from "../assets/resume.pdf";
import { Mail, ArrowDown } from "lucide-react";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24 relative overflow-hidden bg-gradient-to-b from-white to-violet-50 dark:from-[#0F0A1F] dark:to-[#1a0f2e]"
    >
      {/* Decorative glow background blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-violet-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-fuchsia-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

      {/* Profile Photo */}
      <div className="relative z-10 mb-6">
        <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 p-1.5">
          <img
            src={profilePhoto}
            alt="Gloria"
            className="w-full h-full rounded-full object-cover border-4 border-white dark:border-[#0F0A1F]"
          />
        </div>
      </div>

      {/* Intro Subtitle */}
      <p className="relative z-10 text-violet-600 dark:text-violet-400 font-semibold text-lg mb-3 tracking-wide">
        👋 Hi, my name is
      </p>

      {/* Main Title */}
      <h1 className="relative z-10 text-5xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-violet-600 bg-clip-text text-transparent">
        Gloria
      </h1>

      {/* Profession */}
      <h2 className="relative z-10 text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-200 mb-6">
        Full Stack Web Developer
      </h2>

      {/* Short Bio */}
      <p className="relative z-10 max-w-2xl text-lg font-lora text-gray-500 dark:text-gray-400 mb-8">
        I build clean, responsive, and user-friendly web applications using
        React, Node.js, and MongoDB. Currently I have built real-world projects
        at Prodigy InfoTech and Future Interns.
      </p>

      {/* Call To Action Buttons */}
      <div className="relative z-10 flex flex-wrap gap-4 justify-center mb-8">
        <a
          href="#projects"
          className="px-6 py-3 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white text-base font-medium shadow-lg shadow-violet-300/50 dark:shadow-violet-900/50 hover:scale-105 transition-transform"
        >
          View My Projects
        </a>

        {/* Download Resume Button */}
        <a
          href={resumeFile}
          download="Gloria_Resume.pdf"
          className="px-6 py-3 rounded-full border-2 border-violet-600 text-violet-600 dark:text-violet-400 dark:border-violet-400 text-base font-medium hover:bg-violet-50 dark:hover:bg-violet-900/30 transition-colors"
        >
          Download Resume
        </a>
      </div>

      {/* Social Links */}
      <div className="relative z-10 flex gap-6">
        <a
          href="https://github.com/gloriasemyol"
          target="_blank"
          rel="noreferrer"
          className="text-gray-500 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
        </a>

        <a
          href="https://linkedin.com/in/gloriasemyol"
          target="_blank"
          rel="noreferrer"
          className="text-gray-500 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.762-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </a>

        <a
          href="mailto:gloriasemyol@gmail.com"
          className="text-gray-500 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
        >
          <Mail size={24} />
        </a>
      </div>

      {/* Scroll Down Arrow */}
      <a
        href="#about"
        className="relative z-10 mt-16 animate-bounce text-violet-400"
      >
        <ArrowDown size={28} />
      </a>
    </section>
  );
}

export default Hero;