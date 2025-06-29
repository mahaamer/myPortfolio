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
			<div
				className="fixed inset-0 bg-black/50"
				onClick={onClose}
				aria-hidden="true"
			/>

			<div className="fixed inset-0 flex items-center justify-center p-4">
				<Dialog.Panel
					as={motion.div}
					initial={{ opacity: 0, scale: 0.95 }}
					animate={{ opacity: 1, scale: 1 }}
					exit={{ opacity: 0, scale: 0.95 }}
					className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl h-[90vh] overflow-hidden rounded-2xl backdrop-blur-lg bg-white/10 border border-white/20 shadow-lg p-0 text-white flex flex-col"
				>
					{/* Sticky header */}
					<div className="sticky top-0 z-10 bg-white/10 backdrop-blur-lg px-4 sm:px-6 pt-4 sm:pt-6 flex justify-between items-start">
						<Dialog.Title className="text-lg sm:text-xl font-bold">
							{title}
						</Dialog.Title>
						<button
							onClick={onClose}
							className="text-white hover:text-pink-400 p-1"
							aria-label="Close modal"
						>
							<X size={24} />
						</button>
					</div>

					{/* Scrollable content */}
					<div className="overflow-y-auto px-4 sm:px-6 pb-6 pt-2 space-y-4">
						{images && images.length > 0 && (
							<Swiper
								modules={[Navigation, Pagination]}
								spaceBetween={20}
								slidesPerView={1}
								navigation
								pagination={{ clickable: true }}
								className="rounded-xl overflow-hidden"
							>
								{images.map((img, idx) => (
									<SwiperSlide key={idx}>
										<div className="relative w-full h-[300px] sm:h-[500px] flex justify-center items-center bg-black/10 rounded-xl overflow-hidden">
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

						<p className="text-sm text-white/90">{description}</p>
						<ul className="list-disc pl-5 text-sm text-white/80 space-y-1">
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
					</div>
				</Dialog.Panel>
			</div>
		</Dialog>
	)
}
