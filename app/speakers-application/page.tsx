"use client";
import Image from "next/image";
import { useContext } from "react";

import { DarkmodeContext } from "@/context/DarkMode";

export default function Speakers() {
  const { isDarkmode } = useContext(DarkmodeContext);
  return (
    <div
      className={`${
        isDarkmode ? "hero-grad-dark z-20" : ""
      } max-md:px-5 pt-[200px]`}
    >
      <section
        className={`min-h-screen ${
          isDarkmode ? "" : "gradient-no-grid"
        } flex flex-col w-[calc(100%_-_32px)] sm:w-[calc(100%_-_50px)] md:w-[calc(100%_-_64px)] mx-auto`}
      >
        <h2 className="font-gigaSans flex mx-auto w-fit text-center py-[10px] px-5 border-y-[1.5px] border-fbc_blue-100 text-xl md:text-[32px] font-semibold relative z-10 heading-text">
          Apply to speak
        </h2>
        <div className="font-gigaSans flex flex-col sm:flex-row justify-between pt-8 md:pt-[80px] max-w-[922px] mx-auto text-blue-500 relative z-10 sm:space-x-10">
          <div className="w-full sm:w-[45%] flex justify-center items-center">
            <Image
              src={"/images/speaker-hero.png"}
              width={394}
              height={300}
              alt="A speaker making presentation"
              className="w-full border border-fbc_blue-100 rounded-lg"
            />
          </div>
          <div className="flex flex-col pt-11 md:py-7 w-full sm:w-[55%] space-y-10">
            <p
              className={`${
                isDarkmode ? "text-fbc_blue-100" : "text-blue-500"
              } mt-3 md:mt-0`}
            >
              At FlutterBytes Conference, we&rsquo;re dedicated to creating a
              premier event experience that connects professionals, thought
              leaders, and innovators from diverse backgrounds and industries.
              Our mission is to provide a platform for knowledge sharing,
              collaboration, and growth, fostering a community that drives
              progress and innovation.
            </p>
            <p
              className={`${
                isDarkmode ? "text-white" : "text-[#424E57]"
              } text-lg font-medium mb-3 md:mb-0`}
            >
              Deadline: Monday, July 2nd, 2024
            </p>
          </div>
        </div>
        {/* <div className="bg-[#EBF8FF] pt-[120px]"> */}
        <div className="pt-10 md:pt-[120px] pb-[211px]">
          <div className="flex justify-center rounded-xl border border-blue-200 bg-gray-100 max-w-[920px] mx-auto relative z-10 py-10">
            <iframe
              src="https://sessionize.com/flutterbytes-conference-2024/viewform?embedded=true"
              width="640"
              height="790"
              className="w-full flex pr-1"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
