export default function Skills() {
  const skillGroups = [
    {
      title: "Frontend Development",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript (ES6+)",
        "React.js",
        "Tailwind CSS",
        "DOM Manipulation",
        "Responsive Web Design",
      ],
    },
    {
      title: "Backend & Databases",
      skills: [
        "Node.js",
        "REST APIs",
        "SQL",
        "MongoDB",
        "Object-Oriented Programming",
      ],
    },
    {
      title: "Languages & Core Concepts",
      skills: [
        "Python",
        "C",
        "C++",
        "Data Structures & Algorithms",
        "DBMS",
        "Relational Databases",
      ],
    },
    {
      title: "Developer Tools",
      skills: ["Git", "GitHub", "Version Control"],
    },
  ];

  return (
    <section
      id="skills"
      className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8"
    >
      <div className="mb-12">
        <p className="font-mono text-sm tracking-[0.2em] text-lime-400">
          02 / SKILLS
        </p>

        <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
          Technologies I work with.
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="rounded-2xl border border-white/10 bg-[#101814] p-6 transition hover:-translate-y-1 hover:border-lime-400/40"
          >
            <h3 className="text-xl font-bold text-white">{group.title}</h3>

            <div className="mt-5 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-slate-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
