"use client"
import ScrollButton from "@/components/ui/ScrollButton"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

export default function Hero() {
	const [hovered, setHovered] = useState(false)
	return (
		<section
			id="home"
			className="relative min-h-screen flex flex-col md:flex-row items-center justify-between px-4 sm:px-12 md:px-20 bg-background text-neutral-white pt-24 overflow-hidden"
		>
			<motion.div
				className="absolute w-[20rem] h-[20rem] bg-accent-pink40 rounded-full blur-[100px] top-[-6rem] left-[-5rem] "
				animate={{ x: [0, 30, 0], y: [0, 50, 0] }}
				transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
			/>

			<motion.div
				className="absolute w-[25rem] h-[25rem] bg-accent-violet40 rounded-full blur-[120px] top-[10rem] right-[-8rem] "
				animate={{ x: [0, -40, 0], y: [0, -60, 0] }}
				transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
			/>

			<motion.div
				className="absolute w-[22rem] h-[22rem] bg-accent-slate40 rounded-full blur-[90px] bottom-[-6rem] left-[20%] "
				animate={{ x: [0, 20, -20, 0], y: [0, -30, 30, 0] }}
				transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
			/>
			{/* Animated Floating Tech Icons */}
			<div className="absolute z-0 w-full h-full top-0 left-0 pointer-events-none">
				<motion.span
					className="absolute top-16 left-10 text-accent-pink text-4xl"
					animate={{ y: [0, -20, 0] }}
					transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
				>
					<Image
						src="/icons/react.png"
						alt="React Icon"
						width={48}
						height={48}
						className="drop-shadow-lg rounded-full  brightness-125 drop-shadow-*"
					/>
				</motion.span>
				<motion.span
					className="absolute top-40 right-20 text-accent-violet text-3xl"
					animate={{ y: [0, 20, 0] }}
					transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
				>
					<Image
						src="/icons/mongodb.png"
						alt="React Icon"
						width={48}
						height={48}
						className="drop-shadow-lg rounded-full  brightness-125 drop-shadow-*"
					/>
				</motion.span>
				<motion.span
					className="absolute bottom-32 left-28 text-accent-pink text-3xl"
					animate={{ y: [0, -15, 0] }}
					transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
				>
					<Image
						src="/icons/twilandcss.png"
						alt="React Icon"
						width={48}
						height={48}
						className="drop-shadow-lg rounded-full  brightness-125 drop-shadow-*"
					/>
				</motion.span>
				<motion.span
					className="absolute bottom-20 right-32 text-accent-violet text-3xl"
					animate={{ y: [0, 15, 0] }}
					transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
				>
					<Image
						src="/icons/node.png"
						alt="React Icon"
						width={48}
						height={48}
						className="drop-shadow-lg rounded-full  brightness-125 drop-shadow-*"
					/>
				</motion.span>
				<motion.span
					className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-accent-pink text-3xl"
					animate={{ rotate: [0, 360] }}
					transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
				>
					<Image
						src="/icons/typescript.png"
						alt="React Icon"
						width={48}
						height={48}
						className="drop-shadow-lg rounded-full  brightness-125 drop-shadow-*"
					/>
				</motion.span>
			</div>

			{/* Left Side - Text Content */}
			<motion.div
				className="z-10 w-full md:w-1/2 mb-12 md:mb-0"
				initial={{ opacity: 0, y: -40 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
			>
				<h1 className="text-4xl font-bold font-sans">Maha Amer</h1>
				<p className="text-xl sm:text-2xl mb-6 font-body">
					React Native & MERN Full Stack Developer
				</p>

				<ScrollButton targetId="projects" onHoverChange={setHovered}>
					Explore My Work
				</ScrollButton>
			</motion.div>

			{/* Right Side - Avatar */}
			<AnimatePresence mode="wait">
				<motion.div
					className="relative w-[260px] h-[350px] rounded-[90px]  overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] border-4 border-accent-violet"
					role="img"
					aria-label="Cartoon avatar of Maha Amer"
				>
					{/* Default Image */}
					<motion.img
						src="/maha-hero.png"
						alt="Maha Amer default"
						className="absolute inset-0 w-full h-full object-cover"
						initial={{ opacity: 1 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.2 }}
					/>

					{/* Hover Image */}
					<motion.img
						src="/maha-hero-hover.png"
						alt="Maha Amer smiling"
						className="absolute inset-0 w-full h-full object-cover pointer-events-none"
						initial={{ opacity: 0 }}
						animate={{ opacity: hovered ? 1 : 0 }}
						transition={{ duration: 0.2 }}
					/>
				</motion.div>
			</AnimatePresence>
		</section>
	)
}
