export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8"
    >
      <div className="rounded-2xl border border-white/10 bg-[#101814] px-6 py-12 text-center sm:px-10">
        <p className="font-mono text-sm tracking-[0.2em] text-lime-400">
          04 / CONTACT
        </p>

        <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
          Let&apos;s connect.
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-slate-400">
          Feel free to reach out for opportunities, collaborations, or to
          discuss software development projects.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href="mailto:amitadityakumar454@gmail.com"
            className="rounded-lg bg-lime-400 px-5 py-3 font-bold text-black transition hover:bg-lime-300"
          >
            Send Email
          </a>

          <a
            href="https://github.com/amit234rai"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-white/15 px-5 py-3 font-semibold text-white transition hover:border-lime-400 hover:text-lime-400"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/amit-rai-ucs1677"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-white/15 px-5 py-3 font-semibold text-white transition hover:border-lime-400 hover:text-lime-400"
          >
            LinkedIn
          </a>
        </div>

        <div className="mt-8 space-y-2 text-sm text-slate-400">
          <p>amitadityakumar454@gmail.com</p>
          <p>+91 9910767207</p>
        </div>
      </div>
    </section>
  );
}
