"use client"
import { motion } from "framer-motion"
import { FaBriefcase, FaGraduationCap } from "react-icons/fa"

const education = [
	{
		institution: "Faculty of Electronic Engineering, Menoufia University",
		degree: "Master's degree, Artificial Intelligence",
		period: "2025 - Feb 2027",
		details:
			"Explainable Transformer-based Recommendation System with skills in SHAP, LIME, BERT, PyTorch, and Recommender Systems.",
		skills: ["Transformer Models", "SHAP", "LLM", "LIME", "PyTorch", "AI"],
	},
	{
		institution: "EPFL",
		degree: "Computer Software Technology",
		period: "Feb 2023 - Apr 2023",
		details: "Short-term training program on modern software technologies.",
		skills: ["Software Engineering", "Agile"],
	},
	{
		institution: "Minufiya University",
		degree: "Bachelor of Engineering - BE, Electrical and Computer Engineering",
		period: "Jul 2017 - Jul 2022",
		details:
			"Graduation project: Arduino-Based 3D Printer (GPA 4.0). Ranked 3rd overall. Participated in IEEE, Kayan, and Life Makers.",
		skills: [
			"Embedded Systems",
			"3D Printing",
			"Leadership",
			"Digital Marketing",
		],
	},
]

const experience = [
	{
		company: "Freelancer.com",
		role: "Freelance Software Developer",
		period: "Mar 2023 – Present",
		details:
			"Built a back-end service that auto-generates 1,000+ student schedules in <1s using Python, SQLAlchemy, and Mealpy metaheuristics.",
		skills: ["Flask", "Mealpy", "SQL", "JWT"],
	},
	{
		company: "noury AG",
		role: "React Native Developer / UX Designer / Python Developer",
		period: "May 2023 – Jun 2024",
		details:
			"Led React Native development, UI/UX design system, payment integration, multilingual support, and backend services with Django.",
		skills: ["React Native", "Redux", "Figma", "Firebase", "Django"],
	},
	{
		company: "Information Technology Institute (ITI)",
		role: "Full-stack Developer Intern",
		period: "Aug 2022 – Dec 2022",
		details:
			"Completed MERN stack curriculum, delivered real-estate capstone app, and practiced agile with Git-flow and team demos.",
		skills: ["React", "Node.js", "MongoDB", "Agile"],
	},
	{
		company: "National Telecommunication Institute (NTI)",
		role: "Web Developer Intern",
		period: "May 2022 – Jul 2022",
		details:
			"Developed UI for retail and bookstore clients with HTML5, CSS3. Collaborated with customers and software engineers.",
		skills: ["HTML5", "CSS3", "Communication"],
	},
]

export default function EducationExperienceSection() {
	return (
		<section className="bg-[#0f0f25] py-16 px-6" id="education">
			<motion.h2
				className="text-4xl text-center font-bold text-white mb-12"
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
			>
				🎓 Education & 💼 Experience
			</motion.h2>

			<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
				<div>
					<h3 className="text-2xl font-semibold text-purple-300 mb-6 flex items-center gap-2">
						<FaGraduationCap /> Education
					</h3>
					{education.map((e, i) => (
						<motion.div
							key={i}
							className="bg-[#1e1e35] rounded-xl p-5 mb-6 border-l-4 border-purple-500 shadow-md hover:shadow-lg transition"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4, delay: i * 0.1 }}
						>
							<h4 className="text-lg font-semibold text-white">{e.degree}</h4>
							<p className="text-sm text-gray-400">{e.institution}</p>
							<p className="text-xs text-purple-300 italic">{e.period}</p>
							<p className="text-sm text-gray-300 mt-2">{e.details}</p>
							<div className="flex flex-wrap gap-2 mt-2">
								{e.skills.map((s, j) => (
									<span
										key={j}
										className="text-xs px-3 py-1 bg-purple-700/30 text-purple-200 rounded-full"
									>
										{s}
									</span>
								))}
							</div>
						</motion.div>
					))}
				</div>

				<div>
					<h3 className="text-2xl font-semibold text-pink-300 mb-6 flex items-center gap-2">
						<FaBriefcase /> Experience
					</h3>
					{experience.map((ex, i) => (
						<motion.div
							key={i}
							className="bg-[#1e1e35] rounded-xl p-5 mb-6 border-l-4 border-pink-500 shadow-md hover:shadow-lg transition"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4, delay: i * 0.1 }}
						>
							<h4 className="text-lg font-semibold text-white">{ex.role}</h4>
							<p className="text-sm text-gray-400">{ex.company}</p>
							<p className="text-xs text-pink-300 italic">{ex.period}</p>
							<p className="text-sm text-gray-300 mt-2">{ex.details}</p>
							<div className="flex flex-wrap gap-2 mt-2">
								{ex.skills.map((s, j) => (
									<span
										key={j}
										className="text-xs px-3 py-1 bg-pink-700/30 text-pink-200 rounded-full"
									>
										{s}
									</span>
								))}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	)
}
