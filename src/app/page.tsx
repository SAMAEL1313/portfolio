import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import BackgroundMusic from "@/components/BackgroundMusic";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
	return (
		<main className="game-grid relative min-h-screen overflow-hidden text-white">

			{/* Background glow */}
			<div className="pointer-events-none absolute inset-0 overflow-hidden">
				<div className="animate-pulse-glow absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-green-500/10 blur-3xl" />
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
						className="absolute inset-0 z-0 h-full w-full object-cover"
					>
						<source src="/images/hero-bg.mp4" type="video/mp4" />
					</video>

					<div className="absolute inset-0 z-0 bg-black/50" />

					<div className="relative z-10 max-w-4xl">
						<p className="animate-fade-up mt-6 max-w-2xl text-lg leading-8 text-green-400">
							3rd Year IT Student • Full-Stack Developer
						</p>

						<h1 className="animate-fade-up text-5xl font-bold tracking-tight sm:text-7xl">
							Karl Malone
							<span className="block text-green-500">
								Dela Cruz
							</span>
						</h1>

						<p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
							I&apos;m an IT student who enjoys Vibe Coding, learning new
							technologies, and turning ideas into working projects.
						</p>

						<div className="animate-fade-up mt-8 flex gap-4">
							<a
							href="#projects"
								className="rounded-lg bg-green-600 px-6 py-3 font-medium transition hover:bg-green-500"
							>
								View Projects
							</a>

							<a
								href="https://github.com/SAMAEL1313"
								target="_blank"
								rel="noopener noreferrer"
								className="rounded-lg border border-green-700 px-6 py-3 font-medium transition hover:bg-green-950"
							>
								GitHub
							</a>
						</div>
					</div>
				</section>

				{/* Other sections */}
				<About />
				<Skills />
				<Projects />
				<Education />
				<Contact />

			</div>
		</main>
	);
}