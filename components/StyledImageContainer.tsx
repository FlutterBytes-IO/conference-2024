export default function StyledImageContainer({ src }: { src?: string }) {
	return (
		<div className="relative h-[300px] w-[200px] horizontal-grad-border-container">
			<div
				className="bg-clip-border h-full w-full bg-cover bg-center bg-no-repeat rounded-[250px] border-8 border-[#4287f5]/40"
				style={{ backgroundImage: `url(${src || "/images/Avatar.png"})` }}
			></div>
		</div>
	);
}
