"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleTheme = () => {
    const isNowDark = document.documentElement.classList.contains("dark");
    if (isNowDark) {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      setIsDark(true);
    }
  };

  // Prevent UI flickering before mounting
  if (!mounted) {
    return <div className="w-10 h-10" />;
  }

  return (
    <button
      onClick={toggleTheme}
      className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container-low text-on-surface hover:bg-outline-variant transition-colors shadow-sm focus:outline-none"
      aria-label="Toggle Theme"
      title="Toggle Light/Dark Mode"
    >
      <span
        className="material-symbols-outlined text-[1.25rem]"
        style={{ fontVariationSettings: "'FILL' 0" }}
      >
        {isDark ? "light_mode" : "dark_mode"}
      </span>
    </button>
  );
}
