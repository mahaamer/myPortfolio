"use client"
import { motion } from "framer-motion"
import { useState } from "react"

type GalleryItem = {
	src: string
	title: string
	description: string
}

const galleryItems = [
	{
		src: "/images/1.jpg",
		title: "My First Freelance App",
		description: "Launched my first cross-platform app using React Native.",
	},
	{
		src: "/images/2.jpeg",
		title: "Winning XYZ Hackathon",
		description: "Built a full-stack AI-powered app in 24 hours.",
	},
	{
		src: "/images/3.jpeg",
		title: "Conference Speaker",
		description: "Spoke at a developer summit about modern UI/UX.",
	},
	{
		src: "/images/4.jpg",
		title: "Internship Project",
		description: "Designed the dashboard for a fintech startup.",
	},
	{
		src: "/images/5.jpeg",
		title: "Portfolio v1 Launch",
		description: "Published my first web portfolio using Next.js.",
	},
	{
		src: "/images/6.jpeg",
		title: "Portfolio v1 Launch",
		description: "Published my first web portfolio using Next.js.",
	},
	{
		src: "/images/7.jpeg",
		title: "Portfolio v1 Launch",
		description: "Published my first web portfolio using Next.js.",
	},
	{
		src: "/images/8.jpeg",
		title: "Portfolio v1 Launch",
		description: "Published my first web portfolio using Next.js.",
	},
	{
		src: "/images/9.jpeg",
		title: "Portfolio v1 Launch",
		description: "Published mxxy first web portfolio using Next.js.",
	},
	{
		src: "/images/10.jpeg",
		title: "Portfolio v1 Launch",
		description: "Published my first web portfolio using Next.js.",
	},
]

export default function GallerySection() {
	const [selected, setSelected] = useState<GalleryItem | null>(null)

	return (
		<section id="gallery" className="bg-[#0f172a] text-white py-20 px-4">
			<motion.h2
				className="text-4xl md:text-5xl font-bold text-pink-500 mb-12 text-center"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
			>
				Moments I'm Proud Of
			</motion.h2>

			<div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4 max-w-6xl mx-auto">
				{galleryItems.map((item, index) => (
					<motion.div
						key={index}
						initial={{ opacity: 0, scale: 0.9 }}
						whileInView={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.4, delay: index * 0.1 }}
						className="break-inside-avoid cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition duration-300 bg-white/5"
						onClick={() => setSelected(item)}
					>
						<img
							src={item.src}
							alt={item.title}
							className="w-full h-auto rounded-xl"
						/>
						<div className="p-3 text-sm text-center text-gray-300">
							{item.title}
						</div>
					</motion.div>
				))}
			</div>

			{/* Modal */}
			{selected && (
				<div
					className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
					onClick={() => setSelected(null)}
				>
					<div className="bg-slate-900 max-w-lg w-full rounded-xl p-6 text-center relative">
						<button
							onClick={() => setSelected(null)}
							className="absolute top-2 right-4 text-white text-2xl hover:text-pink-500"
						>
							&times;
						</button>
						<img
							src={selected.src}
							alt={selected.title}
							className="rounded-xl mb-4"
						/>
						<h3 className="text-xl font-semibold text-white mb-2">
							{selected.title}
						</h3>
						<p className="text-gray-400">{selected.description}</p>
					</div>
				</div>
			)}
		</section>
	)
}
