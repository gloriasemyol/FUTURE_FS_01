import { Mail } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="py-8 px-6 bg-violet-50 dark:bg-[#150c28] border-t border-violet-100 dark:border-violet-900/40">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Gloria. Built with React & Tailwind CSS.
        </p>
        <div className="flex gap-5">
          <a
            href="https://github.com/gloriasemyol"
            target="_blank"
            rel="noreferrer"
            className="text-gray-500 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
          >
            <SiGithub size={18} />
          </a>
          <a
            href="https://linkedin.com/in/gloriasemyol"
            target="_blank"
            rel="noreferrer"
            className="text-gray-500 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href="mailto:gloriasemyol@gmail.com"
            className="text-gray-500 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;