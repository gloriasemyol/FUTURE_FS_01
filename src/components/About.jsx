function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-white dark:bg-[#0F0A1F]"
    >
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-violet-600 dark:text-violet-400 font-semibold text-lg mb-2 tracking-wide">
          Get to know me
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-gray-900 dark:text-white">
          About <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">Me</span>
        </h2>

        <div className="space-y-5 text-left md:text-center">
          <p className="text-lg font-lora text-gray-600 dark:text-gray-300 leading-relaxed">
            Hi, I'm Gloria S — a Full Stack Web Development intern passionate about
            building clean, functional, and user-friendly web applications. I started
            as a complete beginner and have since built multiple full-stack projects,
            including authentication systems, e-commerce platforms, real-time chat apps,
            and social media platforms.
          </p>
          <p className="text-lg font-lora text-gray-600 dark:text-gray-300 leading-relaxed">
            I have currently interned at <span className="font-semibold text-violet-600 dark:text-violet-400">Prodigy InfoTech</span> and <span className="font-semibold text-violet-600 dark:text-violet-400">Future Interns</span>,
            where I have built many real-world projects including this very portfolio as my first project. I love learning
            new technologies, solving problems, and turning ideas into working products —
            one project at a time.
          </p>
          <p className="text-lg font-lora text-gray-600 dark:text-gray-300 leading-relaxed">
            My goal is to keep growing as a developer, contribute to real-world
            applications, and eventually work on products that make a genuine difference
            for the people who use them.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;