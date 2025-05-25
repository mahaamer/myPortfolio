import { motion } from "framer-motion"
import Image from "next/image"

const icons = [
	{ src: "/icons/react.png", className: "top-35 left-10", dir: -20, dur: 3 },
	{
		src: "/icons/mongodb.png",
		className: "top-40 right-20",
		dir: 20,
		dur: 2.5,
	},
	{
		src: "/icons/twilandcss.png",
		className: "bottom-32 left-28",
		dir: -15,
		dur: 3.5,
	},
	{ src: "/icons/node.png", className: "bottom-7 right-32", dir: 15, dur: 4 },
]

export default function FloatingIcons() {
	return (
		<div className="hidden md:block absolute z-0 w-full h-full top-0 left-0 pointer-events-none">
			{icons.map((icon, i) => (
				<motion.span
					key={i}
					className={`absolute ${icon.className}`}
					animate={{ y: [0, icon.dir, 0] }}
					transition={{
						repeat: Infinity,
						duration: icon.dur,
						ease: "easeInOut",
					}}
				>
					<Image
						src={icon.src}
						alt="Tech icon"
						width={48}
						height={48}
						className="drop-shadow-lg rounded-full brightness-125"
					/>
				</motion.span>
			))}
			<motion.span
				className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
				animate={{ rotate: [0, 360] }}
				transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
			>
				<Image
					src="/icons/typescript.png"
					alt="TypeScript icon"
					width={48}
					height={48}
					className="drop-shadow-lg rounded-full brightness-125"
				/>
			</motion.span>
		</div>
	)
}
