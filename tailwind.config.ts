import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				blue: {
					50: "#EBF8FF",
					100: "#1167B1",
					200: "#2A9DF4",
					300: "#187BCD",
					400: "#1167B1",
					500: "#03254C",
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
	plugins: [],
};
export default config;
