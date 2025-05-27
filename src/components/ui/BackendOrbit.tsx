"use client"

import { CSSProperties, ReactNode, useEffect, useState } from "react"
import {
	SiDjango,
	SiExpress,
	SiFlask,
	SiGraphql,
	SiMongodb,
	SiMysql,
	SiNodedotjs,
	SiPython,
} from "react-icons/si"
type SkillCardProps = {
	icon: ReactNode
	label: string
	style?: CSSProperties
	className?: string
	level: number
}

const skills = [
	{ icon: <SiNodedotjs />, label: "Node.js", level: 60 },
	{ icon: <SiPython />, label: "Python", level: 70 },
	{ icon: <SiExpress />, label: "Express.js", level: 55 },
	{ icon: <SiMongodb />, label: "MongoDB", level: 65 },
	{ icon: <SiGraphql />, label: "GraphQL", level: 68 },
	{ icon: <SiMysql />, label: "MySQL", level: 75 },
	{ icon: <SiFlask />, label: "Flask", level: 65 },
	{ icon: <SiDjango />, label: "Django", level: 50 },
]

function SkillCard({ icon, label, level, style, className }: SkillCardProps) {
	return (
		<div
			className={`absolute w-28 h-28 px-2 flex flex-col items-center justify-center bg-white/10 text-white rounded-xl backdrop-blur-md border border-white/20 shadow-lg transition-all duration-500 ease-in-out ${className}`}
			style={style}
		>
			<div className="text-2xl mb-1">{icon}</div>
			<span className="text-xs font-semibold text-center">{label}</span>
			<div className="w-full h-2 mt-1 bg-white/20 rounded-full overflow-hidden">
				<div
					className="h-full bg-accent-pink rounded-full transition-all duration-500"
					style={{ width: `${level}%` }}
				/>
			</div>
		</div>
	)
}

export default function BackendOrbit() {
	const [centerIndex, setCenterIndex] = useState(0)

	// ✅ Auto-increment the centerIndex every 2.5 seconds
	useEffect(() => {
		const interval = setInterval(() => {
			setCenterIndex((prev) => (prev + 1) % skills.length)
		}, 2500)

		return () => clearInterval(interval)
	}, [])

	return (
		<div className="relative w-full flex flex-col items-center mt-16">
			<div
				className="relative w-[600px] h-[200px] perspective-1000"
				style={{ perspective: "1000px" }}
			>
				{skills.map((skill, index) => {
					const visibleRange = 2
					const middle = Math.floor(visibleRange / 2)

					const offset = (index - centerIndex + skills.length) % skills.length
					const relativeOffset =
						offset <= skills.length / 2 ? offset : offset - skills.length

					let rotateY = 0
					let translateX = 0
					let opacity = 0
					let zIndex = 0
					let scale = 1

					if (Math.abs(relativeOffset) <= middle) {
						translateX = relativeOffset * 120
						rotateY = relativeOffset * 30 // degrees, like a turned card
						scale = relativeOffset === 0 ? 1 : 0.92 // center is slightly larger
						opacity = 1 - Math.abs(relativeOffset) * 0.2
						zIndex = visibleRange - Math.abs(relativeOffset)
					} else {
						opacity = 0
						zIndex = 0
					}

					const style = {
						transform: `translateX(${translateX}px) rotateY(${rotateY}deg) scale(${scale})`,
						opacity,
						zIndex,
					}

					return (
						<SkillCard
							key={index}
							icon={skill.icon}
							label={skill.label}
							style={style}
							className="left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
							level={skill.level}
						/>
					)
				})}
			</div>

			<div className="mt-8 flex gap-8 items-center justify-center">
				<button
					onClick={() =>
						setCenterIndex((prev) => (prev - 1 + skills.length) % skills.length)
					}
					aria-label="Previous skill"
					className="w-10 h-10 flex items-center justify-center border border-white text-white rounded-full hover:scale-110 transition-transform duration-300"
				>
					<svg
						className="w-4 h-4"
						viewBox="0 0 24 24"
						fill="none"
						stroke="white"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<polyline points="15 18 9 12 15 6" />
					</svg>
				</button>

				<button
					onClick={() => setCenterIndex((prev) => (prev + 1) % skills.length)}
					aria-label="Next skill"
					className="w-10 h-10 flex items-center justify-center border border-white text-white rounded-full hover:scale-110 transition-transform duration-300"
				>
					<svg
						className="w-4 h-4"
						viewBox="0 0 24 24"
						fill="none"
						stroke="white"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<polyline points="9 18 15 12 9 6" />
					</svg>
				</button>
			</div>
		</div>
	)
}
