import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiVite,
} from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";

function Skills() {
  const skillGroups = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML5", icon: SiHtml5 },
        { name: "CSS3", icon: FaCss3Alt },
        { name: "JavaScript", icon: SiJavascript },
        { name: "React", icon: SiReact },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "Vite", icon: SiVite },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: SiNodedotjs },
        { name: "Express", icon: SiExpress },
        { name: "MongoDB", icon: SiMongodb },
        { name: "PostgreSQL", icon: SiPostgresql },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", icon: SiGit },
        { name: "GitHub", icon: SiGithub },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-24 px-6 bg-violet-50 dark:bg-[#150c28]"
    >
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-violet-600 dark:text-violet-400 font-medium mb-2 tracking-wide">
          What I work with
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-14 text-gray-900 dark:text-white">
          My{" "}
          <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
            Skills
          </span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="bg-white dark:bg-[#1E1433] rounded-2xl p-6 shadow-lg shadow-violet-100 dark:shadow-none border border-violet-100 dark:border-violet-900/40"
            >
              <h3 className="text-lg font-bold mb-5 text-violet-700 dark:text-violet-400">
                {group.title}
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {group.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-violet-50 dark:hover:bg-violet-900/20 transition-colors"
                      title={skill.name}
                    >
                      <Icon
                        size={32}
                        className="text-violet-600 dark:text-violet-400"
                      />
                      <span className="text-xs text-gray-600 dark:text-gray-400">
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