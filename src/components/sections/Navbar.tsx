"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useEffect, useState } from "react"

const navItems = [
	{ name: "About", href: "#about" },
	{ name: "Skills", href: "#skills" },
	{ name: "Projects", href: "#projects" },
	{ name: "Experience", href: "#experience" },
	{ name: "Certifications", href: "#certifications" },
	{ name: "Gallery", href: "#gallery" },
	{ name: "Contact", href: "#contact" },
]

export default function Navbar() {
	const [scrolled, setScrolled] = useState(false)
	const [active, setActive] = useState("")
	const [hoveredLink, setHoveredLink] = useState<string | null>(null)
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20)
		}
		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	useEffect(() => {
		if (isMenuOpen && window.innerWidth < 768) {
			document.body.style.overflow = "hidden"
		} else {
			document.body.style.overflow = ""
		}
	}, [isMenuOpen])

	return (
		<motion.header
			initial={{ y: -80, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.6, ease: "easeOut" }}
			className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
				scrolled
					? "bg-background80 backdrop-blur-md shadow-lg"
					: "bg-transparent"
			}`}
			role="navigation"
			aria-label="Main navigation"
		>
			<nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-8 py-3">
				<Link
					href="#home"
					className="focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
				>
					<motion.img
						src="/logo.png"
						alt="Logo"
						width={50}
						height={50}
						whileHover={{ rotate: 360 }}
						transition={{ duration: 0.6, ease: "easeInOut" }}
						className="cursor-pointer"
					/>
				</Link>

				<button
					onClick={() => setIsMenuOpen(!isMenuOpen)}
					className="md:hidden text-white focus:outline-none"
					aria-label="Toggle menu"
					aria-expanded={isMenuOpen}
				>
					<svg
						className="w-6 h-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d={
								isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
							}
						/>
					</svg>
				</button>

				<ul className="hidden md:flex items-center gap-6">
					{navItems.map(({ name, href }) => (
						<li key={href}>
							<Link
								href={href}
								onClick={() => setActive(href)}
								onMouseEnter={() => setHoveredLink(href)}
								onMouseLeave={() => setHoveredLink(null)}
								className={`text-base font-medium px-3 py-1 rounded-md transition-all duration-200 ring-offset-1 focus:outline-none ${
									active === href || hoveredLink === href
										? "text-accent-pink ring-1 ring-accent-pink"
										: "text-neutral-slate hover:text-accent-pink hover:ring-1 hover:ring-accent-pink"
								}`}
								aria-current={active === href ? "page" : undefined}
							>
								{name}
							</Link>
						</li>
					))}
				</ul>

				{isMenuOpen && (
					<>
						{/* Blur overlay behind the menu */}
						<div
							className="fixed inset-0 z-30 backdrop-blur-sm bg-black/30 md:hidden"
							onClick={() => setIsMenuOpen(false)}
							aria-hidden="true"
						/>
						{/* Mobile menu */}
						<motion.ul
							initial={{ opacity: 0, y: -10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.2 }}
							className="absolute top-full left-0 w-full bg-background80 backdrop-blur-md shadow-md md:hidden flex flex-col gap-4 px-6 py-4 z-40"
						>
							{navItems.map(({ name, href }) => (
								<li key={href}>
									<Link
										href={href}
										onClick={() => {
											setActive(href)
											setIsMenuOpen(false)
										}}
										className={`block text-base font-medium transition-colors duration-200 ${
											active === href
												? "text-accent-pink"
												: "text-neutral-slate hover:text-accent-pink"
										}`}
									>
										{name}
									</Link>
								</li>
							))}
						</motion.ul>
					</>
				)}
			</nav>
		</motion.header>
	)
}
