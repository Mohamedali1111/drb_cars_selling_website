// Premium fixed navigation bar with elegant gradient styling and refined mobile menu.
"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Cars", href: "#cars" },
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
          ? "border-b border-zinc-200/60 bg-white/98 shadow-lg backdrop-blur-xl"
          : "bg-white/95 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-2.5 transition-opacity duration-300 hover:opacity-80 cursor-pointer"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 via-orange-400 to-amber-400 text-base font-bold text-white shadow-lg shadow-orange-500/30 transition-transform duration-300 hover:scale-105">
            C°
          </div>
          <span className="text-lg font-bold tracking-tight text-zinc-900">
            Careos
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          <div className="flex items-center gap-1 rounded-full bg-zinc-50/80 px-1.5 py-1.5 backdrop-blur-sm">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-full px-5 py-2 text-sm font-medium text-zinc-700 transition-all duration-300 hover:bg-white hover:text-zinc-900 hover:shadow-sm cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-orange-500/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/40 cursor-pointer"
          >
            Order Now
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="relative z-50 flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 bg-white/50 text-zinc-700 transition-all duration-300 hover:border-zinc-300 hover:bg-white lg:hidden cursor-pointer"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <div className="relative h-5 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                menuOpen ? "top-2 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-2 h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-4 h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                menuOpen ? "top-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
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
          className={`mx-auto max-w-7xl px-5 pt-3 transition-all duration-300 ${
            menuOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          <div className="rounded-2xl border border-zinc-200/80 bg-white/98 px-6 py-6 shadow-2xl backdrop-blur-xl">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block rounded-xl px-4 py-3.5 text-base font-medium text-zinc-700 transition-all duration-300 hover:bg-zinc-50 hover:text-zinc-900 cursor-pointer"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-4 block rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3.5 text-center text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-orange-500/30 transition-all duration-300 hover:scale-105 cursor-pointer"
              onClick={() => setMenuOpen(false)}
            >
              Order Now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
