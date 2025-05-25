"use client"

import { AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import AvatarFrame from "../ui/AvatarFrame"
import BackgroundCircles from "../ui/BackgroundCircles"
import FloatingIcons from "../ui/FloatingIcons"
import HeroContent from "../ui/HeroContent"

function generateRandomRadius() {
	const r = () => Math.floor(Math.random() * 30) + 50
	return `${r()}% ${r()}% ${r()}% ${r()}% / ${r()}% ${r()}% ${r()}% ${r()}%`
}

export default function Hero() {
	const [hovered, setHovered] = useState(false)
	const [radius, setRadius] = useState(generateRandomRadius())

	useEffect(() => {
		const interval = setInterval(() => {
			setRadius(generateRandomRadius())
		}, 1500)
		return () => clearInterval(interval)
	}, [])

	return (
		<section
			id="home"
			className="relative min-h-screen flex flex-col md:flex-row items-center justify-between px-4 sm:px-12 md:px-20 bg-background text-neutral-white pt-24 overflow-hidden"
		>
			<BackgroundCircles />
			<FloatingIcons />
			<HeroContent onHoverChange={setHovered} />
			<AnimatePresence mode="wait">
				<AvatarFrame hovered={hovered} radius={radius} />
			</AnimatePresence>
		</section>
	)
}
