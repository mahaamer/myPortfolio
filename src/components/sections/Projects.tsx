"use client"
import { ProjectCard } from "@/components/ui/ProjectCard"
import { motion } from "framer-motion"

const projects = [
	{
		title: "Student Timetable Optimizer API",
		duration: "Feb 2025 - Mar 2025",
		company: "Freelancer.com",
		image: "/api-preview.png",
		images: ["/api-preview.png", "/backendDoc.png"],
		description:
			"Designed a full-stack back-end API that generates personalized timetables using metaheuristic optimization.",
		highlights: [
			"Schedules generated <1s for 1,000 students",
			"JWT-secured endpoints, admin panel, Swagger docs",
			"Optimized algorithms improved mean fitness by 37%",
		],
		tech: ["Python", "Flask", "SQLite", "SQLAlchemy", "Mealpy"],
		links: [
			{
				type: "github",
				url: "https://github.com/mahaamer/OptimizedSchedulingSystem",
			},
		],
	},
	{
		title: "Noury – Smart Fridge Mobile App",
		duration: "May 2023 - Jun 2024",
		company: "noury AG",
		image: "/noury-preview.png",
		images: ["/socialSignup.png", "/openFridge.png", "/scan.png"],
		description:
			"Built the front-end for an IoT-enabled retail app that unlocks smart fridges and handles secure mobile payments.",
		highlights: [
			"Real-time control, secure payments, app store live",
			"Checkout time <15s, reduced support tickets by 40%",
			"Offline persistence with Redux, TypeScript-based architecture",
		],
		tech: [
			"React Native",
			"Redux Toolkit",
			"Firebase",
			"Datatrans API",
			"TypeScript",
		],
		links: [
			{
				type: "appstore",
				url: "https://apps.apple.com/ch/app/noury/id1577361582",
			},
		],
	},
	{
		title: "Suomo El Asala – Real-Estate Platform",
		duration: "Aug 2022 - Dec 2022",
		company: "Information Technology Institute (ITI)",
		image: "/suomo-preview.png",
		images: [
			"/Summo-alasalh.png",
			"/Summo-alasalh-projects.png",
			"/React-App-admindashboard.png",
		],
		description:
			"Engineered a bilingual full-stack platform to showcase projects with real-time CRM integration and lead tracking.",
		highlights: [
			"CMS for self-service publishing (images/content)",
			"Dark/light mode, CDN-cached fast UI (<1s)",
			"Multilingual UI, CRM integration, instant search",
		],
		tech: ["React.js", "Redux", "Node.js", "MongoDB", "Material UI"],
		links: [
			{
				type: "live",
				url: "https://smou-finale-fornt.vercel.app/",
			},
		],
	},
]

const Projects = () => {
	return (
		<section
			id="projects"
			className="relative px-4 md:px-8 lg:px-16 py-20 bg-[#0f172a] text-white max-w-[1600px] mx-auto"
		>
			<motion.h2
				className="text-4xl md:text-5xl font-bold text-pink-500 mb-12 text-center"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
			>
				My Projects
			</motion.h2>

			<div className="grid grid-cols-1 lg:grid-cols-6 lg:grid-rows-3 gap-8">
				{/* Top Right: Project 1 */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: false, amount: 0.4 }}
					className="lg:col-start-4 lg:col-span-3 lg:row-start-1 lg:mr-7"
				>
					<ProjectCard {...projects[0]} />
				</motion.div>

				{/* Middle Left: Project 2 */}
				{/* Middle Left: Project 2 */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
					viewport={{ once: false, amount: 0.4 }}
					className="lg:col-start-1 lg:col-span-3 lg:row-start-2"
				>
					<div className="flex flex-col md:flex-row gap-4 items-start justify-between w-full">
						<div className="w-full min-h-[260px] mr-[20%]">
							<ProjectCard {...projects[1]} />
						</div>
						<img
							src="/noury-illustration.png"
							alt="Noury presentation"
							className="hidden lg:block w-52 max-h-[260px] object-contain rounded-xl shadow-xl"
						/>
					</div>
				</motion.div>

				{/* Bottom Right: Project 3 */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.4 }}
					viewport={{ once: false, amount: 0.4 }}
					className="lg:col-start-4 lg:col-span-3 lg:row-start-3 lg:mr-7"
				>
					<ProjectCard {...projects[2]} />
				</motion.div>
			</div>
			<motion.div
				animate={{ opacity: [0.8, 0.5, 0.8], scale: [0.9, 1, 0.9] }}
				transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
				className="absolute -top-0 -left-32 w-[400px] h-[400px] hidden lg:block bg-accent-slate40 rounded-full blur-[150px] opacity-40"
			/>

			<motion.div
				animate={{ opacity: [0.8, 0.5, 0.8], scale: [0.95, 1, 0.95] }}
				transition={{
					duration: 7,
					repeat: Infinity,
					repeatDelay: 1,
					ease: "easeInOut",
				}}
				className="absolute  hidden lg:block bottom-[-10px] right-[-80px] w-[300px] h-[300px] bg-violet-500 rounded-full blur-[120px] opacity-20 -z-0"
			/>
		</section>
	)
}

export default Projects
