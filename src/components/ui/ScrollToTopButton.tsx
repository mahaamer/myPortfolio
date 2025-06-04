"use client"

import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"
import {
	FaArrowUp,
	FaEnvelope,
	FaGithub,
	FaLinkedin,
	FaWhatsapp,
} from "react-icons/fa"

export default function ScrollToTopButton() {
	const [isVisible, setIsVisible] = useState(false)
	const [isHovered, setIsHovered] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			const heroHeight = document.getElementById("hero")?.offsetHeight || 300
			setIsVisible(window.scrollY > heroHeight)
		}

		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	const scrollToHome = () => {
		document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })
	}

	return (
		<AnimatePresence>
			{isVisible && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.3 }}
					className="fixed bottom-6 right-6 z-50"
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}
				>
					{/* Hover Panel */}
					<AnimatePresence>
						{isHovered && (
							<motion.div
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: 10 }}
								transition={{ duration: 0.25 }}
								className="absolute bottom-16 right-0 bg-slate-800/90 backdrop-blur-sm rounded-full px-4 py-2 flex gap-4 items-center border border-slate-600 shadow-xl"
							>
								<a
									href="https://wa.me/yourNumber"
									target="_blank"
									title="WhatsApp"
								>
									<FaWhatsapp className="text-green-500 text-xl hover:scale-110 transition" />
								</a>
								<a
									href="https://linkedin.com/in/mahaamer"
									target="_blank"
									title="LinkedIn"
								>
									<FaLinkedin className="text-blue-500 text-xl hover:scale-110 transition" />
								</a>
								<a href="mailto:mahaamer11998@gmail.com" title="Email">
									<FaEnvelope className="text-pink-500 text-xl hover:scale-110 transition" />
								</a>
								<a
									href="https://github.com/mahaamer"
									target="_blank"
									title="GitHub"
								>
									<FaGithub className="text-white text-xl hover:scale-110 transition" />
								</a>
							</motion.div>
						)}
					</AnimatePresence>

					{/* Main Button */}
					<motion.button
						onClick={scrollToHome}
						title="Scroll to Top"
						aria-label="Scroll to Home"
						whileHover={{ scale: 1.1 }}
						className="relative bg-pink-600 hover:bg-pink-700 p-4 rounded-full text-white shadow-xl"
					>
						<span className="absolute inset-0 animate-ping rounded-full bg-pink-400 opacity-30 z-[-1]" />
						<FaArrowUp className="text-xl z-10 relative" />
					</motion.button>
				</motion.div>
			)}
		</AnimatePresence>
	)
}
