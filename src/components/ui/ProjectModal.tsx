"use client"
import { Dialog } from "@headlessui/react"
import { motion } from "framer-motion"
import { X } from "lucide-react"
import React from "react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

type ProjectModalProps = {
	isOpen: boolean
	onClose: () => void
	title: string
	images?: string[]
	description: string
	highlights: string[]
	tech: string[]
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
	isOpen,
	onClose,
	title,
	images,
	description,
	highlights,
	tech,
}) => {
	return (
		<Dialog open={isOpen} onClose={onClose} className="relative z-50">
			<div className="fixed inset-0 bg-black/50" aria-hidden="true" />
			<div className="fixed inset-0 flex items-center justify-center p-4">
				<Dialog.Panel
					as={motion.div}
					initial={{ opacity: 0, scale: 0.95 }}
					animate={{ opacity: 1, scale: 1 }}
					exit={{ opacity: 0, scale: 0.95 }}
					className="w-full max-w-xl rounded-2xl backdrop-blur-lg bg-white/10 border border-white/20 shadow-lg p-6 text-white"
				>
					<div className="flex justify-between items-start mb-4">
						<Dialog.Title className="text-xl font-bold">{title}</Dialog.Title>
						<button
							onClick={onClose}
							className="text-white hover:text-pink-400"
						>
							<X size={20} />
						</button>
					</div>

					{images && images.length > 0 && (
						<Swiper
							modules={[Navigation, Pagination]}
							spaceBetween={20}
							slidesPerView={1}
							navigation
							pagination={{ clickable: true }}
							className="rounded-xl overflow-hidden mb-6"
						>
							{images.map((img, idx) => (
								<SwiperSlide key={idx}>
									<div className="relative w-full h-[500px] flex justify-center items-center bg-black/10 rounded-xl overflow-hidden">
										<img
											src={img}
											alt={`${title} screen ${idx + 1}`}
											className="h-full object-contain rounded-xl shadow-lg"
										/>
									</div>
								</SwiperSlide>
							))}
						</Swiper>
					)}

					<p className="mb-4 text-sm text-white/90">{description}</p>
					<ul className="list-disc pl-5 mb-4 text-sm text-white/80 space-y-1">
						{highlights.map((item, i) => (
							<li key={i}>{item}</li>
						))}
					</ul>
					<div className="flex flex-wrap gap-2">
						{tech.map((tag, i) => (
							<span
								key={i}
								className="bg-pink-600/20 text-pink-200 text-xs font-medium px-2 py-1 rounded-md"
							>
								{tag}
							</span>
						))}
					</div>
				</Dialog.Panel>
			</div>
		</Dialog>
	)
}
