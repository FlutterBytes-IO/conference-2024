import Image from "next/image";

import Avatar from "@/public/images/Avatar.png";

export default function StyledImageContainer() {
	return (
		<div className="relative h-[300px] w-[200px] horizontal-grad-border-container">
			<Image
				src={Avatar}
				alt="profile"
				className="object-cover horizontal-grad-border w-full h-full"
			/>
		</div>
	);
}
