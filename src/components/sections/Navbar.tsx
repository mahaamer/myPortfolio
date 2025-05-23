"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useEffect, useState } from "react"

const navItems = [
	{ name: "About", href: "#about" },
	{ name: "Skills", href: "#skills" },
	{ name: "Projects", href: "#projects" },
	{ name: "Contact", href: "#contact" },
]

export default function Navbar() {
	const [scrolled, setScrolled] = useState(false)
	const [active, setActive] = useState("")

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20)
		}
		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

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
					className="text-xl font-bold tracking-wide text-neutral-white hover:text-accent-pink transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
				>
					Maha Amer
				</Link>
				<ul className="hidden md:flex items-center gap-6">
					{navItems.map(({ name, href }) => (
						<li key={href}>
							<Link
								href={href}
								onClick={() => setActive(href)}
								className={`text-base font-medium transition-colors duration-200 ${
									active === href
										? "text-accent-pink"
										: "text-neutral-slate hover:text-accent-pink"
								} focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-violet`}
								aria-current={active === href ? "page" : undefined}
							>
								{name}
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</motion.header>
	)
}
