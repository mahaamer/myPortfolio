import Navbar from "@/components/sections/Navbar"
import ContactBloom from "@/components/ui/ContactBloom"
import { Open_Sans, Poppins } from "next/font/google"
import type { ReactNode } from "react"
import "./globals.css"

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["400", "600", "700"],
	variable: "--font-poppins",
})

const openSans = Open_Sans({
	subsets: ["latin"],
	weight: ["400", "600"],
	variable: "--font-open-sans",
})

export const metadata = {
	title: "Maha Amer | Portfolio",
	description: "React Native & Full Stack Developer Portfolio",
}

interface RootLayoutProps {
	children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en" className={`${poppins.variable} ${openSans.variable}`}>
			<body className="font-sans bg-background text-neutral-white">
				<Navbar />
				{children}
				<ContactBloom />
			</body>
		</html>
	)
}
