"use client";

import { motion, Variants } from "framer-motion";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4 } },
};

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/60 backdrop-blur-xl shadow-sm">
      <div className="flex justify-between items-center px-6 md:px-12 py-6 max-w-[1440px] mx-auto">
        <div className="font-headline text-2xl font-black tracking-tighter text-heading">
          mlluizdevtech
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center space-x-10">
          <a
            className="font-headline font-bold tracking-tight uppercase text-sm text-heading-container border-b-2 border-primary-container pb-1 hover:text-heading transition-all duration-300"
            href="#outcomes"
          >
            Results
          </a>
          <a
            className="font-headline font-bold tracking-tight uppercase text-sm text-secondary hover:text-heading transition-all duration-300"
            href="#portfolio"
          >
            Portfolio
          </a>
          <a
            className="font-headline font-bold tracking-tight uppercase text-sm text-secondary hover:text-heading transition-all duration-300"
            href="#process"
          >
            Process
          </a>
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-xl hover:bg-surface-container-low transition-colors"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span
              className={`block h-0.5 w-5 bg-heading transition-transform duration-300 ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 bg-heading transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 bg-heading transition-transform duration-300 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>

          <a href="#lead-capture" className="hidden md:block">
            <Button variant="brand" size="md">
              Get Free Preview
            </Button>
          </a>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="md:hidden bg-surface/95 backdrop-blur-xl border-t border-outline-variant px-6 py-6 flex flex-col gap-5"
        >
          {["#outcomes", "#portfolio", "#process"].map((href) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="font-headline font-bold uppercase text-sm text-secondary hover:text-heading transition-colors"
            >
              {href.replace("#", "")}
            </a>
          ))}
          <a href="#lead-capture" onClick={() => setMenuOpen(false)}>
            <Button variant="brand" size="md" className="w-full justify-center">
              Get Free Preview
            </Button>
          </a>
        </motion.div>
      )}
    </nav>
  );
}
