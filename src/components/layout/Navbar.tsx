"use client";

// Navbar renders the fixed navigation with section links, CTA, and theme toggle.
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Cars", href: "#cars" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const baseStyles =
    "fixed inset-x-0 top-0 z-50 px-4 transition shadow-lg";
  const skinStyles = isScrolled
    ? "bg-white/90 border-b border-black/5 backdrop-blur-md dark:border-white/10 dark:bg-zinc-950/90"
    : "bg-white/60 border-b border-transparent backdrop-blur-sm dark:bg-zinc-900/60";

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`${baseStyles} ${skinStyles}`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between py-4">
        <a
          href="#home"
          className="text-xl font-semibold tracking-wide text-zinc-900 dark:text-white"
        >
          Carves
        </a>
        <nav className="hidden items-center gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-300 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="transition hover:text-zinc-900 dark:hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-orange-500 px-5 py-2 text-xs font-semibold uppercase tracking-wide text-white shadow transition hover:bg-orange-600"
          >
            Book now
          </a>
          <ThemeToggle />
        </nav>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 text-xl text-zinc-700 transition hover:border-zinc-900 md:hidden dark:border-zinc-700 dark:text-zinc-100"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 rounded-2xl border border-black/5 bg-white/95 px-4 py-6 text-sm font-medium text-zinc-700 shadow dark:border-white/10 dark:bg-zinc-950/95 dark:text-zinc-200">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-md px-3 py-2 transition hover:bg-zinc-100 dark:hover:bg-zinc-800"
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-full bg-orange-500 px-4 py-2 text-center text-xs font-semibold uppercase tracking-wide text-white shadow transition hover:bg-orange-600"
              onClick={closeMenu}
            >
              Book now
            </a>
            <div className="flex items-center gap-3">
              <span className="text-xs uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                Theme
              </span>
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

