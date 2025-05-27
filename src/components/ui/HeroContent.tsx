import ScrollButton from "@/components/ui/ScrollButton"
import { motion } from "framer-motion"

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
			<p className="text-xl sm:text-2xl mb-6 font-body">
				React Native & MERN Full Stack Developer
			</p>
			<ScrollButton targetId="projects" onHoverChange={onHoverChange}>
				Explore My Work
			</ScrollButton>
		</motion.div>
	)
}
