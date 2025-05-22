import type { Config } from "tailwindcss"
import tailwindcssAnimate from "tailwindcss-animate"
import defaultTheme from "tailwindcss/defaultTheme"

const config: Config = {
	darkMode: "class",
	content: [
		"./src/app/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				background: "#0F172A", // Dark Slate Blue
				accent: {
					pink: "#EC4899", // Floral Pink
					violet: "#9333EA", // Violet
				},
				neutral: {
					white: "#F9FAFB",
					slate: "#94A3B8",
				},
			},
			fontFamily: {
				sans: ["Poppins", ...defaultTheme.fontFamily.sans],
				body: ["Open Sans", "sans-serif"],
			},
		},
	},
	plugins: [tailwindcssAnimate],
}

export default config
