"use client";
import { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Swiper as SwiperCore } from "swiper/types";
import DirectionLeft, { DirectionRight } from "./vectors/DirectionArrow";

export default function GallerySection() {
	const swiperRef = useRef<SwiperCore | null>(null);
	const paginationRef = useRef<HTMLDivElement>(null);

	return (
		<div className="flex flex-col gap-y-11">
			<div
				style={{
					width: "100vw",
					maxWidth: "100%",
					position: "relative",
				}}
			>
				<Swiper
					onBeforeInit={(swiper) => {
						swiperRef.current = swiper;
					}}
					pagination={{
						el: paginationRef.current,
						clickable: true,
						renderBullet: (index, className) => {
							return `<span class="${className}"></span>`;
						},
					}}
					autoplay={{
						delay: 3000,
					}}
					speed={500}
					loop={true}
					grabCursor={true}
					spaceBetween={0}
					modules={[Pagination, Autoplay, Navigation]}
					breakpoints={{
						420: {
							slidesPerView: 1,
						},
						600: {
							slidesPerView: 1,
						},
						980: {
							slidesPerView: 1,
						},
						1020: {
							slidesPerView: 1,
						},
						1240: {
							slidesPerView: 1,
						},
					}}
				>
					{[...Array(6)].map((_, index) => (
						<SwiperSlide key={index}>
							<div className="relative w-full h-[400px] md:h-[1064.35px]">
								<Image
									src="/images/full-length-gallery.png"
									alt="gallery"
									fill
									className="object-contain"
								/>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
			<div className="flex justify-center items-center gap-x-8 relative">
				<button
					className="border-[1.57px] rounded-[62.61px] py-[18.78px] px-[12.78px] flex items-center justify-center border-neutral-400"
					onClick={() => swiperRef.current?.slidePrev()}
				>
					<DirectionLeft active />
				</button>
				<div
					ref={paginationRef}
					className="swiper-pagination !relative flex items-center gap-x-[12.52px] w-fit max-w-fit"
				></div>
				<button
					className="border-[1.57px] rounded-[62.61px] py-[18.78px] px-[12.78px] flex items-center justify-center border-neutral-400"
					onClick={() => swiperRef.current?.slideNext()}
				>
					<DirectionRight active />
				</button>
			</div>
		</div>
	);
}
