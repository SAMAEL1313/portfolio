export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-green-900/20 bg-black px-6 py-24 text-white"
    >
      <div className="reveal mx-auto max-w-4xl text-center">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-green-500">
          Contact
        </p>

        <h2 className="text-4xl font-bold sm:text-5xl">
          Let&apos;s Connect
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
          I&apos;m always interested in connecting with other people in
          technology, learning from others, and exploring new opportunities.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://github.com/SAMAEL1313"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-lg border border-green-700 px-6 py-3 font-medium transition hover:bg-green-950 sm:w-auto"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/karl-malone-dela-cruz-2036993b9/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-lg bg-green-600 px-6 py-3 font-medium transition hover:bg-green-500 sm:w-auto"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}