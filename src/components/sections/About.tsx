"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function About() {
	return (
		<section
			id="about"
			className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-10 py-14 gap-y-15 gap-x-40 bg-background text-neutral-white"
		>
			{/* Background blur circle */}
			<motion.div
				className="absolute w-[20rem] h-[20rem] bg-accent-violet40 rounded-full blur-[100px] top-[-6rem] left-[-5rem] z-0"
				animate={{ x: [0, 30, 0], y: [0, 50, 0] }}
				transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
			/>

			{/* Left Text Content */}
			<motion.div
				className="flex-1 space-y-6 z-10"
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, delay: 0.2 }}
				viewport={{ once: true }}
			>
				<div className="max-w-[600px] text-lg md:text-xl leading-relaxed">
					<h2 className="text-3xl md:text-4xl font-bold text-accent-pink mb-4">
						About Me
					</h2>
					<p className="text-neutral-slate">
						I am Maha Amer, a React Native and MERN full-stack developer
						passionate about building elegant and performant user interfaces. I
						love blending design with logic to create inclusive, accessible web
						experiences that feel delightful.
					</p>
					<motion.div
						whileHover="hovered"
						whileTap="hovered"
						className="relative inline-flex mt-6"
						variants={{
							hovered: {
								scale: [1, 1.05, 1],
								transition: {
									duration: 1.5,
									repeat: Infinity,
									ease: "easeInOut",
								},
							},
						}}
					>
						{/* Animated border frame */}
						<motion.div
							className="absolute inset-0 rounded-full border-8 border-violet-500 z-0"
							variants={{
								hovered: {
									opacity: 1,
									scale: [1, 1.1, 1],
									transition: {
										duration: 1.5,
										repeat: Infinity,
										ease: "easeInOut",
									},
								},
							}}
							initial={{ opacity: 0 }}
						/>

						{/* Animated button itself */}
						<motion.a
							href="/Maha_Amer_Frontend_Fullstack_CV_2025.pdf"
							download
							className="relative z-10 px-6 py-3 md:px-8 md:py-3 text-sm md:text-base rounded-full bg-accent-violet hover:bg-accent-pink text-white font-semibold transition-colors"
							variants={{
								hovered: {
									scale: [1, 1.05, 1],
									transition: {
										duration: 1.5,
										repeat: Infinity,
										ease: "easeInOut",
									},
								},
							}}
							initial={{ scale: 1 }}
						>
							Download CV
						</motion.a>
					</motion.div>
				</div>
			</motion.div>

			{/* Cartoon Avatar + Arrows */}
			<motion.div
				className="relative w-full max-w-[250px] md:max-w-[290px] h-auto flex flex-col items-center justify-end z-10"
				initial={{ opacity: 0, x: -40 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.6 }}
				viewport={{ once: true }}
			>
				{/* Solid Shadow under Avatar */}
				<motion.div
					className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 w-40 h-6 bg-pink-500 rounded-full z-10 blur-xl opacity-90"
					animate={{ y: [0, -5, 0] }}
					transition={{
						duration: 1,
						repeat: Infinity,
						repeatType: "loop",
						ease: "easeInOut",
					}}
				/>

				{/* Animated Arrows */}
				<div className="hidden md:block absolute inset-0 z-20">
					{/* Arrow 1 */}
					<motion.div
						className="absolute top-[38%] right-[18%] flex items-center gap-2"
						animate={{
							opacity: [0, 1, 1, 0],
							x: [0, -120, -120, 0],
							y: [0, -60, -60, 0],
						}}
						transition={{
							duration: 5,
							repeat: Infinity,
							ease: "easeInOut",
							times: [0, 0.2, 0.8, 1],
							delay: 0,
						}}
					>
						<div className="px-3 py-1 rounded-md bg-pink-600 text-white text-sm shadow-md">
							UI/UX Designer
						</div>
						<div className="h-[2px] flex-1 min-w-[30px] border-dotted border-t-2 border-pink-500" />
					</motion.div>

					{/* Arrow 2 */}
					<motion.div
						className="absolute top-[40%] right-[7%] flex items-center gap-2"
						animate={{
							opacity: [0, 1, 1, 0],
							x: [0, -140, -140, 0],
							y: [0, 20, 20, 0],
						}}
						transition={{
							duration: 5,
							repeat: Infinity,
							ease: "easeInOut",
							times: [0, 0.2, 0.8, 1],
							delay: 1.5,
						}}
					>
						<div className="px-3 py-1 rounded-md bg-indigo-600 text-white text-sm shadow-md">
							React Native Developer
						</div>
						<div className="h-[2px] flex-1 min-w-[30px] border-dotted border-t-2 border-indigo-500" />
					</motion.div>

					{/* Arrow 3 */}
					<motion.div
						className="absolute top-[55%] right-[10%] flex items-center gap-2"
						animate={{
							opacity: [0, 1, 1, 0],
							x: [0, -150, -150, 0],
							y: [0, 80, 80, 0],
						}}
						transition={{
							duration: 5,
							repeat: Infinity,
							ease: "easeInOut",
							times: [0, 0.2, 0.8, 1],
							delay: 3,
						}}
					>
						<div className="px-3 py-1 rounded-md bg-green-600 text-white text-sm shadow-md">
							Full-Stack MERN Developer
						</div>
						<div className="h-[2px] flex-1 min-w-[30px] border-dotted border-t-2 border-green-500" />
					</motion.div>
				</div>

				{/* Avatar Image */}
				<div className="relative z-30">
					<Image
						src="/maha-about.png"
						alt="Maha Amer cartoon avatar"
						width={300}
						height={365}
						className="object-contain"
					/>
				</div>
			</motion.div>
		</section>
	)
}
