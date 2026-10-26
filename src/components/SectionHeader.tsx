import type { ReactNode } from "react";

type SectionHeaderProps = {
  numeral: string;
  label: string;
  children: ReactNode;
  intro?: string;
  centered?: boolean;
};

export default function SectionHeader({
  numeral,
  label,
  children,
  intro,
  centered = false,
}: SectionHeaderProps) {
  return (
    <div className={centered ? "text-center" : undefined}>
      {/* Numbered label with a hairline rule */}
      <div className="mb-6 flex items-center gap-4">
        {centered && <span className="h-px flex-1 bg-silver-600/30" />}
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-forest-500">
          {numeral} — {label}
        </p>
        <span className="h-px flex-1 bg-silver-600/30" />
      </div>

      <h2 className="text-4xl font-bold leading-tight sm:text-5xl">
        {children}
      </h2>

      {intro && (
        <p className={`mt-4 max-w-xl text-lg text-silver-400 ${centered ? "mx-auto" : ""}`}>
          {intro}
        </p>
      )}
    </div>
  );
}

/* Italic forest-green accent word inside a heading */
export function Accent({ children }: { children: ReactNode }) {
  return <em className="font-semibold text-forest-400">{children}</em>;
}
