import SectionHeader, { Accent } from "@/components/SectionHeader";

const currently = [
  { label: "Studying", value: "BS Information Technology, 3rd year" },
  { label: "Building", value: "Casper, an AI conversational companion" },
  { label: "Exploring", value: "Web, mobile, databases, and AI" },
];

export default function About() {
  return (
    <section
      id="about"
      className="border-t border-forest-900/20 bg-surface px-6 py-24 text-fg"
    >
      <div className="reveal mx-auto max-w-6xl">
        <SectionHeader numeral="I" label="About">
          Bonjour, I&apos;m <Accent>Karl</Accent>.
        </SectionHeader>

        <div className="mt-10 grid gap-12 lg:grid-cols-[3fr_2fr] lg:gap-16">
          <div className="space-y-6 text-lg leading-8 text-silver-400">
            <p>
              I&apos;m Karl Malone Dela Cruz, a 3rd-year Information Technology
              student focused on full-stack development.
            </p>

            <p>
              I enjoy Learning, experimenting with different
              technologies, and turning ideas into working projects.
            </p>

            <p>
              I&apos;m continuously improving my programming skills while
              exploring areas such as web development, application development,
              databases, and AI.
            </p>
          </div>

          {/* Currently card */}
          <aside className="h-fit rounded-2xl border border-forest-900/30 bg-forest-950/10 p-8">
            <p className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-silver-500">
              Currently
            </p>

            <dl className="space-y-5">
              {currently.map((item) => (
                <div key={item.label} className="border-l border-forest-700 pl-4">
                  <dt className="font-serif text-xl font-semibold italic text-forest-400">
                    {item.label}
                  </dt>
                  <dd className="mt-1 text-silver-300">{item.value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
}
