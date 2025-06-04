"use client"

import { useForm, ValidationError } from "@formspree/react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { FaFilePdf, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa"

export default function ContactSection() {
	const [state, handleSubmit] = useForm("mvgronqe")
	const [phone, setPhone] = useState("")
	const [name, setName] = useState("")
	const [showSuccess, setShowSuccess] = useState(false)

	// Reset form and scroll back after submission
	useEffect(() => {
		if (state.succeeded) {
			setShowSuccess(true)

			const timeout = setTimeout(() => {
				setShowSuccess(false)
				const form = document.getElementById("contact-form") as HTMLFormElement
				if (form) form.reset()
				document
					.getElementById("contact")
					?.scrollIntoView({ behavior: "smooth" })
			}, 3000)

			return () => clearTimeout(timeout)
		}
	}, [state.succeeded])

	const handleWhatsAppClick = () => {
		const cleanPhone = phone.replace(/\D/g, "")
		const message = encodeURIComponent(
			`Hello ${name || "there"}, thanks for reaching out!`
		)
		if (cleanPhone) {
			window.open(`https://wa.me/${cleanPhone}?text=${message}`, "_blank")
		} else {
			alert("Please enter a valid phone number.")
		}
	}

	return (
		<section
			id="contact"
			className="bg-[#0f172a] text-white py-20 px-4 min-h-screen"
		>
			<motion.h2
				className="text-4xl md:text-5xl font-bold text-pink-500 mb-4 text-center"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
			>
				Contact Me
			</motion.h2>

			<p className="text-gray-300 text-center max-w-xl mx-auto mb-8">
				Feel free to reach out for collaboration, freelance projects, or just to
				say hi. I'm always open to new ideas and connections.
			</p>

			<div className="max-w-2xl mx-auto bg-slate-900/60 p-8 rounded-2xl border border-slate-700 shadow-lg backdrop-blur-md">
				{showSuccess ? (
					<p className="text-pink-400 text-center text-lg font-semibold">
						Thanks for your message! I will get back to you soon.
						<br />
						Redirecting...
					</p>
				) : (
					<form
						id="contact-form"
						onSubmit={handleSubmit}
						className="flex flex-col gap-5"
					>
						<input
							id="name"
							type="text"
							name="name"
							placeholder="Your Name"
							required
							onChange={(e) => setName(e.target.value)}
							className="bg-slate-800 text-white px-4 py-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
						/>

						<input
							id="email"
							type="email"
							name="email"
							placeholder="Your Email"
							required
							className="bg-slate-800 text-white px-4 py-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
						/>
						<ValidationError
							prefix="Email"
							field="email"
							errors={state.errors}
						/>

						<input
							id="phone"
							type="tel"
							name="phone"
							placeholder="Your Phone Number (Optional)"
							value={phone}
							onChange={(e) => setPhone(e.target.value)}
							className="bg-slate-800 text-white px-4 py-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
						/>

						<textarea
							id="message"
							name="message"
							placeholder="Your Message"
							rows={4}
							required
							className="bg-slate-800 text-white px-4 py-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
						/>
						<ValidationError
							prefix="Message"
							field="message"
							errors={state.errors}
						/>

						<div className="flex flex-col md:flex-row items-center justify-between gap-4">
							<button
								type="submit"
								disabled={state.submitting}
								className="flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-pink-500 text-pink-500 bg-white hover:bg-pink-600 hover:text-white transition font-semibold w-full md:w-auto"
							>
								{state.submitting ? "Sending..." : "Send Email"}
							</button>

							<button
								type="button"
								onClick={handleWhatsAppClick}
								className="flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-green-600 text-green-600 bg-white hover:bg-green-600 hover:text-white transition w-full md:w-auto"
							>
								<FaWhatsapp className="text-lg" />
								Chat On WhatsApp
							</button>
						</div>
					</form>
				)}
			</div>

			{/* ✅ Social Icons Row */}
			<div className="flex justify-center gap-6 mt-8">
				<a
					aria-label="GitHub"
					href="https://github.com/mahaamer"
					target="_blank"
					rel="noopener noreferrer"
					className="p-3 rounded-full border border-gray-500 hover:bg-gray-700 transition text-xl text-white"
				>
					<FaGithub />
				</a>

				<a
					aria-label="Linkedin"
					href="https://www.linkedin.com/in/mahaamer"
					target="_blank"
					rel="noopener noreferrer"
					className="p-3 rounded-full border border-gray-500 hover:bg-blue-700 transition text-xl text-white"
				>
					<FaLinkedin />
				</a>
				<a
					href="/Maha_Amer_Frontend_Fullstack_CV_2025.pdf"
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-red-500 text-red-500 bg-white hover:bg-red-600 hover:text-white transition w-full md:w-auto"
				>
					<FaFilePdf className="text-lg" />
					Preview CV
				</a>
			</div>

			{/* ✅ Let's Work Together CTA */}
			<motion.h3
				className="text-2xl md:text-3xl font-semibold text-center text-white mt-12"
				initial={{ opacity: 0, y: 10 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.4 }}
			>
				Let’s build something great together.
			</motion.h3>
		</section>
	)
}
