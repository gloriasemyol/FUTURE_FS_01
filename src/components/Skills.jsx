import {
  SiReact,
  SiVite,
  SiTailwindcss,
  SiNextdotjs,
  SiHtml5,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiSocketdotio,
  SiGit,
  SiVercel,
  SiRender,
  SiCloudinary,
  SiJsonwebtokens,
  SiPostman,
} from "react-icons/si";
import { TbBrandCss3 } from "react-icons/tb";

function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React.js", icon: SiReact, color: "text-cyan-400" },
        { name: "Vite", icon: SiVite, color: "text-purple-400" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-400" },
        { name: "Next.js", icon: SiNextdotjs, color: "text-gray-900 dark:text-white" },
        { name: "HTML5", icon: SiHtml5, color: "text-orange-500" },
        { name: "CSS3", icon: TbBrandCss3, color: "text-blue-500" },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
        { name: "Express.js", icon: SiExpress, color: "text-gray-800 dark:text-gray-200" },
        { name: "MongoDB", icon: SiMongodb, color: "text-emerald-500" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
        { name: "Prisma ORM", icon: SiPrisma, color: "text-indigo-400" },
        { name: "Socket.io", icon: SiSocketdotio, color: "text-slate-800 dark:text-slate-200" },
      ],
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git & GitHub", icon: SiGit, color: "text-orange-600" },
        { name: "Vercel", icon: SiVercel, color: "text-black dark:text-white" },
        { name: "Render", icon: SiRender, color: "text-sky-400" },
        { name: "Cloudinary", icon: SiCloudinary, color: "text-blue-600" },
        { name: "JWT Auth", icon: SiJsonwebtokens, color: "text-pink-500" },
        { name: "Postman", icon: SiPostman, color: "text-orange-500" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-violet-50 dark:bg-[#0F0A1F] transition-colors duration-300">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-violet-600 dark:text-violet-400 font-medium mb-2 tracking-wide">
          My Tech Stack
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-14 text-gray-900 dark:text-white">
          Skills &{" "}
          <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-white dark:bg-[#1E1433] rounded-2xl p-6 border border-violet-100 dark:border-violet-900/40 shadow-lg shadow-violet-100 dark:shadow-none"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                {category.title}
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="flex items-center gap-3 p-3 rounded-xl bg-violet-50 dark:bg-[#150c28] hover:scale-105 transition-transform"
                    >
                      <Icon className={`w-6 h-6 ${skill.color}`} />
                      <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;