export default function StyledImageContainer({
	src,
	otherstyles,
	innerstyles,
}: {
	src?: string;
	otherstyles?: string;
	innerstyles?: string;
}) {
	return (
		<div
			className={`relative ${otherstyles} h-[300px] w-[200px] border-b-2 border-blue-400 overflow-hidden p-4 rounded-[250px]`}
		>
			<div className="background-styles h-full w-full">
				<div
					className={`${innerstyles} h-full w-full rounded-[250px] bg-cover bg-center bg-no-repeat bg-clip-border`}
					style={{ backgroundImage: `url(${src || "/images/Avatar.png"})` }}
				></div>
			</div>
		</div>
	);
}

export function StyledLogoContainer({
	src,
	otherstyles,
	innerstyles,
	bgStyles,
}: {
	src?: string;
	otherstyles?: string;
	innerstyles?: string;
	bgStyles?: string;
}) {
	return (
		<div
			className={`relative ${otherstyles} border-b-2 border-blue-400 overflow-hidden p-2.5 rounded-[250px]`}
		>
			<div
				className={`h-full w-full ${bgStyles} p-1 rounded-[250px] bg-cover bg-center bg-no-repeat bg-clip-border relative`}
			>
				<div
					className={`${innerstyles} h-full w-full rounded-[250px] bg-white bg-cover bg-center bg-no-repeat bg-clip-border`}
					style={{ backgroundImage: `url(${src || "/images/Avatar.png"})` }}
				></div>
			</div>
		</div>
	);
}
