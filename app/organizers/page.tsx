"use client";
import { useContext } from "react";

import { DarkmodeContext } from "@/context/DarkMode";
import Lineup from "@/components/Lineup";
import { committee } from "@/utils/data";

export default function Organizers() {
  const { isDarkmode } = useContext(DarkmodeContext);

  return (
    <section
      className={`${
        isDarkmode ? "hero-grad-dark z-20" : ""
      } max-md:px-5 pt-[170px] md:pt-[200px]`}
    >
      <div
        className={`flex flex-col ${
          isDarkmode ? "" : "gradient-no-grid"
        } max-w-[920px] mx-auto w-[calc(100%_-_32px)] sm:w-[calc(100%_-_50px)] md:w-[calc(100%_-_64px)]`}
      >
        <h2 className="font-gigaSans flex mx-auto w-fit text-center py-[10px] px-5 border-y-[1.5px] border-fbc_blue-100 text-xl md:text-[32px] font-semibold relative z-10 heading-text">
          Organizing Committee
        </h2>
        <div
          style={{
            backgroundColor: `${isDarkmode ? "#1167B133" : "#D0EFFF"}`,
          }}
          className="font-gigaSans mt-8 md:mt-[52px] mb-[100px] py-3 px-[18px] md:py-5 md:px-[80px] xl:px-[111px] border-[0.5px] border-blue-100 text-blue-500 text-sm rounded-2xl relative z-10 space-y-5"
        >
          <p className={`${isDarkmode ? "text-[#FCFCFC]" : ""}`}>
            The success of FlutterBytes Conference is made possible by the
            tireless efforts of our dedicated Organizing Committee, comprising
            over 24 members from diverse backgrounds and expertise. Our
            committee members, drawn from various niches and aspects, bring
            their unique perspectives and skills to ensure a seamless and
            impactful event.
          </p>
          <p className={`${isDarkmode ? "text-[#FCFCFC]" : ""}`}>
            With representation from various tech niches such as mobile
            development, design, project management etc., the committee works
            together to curate a comprehensive program, secure esteemed
            Speakers, and create a conducive environment for meaningful
            connections and knowledge sharing.
          </p>
        </div>
        <div className="flex flex-col gap-y-10 mb-[100px]">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10 gap-x-5 md:gap-10 mb-10">
            {committee.map((item, index) => (
              <Lineup
                key={index}
                name={item.name}
                role={item.role}
                image={item.image}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
