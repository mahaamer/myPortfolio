"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function About() {
	return (
		<section
			id="about"
			className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-20 gap-10 bg-background text-neutral-white"
		>
			{/* Cartoon Avatar */}
			<motion.div
				className="relative w-[260px] h-[320px] md:w-[300px] md:h-[360px] rounded-[100px] overflow-hidden border-4 border-accent-pink shadow-lg"
				initial={{ opacity: 0, x: -40 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.6 }}
				viewport={{ once: true }}
			>
				<Image
					src="/maha-about.png"
					alt="Maha Amer cartoon avatar working on laptop"
					fill
					className="object-cover"
				/>
			</motion.div>

			{/* About Content */}
			<motion.div
				className="flex-1 space-y-6"
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, delay: 0.2 }}
				viewport={{ once: true }}
			>
				<h2 className="text-3xl md:text-4xl font-bold text-accent-pink">
					About Me
				</h2>
				<p className="text-lg leading-relaxed text-neutral-slate">
					I am Maha Amer, a React Native and MERN full-stack developer
					passionate about building elegant and performant user interfaces. I
					love blending design with logic to create inclusive, accessible web
					experiences that feel delightful.
				</p>
				<a
					href="/Maha_Amer_Frontend_Fullstack_CV_2025.pdf"
					download
					className="inline-block px-6 py-3 rounded-full bg-accent-violet hover:bg-accent-pink text-white font-semibold transition-colors"
				>
					Download CV
				</a>
			</motion.div>
		</section>
	)
}
