"use client"
import { motion } from "framer-motion"
import { FaCertificate } from "react-icons/fa"

const certifications = [
	{
		title: "The Complete Full-Stack Web Development Bootcamp",
		org: "Udemy",
		date: "Issued Mar 2025",
		credentialId: "UC-5f58e736-1004-4e9c-99ea-6266b5fd3082",
		skills: ["MERN Stack", "PostgreSQL", "NFTs"],
	},
	{
		title: "CSS (Basic) Certificate of Accomplishment",
		org: "HackerRank",
		date: "Issued Jan 2025",
		credentialId: "3A8EFF6B7773",
		skills: ["CSS"],
	},
	{
		title: "Thinking and Creating with Code",
		org: "EPFL Extension School",
		date: "Issued Apr 2023",
		credentialId: null,
		skills: ["Creativity with Code"],
	},
	{
		title: "Web Design",
		org: "National Telecommunication Institute (NTI)",
		date: "Issued Jul 2022",
		credentialId: "63465",
		skills: ["HTML", "CSS"],
	},
	{
		title: "Intro to Programming Using HTML & CSS",
		org: "MaharaTech - ITIMooca",
		date: "Issued Jul 2021",
		credentialId: "zsoVj0I3as",
		skills: ["HTML", "CSS"],
	},
	{
		title: "Full Stack Web Development using MEARN",
		org: "Information Technology Institute (ITI)",
		date: "Issued Jul 2022 · Expired Nov 2022",
		credentialId: null,
		skills: ["MERN Stack"],
	},
]

export default function CertificationsSection() {
	return (
		<section className="bg-[#0f0f25] py-20 px-6" id="certifications">
			<motion.h2
				className="text-4xl text-center font-bold text-white mb-12"
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
			>
				🏆 Licenses & Certifications
			</motion.h2>

			<div className="relative max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">
				{certifications.map((cert, i) => (
					<motion.div
						key={i}
						className="rounded-[2rem] bg-gradient-to-br from-purple-900/30 to-indigo-800/20 p-6 border border-purple-500/30 shadow-[0_0_40px_rgba(168,85,247,0.2)] backdrop-blur-md"
						initial={{ opacity: 0, scale: 0.95 }}
						whileInView={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5, delay: i * 0.1 }}
					>
						<div className="flex items-center gap-4 mb-4">
							<div className="bg-purple-800/40 p-4 rounded-full">
								<FaCertificate className="text-purple-300" size={24} />
							</div>
							<div>
								<h4 className="text-lg font-semibold text-white leading-tight">
									{cert.title}
								</h4>
								<p className="text-sm text-gray-300">{cert.org}</p>
								<p className="text-xs text-purple-200 italic">{cert.date}</p>
							</div>
						</div>
						{cert.credentialId && (
							<p className="text-xs text-gray-400 mb-2">
								Credential ID:{" "}
								<span className="text-white font-mono">
									{cert.credentialId}
								</span>
							</p>
						)}
						<div className="flex flex-wrap gap-2">
							{cert.skills.map((s, j) => (
								<span
									key={j}
									className="text-xs px-3 py-1 bg-purple-700/30 text-purple-100 rounded-full"
								>
									{s}
								</span>
							))}
						</div>
					</motion.div>
				))}

				<motion.div
					className="col-span-full flex flex-col items-center justify-center text-center p-8 rounded-[2rem] border border-pink-500/40 bg-pink-900/10 text-white mt-10 shadow-md hover:shadow-xl transition duration-300"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					<p className="text-xl font-semibold">📄 Letter of Recommendation</p>
					<p className="text-sm text-gray-300 mt-2">
						Received from Noury AG for outstanding performance in React Native
						and product design.
					</p>
				</motion.div>

				<motion.div
					className="col-span-full flex flex-col items-center justify-center text-center p-8 rounded-[2rem] border border-cyan-500/40 bg-cyan-900/10 text-white mt-6 shadow-md hover:shadow-xl transition duration-300"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					<p className="text-xl font-semibold">🌟 Internship Poster</p>
					<p className="text-sm text-gray-300 mt-2">
						Recognized at Noury AG for impactful contributions during
						internship—poster presented internally.
					</p>
				</motion.div>
			</div>
		</section>
	)
}
