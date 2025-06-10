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
					<motion.h2
						className="text-3xl md:text-5xl font-bold mb-4 text-[#ec4899]"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
					>
						About Me
					</motion.h2>

					<motion.p
						className="text-sm sm:text-base text-neutral-400 leading-relaxed"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
					>
						I am Maha Amer, a React Native and MERN full-stack developer
						passionate about building elegant and performant user interfaces. I
						love blending design with logic to create inclusive, accessible web
						experiences that feel delightful.
					</motion.p>

					<motion.p
						className="text-sm sm:text-base text-neutral-400 leading-relaxed mt-3"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
					>
						Over the past 1.5 years, I've delivered cross-platform apps and
						dashboards for international clients, specializing in QR-code
						onboarding, multilingual UX, and secure payment systems. I'm
						currently pursuing a Master's in AI, focused on explainable
						transformer-based recommender systems—blending engineering with
						research to build intelligent, user-centric platforms.
					</motion.p>
					{/* Keywords */}
					{/* Professional Skills */}
					<motion.div
						className="flex flex-wrap gap-2 mt-6 text-sm text-neutral-300 font-medium"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ delay: 0.3, duration: 0.6 }}
					>
						<span className="px-3 py-1 bg-neutral-800 rounded-full">
							React Native Development
						</span>
						<span className="px-3 py-1 bg-neutral-800 rounded-full">
							Full-Stack Web (MERN)
						</span>
						<span className="px-3 py-1 bg-neutral-800 rounded-full">
							TypeScript & ES6+
						</span>
						<span className="px-3 py-1 bg-neutral-800 rounded-full">
							GraphQL & REST APIs
						</span>
						<span className="px-3 py-1 bg-neutral-800 rounded-full">
							i18n & Localization
						</span>
						<span className="px-3 py-1 bg-neutral-800 rounded-full">
							Tokenized Payment Integration
						</span>
						<span className="px-3 py-1 bg-neutral-800 rounded-full">
							Firebase Auth & Onboarding
						</span>
						<span className="px-3 py-1 bg-neutral-800 rounded-full">
							Redux Toolkit & React Navigation
						</span>
						<span className="px-3 py-1 bg-neutral-800 rounded-full">
							UI/UX Prototyping
						</span>
						<span className="px-3 py-1 bg-neutral-800 rounded-full">
							Explainable AI & Recommender Systems
						</span>
						<span className="px-3 py-1 bg-neutral-800 rounded-full">
							AWS Cloud Services
						</span>
						<span className="px-3 py-1 bg-neutral-800 rounded-full">
							Agile & Technical Documentation
						</span>
					</motion.div>

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
