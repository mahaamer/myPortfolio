"use client"

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
		<button
			onClick={handleClick}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			className={`text-lg px-6 py-3 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white ${
				hovered ? "bg-[#9333EA]" : "bg-[#EC4899]"
			} text-white cursor-pointer`}
			aria-label={`Scroll to ${targetId}`}
		>
			{children}
		</button>
	)
}
