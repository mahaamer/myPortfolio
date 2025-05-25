"use client"
import { motion } from "framer-motion"
import { FaBuilding, FaFlask, FaMobileAlt } from "react-icons/fa"

const projects = [
	{
		title: "Student Timetable Optimizer API",
		icon: <FaFlask className="text-pink-400" size={32} />,
		company: "Freelancer.com",
		date: "Feb 2025 - Mar 2025",
		desc: "AI-powered scheduling engine using Flask + metaheuristics (Grey Wolf / PSO). Built to handle 1,000+ students with <1s response.",
		tech: ["Python", "Flask", "SQLite", "Mealpy", "Docker"],
	},
	{
		title: "Noury – Smart Fridge Mobile App",
		icon: <FaMobileAlt className="text-indigo-400" size={32} />,
		company: "noury AG",
		date: "May 2023 - Jun 2024",
		desc: "IoT shopping app using React Native, Redux, and real-time payments. Seamless UX for fridge access, cart, and checkouts.",
		tech: ["React Native", "Redux", "Firebase", "Datatrans", "TypeScript"],
	},
	{
		title: "Suomo El Asala – Real Estate Platform",
		icon: <FaBuilding className="text-green-400" size={32} />,
		company: "ITI",
		date: "Aug 2022 - Dec 2022",
		desc: "Bilingual real estate CMS with 3D galleries, CRM integration, and lightning-fast search. Built with MERN stack.",
		tech: ["React", "Node.js", "MongoDB", "Material UI"],
	},
]

export default function ProjectsSection() {
	return (
		<section className="bg-[#0f0f25] py-16 px-6" id="projects">
			<motion.h2
				className="text-4xl text-center font-bold text-white mb-12"
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
			>
				💼 Projects
			</motion.h2>

			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
				{projects.map((p, i) => (
					<motion.div
						key={i}
						className="bg-[#1e1e35] rounded-2xl border border-purple-500/20 shadow-[0_0_30px_rgba(168,85,247,0.3)] p-6 hover:scale-105 transition-transform duration-300 backdrop-blur-xl"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: i * 0.1 }}
					>
						<div className="flex items-center gap-4 mb-4">
							<div className="bg-purple-600/20 p-3 rounded-full">{p.icon}</div>
							<div>
								<h3 className="text-xl font-semibold text-white">{p.title}</h3>
								<p className="text-sm text-gray-400">{p.company}</p>
								<p className="text-xs text-purple-300 italic">{p.date}</p>
							</div>
						</div>
						<p className="text-sm text-gray-300 mb-4">{p.desc}</p>
						<div className="flex flex-wrap gap-2">
							{p.tech.map((t, j) => (
								<span
									key={j}
									className="text-xs px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full text-white"
								>
									{t}
								</span>
							))}
						</div>
					</motion.div>
				))}
			</div>
		</section>
	)
}
