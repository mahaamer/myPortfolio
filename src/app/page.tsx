import About from "@/components/sections/About"
import Hero from "@/components/sections/Hero"
import ProjectsSection from "@/components/sections/Projects"
import Skills from "@/components/sections/Skills"
import TimelineSection from "@/components/sections/TimelineSection"

export default function Home() {
	return (
		<main>
			<Hero />
			<About />
			<Skills />
			<ProjectsSection />

			<TimelineSection />
			{/* <CertificationsSection />
			<Contact /> */}
		</main>
	)
}
