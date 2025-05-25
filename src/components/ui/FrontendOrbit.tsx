"use client"

import { useState } from "react"
import {
	SiCreatereactapp,
	SiCss3,
	SiHtml5,
	SiJavascript,
	SiReact,
	SiRedux,
	SiTailwindcss,
} from "react-icons/si"

const skills = [
	{ icon: <SiHtml5 />, label: "HTML" },
	{ icon: <SiCss3 />, label: "CSS" },
	{ icon: <SiJavascript />, label: "JavaScript" },
	{ icon: <SiReact />, label: "React" },
	{ icon: <SiRedux />, label: "Redux" },
	{ icon: <SiTailwindcss />, label: "Tailwind" },
	{ icon: <SiCreatereactapp />, label: "ReactNative" },
]

function SkillCard({ icon, label, style, className }: any) {
	return (
		<div
			className={`absolute w-28 h-28 flex flex-col items-center justify-center bg-white/10 text-white rounded-xl backdrop-blur-md border border-white/20 shadow-lg transition-all duration-500 ease-in-out ${className}`}
			style={style}
		>
			<div className="text-2xl mb-1">{icon}</div>
			<span className="text-xs font-semibold text-center">{label}</span>
		</div>
	)
}

export default function FrontendOrbit() {
	const [centerIndex, setCenterIndex] = useState(0)

	const handleNext = () => setCenterIndex((prev) => (prev + 1) % skills.length)
	const handlePrev = () =>
		setCenterIndex((prev) => (prev - 1 + skills.length) % skills.length)

	return (
		<div className="relative w-full flex flex-col items-center mt-16">
			<div
				className="relative w-[600px] h-[200px] perspective-1000"
				style={{ perspective: "1000px" }}
			>
				{skills.map((skill, index) => {
					const offset = (index - centerIndex + skills.length) % skills.length
					let angle = 0
					let translateZ = 0
					let translateX = 0
					let opacity = 0
					let zIndex = 0

					if (offset === 0) {
						angle = 0
						translateZ = 200
						opacity = 1
						zIndex = 3
					} else if (offset === 1 || offset === skills.length - 1) {
						angle = offset === 1 ? -40 : 40
						translateZ = 100
						translateX = offset === 1 ? -100 : 100
						opacity = 0.8
						zIndex = 2
					} else {
						angle = offset < skills.length / 2 ? -60 : 60
						translateZ = 0
						translateX = offset < skills.length / 2 ? -180 : 180
						opacity = 0
						zIndex = 0
					}

					const style = {
						transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${angle}deg)`,
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
						/>
					)
				})}
			</div>

			<div className="mt-6 flex gap-4">
				<button
					onClick={handlePrev}
					className="px-4 py-2 bg-accent-pink text-white rounded-full hover:bg-accent-violet transition"
				>
					◀
				</button>
				<button
					onClick={handleNext}
					className="px-4 py-2 bg-accent-pink text-white rounded-full hover:bg-accent-violet transition"
				>
					▶
				</button>
			</div>
		</div>
	)
}
