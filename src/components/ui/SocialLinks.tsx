import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa"

export default function SocialLinks() {
	return (
		<div className="flex space-x-6 mt-6 mb-2">
			<motion.a
				href="https://github.com/mahaamer"
				target="_blank"
				rel="noopener noreferrer"
				whileHover={{ scale: 1.2 }}
				whileTap={{ scale: 0.95 }}
				className="text-neutral-300 hover:text-white transition-colors duration-200"
			>
				<FaGithub size={24} />
			</motion.a>
			<motion.a
				href="https://linkedin.com/in/mahaamer"
				target="_blank"
				rel="noopener noreferrer"
				whileHover={{ scale: 1.2 }}
				whileTap={{ scale: 0.95 }}
				className="text-neutral-300 hover:text-white transition-colors duration-200"
			>
				<FaLinkedin size={24} />
			</motion.a>
			<motion.a
				href="https://wa.me/201003765461"
				target="_blank"
				rel="noopener noreferrer"
				whileHover={{ scale: 1.2 }}
				whileTap={{ scale: 0.95 }}
				className="text-neutral-300 hover:text-white transition-colors duration-200"
			>
				<FaWhatsapp size={24} />
			</motion.a>
		</div>
	)
}
