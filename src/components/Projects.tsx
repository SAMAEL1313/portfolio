export default function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-green-900/20 bg-black px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-green-500">
          Projects
        </p>

        <h2 className="text-4xl font-bold sm:text-5xl">
          Things I&apos;ve Built
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          
          {/* Casper */}
          <div className="rounded-xl border border-green-900/30 bg-green-950/10 p-6 transition duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-green-500 hover:shadow-[0_0_30px_rgba(34,197,94,0.12)]">
            <p className="text-sm uppercase tracking-wider text-green-500">
              AI Project
            </p>

            <h3 className="mt-2 text-2xl font-bold">
              Casper
            </h3>

            <p className="mt-4 leading-7 text-gray-400">
              An AI conversational assistant powered by the Gemini API,
              designed to act as a conversational companion and learning
              assistant.
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href="https://github.com/SAMAEL1313/casper"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-green-700 px-4 py-2 text-sm transition hover:bg-green-950"
              >
                View GitHub
              </a>
            </div>
          </div>

          {/* ChickenSwag */}
          <div className="rounded-xl border border-green-900/30 bg-green-950/10 p-6 transition duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-green-500 hover:shadow-[0_0_30px_rgba(34,197,94,0.12)]">
            <p className="text-sm uppercase tracking-wider text-green-500">
              Game Project
            </p>

            <h3 className="mt-2 text-2xl font-bold">
              ChickenSwag
            </h3>

            <p className="mt-4 leading-7 text-gray-400">
              A dodge game focused on avoiding obstacles and surviving for
              as long as possible.
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href="https://github.com/SAMAEL1313/Chickenswag"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-green-700 px-4 py-2 text-sm transition hover:bg-green-950"
              >
                View GitHub
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}