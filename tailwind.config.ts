import type { Config } from "tailwindcss";

const config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
			colors: {
				blue: {
					50: "#EBF8FF",
					100: "#1167B1",
					200: "#2A9DF4",
					300: "#187BCD",
					400: "#1167B1",
					500: "#03254C",
				},
				fbc_blue: {
					100: "#D0EFFF",
				},
				neutral: {
					300: "#DEE2E4",
					400: "#BCC5CB",
					500: "#879CAA",
					600: "#647682",
					700: "#424E57",
					800: "#20272B",
					900: "#000000",
				},
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
