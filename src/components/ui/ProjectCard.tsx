"use client"
import { motion } from "framer-motion"
import { Github, Link, Smartphone } from "lucide-react"
import React from "react"
import { ProjectModal } from "./ProjectModal"

type ProjectCardProps = {
	title: string
	company?: string
	duration: string
	description: string
	highlights: string[]
	tech: string[]
	image?: string
	images?: string[]
	links: {
		type: string
		url: string
	}[]
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
	title,
	company,
	duration,
	description,
	highlights,
	tech,
	image,
	images,
	links,
}) => {
	const [open, setOpen] = React.useState(false)

	// Determine background pattern based on project title
	let patternClass = ""
	if (title.includes("Noury")) {
		patternClass = "bg-[url('/noury-pattern.png')]"
	} else if (title.includes("Sumou") || title.includes("Suomo")) {
		patternClass = "bg-[url('/sumou-pattern.png')]"
	} else if (
		title.includes("Student") ||
		title.includes("Timetable") ||
		title.includes("API")
	) {
		patternClass = "bg-[url('/api-pattern.png')]"
	}

	return (
		<motion.div
			initial={{ opacity: 0, y: 80 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay: 0.15 }}
			viewport={{ once: false, amount: 0.4 }}
		>
			<ProjectModal
				isOpen={open}
				onClose={() => setOpen(false)}
				title={title}
				images={images}
				description={description}
				highlights={highlights}
				tech={tech}
			/>

			<div
				onClick={() => setOpen(true)}
				className={`relative cursor-pointer rounded-xl p-4 transition hover:scale-[1.02] duration-300 shadow-lg group [perspective:1000px] border border-white/20 bg-white/10 backdrop-blur-md
		${
			title.includes("Noury")
				? "bg-[url('/noury-pattern.png')] bg-[length:120px_120px]"
				: title.includes("Student") ||
				  title.includes("Timetable") ||
				  title.includes("API")
				? "bg-[url('/api-pattern.png')] bg-[length:200px_200px]"
				: title.includes("Sumou") || title.includes("Suomo")
				? "bg-[url('/sumou-pattern.png')] bg-[length:200px_200px]"
				: ""
		} bg-repeat bg-center lg:w-[700px]`}
			>
				{/* Flip Card Content */}
				<div className="relative h-[360px] w-full transition-transform duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
					{/* Front */}
					<div className="absolute inset-0 bg-white rounded-xl shadow-md overflow-hidden flex flex-col items-center justify-between p-4 backface-hidden">
						<img
							src={image}
							alt={title}
							className="w-full h-36 object-cover rounded-md"
						/>
						<div className="text-center">
							<h3 className="text-lg font-semibold text-gray-800">{title}</h3>
							<p className="text-sm text-gray-600">
								{company} — {duration}
							</p>
						</div>
						<div className="flex flex-wrap gap-2">
							{tech.map((tag, i) => (
								<span
									key={i}
									className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded"
								>
									{tag}
								</span>
							))}
						</div>
					</div>

					{/* Back */}
					<div className="absolute inset-0 bg-[#1e293b] text-white rounded-xl p-4 [transform:rotateY(180deg)] backface-hidden">
						<h3 className="text-lg font-bold mb-1">{title}</h3>
						<p className="text-sm mb-2">{description}</p>
						<ul className="list-disc pl-4 text-sm space-y-1">
							{highlights.map((point, i) => (
								<li key={i}>{point}</li>
							))}
						</ul>
						<div className="flex gap-4 mt-4">
							{links.map(({ type, url }, i) => {
								const icon =
									type === "github" ? (
										<Github size={16} />
									) : type === "live" ? (
										<Link size={16} />
									) : (
										<Smartphone size={16} />
									)
								const label =
									type === "github"
										? "GitHub"
										: type === "live"
										? "Live Demo"
										: "App Store"
								return (
									<a
										key={i}
										href={url}
										target="_blank"
										rel="noopener noreferrer"
										className="text-blue-300 hover:text-pink-400 text-sm inline-flex items-center gap-1"
									>
										{icon} {label}
									</a>
								)
							})}
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	)
}
