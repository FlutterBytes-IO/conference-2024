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
      screens: {
        xs: "413px",
      },
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
      backgroundImage: {
        "multicolor-grad":
          "linear-gradient(to right, rgba(66, 133, 244, 0.8) 4%, rgba(234, 67, 53, 0.8) 28%, rgba(251, 188, 5, 0.8) 52%, rgba(66, 133, 244, 0.8) 73%, rgba(234, 67, 53, 0.8) 100%)",
        "green-grad":
          "linear-gradient(to right, rgba(0, 194, 103, 0.6) 4%, rgba(255, 255, 255, 0.6) 45%, rgba(0, 194, 103, 0.6) 100%)",
        "blue-grad":
          "linear-gradient(to right, rgba(69, 209, 253, 0.6) 4%, rgba(8, 89, 157, 0.6) 97%)",
        "hero-grad-dark":
          "linear-gradient(to right, #021429 4%, #052447 50%, #021429 92%)",
      },
      gridTemplateColumns: {
        agenda: "80px 1fr",
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
