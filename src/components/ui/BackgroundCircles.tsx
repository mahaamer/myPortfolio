import { motion } from "framer-motion"

export default function BackgroundCircles() {
	return (
		<>
			<motion.div
				className=" absolute w-[20rem] h-[20rem] bg-accent-pink40 rounded-full blur-[100px] top-[-6rem] left-[-5rem]"
				animate={{ x: [0, 30, 0], y: [0, 50, 0] }}
				transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
			/>
			<motion.div
				className="absolute w-[25rem] h-[25rem] bg-accent-violet40 rounded-full blur-[120px] top-[10rem] right-[-8rem]"
				animate={{ x: [0, -40, 0], y: [0, -60, 0] }}
				transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
			/>
			<motion.div
				className="absolute w-[25rem] h-[25rem] bg-accent-slate40 rounded-full blur-[90px] bottom-[10rem] left-[20%]"
				animate={{ x: [0, 20, -20, 0], y: [0, -30, 30, 0] }}
				transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
			/>
		</>
	)
}
