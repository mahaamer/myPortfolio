"use client"

import { AnimatePresence, motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import React, { useState } from "react"

interface ScrollButtonProps {
	targetId: string
	children: React.ReactNode
	onHoverChange?: (hovered: boolean) => void
}

export default function ScrollButton({
	targetId,
	children,
	onHoverChange,
}: ScrollButtonProps) {
	const [hovered, setHovered] = useState(false)

	const handleClick = () => {
		const el = document.getElementById(targetId)
		if (el) el.scrollIntoView({ behavior: "smooth" })
	}

	const handleMouseEnter = () => {
		setHovered(true)
		onHoverChange?.(true)
	}

	const handleMouseLeave = () => {
		setHovered(false)
		onHoverChange?.(false)
	}

	return (
		<motion.button
			onClick={handleClick}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			className={`relative mt-5 text-lg px-6 py-3 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white text-white cursor-pointer`}
			aria-label={`Scroll to ${targetId}`}
			initial={false}
			whileHover={{ y: -10 }} // slight jump
			style={{
				backgroundColor: hovered ? "#9333EA" : "#EC4899",
			}}
		>
			{children}
			<AnimatePresence>
				{hovered && (
					<motion.div
						className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 flex flex-col items-center space-y-1"
						initial="hidden"
						animate="visible"
						exit="hidden"
						variants={{
							hidden: { opacity: 0, y: -10 },
							visible: { opacity: 1, y: 0 },
						}}
						transition={{ staggerChildren: 0.1 }}
					>
						{[0, 1, 2].map((i) => (
							<motion.div
								key={i}
								variants={{
									hidden: { opacity: 0, y: -5 },
									visible: { opacity: 1, y: 0 },
								}}
								transition={{ duration: 0.3, delay: i * 0.1 }}
							>
								<ChevronDown className="w-4 h-4 text-white" />
							</motion.div>
						))}
					</motion.div>
				)}
			</AnimatePresence>
		</motion.button>
	)
}
