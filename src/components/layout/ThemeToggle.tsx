// ThemeToggle handles applying or removing the `dark` class on <html>.
"use client";

import { useEffect } from "react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const themeValue = resolvedTheme ?? "light";

  useEffect(() => {
    if (typeof document === "undefined") {
      return;
    }
    document.documentElement.classList.toggle("dark", themeValue === "dark");
  }, [themeValue]);

  const handleToggle = () => {
    setTheme(themeValue === "dark" ? "light" : "dark");
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label="Toggle color theme"
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300 text-sm text-zinc-700 transition hover:border-zinc-900 hover:text-zinc-900 dark:border-zinc-700 dark:text-zinc-200 dark:hover:border-white dark:hover:text-white"
    >
      {themeValue === "dark" ? "🌙" : "☀️"}
    </button>
  );
}

