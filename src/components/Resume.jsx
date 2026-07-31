import resumeFile from "../assets/resume.pdf";
import { Download } from "lucide-react";

function Resume() {
  return (
    <section id="resume" className="py-24 px-6 bg-violet-50 dark:bg-[#150c28]">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-violet-600 dark:text-violet-400 font-semibold text-lg mb-2 tracking-wide">
          My background
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-10 text-gray-900 dark:text-white">
          My{" "}
          <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
            Resume
          </span>
        </h2>

        <div className="bg-white dark:bg-[#1E1433] rounded-2xl shadow-lg shadow-violet-100 dark:shadow-none border border-violet-100 dark:border-violet-900/40 overflow-hidden">
          <iframe
            src={resumeFile}
            title="Resume"
            className="w-full h-[500px] md:h-[700px]"
          />
        </div>

        <a
          href={resumeFile}
          download="Gloria_Resume.pdf"
          className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-medium text-base shadow-lg shadow-violet-300/50 dark:shadow-violet-900/50 hover:scale-105 transition-transform"
        >
          <Download size={18} /> Download Resume PDF
        </a>
      </div>
    </section>
  );
}

export default Resume;