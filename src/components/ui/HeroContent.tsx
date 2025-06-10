import ScrollButton from "@/components/ui/ScrollButton"
import { motion } from "framer-motion"
import { Typewriter } from "react-simple-typewriter"
import SocialLinks from "./SocialLinks"
export default function HeroContent({
	onHoverChange,
}: {
	onHoverChange: (value: boolean) => void
}) {
	return (
		<motion.div
			className="z-10 w-full md:w-1/2 mb-12 md:mb-0"
			initial={{ opacity: 0, y: -40 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8 }}
		>
			<motion.h2
				className="text-3xl md:text-6xl font-bold mb-4 text-[#ec4899]"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
			>
				Maha Amer
			</motion.h2>

			<p className="text-lg sm:text-2xl md:text-3xl font-semibold mb-4 text-pink-400 font-mono min-h-[2.5rem]">
				<Typewriter
					words={[
						"React Native Developer",
						"MERN Stack Engineer",
						"UI/UX Designer",
						"Recommender System Researcher",
					]}
					loop={0}
					cursor
					cursorStyle="|"
					typeSpeed={70}
					deleteSpeed={50}
					delaySpeed={1200}
				/>
			</p>

			<p className="text-md sm:text-lg mb-4 text-neutral-400 leading-relaxed">
				Building robust, scalable digital solutions across web and mobile
				platforms.
				<br />
				Specialized in multilingual interfaces, secure payment systems, and
				explainable AI in recommender systems.
			</p>

			<SocialLinks />

			<ScrollButton targetId="projects" onHoverChange={onHoverChange}>
				Explore My Work
			</ScrollButton>
		</motion.div>
	)
}
