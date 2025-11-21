// Footer component provides quick links and placeholder social icons.
const footerLinks = ["Inventory", "Financing", "Support", "Careers"];

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white px-6 py-10 text-sm dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-semibold text-zinc-900 dark:text-white">
            DRB Cars
          </p>
          <p className="text-zinc-500 dark:text-zinc-400">
            Premium rides since 2002.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-zinc-600 dark:text-zinc-300">
          {footerLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="transition hover:text-zinc-900 dark:hover:text-white"
            >
              {link}
            </a>
          ))}
        </div>
        <div className="flex gap-3 text-zinc-500 dark:text-zinc-400">
          {["X", "IG", "YT"].map((icon) => (
            <span
              key={icon}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 text-xs tracking-wide dark:border-zinc-800"
            >
              {icon}
            </span>
          ))}
        </div>
      </div>
      <p className="mt-6 text-center text-xs text-zinc-500 dark:text-zinc-500">
        © {new Date().getFullYear()} DRB Cars. All rights reserved.
      </p>
    </footer>
  );
}

