"use client"
import TimelineItem from "../ui/TimelineItem"

const workTimeline = [
	{
		title: "Freelance Software Developer",
		org: "Freelancer.com",
		duration: "Mar 2023 – Present",
		bullets: [
			"Designed and shipped a RESTful back-end that auto-generates conflict-free course schedules for 1,000+ students in <1s.",
			"Built full relational schema in SQLite 3 and integrated it with SQLAlchemy.",
			"Implemented JWT-secured registration/login and CRUD endpoints documented with Swagger.",
			"Used Mealpy meta-heuristics (Grey Wolf & PSO) to satisfy optimization modes.",
			"Delivered admin panel, CI/CD Docker image, and unit-tested library with 100% compliance.",
		],
		image: "/illustrations/dev.png",
	},
	{
		title: "React Native Developer / UX Designer / Python Developer",
		org: "noury AG",
		duration: "May 2023 – Jun 2024",
		bullets: [
			"Built 10+ screens using React Navigation v6 with deep-link support.",
			"Integrated Firebase Authentication and 3 external services via Apisauce.",
			"Developed Redux Toolkit slices and optimized redux-persist.",
			"Onboarded Visa, MasterCard, TWINT, PayPal via unified wallet.",
			"Created 15+ UX animations, maintained Figma system.",
			"Django REST wallet API (25+ endpoints) with PCI-DSS compliance.",
		],
		image: "/illustrations/ux.png",
	},
	{
		title: "Full-stack Developer Intern",
		org: "Information Technology Institute (ITI)",
		duration: "Aug 2022 – Dec 2022",
		bullets: [
			"Covered React, Node, Express, MongoDB, TypeScript, UI tooling.",
			"Built RESTful blog API with JWT & role-based access.",
			"Led MERN stack capstone project – Suomo El Asala.",
			"Standardized codebase and improved review speed by 30%.",
		],
		image: "/illustrations/webdev.png",
	},
	{
		title: "Web Developer Intern",
		org: "National Telecommunication Institute (NTI)",
		duration: "May 2022 – Jul 2022",
		bullets: [
			"Developed UIs for bookstores and retail shops using HTML5 & CSS3.",
			"Collaborated with software developers and clients.",
			"Delivered clean, maintainable front-end code.",
		],
		image: "/illustrations/fullstack.png",
	},
]

const educationTimeline = [
	{
		title: "Master’s in Artificial Intelligence",
		org: "Faculty of Electronic Engineering, Menoufia University",
		duration: "2025 – Feb 2027",
		bullets: [
			"Thesis: Explainable Transformer-based Recommendation System.",
			"Skills: SHAP, LIME, BERT, PyTorch, Transformer Models.",
		],
		image: "/illustrations/ai.png",
	},
	{
		title: "Computer Software Technology",
		org: "EPFL",
		duration: "Feb 2023 – Apr 2023",
		bullets: ["Completed coursework in advanced software systems and labs."],
		image: "/illustrations/epfl.png",
	},
	{
		title: "B.E. Electrical & Computer Engineering",
		org: "Minufiya University",
		duration: "Jul 2017 – Jul 2022",
		bullets: [
			"Graduation: Arduino 3D Printer (GPA: 4.0).",
			"Rank: 3rd in class (GPA 3.3).",
			"Leadership: IEEE, Life Makers, Kayan, Insider.",
		],
		image: "/illustrations/graduation.png",
	},
]

export default function TimelineSection() {
	return (
		<section
			id="experience"
			className="py-20 px-6 md:px-12 max-w-[1400px] mx-auto bg-[#0f172a] text-white"
		>
			<h2 className="text-4xl font-bold text-center mb-16 text-pink-500">
				My Journey
			</h2>

			<div className="grid md:grid-cols-2 gap-20">
				<div>
					<h3 className="text-3xl font-semibold mb-10 text-blue-400">
						Work Experience
					</h3>
					<div className="flex flex-col gap-16 border-l-2 border-blue-500/40 ">
						{workTimeline.map((item, i) => (
							<TimelineItem
								key={i}
								{...item}
								bulletColor="blue"
								datePosition="left"
							/>
						))}
					</div>
				</div>

				<div>
					<h3 className="text-3xl font-semibold mb-10 text-green-400">
						Education
					</h3>
					<div className="flex flex-col gap-16 border-l-2 border-green-500/40 ">
						{educationTimeline.map((item, i) => (
							<TimelineItem
								key={i}
								{...item}
								bulletColor="green"
								datePosition="left"
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
