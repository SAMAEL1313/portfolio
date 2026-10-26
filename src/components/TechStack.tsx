import {
  SiHtml5,
  SiCss,
  SiReact,
  SiExpo,
  SiTailwindcss,
  SiPython,
  SiJavascript,
  SiFirebase,
  SiMysql,
  SiCplusplus,
  SiGit,
  SiAndroidstudio,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

export default function TechStack() {
  const categories = [
    {
      name: "Frontend",
      items: [
        { name: "HTML", desc: "Markup language for web pages", icon: SiHtml5 },
        { name: "CSS", desc: "Styling language for web pages", icon: SiCss },
        { name: "React Native", desc: "Mobile app framework", icon: SiReact },
        { name: "Expo", desc: "React Native toolchain for rapid development", icon: SiExpo },
        { name: "Tailwind CSS", desc: "Utility-first CSS framework", icon: SiTailwindcss },
      ],
    },
    {
      name: "Backend",
      items: [
        { name: "Python", desc: "General-purpose programming language", icon: SiPython },
        { name: "JavaScript", desc: "Programming language for the web", icon: SiJavascript },
      ],
    },
    {
      name: "Database & Services",
      items: [
        { name: "Firebase", desc: "Backend-as-a-Service platform", icon: SiFirebase },
        { name: "MySQL", desc: "Relational database", icon: SiMysql },
      ],
    },
    {
      name: "Tools & Languages",
      items: [
        { name: "Java", desc: "Object-oriented programming language", icon: FaJava },
        { name: "C++", desc: "General-purpose programming language", icon: SiCplusplus },
        { name: "Git", desc: "Version control system", icon: SiGit },
        { name: "VS Code", desc: "Source code editor", icon: VscVscode },
        { name: "Android Studio", desc: "IDE for Android app development", icon: SiAndroidstudio },
      ],
    },
  ];

  return (
    <section
      id="tech-stack"
      className="border-t border-green-900/20 bg-black px-6 py-24 text-white"
    >
      <div className="reveal mx-auto max-w-6xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-green-500">
          Tech Stack
        </p>

        <h2 className="text-4xl font-bold sm:text-5xl">
          Technologies I&apos;ve Worked With
        </h2>

        <div className="mt-12 space-y-10">
          {categories.map((category) => (
            <div key={category.name}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500">
                {category.name}
              </h3>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {category.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.name}
                      className="group rounded-lg border border-green-900/30 bg-green-950/10 p-5 transition hover:-translate-y-1 hover:border-green-500 hover:bg-green-950/20"
                    >
                      <Icon aria-hidden="true" className="mb-3 h-6 w-6 text-gray-400 transition group-hover:text-green-400" />

                      <h4 className="font-semibold text-green-400">
                        {item.name}
                      </h4>
                      <p className="mt-1 text-sm text-gray-500">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}