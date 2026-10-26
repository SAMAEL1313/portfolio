import {
  SiHtml5,
  SiCss,
  SiReact,
  SiExpo,
  SiTailwindcss,
  SiPython,
  SiJavascript,
  SiFirebase,
  SiSupabase,
  SiMysql,
  SiCplusplus,
  SiGit,
  SiAndroidstudio,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import SectionHeader, { Accent } from "@/components/SectionHeader";

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
        { name: "Supabase", desc: "Open-source Postgres backend platform", icon: SiSupabase },
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
      className="border-t border-forest-900/20 bg-surface px-6 py-24 text-fg"
    >
      <div className="reveal mx-auto max-w-6xl">
        <SectionHeader
          numeral="II"
          label="Tech Stack"
          intro="The languages, frameworks, and tools I reach for when turning an idea into something that works."
        >
          My <Accent>toolkit</Accent>
        </SectionHeader>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {categories.map((category) => (
            <div
              key={category.name}
              className="rounded-2xl border border-forest-900/30 bg-forest-950/10 p-8 transition duration-300 hover:border-forest-700"
            >
              <h3 className="mb-6 flex items-baseline justify-between gap-4 text-2xl font-semibold">
                {category.name}
                <span className="font-mono text-xs text-silver-500">
                  {String(category.items.length).padStart(2, "0")}
                </span>
              </h3>

              <ul className="space-y-4">
                {category.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.name} className="group flex items-center gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-silver-600/30 text-silver-400 transition group-hover:border-forest-500 group-hover:text-forest-400">
                        <Icon aria-hidden="true" className="h-5 w-5" />
                      </span>

                      <div>
                        <p className="font-medium text-silver-200">{item.name}</p>
                        <p className="text-sm text-silver-500">{item.desc}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}