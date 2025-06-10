"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import type { IconType } from "react-icons"
import { BiSolidMobileVibration, BiTransfer } from "react-icons/bi"
import { PiBrowsersBold, PiHammerBold, PiStackSimple } from "react-icons/pi"
import {
	SiAdobeillustrator,
	SiAdobexd,
	SiAmazon,
	SiBitbucket,
	SiConfluence,
	SiCss3,
	SiDjango,
	SiExpress,
	SiFigma,
	SiFirebase,
	SiFlask,
	SiGit,
	SiGithub,
	SiHtml5,
	SiJavascript,
	SiJest,
	SiJira,
	SiJquery,
	SiMongodb,
	SiMysql,
	SiNextdotjs,
	SiNodedotjs,
	SiPython,
	SiReact,
	SiRedux,
	SiSass,
	SiTailwindcss,
	SiTypescript,
} from "react-icons/si"

const GlitchGlow = ({ Icon }: { Icon: IconType }) => (
	<motion.div
		whileHover={{
			scale: 1.2,
		}}
		transition={{ duration: 0.2 }}
		className="text-3xl text-gray-300 hover:text-[#ec4899]"
	>
		<Icon />
	</motion.div>
)

const skills = [
	{
		category: "Frontend",
		icon: <PiBrowsersBold className="text-4xl text-[#ec4899]" />,
		experience: "Advanced",
		percentage: 75,
		topSkills: [
			{ name: "React", icon: SiReact },
			{ name: "Next.js", icon: SiNextdotjs },
			{ name: "Redux", icon: SiRedux },
			{ name: "JavaScript", icon: SiJavascript },
			{ name: "TailwindCSS", icon: SiTailwindcss },
			{ name: "React Native", icon: BiSolidMobileVibration },
		],
		moreSkills: [
			{ name: "TypeScript", icon: SiTypescript },
			{ name: "CSS3", icon: SiCss3 },
			{ name: "HTML5", icon: SiHtml5 },
			{ name: "SASS", icon: SiSass },
			{ name: "jQuery", icon: SiJquery },
			{ name: "Jest", icon: SiJest },
		],
	},
	{
		category: "Backend & Cloud",
		icon: <PiStackSimple className="text-4xl text-[#8b5cf6]" />,
		experience: "Intermediate",
		percentage: 60,
		topSkills: [
			{ name: "Node.js", icon: SiNodedotjs },
			{ name: "Express", icon: SiExpress },
			{ name: "MongoDB", icon: SiMongodb },
			{ name: "AWS", icon: SiAmazon },
			{ name: "Python", icon: SiPython },
			{ name: "Rest APIs", icon: BiTransfer },
		],
		moreSkills: [
			{ name: "Flask", icon: SiFlask },
			{ name: "Firebase", icon: SiFirebase },
			{ name: "MySQL", icon: SiMysql },
			{ name: "Django", icon: SiDjango },
		],
	},
	{
		category: "Tools & Design",
		icon: <PiHammerBold className="text-4xl text-[#f59e0b]" />,
		experience: "Intermediate",
		percentage: 80,
		topSkills: [
			{ name: "Figma", icon: SiFigma },
			{ name: "Git", icon: SiGit },
			{ name: "GitHub", icon: SiGithub },
			{ name: "Bitbucket", icon: SiBitbucket },
		],
		moreSkills: [
			{ name: "Confluence", icon: SiConfluence },
			{ name: "Jira", icon: SiJira },
			{ name: "Adobe XD", icon: SiAdobexd },
			{ name: "Illustrator", icon: SiAdobeillustrator },
		],
	},
]

export default function SkillsSection() {
	const [expanded, setExpanded] = useState<Record<string, boolean>>({})

	const toggleMore = (category: string) => {
		setExpanded((prev) => ({
			...prev,
			[category]: !prev[category],
		}))
	}

	return (
		<section
			id="skills"
			className="relative w-full px-6 py-20 md:py-28 bg-[#0f172a] overflow-hidden"
		>
			<div className="max-w-5xl mx-auto text-center z-20">
				<motion.h2
					className="text-3xl md:text-5xl font-bold mb-4 text-[#ec4899]"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					My Tech Stack
				</motion.h2>
				<motion.p
					className="text-gray-300 text-base md:text-lg mb-12"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					Clean code. Intuitive UX. Scalable architecture.
				</motion.p>

				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 z-20">
					{skills.map(
						({ category, icon, topSkills, moreSkills, percentage }, index) => (
							<motion.div
								key={category}
								className=" flex flex-col items-center space-y-4  hover:scale-[1.03] hover:ring-2 hover:ring-[#6366f1] duration-300 rounded-2xl p-6 bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition"
								initial={{ opacity: 0, y: 40 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.2, duration: 0.6 }}
							>
								<div className="text-4xl">{icon}</div>
								<h3 className="text-xl font-semibold text-white">{category}</h3>
								<div className="w-full bg-white/10 rounded-full h-2.5 mt-2">
									<div
										className="bg-pink-400 h-2.5 rounded-full transition-all duration-700"
										style={{ width: `${percentage}%` }}
									/>
								</div>
								<div className="relative w-full text-center mt-1">
									<span className="inline-block px-3 py-1 text-[14px] font-medium text-pink-400 bg-white/5 border border-white/10 rounded-full shadow-sm backdrop-blur-sm">
										{percentage}% Proficiency
									</span>
								</div>

								<div className="flex flex-wrap justify-center gap-4 mt-2">
									{[
										...topSkills,
										...(expanded[category] ? moreSkills : []),
									].map(({ name, icon: Icon }, i) => (
										<div key={i} className="relative group cursor-pointer z-20">
											<GlitchGlow Icon={Icon} />
											<span className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 scale-0 group-hover:scale-100 transition-all text-xs bg-[#111827] text-white px-2 py-1 rounded-md shadow-sm pointer-events-none whitespace-nowrap">
												{name}
											</span>
										</div>
									))}
								</div>

								{moreSkills.length > 0 && (
									<button
										onClick={() => toggleMore(category)}
										className="text-sm mt-4 text-[#6366f1] underline hover:text-[#4f46e5] transition-colors z-20 cursor-pointer"
									>
										{expanded[category] ? "Show Less" : "+ More"}
									</button>
								)}
							</motion.div>
						)
					)}
				</div>
			</div>
			{/* Background Blobs */}
			{/* Background Blobs – hidden on mobile and tablet */}

			<motion.div
				animate={{ opacity: [0.8, 0.5, 0.8], scale: [0.9, 1, 0.9] }}
				transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
				className="absolute -top-0 -left-32 w-[400px] h-[400px] hidden lg:block bg-pink-500 rounded-full blur-[150px] opacity-40"
			/>

			<motion.div
				animate={{ opacity: [0.8, 0.5, 0.8], scale: [0.95, 1, 0.95] }}
				transition={{
					duration: 7,
					repeat: Infinity,
					repeatDelay: 1,
					ease: "easeInOut",
				}}
				className="absolute  hidden lg:block top-[-10px] right-[-80px] w-[200px] h-[200px] bg-violet-500 rounded-full blur-[120px] opacity-20 -z-0"
			/>
		</section>
	)
}
