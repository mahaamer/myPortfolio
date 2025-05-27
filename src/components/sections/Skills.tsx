"use client"

import { motion } from "framer-motion"
import {
	PiBracketsCurlyBold,
	PiBrowsersBold,
	PiChatsCircleBold,
	PiCloudBold,
	PiCodeBold,
	PiHammerBold,
	PiStackSimple,
} from "react-icons/pi"
import FrontendOrbit from "../ui/FrontendOrbit"

const skillGroups = [
	{
		title: "Frontend",
		icon: <PiBrowsersBold className="text-3xl text-white/80" />,
		skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
	},
	{
		title: "Backend",
		icon: <PiStackSimple className="text-3xl text-accent-violet" />,
		skills: [
			"Node.js",
			"Express.js",
			"MongoDB",
			"GraphQL",
			"MySQL",
			"REST APIs",
			"Python",
			"Flask",
			"Django",
			"Django REST Framework",
		],
	},
	{
		title: "Cloud & DevOps",
		icon: <PiCloudBold className="text-3xl text-accent-pink" />,
		skills: [
			"AWS (EC2, S3, Lambda, IAM, VPC, CloudFormation, CloudFront, RDS, ELB, CloudWatch)",
		],
	},
	{
		title: "Tools",
		icon: <PiHammerBold className="text-3xl text-accent-violet" />,
		skills: [
			"AutoCAD",
			"Adobe Illustrator",
			"Adobe XD",
			"Figma",
			"Git",
			"GitHub",
			"Bitbucket",
		],
	},
	{
		title: "Documentation & Collaboration",
		icon: <PiChatsCircleBold className="text-3xl text-white/80" />,
		skills: ["Technical writing", "Jira", "Confluence", "Agile workflows"],
	},
	{
		title: "Languages",
		icon: <PiCodeBold className="text-3xl text-accent-violet" />,
		skills: ["Arabic (Native)", "English (B2 – Upper Intermediate CEFR)"],
	},
]

export default function Skills() {
	return (
		<section
			id="skills"
			className="relative w-full min-h-screen px-6 md:px-20 py-20 bg-background text-neutral-white"
			aria-labelledby="skills-heading"
		>
			<div className="max-w-6xl mx-auto text-center">
				{/* Fancy Smart Heading */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="flex flex-col items-center mb-16"
				>
					<span className="text-sm uppercase tracking-wider text-white/60">
						What I Do Best
					</span>
					<div className="flex items-center gap-3 mt-1">
						<PiBracketsCurlyBold className="text-2xl text-accent-pink" />
						<h2
							id="skills-heading"
							className="text-3xl md:text-4xl font-extrabold text-accent-pink tracking-tight"
						>
							My Skill Set
						</h2>
					</div>
					<div className="w-12 h-[2px] bg-accent-pink mt-2 rounded-full" />
				</motion.div>

				{/* Skill Grid */}
				<div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
					{skillGroups.map((group, idx) => (
						<motion.div
							key={idx}
							className="group bg-gradient-to-br from-pink-500/30 to-violet-500/30 rounded-3xl p-6 flex flex-col items-center hover:scale-[1.05] transition-transform duration-300"
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: idx * 0.1 }}
							viewport={{ once: true }}
							role="group"
							aria-labelledby={`group-${idx}`}
						>
							{/* Icon */}
							<div className="mb-4 transition-transform duration-300 group-hover:scale-110">
								{group.icon}
							</div>

							{/* Title */}
							<h3
								id={`group-${idx}`}
								className="text-xl font-bold text-white mb-4 transition-all duration-300 group-hover:text-accent-pink group-hover:underline underline-offset-4 tracking-wide"
							>
								{group.title}
							</h3>

							{/* Content */}
							{group.title === "Frontend" || "Backend" ? (
								<FrontendOrbit />
							) : (
								<ul className="text-sm text-neutral-slate space-y-1 text-left">
									{group.skills.map((skill, i) => (
										<li
											key={i}
											className="before:content-['•'] before:mr-2 before:text-accent-pink"
										>
											{skill}
										</li>
									))}
								</ul>
							)}
						</motion.div>
					))}
				</div>
			</div>

			{/* Blurred background accents */}
			<div
				className="absolute -top-10 -left-10 w-40 h-40 bg-accent-pink/10 rounded-full blur-3xl"
				aria-hidden="true"
			/>
			<div
				className="absolute -top-80 -right-20 w-80 h-80 bg-accent-pink/40 rounded-full blur-3xl"
				aria-hidden="true"
			/>
			<div
				className="absolute bottom-0 -right-20 w-56 h-56 bg-accent-violet/10 rounded-full blur-2xl"
				aria-hidden="true"
			/>
		</section>
	)
}
