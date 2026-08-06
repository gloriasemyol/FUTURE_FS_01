import { Award, ExternalLink, FileCheck2 } from "lucide-react";

const certificates = [
  {
    title: "Prodigy InfoTech",
    subtitle: "Full Stack Web Development Internship",
    description:
      "Built 5 full-stack projects during this internship — a Secure User Authentication system, Employee Management System, Local Store E-commerce Platform, Real-Time Chat Application, and Social Media Platform — using modern MERN stack technologies and responsive front-end interfaces. Recognized with a certificate of completion and a letter of recommendation for consistent performance throughout the program.",
    links: [
      { label: "Certificate of Completion", url: "https://drive.google.com/open?id=1OigmX9VZ8XbDO9Awe0CWGilgsIjMi3we&usp=drive_copy" },
      { label: "Letter of Recommendation", url: "https://drive.google.com/open?id=1M3EAsgig7lrVCkaaqzQo-t8o0EOt1Df8&usp=drive_copy" },
    ],
  },
  {
    title: "Future Interns",
    subtitle: "Full Stack Web Development Internship",
    description:
      "Developed 3 full-stack web applications during this internship — a Personal Professional Portfolio, a Mini CRM, and a Café Website — focusing on secure RESTful APIs and optimized database integration.",
    links: [
      { label: "Certificate of Completion", url: "https://drive.google.com/open?id=1Lq92euRXeaE91TWHD5fzjygNqyBWF7n4&usp=drive_copy" },
      { label: "Letter of Recommendation", url: "https://drive.google.com/open?id=10nhgbA27ih1ENhpV34tXBoP5fIPOpXyC&usp=drive_copy" },
    ],
  },
  {
    title: "ICSISCDR@24",
    subtitle: "International Conference on Sustainable and Innovative Solutions in Cross-Disciplinary Research",
    description:
      "During my second year of undergraduate studies in Computer Science, I actively participated in the 2-day International Conference on Sustainable and Innovative Solutions in Cross-Disciplinary Research (ICSISCDR@24). This immersive experience broadened my technical perspective by bridging core computer science principles with sustainable, cross-disciplinary problem-solving, enhancing my understanding of how modern technology drives innovative research and real-world impact.",
    links: [
      { label: "Certificate of Completion", url: "https://drive.google.com/open?id=12diI8HQdOLVUGo9zXpyK5fRcQPHlf9GV&usp=drive_copy" },
    ],
  },
  {
    title: "Academicia",
    subtitle: "a competitive science and technology program",
    description:
      "Secured 2nd place out of numerous participants in Academicia, a competitive science and technology program organized by the College Science Association. The rigorous multi-tier event comprised three challenging rounds featuring complex technical and scientific assessments, where my strong analytical skills, problem-solving abilities, and comprehensive knowledge domain enabled me to successfully outperform the majority of competitors and earn runner-up recognition.",
    links: [
      { label: "Certificate of Achievement", url: "https://drive.google.com/open?id=1XewBF27wUQ6KMV796xxvJELP1NjXbNPd&usp=drive_copy" },
    ],
  },
];

function Certificates() {
  return (
    <section
      id="certificates"
      className="min-h-screen px-6 py-24 bg-gradient-to-b from-white to-violet-50 dark:from-[#0F0A1F] dark:to-[#1a0f2e]"
    >
      <div className="max-w-3xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-3 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-violet-600 bg-clip-text text-transparent">
            Certificates & Achievements
          </h2>
          <p className="text-gray-500 dark:text-gray-400 font-lora">
            A few milestones from my learning journey
          </p>
        </div>

        {/* Stacked Certificate Cards */}
        <div className="flex flex-col gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="w-full rounded-2xl border border-violet-100 dark:border-violet-900/40 bg-white dark:bg-[#150c28] shadow-lg shadow-violet-200/40 dark:shadow-violet-950/40 p-6 md:p-8 hover:-translate-y-1 transition-transform"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-11 h-11 flex items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 shrink-0">
                  <Award size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-violet-600 dark:text-violet-400 font-medium">
                    {cert.subtitle}
                  </p>
                </div>
              </div>

              <p className="text-gray-500 dark:text-gray-400 font-lora leading-relaxed mb-5">
                {cert.description}
              </p>

              <div className="flex flex-wrap gap-3">
                {cert.links.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border-2 border-violet-600 text-violet-600 dark:text-violet-400 dark:border-violet-400 hover:bg-violet-50 dark:hover:bg-violet-900/30 transition-colors"
                  >
                    <FileCheck2 size={16} />
                    {link.label}
                    <ExternalLink size={14} />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Certificates;