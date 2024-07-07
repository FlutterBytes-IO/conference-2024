export default function DirectionLeft({ active }: { active: boolean }) {
	return (
		<svg
			width="38"
			height="39"
			viewBox="0 0 38 39"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g clipPath="url(#clip0_1565_2248)">
				<path
					d="M24.3828 26.9233L17.2141 19.739L24.3828 12.5546L22.1759 10.3477L12.7846 19.739L22.1759 29.1303L24.3828 26.9233Z"
					fill={active ? "#2A9DF4" : "#DEE2E4"}
				/>
			</g>
			<defs>
				<clipPath id="clip0_1565_2248">
					<rect
						width="37.5652"
						height="37.5652"
						fill="white"
						transform="matrix(-1 0 0 1 37.8242 0.956543)"
					/>
				</clipPath>
			</defs>
		</svg>
	);
}

export function DirectionRight({ active }: { active: boolean }) {
	return (
		<svg
			width="38"
			height="39"
			viewBox="0 0 38 39"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g clipPath="url(#clip0_1565_2259)">
				<path
					d="M13.6172 26.9233L20.7859 19.739L13.6172 12.5546L15.8241 10.3477L25.2154 19.739L15.8241 29.1303L13.6172 26.9233Z"
					fill={active ? "#2A9DF4" : "#DEE2E4"}
				/>
			</g>
			<defs>
				<clipPath id="clip0_1565_2259">
					<rect
						width="37.5652"
						height="37.5652"
						fill="white"
						transform="translate(0.175781 0.956543)"
					/>
				</clipPath>
			</defs>
		</svg>
	);
}
