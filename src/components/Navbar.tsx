import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-green-900/30 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <a
  href="#home"
  className="flex items-center"
  aria-label="Home"
>
  <Image
    src="/images/logo.png"
    alt="Samael logo"
    width={45}
    height={45}
    className="rounded-full object-cover transition duration-300 hover:scale-110"
  />
</a>

        {/* Navigation links */}
        <div className="hidden items-center gap-8 text-sm text-gray-400 md:flex">
          <a
            href="#about"
            className="transition hover:text-green-400"
          >
            About
          </a>

          <a
            href="#skills"
            className="transition hover:text-green-400"
          >
            Skills
          </a>

          <a
            href="#projects"
            className="transition hover:text-green-400"
          >
            Projects
          </a>

          <a
            href="#education"
             className="transition hover:text-green-400"
>
           Education
</a>

          <a
            href="#contact"
            className="transition hover:text-green-400"
          >
            Contact
          </a>
        </div>

      </div>
    </nav>
  );
}