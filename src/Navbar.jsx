export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#0a0f0d]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a
          href="#hero"
          className="text-xl font-black tracking-tight text-white sm:text-2xl"
        >
          AMIT<span className="text-lime-400">.</span>
        </a>

        <div className="flex items-center gap-1 sm:gap-3">
          <a
            href="#about"
            className="rounded-lg px-2 py-2 text-sm text-slate-300 transition hover:bg-white/5 hover:text-lime-400 sm:px-4"
          >
            About
          </a>

          <a
            href="#skills"
            className="rounded-lg px-2 py-2 text-sm text-slate-300 transition hover:bg-white/5 hover:text-lime-400 sm:px-4"
          >
            Skills
          </a>

          <a
            href="#projects"
            className="rounded-lg px-2 py-2 text-sm text-slate-300 transition hover:bg-white/5 hover:text-lime-400 sm:px-4"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="rounded-lg px-2 py-2 text-sm text-slate-300 transition hover:bg-white/5 hover:text-lime-400 sm:px-4"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
