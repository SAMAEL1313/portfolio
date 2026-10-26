import SectionHeader, { Accent } from "@/components/SectionHeader";

export default function Education() {
  return (
    <section
      id="education"
      className="border-t border-forest-900/20 bg-surface px-6 py-24 text-fg"
    >
      <div className="reveal mx-auto max-w-6xl">
        <SectionHeader numeral="IV" label="Education">
          My academic <Accent>journey</Accent>
        </SectionHeader>

        {/* Timeline */}
        <div className="relative mt-12">
          <div className="absolute bottom-0 left-0 top-0 hidden w-px bg-gradient-to-b from-forest-500 via-silver-600/40 to-transparent md:block" />

          <div className="relative md:pl-12">
            <span className="absolute left-0 top-9 hidden h-2.5 w-2.5 -translate-x-1 rounded-full bg-forest-500 md:block">
              <span className="absolute inset-0 animate-ping rounded-full bg-forest-500/60" />
            </span>

            <div className="rounded-2xl border border-forest-900/30 bg-forest-950/10 p-8 transition duration-300 hover:border-forest-500 hover:shadow-[0_0_30px_var(--glow)]">
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                <div>
                  <h3 className="text-2xl font-bold">
                    Bachelor&apos;s Degree in Information Technology
                  </h3>
                  <p className="mt-1 text-silver-400">3rd Year IT Student</p>
                </div>

                <span className="w-fit shrink-0 rounded-full bg-forest-600 px-3 py-1 font-mono text-xs text-on-accent">
                  Currently Studying
                </span>
              </div>

              <p className="mt-4 leading-7 text-silver-400">
                Currently developing my skills in software development,
                databases, networking, and other areas of information
                technology through academic work and personal projects.
              </p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {["Software Development", "Databases", "Networking"].map((topic) => (
                  <li
                    key={topic}
                    className="rounded-full border border-silver-600/30 px-3 py-1 font-mono text-xs text-silver-400"
                  >
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
