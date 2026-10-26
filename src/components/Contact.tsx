import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiArrowUpRight } from "react-icons/hi2";
import SectionHeader, { Accent } from "@/components/SectionHeader";

const links = [
  {
    label: "GitHub",
    handle: "@SAMAEL1313",
    href: "https://github.com/SAMAEL1313",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    handle: "Karl Malone Dela Cruz",
    href: "https://www.linkedin.com/in/karl-malone-dela-cruz-2036993b9/",
    icon: FaLinkedin,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-forest-900/20 bg-surface px-6 py-24 text-fg"
    >
      <div className="reveal mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-24">
        <SectionHeader
          numeral="V"
          label="Contact"
          intro="I'm always interested in connecting with other people in technology, learning from others, and exploring new opportunities."
        >
          Let&apos;s build something <Accent>together</Accent>.
        </SectionHeader>

        <div className="space-y-4 lg:pt-16">
          {links.map(({ label, handle, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 rounded-2xl border border-forest-900/30 bg-forest-950/10 p-6 transition duration-300 hover:border-forest-500 hover:bg-forest-950/30"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-silver-600/30 text-silver-300 transition group-hover:border-forest-500 group-hover:text-forest-400">
                <Icon aria-hidden="true" className="h-5 w-5" />
              </span>

              <span className="flex-1">
                <span className="block font-serif text-2xl font-semibold">{label}</span>
                <span className="block text-sm text-silver-500">{handle}</span>
              </span>

              <HiArrowUpRight
                aria-hidden="true"
                className="h-5 w-5 text-silver-500 transition group-hover:rotate-45 group-hover:text-forest-400"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
