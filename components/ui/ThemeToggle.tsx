"use client";

import { useSyncExternalStore } from "react";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

function getSnapshot() {
  return document.documentElement.classList.contains("dark");
}

export function ThemeToggle() {
  const isDark = useSyncExternalStore(subscribe, getSnapshot, () => true);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    }
  };

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
