import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-forest-900/20 bg-surface px-6 py-8 text-sm text-silver-500">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p>
          &copy; {new Date().getFullYear()} Karl Malone Dela Cruz
        </p>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/SAMAEL1313"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition hover:text-forest-400"
          >
            <FaGithub className="h-5 w-5" />
          </a>

          <a
            href="https://www.linkedin.com/in/karl-malone-dela-cruz-2036993b9/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition hover:text-forest-400"
          >
            <FaLinkedin className="h-5 w-5" />
          </a>

          <a
            href="#home"
            className="transition hover:text-forest-400"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
