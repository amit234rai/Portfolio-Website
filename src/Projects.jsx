export default function Projects() {
  const projects = [
    {
      number: "01",
      title: "JobTrack -- Job Application Tracker",
      description:
        "A full-stack job application tracking platform for managing applications across different stages with search, filtering, notes, status history, interview scheduling, and automated reminders. Implements JWT authentication, RBAC, OTP password recovery, validation, background job processing, and reliable event handling.",
      tech: [
        "React",
        "Node.js",
        "Express",
        "PostgreSQL",
        "Redis",
        "BullMQ",
        "JWT",
        "RBAC",
        "Zod",
        "Docker",
      ],
      link: "https://github.com/amit234rai/Jobtrack-Full-stack-project",
      label: "View Repository",
    },
    {
      number: "02",
      title: "Weather Web Application",
      description:
        "A responsive frontend application that fetches live weather information using the OpenWeather REST API. Features dynamic weather metrics, contextual themes, icons, input validation, and error handling.",
      tech: ["HTML", "CSS", "JavaScript", "REST API", "DOM Manipulation"],
      link: "https://amit234rai.github.io/Weather_webApp/",
      label: "Live Demo",
    },
    {
      number: "03",
      title: "Pharmacy Management System",
      description:
        "A modular C++ console application built using object-oriented programming for inventory tracking, medicine management, supplier data, transaction processing, billing, and persistent binary file storage.",
      tech: ["C++", "OOP", "File Handling", "Binary Files"],
      link: "https://github.com/amit234rai/Pharmacy-Management-System.git",
      label: "View Repository",
    },
    {
      number: "04",
      title: "Project Management System",
      description:
        "A RESTful backend for a multi-tenant project management platform with role-based access control, JWT authentication, refresh tokens, email verification, password reset, CRUD APIs, notes, subtasks, and file attachments.",
      tech: [
        "Node.js",
        "Express 5",
        "MongoDB",
        "Mongoose",
        "JWT",
        "bcrypt",
        "multer",
      ],
      link: "https://github.com/amit234rai/Backend-Project-Management-System",
      label: "View Repository",
    },
  ];

  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8"
    >
      <div className="mb-12">
        <p className="font-mono text-sm tracking-[0.2em] text-lime-400">
          03 / PROJECTS
        </p>

        <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
          Selected work.
        </h2>
      </div>

      <div className="grid gap-6">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group grid gap-6 rounded-2xl border border-white/10 bg-[#101814] p-6 transition hover:border-lime-400/40 sm:p-8 md:grid-cols-[90px_1fr]"
          >
            <span className="font-mono text-2xl font-bold text-lime-400">
              {project.number}
            </span>

            <div>
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                <h3 className="text-2xl font-bold text-white">
                  {project.title}
                </h3>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="shrink-0 font-semibold text-lime-400 transition hover:text-lime-300"
                >
                  {project.label} ↗
                </a>
              </div>

              <p className="mt-4 max-w-3xl leading-7 text-slate-400">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-lime-400/10 px-3 py-1.5 text-xs font-medium text-lime-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
