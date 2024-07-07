"use client";

import { useDarkmode } from "@/context/DarkMode";

export default function RightArrow({ dark }: { dark?: boolean }) {
	const isDarkmode = useDarkmode();
	return (
		<svg
			width="17"
			height="7"
			viewBox="0 0 17 7"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			style={{ transition: "fill 0.5s ease-in-out" }}
		>
			<path
				d="M16.5 3.5L11.5 0.613249V6.38675L16.5 3.5ZM0.5 4H12V3H0.5V4Z"
				fill={isDarkmode || dark ? "#ffffff" : "#187BCD"}
			/>
		</svg>
	);
}

export function RightArrow2({ color }: { color?: string }) {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M3.75 12H20.25M20.25 12L13.5 5.25M20.25 12L13.5 18.75"
				stroke={color || "#2A9DF4"}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}
