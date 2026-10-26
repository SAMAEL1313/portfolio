import { FaGithub } from "react-icons/fa";

const projects = [
  {
    name: "Casper",
    category: "AI Project",
    description:
      "An AI conversational assistant powered by the Gemini API, designed to act as a conversational companion and learning assistant.",
    github: "https://github.com/SAMAEL1313/casper",
  },
  {
    name: "ChickenSwag",
    category: "Game Project",
    description:
      "A dodge game focused on avoiding obstacles and surviving for as long as possible.",
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
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-forest-500">
          Projects
        </p>

        <h2 className="text-4xl font-bold sm:text-5xl">
          Things I&apos;ve Built
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.name}
              className="flex flex-col rounded-xl border border-forest-900/30 bg-forest-950/10 p-6 transition duration-300 hover:-translate-y-2 hover:border-forest-500 hover:shadow-[0_0_30px_rgba(79,127,93,0.12)]"
            >
              <p className="text-sm uppercase tracking-wider text-forest-500">
                {project.category}
              </p>

              <h3 className="mt-2 text-2xl font-bold">
                {project.name}
              </h3>

              <p className="mt-4 flex-1 leading-7 text-silver-400">
                {project.description}
              </p>

              <div className="mt-6 flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.name} on GitHub`}
                  className="inline-flex items-center gap-2 rounded-lg border border-forest-700 px-4 py-2 text-sm transition hover:bg-forest-950"
                >
                  <FaGithub className="h-4 w-4" />
                  View GitHub
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
