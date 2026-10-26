export default function Education() {
  return (
    <section
      id="education"
      className="border-t border-forest-900/20 bg-black px-6 py-24 text-white"
    >
      <div className="reveal mx-auto max-w-6xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-forest-500">
          Education
        </p>

        <h2 className="text-4xl font-bold sm:text-5xl">
          My Academic Journey
        </h2>

        <div className="mt-10">
          <div className="rounded-xl border border-forest-900/30 bg-forest-950/10 p-6 transition duration-300 hover:border-forest-500 hover:shadow-[0_0_30px_rgba(79,127,93,0.1)]">
            <p className="text-sm uppercase tracking-wider text-forest-500">
              Currently Studying
            </p>

            <h3 className="mt-2 text-2xl font-bold">
              Bachelor&apos;s Degree in Information Technology
            </h3>

            <p className="mt-2 text-silver-400">
              3rd Year IT Student
            </p>

            <p className="mt-4 leading-7 text-silver-400">
              Currently developing my skills in software development,
              databases, networking, and other areas of information
              technology through academic work and personal projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}