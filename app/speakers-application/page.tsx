import Image from "next/image";
import hero from "/images/speaker-hero.png";

export default function Speakers() {
	return (
		<section className="min-h-screen gradient-no-grid">
			<h2 className="font-gigaSans flex mx-auto w-fit text-center mt-[140px] py-[10px] px-5 border-y-[1.5px] border-fbc_blue-100 text-[32px] font-semibold relative z-10 heading-text">
				Apply to speak
			</h2>
			<div className="font-gigaSans flex flex-col sm:flex-row justify-between pt-[80px] max-w-[922px] mx-auto text-blue-500 relative z-10 sm:space-x-10">
				<div className="w-full sm:w-[45%] flex justify-center items-center">
					<Image
						src={"/images/speaker-hero.png"}
						width={394}
						height={300}
						alt="A speaker making presentation"
						className="w-full border border-fbc_blue-100 rounded-lg"
					/>
				</div>
				<div className="flex flex-col py-7 w-full sm:w-[55%] space-y-10">
					<p className="text-blue-500">
						At FlutterBytes Conference, we&rsquo;re dedicated to creating a
						premier event experience that connects professionals, thought
						leaders, and innovators from diverse backgrounds and industries. Our
						mission is to provide a platform for knowledge sharing,
						collaboration, and growth, fostering a community that drives
						progress and innovation.
					</p>
					<p className="text-[#424E57] text-lg font-medium">
						Deadline: Monday, July 2nd, 2024
					</p>
				</div>
			</div>
			{/* <div className="bg-[#EBF8FF] pt-[120px]"> */}
			<div className="pt-[120px] pb-[211px]">
				<div className="flex justify-center rounded-xl border border-blue-200 bg-gray-100 max-w-[920px] mx-auto relative z-10 py-10">
					<iframe
						src="https://docs.google.com/forms/d/e/1FAIpQLSd39eMZC47UoCR1yAJOlTyj5G8L5qv3LB4Z64Gxbt7JZLyOLg/viewform?embedded=true"
						width="640"
						height="790"
						className="w-full flex pr-1"
					>
						Loading…
					</iframe>
				</div>
			</div>
		</section>
	);
}
