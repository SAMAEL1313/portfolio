export default function About() {
  return (
    <section
      id="about"
      className="border-t border-green-900/20 bg-black px-6 py-24 text-white"
    >
      <div className="reveal mx-auto max-w-6xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-green-500">
          About Me
        </p>

        <h2 className="text-4xl font-bold sm:text-5xl">
          Bonjour! 
        </h2>

        <div className="mt-8 max-w-3xl space-y-6 text-lg leading-8 text-gray-400">
          <p>
            I&apos;m Karl Malone Dela Cruz, a 3rd-year Information Technology
            student focused on full-stack development.
          </p>

          <p>
            I enjoy Vibe coding, experimenting with different
            technologies, and turning ideas into working projects.
          </p>

          <p>
            I&apos;m continuously improving my programming skills while
            exploring areas such as web development, application development,
            databases, and AI.
          </p>
        </div>
      </div>
    </section>
  );
}