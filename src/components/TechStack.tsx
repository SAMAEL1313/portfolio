export default function TechStack() {
  const skills = [
    "HTML",
    "CSS",
    "React Native",
    "Firebase",
    "MySQL",
    "Python",
    "Java",
    "C++",
  ];

  return (
    <section
      id="Techstack"
      className="border-t border-green-900/20 bg-black px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-green-500">
          Skills
        </p>

        <h2 className="text-4xl font-bold sm:text-5xl">
          Technologies I&apos;ve Worked With
        </h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="rounded-lg border border-green-900/30 bg-green-950/10 p-5 transition hover:border-green-500 hover:bg-green-950/20"
            >
              <h3 className="font-semibold text-green-400">
                {skill}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}