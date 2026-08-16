export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden px-5 pt-24 sm:px-8"
    >
      <div className="absolute left-1/2 top-32 h-80 w-80 -translate-x-1/2 rounded-full bg-lime-400/10 blur-[120px]" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="mb-5 font-mono text-sm tracking-[0.2em] text-lime-400">
            HELLO, I&apos;M
          </p>

          <h1 className="text-5xl font-black leading-tight text-white sm:text-7xl">
            Amit Rai
          </h1>

          <h2 className="mt-5 text-2xl font-semibold text-slate-300 sm:text-3xl">
            Software Developer
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
            Computer Science graduate passionate about building responsive web
            applications, REST APIs, backend systems, and practical software
            solutions.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-lime-400 px-6 py-3 font-bold text-black transition hover:bg-lime-300 hover:scale-105"
            >
              View Projects
            </a>

            <a
              href="mailto:amitadityakumar454@gmail.com"
              className="rounded-lg border border-white/15 px-6 py-3 font-semibold text-white transition hover:border-lime-400 hover:text-lime-400"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-5 text-sm text-slate-400">
            <a
              href="https://github.com/amit234rai"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-lime-400"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/amit-rai-ucs1677"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-lime-400"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-2xl border border-white/10 bg-[#101814] p-1 shadow-2xl">
            <div className="rounded-xl bg-[#0b110e] p-6 sm:p-8">
              <div className="mb-8 flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-lime-400" />
              </div>

              <div className="font-mono text-sm leading-8 sm:text-base">
                <p className="text-purple-400">
                  const <span className="text-blue-300">developer</span> ={" {"}
                </p>

                <p className="pl-5 text-slate-300">
                  name:{" "}
                  <span className="text-lime-300">&quot;Amit Rai&quot;</span>,
                </p>

                <p className="pl-5 text-slate-300">
                  role:{" "}
                  <span className="text-lime-300">
                    &quot;Software Developer&quot;
                  </span>
                  ,
                </p>

                <p className="pl-5 text-slate-300">
                  skills: [
                  <span className="text-lime-300">
                    &quot;React&quot;, &quot;Node.js&quot;
                  </span>
                  ],
                </p>

                <p className="pl-5 text-slate-300">
                  learning:{" "}
                  <span className="text-lime-300">&quot;Every day&quot;</span>
                </p>

                <p className="text-purple-400">{"}"};</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
