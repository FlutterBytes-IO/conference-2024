import Image from "next/image";
import hero from '/images/speaker-hero.png';

export default function Speakers() {
	return (
	  <main className="min-h-screen gradient-no-grid">
		<h1 className="font-gigaSans flex mx-auto w-fit text-center mt-[140px] py-[10px] px-5 border-y-[1.5px] border-[#D0EFFF] text-[32px] font-semibold relative z-10 heading-text">
		  Apply to speak
		</h1>
		<div className="font-gigaSans flex flex-col sm:flex-row justify-between speaker-container pt-[80px] w-[calc(100%_-_32px)] max-w-[992px] mx-auto text-[#03254C] relative z-10 sm:space-x-10">
		  <div className="w-full sm:w-[45%] flex justify-center items-center">
			<Image src={'/images/speaker-hero.png'} width={394} height={300} alt="A speaker making presentation" className="w-full border border-[#D0EFFF] rounded-lg" />
		  </div>
		  <div className="flex flex-col py-7 w-full sm:w-[55%] space-y-10">
			<p className="text-[#03254C]">At FlutterBytes Conference, we&rsquo;re dedicated to creating a premier event experience that connects professionals, thought leaders, and innovators from diverse backgrounds and industries. Our mission is to provide a platform for knowledge sharing, collaboration, and growth, fostering a community that drives progress and innovation.</p>
		  	<p className="text-[#424E57] text-lg font-medium">Deadline: Monday, July 2nd, 2024</p>
		  </div>
		</div>
		{/* <div className="bg-[#EBF8FF] pt-[120px]"> */}
		<div className="pt-[120px]">
			<div className="flex justify-center rounded-xl border border-[#2A9DF4] bg-gray-100 w-[calc(100%_-_32px)] max-w-[992px] mx-auto relative z-10 py-10 mb-[211px]">
				<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd39eMZC47UoCR1yAJOlTyj5G8L5qv3LB4Z64Gxbt7JZLyOLg/viewform?embedded=true" width="640" height="790" className="w-full flex pr-1">Loading…</iframe>
			</div>
		</div>
	  </main>
	);
  }
  