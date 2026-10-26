"use client";

import { useSyncExternalStore } from "react";
import { HiMoon, HiSun } from "react-icons/hi";

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
  return () => observer.disconnect();
}

const isLight = () => document.documentElement.classList.contains("light");

export default function ThemeToggle() {
  const light = useSyncExternalStore(subscribe, isLight, () => false);

  const toggle = () => {
    const next = !light;
    document.documentElement.classList.toggle("light", next);
    try {
      localStorage.setItem("theme", next ? "light" : "dark");
    } catch {}
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={light ? "Switch to dark mode" : "Switch to light mode"}
      title={light ? "Dark mode" : "Light mode"}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-silver-600/40 text-silver-300 transition hover:border-forest-500 hover:text-forest-400"
    >
      {light ? <HiMoon className="h-4 w-4" /> : <HiSun className="h-4 w-4" />}
    </button>
  );
}
