"use client";
import { useContext } from "react";

import { DarkmodeContext } from "@/context/DarkMode";
import Button from "@/components/Button";
import StyledImageContainer from "@/components/StyledImageContainer";
import { RightArrow2 } from "@/components/vectors/RightArrow";

export default function About() {
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
         Watch Live
        </h2>
        <div
          style={{
            backgroundColor: `${isDarkmode ? "#1167B133" : "#D0EFFF"}`,
          }}
          className="font-gigaSans mt-8 md:mt-[52px] mb-[100px] py-3 px-[18px] md:py-5 md:px-[80px] xl:px-[111px] border-[0.5px] border-blue-100 text-blue-500 text-sm rounded-2xl relative z-10 space-y-5"
        >
          <p className={`${isDarkmode ? "text-[#FCFCFC]" : ""}`}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/dXrvd3nKKFE?si=90T1-XOJESe9hxWL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </p>
        </div>
        <div className="flex flex-col gap-y-10 mb-[100px]">
          <h3 className="border-y-[1.5px] w-fit self-center border-fbc_blue-100 text-[28px] leading-[42px] text-center py-2.5 px-5 text-gradient font-semibold">
            Meet the Organizing Committee
          </h3>
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10 gap-x-5 md:gap-10 mb-10">
            
          </div>
          <div className="flex w-full flex-col justify-center items-center sm:flex-row gap-4 mt-10">
            <Button
              component="link"
              href="/volunteer"
              variant="contained"
              otherstyles="text-base font-semibold"
              icon={<RightArrow2 color="#fff" />}
            >
              Apply to volunteer
            </Button>
            <Button
              component="link"
              href="/organizers"
              variant="outlined"
              otherstyles="text-base font-semibold hover:text-[#fff] group"
              icon={<RightArrow2 />}
            >
              See full committee
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
