"use client";

// Navbar renders the fixed navigation with premium styling and CTA.
import { useEffect, useState } from "react";

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
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,transform,border-color] duration-300 ${
        isScrolled
          ? "border-black/5 bg-white/90 shadow-lg backdrop-blur"
          : "border-transparent bg-gradient-to-b from-white via-white/80 to-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          className="flex items-center gap-3 text-lg font-semibold tracking-wide text-zinc-900 transition hover:opacity-90"
        >
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 via-orange-400 to-amber-300 text-base font-bold text-white shadow-lg shadow-orange-500/40">
            Cº
          </span>
          Careos
        </a>
        <nav className="hidden items-center gap-4 text-sm font-medium md:flex">
          <div className="flex items-center gap-1 rounded-full border border-zinc-200 bg-white/70 px-1 py-1 shadow-sm">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-full px-4 py-2 text-zinc-600 transition hover:bg-white hover:text-zinc-900"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="rounded-full bg-gradient-to-r from-orange-500 to-orange-400 px-5 py-2 text-xs font-semibold uppercase tracking-wide text-white shadow-lg shadow-orange-500/30 transition hover:translate-y-0.5 hover:opacity-95"
          >
            Book now
          </a>
        </nav>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 text-lg text-zinc-700 transition hover:border-zinc-900 md:hidden"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className="sr-only">Toggle menu</span>
          <div className="relative h-4 w-5">
            <span
              className={`absolute inset-x-0 top-0 h-0.5 rounded-full bg-current transition ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 rounded-full bg-current transition ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-current transition ${
                menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>
      <div
        className={`md:hidden ${menuOpen ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        <div
          className={`mx-auto max-w-6xl px-4 transition-all ${
            menuOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          <div className="rounded-3xl border border-black/5 bg-white/95 px-5 py-6 text-sm font-medium text-zinc-700 shadow-xl">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block rounded-xl px-3 py-3 transition hover:bg-zinc-100"
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-4 block rounded-2xl bg-gradient-to-r from-orange-500 to-orange-400 px-4 py-3 text-center text-xs font-semibold uppercase tracking-wide text-white shadow-lg shadow-orange-500/20"
              onClick={closeMenu}
            >
              Book now
            </a>
          </div>
        </div>
      </div>
      <div
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity md:hidden ${
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden="true"
        onClick={closeMenu}
      />
    </header>
  );
}

