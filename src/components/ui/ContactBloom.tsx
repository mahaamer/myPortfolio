"use client"

import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa"

const petals = [
	{
		icon: <FaPhone />,
		label: "Call",
		href: "tel:+0201003765461",
		style: "top-[-100px] left-0",
	},
	{
		icon: <FaEnvelope />,
		label: "Email",
		href: "mailto:mahaamer11998@gmail.com",
		style: "top-[-60px] left-[60px]",
	},
	{
		icon: <FaLinkedin />,
		label: "LinkedIn",
		href: "https://linkedin.com/in/mahaamer",
		style: "top-[60px] left-[60px]",
	},
	{
		icon: <FaGithub />,
		label: "GitHub",
		href: "https://github.com/mahaamer",
		style: "top-[100px] left-0",
	},
]

export default function ContactBloom() {
	const [open, setOpen] = useState(false)
	const [offset, setOffset] = useState({ x: 0, y: 0 })

	useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY
			const newY = scrollY * 0.1
			const newX = Math.sin(scrollY * 0.01) * 20
			setOffset({ x: newX, y: newY })
		}
		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	return (
		<motion.div
			className="fixed bottom-6 right-6 z-50"
			animate={{ x: offset.x, y: offset.y }}
			transition={{ type: "spring", stiffness: 40, damping: 20 }}
		>
			<div className="relative w-16 h-16">
				<motion.button
					onClick={() => setOpen(!open)}
					className="contact-button"
					initial={{ scale: 0.9 }}
					animate={{ scale: 1 }}
					whileTap={{ scale: 0.95 }}
				>
					📞
				</motion.button>

				<AnimatePresence>
					{open &&
						petals.map((petal, index) => (
							<motion.a
								key={index}
								href={petal.href}
								target="_blank"
								rel="noopener noreferrer"
								initial={{ scale: 0, opacity: 0 }}
								animate={{ scale: 1, opacity: 1 }}
								exit={{ scale: 0, opacity: 0 }}
								transition={{
									delay: index * 0.05,
									type: "spring",
									stiffness: 200,
								}}
								className={`absolute w-12 h-12 ${petal.style} bg-white/10 backdrop-blur-xl border border-white/30 ring-1 ring-white/10 ring-inset rounded-full flex items-center justify-center text-white hover:bg-accent-pink hover:ring-accent-pink/40 transition-all`}
								aria-label={petal.label}
							>
								{petal.icon}
							</motion.a>
						))}
				</AnimatePresence>
			</div>
		</motion.div>
	)
}
