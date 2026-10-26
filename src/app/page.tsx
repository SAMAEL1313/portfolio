import Navbar from "@/components/Navbar";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import BackgroundMusic from "@/components/BackgroundMusic";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
	return (
		<main className="game-grid relative min-h-screen overflow-hidden text-white">

			{/* Background glow */}
			<div className="pointer-events-none absolute inset-0 overflow-hidden">
				<div className="animate-pulse-glow absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-forest-500/10 blur-3xl" />
			</div>

			{/* Dark vignette */}
			<div className="game-vignette pointer-events-none absolute inset-0 z-0" />

			{/* Navigation and music */}
			<Navbar />
			<BackgroundMusic />

			{/* Main content */}
			<div className="relative z-10">

				{/* Hero */}
				<section
					id="home"
					className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24"
				>
					<video
						autoPlay
						loop
						muted
						playsInline
						preload="metadata"
						aria-hidden="true"
						className="absolute inset-0 z-0 h-full w-full object-cover"
					>
						<source src="/images/hero-bg.mp4" type="video/mp4" />
					</video>

					<div className="absolute inset-0 z-0 bg-black/50" />

					{/* Slow orbiting rings */}
					<div aria-hidden="true" className="animate-spin-slow absolute right-[8%] top-32 z-0 hidden h-72 w-72 rounded-full border border-dashed border-silver-500/20 sm:block" />
					<div aria-hidden="true" className="animate-spin-slow-reverse absolute right-[calc(8%+4rem)] top-48 z-0 hidden h-40 w-40 rounded-full border border-forest-500/30 sm:block" />

					<div className="relative z-10 max-w-4xl">
						<div className="animate-fade-up mb-6 inline-flex items-center gap-2 rounded-full border border-silver-600/40 bg-black/40 px-4 py-2 backdrop-blur-sm">
							<span className="h-2 w-2 animate-pulse rounded-full bg-forest-500" />
							<span className="font-mono text-xs uppercase tracking-widest text-silver-300">
								3rd Year IT Student
							</span>
						</div>

						<p className="animate-fade-up mb-4 font-mono text-sm uppercase tracking-[0.25em] text-forest-400 sm:text-base">
							Full-Stack Developer
						</p>

						<h1 className="animate-fade-up delay-1 text-6xl font-bold leading-[1.05] tracking-tight sm:text-8xl">
							Karl Malone
							<em className="block font-semibold text-silver-300">
								Dela Cruz
							</em>
						</h1>

						<p className="animate-fade-up delay-2 mt-6 max-w-2xl text-lg leading-8 text-silver-300">
							I&apos;m an IT student who enjoys learning new
							technologies, and turning ideas into working projects.
						</p>

						<div className="animate-fade-up delay-3 mt-8 flex flex-wrap gap-4">
							<a
								href="#projects"
								className="rounded-lg bg-forest-600 px-6 py-3 font-medium transition hover:bg-forest-500"
							>
								View Projects
							</a>

							<a
								href="https://github.com/SAMAEL1313"
								target="_blank"
								rel="noopener noreferrer"
								className="rounded-lg border border-forest-700 px-6 py-3 font-medium transition hover:bg-forest-950"
							>
								GitHub
							</a>
						</div>
					</div>
				</section>

				{/* Other sections */}
				<About />
				<TechStack />
				<Projects />
				<Education />
				<Contact />
				<Footer />

			</div>
		</main>
	);
}