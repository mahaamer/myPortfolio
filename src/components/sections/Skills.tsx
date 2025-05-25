"use client"

import { motion } from "framer-motion"
import {
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
		icon: <PiBrowsersBold className="text-3xl text-accent-pink" />,
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
		icon: <PiChatsCircleBold className="text-3xl text-accent-pink" />,
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
				<h2
					id="skills-heading"
					className="text-3xl md:text-4xl font-bold text-accent-pink mb-16"
				>
					My Skill Set
				</h2>

				<div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
					{skillGroups.map((group, idx) => (
						<motion.div
							key={idx}
							className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl shadow-lg p-6 flex flex-col items-center hover:scale-[1.02] transition-transform"
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: idx * 0.1 }}
							viewport={{ once: true }}
							role="group"
							aria-labelledby={`group-${idx}`}
						>
							<div className="mb-4">{group.icon}</div>
							<h3
								id={`group-${idx}`}
								className="text-xl font-semibold text-accent-pink mb-4"
							>
								{group.title}
							</h3>

							{group.title === "Frontend" ? (
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
