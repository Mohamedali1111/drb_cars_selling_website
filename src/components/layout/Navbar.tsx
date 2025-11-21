// Premium fixed navigation bar with elegant, refined styling.
"use client";

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
    const onScroll = () => setIsScrolled(window.scrollY > 20);
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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "border-b border-zinc-200/50 bg-white/95 shadow-sm backdrop-blur-xl"
          : "bg-gradient-to-b from-white via-white/90 to-transparent backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-8 lg:px-12">
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-2.5 transition-opacity hover:opacity-80"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 text-sm font-bold text-white shadow-md">
            C°
          </div>
          <span className="text-lg font-semibold tracking-tight text-zinc-900">
            Careos
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 lg:flex">
          <div className="flex items-center gap-0.5 rounded-full bg-zinc-50/60 px-1 py-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-full px-4 py-1.5 text-sm font-medium text-zinc-600 transition-colors hover:bg-white hover:text-zinc-900"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-5 py-2 text-xs font-semibold uppercase tracking-wide text-white shadow-md transition-all hover:scale-105 hover:shadow-lg"
          >
            Book Now
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="relative z-50 flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 bg-white/50 text-zinc-600 transition-all hover:border-zinc-300 hover:bg-white lg:hidden"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <div className="flex flex-col gap-1">
            <span className="h-0.5 w-4 rounded-full bg-current" />
            <span className="h-0.5 w-4 rounded-full bg-current" />
            <span className="h-0.5 w-4 rounded-full bg-current" />
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Menu Panel */}
      <div
        className={`absolute left-0 right-0 top-full z-40 lg:hidden ${
          menuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          className={`mx-auto max-w-7xl px-6 pt-3 transition-all duration-300 ${
            menuOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          <div className="rounded-xl border border-zinc-200/60 bg-white/95 px-5 py-5 shadow-xl backdrop-blur-xl">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block rounded-lg px-3 py-2.5 text-base font-medium text-zinc-700 transition-colors hover:bg-zinc-50"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-3 block rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 px-5 py-2.5 text-center text-xs font-semibold uppercase tracking-wide text-white shadow-md transition-all hover:scale-105"
              onClick={() => setMenuOpen(false)}
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
