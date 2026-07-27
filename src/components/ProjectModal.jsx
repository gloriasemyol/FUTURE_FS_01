import { X, ArrowLeft, Clock } from "lucide-react";

export function ProjectModal({ isOpen, onClose, project }) {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-white dark:bg-[#1E1433] border border-violet-200 dark:border-violet-900/50 rounded-3xl p-8 w-full max-w-lg shadow-2xl relative text-center animate-in fade-in zoom-in duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 dark:hover:text-white transition-colors"
        >
          <X size={22} />
        </button>

        {/* Status Icon */}
        <div className="w-16 h-16 bg-violet-100 dark:bg-violet-900/40 text-violet-600 dark:text-violet-300 rounded-full flex items-center justify-center mx-auto mb-4">
          <Clock size={32} />
        </div>

        {/* Modal Header */}
        <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-900/30 rounded-full mb-3">
          Status: In Progress
        </span>

        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          {project.title || "Project Demo"}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 leading-relaxed">
          The live interactive preview for this project is currently under deployment. Check back soon or visit the GitHub repository for source code!
        </p>

        {/* Large "Coming Soon!" Banner */}
        <div className="bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-extrabold text-xl py-3 rounded-2xl mb-6 shadow-md shadow-violet-500/20">
          🚀 Coming Soon!
        </div>

        {/* Back to Home / Close Button */}
        <button
          onClick={onClose}
          className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-gray-100 dark:bg-[#150c28] hover:bg-gray-200 dark:hover:bg-violet-900/50 text-gray-800 dark:text-gray-200 font-medium transition-colors cursor-pointer"
        >
          <ArrowLeft size={18} />
          Back to Portfolio
        </button>
      </div>
    </div>
  );
}