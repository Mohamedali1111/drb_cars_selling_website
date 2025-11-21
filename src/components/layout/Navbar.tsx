// Navbar component renders the fixed top navigation with placeholder links and a theme toggle stub.
const navLinks = ["Home", "Cars", "About", "Services", "Contact"];

export function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-white/80 px-6 py-4 backdrop-blur-md dark:bg-zinc-900/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <a
          href="#top"
          className="text-lg font-semibold tracking-wide text-zinc-900 dark:text-zinc-100"
        >
          DRB Cars
        </a>
        <div className="hidden items-center gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-300 md:flex">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="transition hover:text-zinc-900 dark:hover:text-white"
            >
              {link}
            </a>
          ))}
          <button
            type="button"
            className="rounded-full border border-zinc-300 px-4 py-2 text-xs uppercase tracking-wide text-zinc-700 transition hover:border-zinc-900 hover:text-zinc-900 dark:border-zinc-700 dark:text-zinc-200 dark:hover:border-white dark:hover:text-white"
            aria-label="Toggle dark mode"
          >
            Toggle
          </button>
        </div>
        <button
          type="button"
          className="rounded-md border border-zinc-200 p-2 text-zinc-700 transition hover:border-zinc-900 md:hidden"
          aria-label="Open menu"
        >
          ☰
        </button>
      </div>
    </nav>
  );
}

