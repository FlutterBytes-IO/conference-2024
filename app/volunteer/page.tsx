"use client";
import Image from "next/image";
import { useContext } from "react";

import { DarkmodeContext } from "@/context/DarkMode";

export default function Volunteer() {
  const { isDarkmode } = useContext(DarkmodeContext);
  return (
    <div
      className={`${
        isDarkmode ? "hero-grad-dark z-20" : ""
      } max-md:px-5 px-4 sm:px-5 pt-[170px] md:pt-[200px]`}
    >
      <section
        className={`${isDarkmode ? "" : "gradient-no-grid"}`}
      >
        <h2 className="font-gigaSans flex mx-auto w-fit text-center py-[10px] px-5 border-y-[1.5px] border-fbc_blue-100 text-xl md:text-[32px] font-semibold relative z-10 heading-text">
          Apply to volunteer
        </h2>
        <div className="font-gigaSans flex flex-col sm:flex-row justify-between pt-8 max-w-[922px] mx-auto text-blue-500 relative z-10 sm:gap-x-10">
          <div className="flex flex-col py-7 space-y-10 flex-1">
            <p
              className={`${
                isDarkmode ? "text-fbc_blue-100" : "text-blue-500"
              }`}
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
              } text-lg font-medium`}
            >
              Deadline: Monday, July 2nd, 2024
            </p>
          </div>
          <Image
            src={"/images/volunteer.png"}
            width={300}
            height={300}
            alt="A speaker making presentation"
            className="border border-fbc_blue-100 rounded-full object-cover mx-auto sm:mx-0"
          />
        </div>

        <div className="pt-[60px] pb-[120px] md:pb-[319px]">
          <div className="flex justify-center rounded-xl border border-blue-200 bg-gray-100 max-w-[920px] mx-auto relative z-10 py-10">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSdzCtkzxC6v-0PCP4nm2LI6JiTf1e4y9UH3iSsA5WseBW_j6w/viewform?embedded=true"
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
