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
			className={`relative ${otherstyles} h-[300px] w-[200px] border-b-2 border-blue-400 p-4 rounded-[250px]`}
		>
			<div
				className={`bg-clip-border h-full w-full ${innerstyles} bg-cover bg-center bg-no-repeat rounded-[250px] border-8 border-[#4287f5]/40`}
				style={{ backgroundImage: `url(${src || "/images/Avatar.png"})` }}
			></div>
		</div>
	);
}
