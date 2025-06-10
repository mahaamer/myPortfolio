"use client"

import { motion, useAnimation } from "framer-motion"
import { useEffect, useState } from "react"

// Your certifications data
const originalCerts = [
	{
		title: "University Graduation Certificate",
		org: "Faculty of Engineering – Menoufia University",
		date: "Issued July 2022",
		skills: [
			"Electrical Engineering",
			"Computer Engineering",
			"GPA 3.03 (Very Good)",
		],
		image: "/certs/graduation-cert-maha.jpeg",
	},
	{
		title: "Internship Certificate – Noury AG",
		org: "Noury AG, Switzerland",
		date: "Issued Aug 2023",
		skills: ["React Native", "Redux", "Python Django", "Scrum", "UI/UX"],
		image: "/certs/noury-internship.jpg",
	},
	{
		title: "Noury SuperIntern Poster",
		org: "Noury AG – Celebration Poster",
		date: "Created Aug 2023",
		skills: ["Teamwork", "Frontend", "Fullstack", "DevOps", "UI/UX"],
		image: "/certs/noury-superinterns.jpg",
	},
	{
		title: "The Complete Full-Stack Web Development Bootcamp",
		org: "Udemy",
		date: "Issued Mar 2025",
		skills: ["MERN Stack", "PostgreSQL", "NFTs"],
		image: "/certs/udemy-fullstack.jpg",
	},
	{
		title: "CSS (Basic) Certificate of Accomplishment",
		org: "HackerRank",
		date: "Issued Jan 2025",
		skills: ["CSS"],
		image: "/certs/css-hackerrank.jpg",
	},
	{
		title: "Thinking and Creating with Code",
		org: "EPFL Extension School",
		date: "Issued Apr 2023",
		skills: ["Creativity with Code"],
		image: "/certs/EPFL-EXTENTION.jpg",
	},
	{
		title: "Web Design",
		org: "NTI",
		date: "Issued Jul 2022",
		skills: ["HTML", "CSS"],
		image: "/certs/NTI-certifcation.jpg",
	},
	{
		title: "Full Stack Web Development using MEARN",
		org: "ITI",
		date: "Issued Jul 2022 · Expired Nov 2022",
		skills: ["MERN Stack"],
		image: "/certs/it-certifaction.jpg",
	},
]

export default function CertificationsSection() {
	const [selectedCert, setSelectedCert] = useState<string | null>(null)
	const setIsHovered = useState(false)[1]

	const controls = useAnimation()

	const loopedCerts = [...originalCerts, ...originalCerts] // smooth infinite scroll

	const variants = {
		scroll: {
			x: ["0%", "-50%"],
			transition: {
				duration: 30,
				ease: "linear",
				repeat: Infinity,
			},
		},
		stop: {
			transition: { duration: 0 },
		},
	}

	useEffect(() => {
		controls.start("scroll")
	}, [controls])

	return (
		<section className="bg-[#0f172a] text-white py-20 px-4" id="certifications">
			<motion.h2
				className="text-4xl md:text-5xl font-bold text-pink-500 mb-12 text-center"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
			>
				Licenses & Certifications
			</motion.h2>

			<div
				className="relative max-w-7xl mx-auto overflow-hidden px-4"
				onMouseEnter={() => {
					setIsHovered(true)
					controls.stop()
				}}
				onMouseLeave={() => {
					setIsHovered(false)
					controls.start("scroll")
				}}
			>
				<motion.div
					className="flex gap-6 w-max"
					variants={variants}
					animate={controls}
					initial="scroll"
				>
					{loopedCerts.map((cert, i) => (
						<div
							key={i}
							onClick={() => setSelectedCert(cert.image)}
							className="min-w-[230px] max-w-[230px] h-[360px] bg-slate-900 border border-slate-700 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between px-4 py-5 hover:border-white hover:bg-[#232334]"
						>
							<div>
								<img
									src={cert.image}
									alt={cert.title}
									className="w-full h-28 object-cover rounded-md mb-3 border border-gray-100"
								/>
								<h3 className="text-pink-500 font-semibold text-sm leading-snug mb-1">
									{cert.title.length > 36
										? cert.title.slice(0, 34) + "..."
										: cert.title}
								</h3>
								<p className="text-xs text-gray-400">{cert.org}</p>
								<p className="text-xs italic text-pink-300 mt-1">{cert.date}</p>
							</div>

							<div className="flex flex-wrap gap-2 mt-3">
								{cert.skills.map((s, j) => (
									<span
										key={j}
										className="text-[10px] px-2 py-0.5 bg-slate-800 text-gray-300 border border-gray-700 rounded-full"
									>
										{s}
									</span>
								))}
							</div>
						</div>
					))}
				</motion.div>
			</div>

			{/* Modal */}
			{selectedCert && (
				<div
					className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center"
					onClick={() => setSelectedCert(null)}
				>
					<div
						className="relative bg-[rgba(15,23,42,0.8)] rounded-lg max-w-4xl w-full mx-4 p-4"
						onClick={(e) => e.stopPropagation()}
					>
						<button
							className="absolute top-2 right-3 bg-gray-500 text-white text-2xl font-bold hover:text-pink-500 hover:bg-gray-200 w-[30px] h-[30px]"
							onClick={() => setSelectedCert(null)}
						>
							×
						</button>
						<img
							src={selectedCert}
							alt="Certificate Preview"
							className="w-full max-h-[80vh] object-contain rounded-md border border-gray-200"
						/>
					</div>
				</div>
			)}
		</section>
	)
}
