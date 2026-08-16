export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8"
    >
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="font-mono text-sm tracking-[0.2em] text-lime-400">
            01 / ABOUT
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
            Building practical software solutions.
          </h2>
        </div>

        <div>
          <p className="text-lg leading-8 text-slate-400">
            I am a Computer Science graduate from Netaji Subhas University of
            Technology, Dwarka. I enjoy building applications that combine clean
            frontend experiences with reliable backend functionality.
          </p>

          <p className="mt-5 text-lg leading-8 text-slate-400">
            My core skills include JavaScript, React.js, Node.js, MongoDB, SQL,
            Python, C++, and Data Structures & Algorithms. I have worked on web
            applications, RESTful backend APIs, database-driven systems, and
            object-oriented software projects.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-sm text-slate-500">Education</p>
              <h3 className="mt-2 font-bold text-white">
                B.Tech Computer Science
              </h3>
              <p className="mt-1 text-sm text-lime-400">
                NSUT, Dwarka · 2021–2025
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-sm text-slate-500">Focus</p>
              <h3 className="mt-2 font-bold text-white">
                Full Stack Development
              </h3>
              <p className="mt-1 text-sm text-lime-400">
                Frontend · Backend · APIs
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
