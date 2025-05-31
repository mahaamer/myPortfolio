import About from "@/components/sections/About"
import Hero from "@/components/sections/Hero"
import ProjectsSection from "@/components/sections/Projects"
import Skills from "@/components/sections/Skills"

export default function Home() {
	return (
		<main>
			<Hero />
			<About />
			<Skills />
			<ProjectsSection />
			{/* <Projects />
			<Experience />
			<CertificationsSection />
			<Contact /> */}
		</main>
	)
}
