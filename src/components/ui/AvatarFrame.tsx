"use client"
import { motion } from "framer-motion"

export default function AvatarFrame({
	hovered,
	radius,
}: {
	hovered: boolean
	radius: string
}) {
	return (
		<div className="relative w-[250px] h-[300px] flex items-center justify-center z-10">
			<motion.div
				className="absolute inset-0  p-[6px] z-0"
				animate={{ rotate: [0, 360], borderRadius: radius }}
				transition={{
					rotate: { repeat: Infinity, ease: "linear", duration: 20 },
					borderRadius: { repeat: Infinity, ease: "easeInOut", duration: 1.5 },
				}}
				style={{
					borderRadius: radius,
					background:
						"linear-gradient(to bottom right, var(--color-accent-pink), var(--color-accent-violet))",
				}}
			>
				<div className="w-full h-full bg-background" />
			</motion.div>

			<div
				className="absolute inset-0 rounded-[100px]  p-[4px] pointer-events-none z-20"
				style={{
					background:
						"linear-gradient(to bottom right, var(--color-accent-pink), var(--color-accent-violet))",
					WebkitMask:
						"linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
					WebkitMaskComposite: "xor",
					maskComposite: "exclude",
					padding: "4px",
				}}
			>
				<div className="w-full h-full rounded-[100px] bg-background" />
			</div>

			<motion.div
				className="relative w-[260px] h-[360px] rounded-[90px] overflow-hidden z-30"
				role="img"
				aria-label="Cartoon avatar of Maha Amer"
			>
				<motion.img
					src="/maha-hero.png"
					alt="Maha Amer default"
					className="absolute inset-0 w-full h-full object-cover"
					initial={{ opacity: 1 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.2 }}
				/>
				<motion.img
					src="/maha-hero-hover.png"
					alt="Maha Amer smiling"
					className="absolute inset-0 w-full h-full object-cover pointer-events-none"
					initial={{ opacity: 0 }}
					animate={{ opacity: hovered ? 1 : 0 }}
					transition={{ duration: 0.2 }}
				/>
			</motion.div>
		</div>
	)
}
