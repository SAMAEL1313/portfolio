"use client";

import { useEffect, useState } from "react";

const SHOW_MS = 2000;
const FADE_MS = 700;

export default function Splash() {
  const [phase, setPhase] = useState<"shown" | "leaving" | "gone">("shown");

  useEffect(() => {
    // Only show once per visit; the inline script in layout hides it for repeat views
    if (document.documentElement.classList.contains("splash-seen")) return;

    const leave = setTimeout(() => setPhase("leaving"), SHOW_MS);
    const remove = setTimeout(() => {
      setPhase("gone");
      try {
        sessionStorage.setItem("splash-seen", "1");
      } catch {}
    }, SHOW_MS + FADE_MS);

    return () => {
      clearTimeout(leave);
      clearTimeout(remove);
    };
  }, []);

  if (phase === "gone") return null;

  return (
    <div
      id="splash"
      aria-hidden="true"
      onClick={() => setPhase("leaving")}
      onTransitionEnd={() => phase === "leaving" && setPhase("gone")}
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-surface transition-opacity duration-700 ${
        phase === "leaving" ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      {/* Orbiting rings */}
      <div className="animate-spin-slow absolute h-72 w-72 rounded-full border border-dashed border-silver-500/30" />
      <div className="animate-spin-slow-reverse absolute h-52 w-52 rounded-full border border-forest-500/40" />

      <div className="relative text-center">
        <p className="animate-fade-up font-mono text-xs uppercase tracking-[0.4em] text-forest-500">
          Portfolio
        </p>

        <p className="animate-fade-up delay-1 mt-4 font-serif text-5xl font-bold text-fg sm:text-6xl">
          Karl Malone
        </p>
        <p className="animate-fade-up delay-1 font-serif text-4xl font-semibold italic text-silver-300 sm:text-5xl">
          Dela Cruz
        </p>

        <div className="mx-auto mt-8 h-px w-40 overflow-hidden bg-silver-600/30">
          <div className="splash-line h-full w-full bg-gradient-to-r from-silver-300 to-forest-500" />
        </div>
      </div>
    </div>
  );
}
