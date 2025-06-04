import About from "@/components/sections/About"
import CertificationsSection from "@/components/sections/Certifications"
import ContactSection from "@/components/sections/Contact"
import GallerySection from "@/components/sections/Gallery"
import Hero from "@/components/sections/Hero"
import ProjectsSection from "@/components/sections/Projects"
import Skills from "@/components/sections/Skills"
import TimelineSection from "@/components/sections/TimelineSection"
import ScrollToTopButton from "@/components/ui/ScrollToTopButton"

export default function Home() {
	return (
		<main>
			<Hero />
			<About />
			<Skills />
			<ProjectsSection />
			<ScrollToTopButton />
			<TimelineSection />
			<CertificationsSection />
			<GallerySection />
			<ContactSection />
		</main>
	)
}
