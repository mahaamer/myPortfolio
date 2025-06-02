"use client"
import { motion } from "framer-motion"

type TimelineItemProps = {
	title: string
	org: string
	duration: string
	bullets: string[]
	image: string
	bulletColor: "blue" | "green"
	datePosition?: "left" | "right"
}

export default function TimelineItem({
	title,
	org,
	duration,
	bullets,
	image,
	datePosition = "left",
}: TimelineItemProps) {
	return (
		<div className="relative flex flex-col md:flex-row gap-6 items-start pl-8 md:pl-12">
			{/* === Date + Image Column === */}
			<div className="flex flex-col items-center gap-3 w-24 md:w-32 flex-shrink-0">
				<span
					className={`text-xs md:text-sm px-3 py-1 rounded-full font-medium bg-white/10 text-white border border-white/20 backdrop-blur-md ${
						datePosition === "right"
							? "md:ml-auto md:mr-[-100px]"
							: "md:mr-auto md:ml-[-90px]"
					}`}
				>
					{duration}
				</span>
				<img src={image} className="w-full object-contain" alt={title} />
			</div>

			{/* === Card === */}
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className="bg-white/10 border border-white/20 backdrop-blur-md rounded-xl p-6 w-full text-sm md:text-[15px] lg:text-base"
			>
				<h4 className="text-base md:text-lg font-bold text-pink-400">
					{title}
				</h4>
				<p className="mb-2 text-xs md:text-sm text-gray-300">{org}</p>
				<ul className="space-y-2 text-xs md:text-sm text-gray-200">
					{bullets.map((point, idx) => (
						<li key={idx} className="list-disc list-inside">
							{point}
						</li>
					))}
				</ul>
			</motion.div>
		</div>
	)
}
