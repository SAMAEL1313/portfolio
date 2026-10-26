"use client";

import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { href: "#about", label: "About" },
  { href: "#tech-stack", label: "Tech Stack" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-forest-900/30 bg-surface/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

        {/* Wordmark */}
        <a
          href="#home"
          className="font-serif text-2xl font-semibold tracking-wide text-silver-200 transition hover:text-forest-400"
          onClick={() => setIsOpen(false)}
        >
          Karl Malone
        </a>

        <div className="flex items-center gap-3 md:gap-8">
          {/* Navigation links */}
          <div className="hidden items-center gap-8 text-sm text-silver-400 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition hover:text-forest-400"
              >
                {link.label}
              </a>
            ))}
          </div>

          <ThemeToggle />

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="rounded-lg p-2 text-silver-300 transition hover:text-forest-400 md:hidden"
          >
            {isOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="border-t border-forest-900/30 bg-surface/95 px-6 py-4 md:hidden"
        >
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-3 py-3 text-silver-300 transition hover:bg-forest-950/40 hover:text-forest-400"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
