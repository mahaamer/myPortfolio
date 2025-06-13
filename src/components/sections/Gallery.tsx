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
		title: "Graduatioon party",
		description:
			"Received my graduation certificate with 3rd honors in my class.",
	},
	{
		src: "/images/2.jpeg",
		title: "Team Gathering – Noury",
		description:
			"Spent the day touring Egypt with Noury's Swiss team including our CTO and UI/UX designer during their visit to our local office.",
	},
	{
		src: "/images/3.jpeg",
		title: "3D Printer Demo",
		description:
			"Completed the implementation of our graduation project's 3D printer and created our first printed product.",
	},
	{
		src: "/images/5.jpeg",
		title: "Graduation Project Presentation",
		description:
			"Presented our final graduation project and showcased our products from 3d printer.",
	},
	{
		src: "/images/6.jpeg",
		title: "Meeting Dr. Heba Saleh",
		description:
			"Presented my ITI journey and success story during an official event attended by Dr. Heba Saleh, President of ITI.",
	},
	{
		src: "/images/7.jpeg",
		title: "Noury Welcome Gift",
		description:
			"Received a welcome gift after being accepted as an intern at Noury.",
	},
	{
		src: "/images/8.jpeg",
		title: "Meeting Minister Dr. Amr Talaat",
		description:
			"Met the Minister of Communications during his visit to our Menoufia branch (Creativa), where he observed our freelance work and startup projects.",
	},
	{
		src: "/images/9.jpeg",
		title: "Noury Photoshoot",
		description:
			"Participated in an official photoshoot after joining Noury to have our team photos featured on the company website.",
	},
	{
		src: "/images/10.jpeg",
		title: "Noury App Launch Celebration",
		description:
			"Celebrated the successful production launch of the Noury app with our CTO and teammates.",
	},

	{
		src: "/images/11.jpeg",
		title: "ITI MERN Track Wrap-up",
		description:
			"Presented our final project after completing 4 months of MERN training at ITI, alongside our supervisor Eng. Sara Atef.",
	},
	{
		src: "/images/12.jpeg",
		title: "Receiving My ITI Certificate",
		description:
			"Collected my ITI certification after completing the training and freelance project successfully.",
	},
	{
		src: "/images/13.jpeg",
		title: "RemoteCoders Office Day",
		description:
			"Took team photos during a collaboration day with our Swiss partner companies at the RemoteCoders office.",
	},
	{
		src: "/images/14.jpeg",
		title: "Team Planning with Noury",
		description:
			"Collaborated and discussed upcoming tasks with the Noury team during their visit to our RemoteCoders office.",
	},
]

const imageHeights = ["h-48", "h-64", "h-72", "h-80", "h-96"]

export default function GallerySection() {
	const [selected, setSelected] = useState<GalleryItem | null>(null)

	const getRandomHeight = () =>
		imageHeights[Math.floor(Math.random() * imageHeights.length)]

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

			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
				{galleryItems.map((item, index) => {
					const heightClass = getRandomHeight()
					return (
						<motion.div
							key={index}
							initial={{ opacity: 0, scale: 0.95 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.4, delay: index * 0.1 }}
							className="cursor-pointer group overflow-hidden rounded-xl bg-white/5 shadow hover:shadow-xl transition-all"
							onClick={() => setSelected(item)}
						>
							<div className="relative aspect-[4/3] overflow-hidden">
								<img
									src={item.src}
									alt={item.title}
									className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
								/>
								<div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-sm font-semibold transition-opacity duration-300">
									Click to Preview
								</div>
							</div>
							<div className="p-2 text-xs sm:text-sm text-center text-gray-300 line-clamp-2">
								{item.title}
							</div>
						</motion.div>
					)
				})}
			</div>

			{/* Modal */}
			{selected && (
				<div
					className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
					onClick={() => setSelected(null)}
				>
					<div
						className="bg-slate-900 max-w-lg w-full rounded-xl p-6 text-center relative"
						onClick={(e) => e.stopPropagation()} // prevent modal from closing on inner click
					>
						{/* Close Button */}
						<button
							onClick={() => setSelected(null)}
							className="absolute top-2 right-4 text-white text-2xl hover:text-pink-500 cursor-pointer"
						>
							&times;
						</button>

						{/* Navigation Buttons */}
						<button
							className="absolute left-2 top-1/2 -translate-y-1/2 text-white text-3xl hover:text-pink-400 cursor-pointer"
							onClick={(e) => {
								e.stopPropagation()
								const currentIndex = galleryItems.findIndex(
									(i) => i.src === selected.src
								)
								const prev =
									(currentIndex - 1 + galleryItems.length) % galleryItems.length
								setSelected(galleryItems[prev])
							}}
						>
							&#8592;
						</button>
						<button
							className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-3xl hover:text-pink-400 cursor-pointer"
							onClick={(e) => {
								e.stopPropagation()
								const currentIndex = galleryItems.findIndex(
									(i) => i.src === selected.src
								)
								const next = (currentIndex + 1) % galleryItems.length
								setSelected(galleryItems[next])
							}}
						>
							&#8594;
						</button>

						{/* Image & Description */}
						<img
							src={selected.src}
							alt={selected.title}
							className="rounded-xl mb-4 max-h-[60vh] mx-auto object-contain"
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
