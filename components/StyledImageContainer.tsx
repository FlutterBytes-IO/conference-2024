import Image from "next/image";

import Avatar from "@/public/images/Avatar.png";

export default function StyledImageContainer({ src }: { src: string }) {
	return (
		<div className="relative h-[300px] w-[200px] horizontal-grad-border-container">
			<Image
				src={src || Avatar}
				alt="profile"
				width={200}
				height={300}
				className="object-cover horizontal-grad-border w-full h-full"
			/>
		</div>
	);
}
