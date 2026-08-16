export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-8 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-center text-sm text-slate-500 sm:flex-row sm:text-left">
        <p>© 2026 Amit Rai. All rights reserved.</p>

        <p>
          Built with React, Vite &{" "}
          <span className="text-lime-400">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
}
