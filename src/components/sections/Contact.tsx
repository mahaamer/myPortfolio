"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import {
	FaEnvelope,
	FaGithub,
	FaLinkedin,
	FaMapMarkerAlt,
	FaPhoneAlt,
} from "react-icons/fa"

const contact = {
	name: "Maha Amer",
	location: "Cairo, Egypt 11511",
	phone: "+20 100 376 5461",
	email: "mahaamer11998@gmail.com",
	linkedin: "https://linkedin.com/in/mahaamer",
	github: "https://github.com/mahaamer",
	image: "/profile-photo.png", // Add your image to public folder with this name
}

export default function ContactSection() {
	return (
		<section id="contact" className="bg-[#0f0f25] py-20 px-6 text-white">
			<motion.h2
				className="text-4xl text-center font-bold mb-12"
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
			>
				📬 Get in Touch
			</motion.h2>

			<div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-10 items-center justify-center">
				<motion.div
					className="w-full md:w-1/2 flex justify-center"
					initial={{ opacity: 0, x: -30 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5 }}
				>
					<div className="overflow-hidden rounded-[2rem] border-4 border-purple-600 shadow-[0_0_40px_rgba(147,51,234,0.3)]">
						<Image
							src={contact.image}
							alt="Maha Amer"
							width={320}
							height={320}
							className="object-cover rounded-[2rem]"
						/>
					</div>
				</motion.div>

				<motion.div
					className="w-full md:w-1/2 space-y-6"
					initial={{ opacity: 0, x: 30 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5 }}
				>
					<div className="flex items-center gap-3">
						<FaMapMarkerAlt className="text-purple-300" />
						<p>{contact.location}</p>
					</div>
					<div className="flex items-center gap-3">
						<FaPhoneAlt className="text-purple-300" />
						<a href={`tel:${contact.phone}`} className="hover:underline">
							{contact.phone}
						</a>
					</div>
					<div className="flex items-center gap-3">
						<FaEnvelope className="text-purple-300" />
						<a href={`mailto:${contact.email}`} className="hover:underline">
							{contact.email}
						</a>
					</div>
					<div className="flex items-center gap-3">
						<FaLinkedin className="text-purple-300" />
						<a
							href={contact.linkedin}
							target="_blank"
							className="hover:underline"
						>
							linkedin.com/in/mahaamer
						</a>
					</div>
					<div className="flex items-center gap-3">
						<FaGithub className="text-purple-300" />
						<a
							href={contact.github}
							target="_blank"
							className="hover:underline"
						>
							github.com/mahaamer
						</a>
					</div>
				</motion.div>
			</div>
		</section>
	)
}
