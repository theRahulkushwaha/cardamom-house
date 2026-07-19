"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const saved = localStorage.getItem("theme");

    if (saved === "dark" || saved === "light") {
      setTheme(saved);

      document.documentElement.classList.toggle(
        "dark",
        saved === "dark"
      );
      return;
    }

    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const initial = prefersDark ? "dark" : "light";

    setTheme(initial);

    document.documentElement.classList.toggle(
      "dark",
      prefersDark
    );
  }, []);

  function toggleTheme() {
    const next = theme === "light" ? "dark" : "light";

    setTheme(next);

    localStorage.setItem("theme", next);

    document.documentElement.classList.toggle(
      "dark",
      next === "dark"
    );
  }

  if (!mounted) return null;

  return (
    <button
    onClick={toggleTheme}
    aria-label="Toggle Theme"
    className="
      no-print
      rounded-full
      border
      border-brown/10
      bg-card
      p-3
      shadow-lg
      transition-all
      hover:scale-105
      active:scale-95
    "
  >
    {theme === "dark" ? (
      <Sun size={20} />
    ) : (
      <Moon size={20} />
    )}
  </button>
  );
}