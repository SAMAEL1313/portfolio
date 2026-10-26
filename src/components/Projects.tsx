import { FaGithub } from "react-icons/fa";
import { HiArrowUpRight } from "react-icons/hi2";
import SectionHeader, { Accent } from "@/components/SectionHeader";

const projects = [
  {
    numeral: "I",
    name: "Casper",
    category: "AI Project",
    description:
      "An AI conversational assistant powered by the Gemini API, designed to act as a conversational companion and learning assistant.",
    tags: ["Python", "Gemini API", "HTML", "CSS"],
    github: "https://github.com/SAMAEL1313/casper",
  },
  {
    numeral: "II",
    name: "ChickenSwag",
    category: "Game Project",
    description:
      "A dodge game focused on avoiding obstacles and surviving for as long as possible.",
    tags: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/SAMAEL1313/Chickenswag",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-forest-900/20 bg-black px-6 py-24 text-white"
    >
      <div className="reveal mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeader
            numeral="III"
            label="Projects"
            intro="A few things I've built while learning, experimenting, and having fun with code."
          >
            Selected <Accent>works</Accent>
          </SectionHeader>

          <a
            href="https://github.com/SAMAEL1313"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex shrink-0 items-center gap-2 font-mono text-sm uppercase tracking-widest text-silver-400 transition hover:text-forest-400"
          >
            All projects
            <HiArrowUpRight aria-hidden="true" className="h-4 w-4 transition group-hover:rotate-45" />
          </a>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.name}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-forest-900/30 bg-forest-950/10 p-8 transition duration-300 hover:-translate-y-2 hover:border-forest-500 hover:shadow-[0_0_30px_rgba(79,127,93,0.12)] lg:p-10"
            >
              {/* Corner glow */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(90,138,104,0.18),transparent_70%)] opacity-50 transition duration-500 group-hover:opacity-100" />

              <div className="relative flex items-start justify-between">
                <span className="font-serif text-6xl font-bold italic leading-none text-silver-500/50 transition group-hover:text-forest-500/70">
                  {project.numeral}
                </span>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.name} on GitHub`}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-silver-600/40 text-silver-400 transition hover:border-forest-500 hover:text-forest-400"
                >
                  <FaGithub className="h-4 w-4" />
                </a>
              </div>

              <p className="relative mt-8 font-mono text-xs uppercase tracking-widest text-forest-500">
                {project.category}
              </p>

              <h3 className="relative mt-2 text-3xl font-bold">
                {project.name}
              </h3>

              <p className="relative mt-4 flex-1 leading-7 text-silver-400">
                {project.description}
              </p>

              <ul className="relative mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-silver-600/30 px-3 py-1 font-mono text-xs text-silver-400"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
