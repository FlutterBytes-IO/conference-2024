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
          About us
        </h2>
        <div
          style={{
            backgroundColor: `${isDarkmode ? "#1167B133" : "#D0EFFF"}`,
          }}
          className="font-gigaSans mt-8 md:mt-[52px] mb-[100px] py-3 px-[18px] md:py-5 md:px-[80px] xl:px-[111px] border-[0.5px] border-blue-100 text-blue-500 text-sm rounded-2xl relative z-10 space-y-5"
        >
          <p className={`${isDarkmode ? "text-[#FCFCFC]" : ""}`}>
            At FlutterBytes Conference, we&rsquo;re dedicated to creating a
            premier event experience that connects professionals, thought
            leaders, and innovators from diverse backgrounds and industries. Our
            mission is to provide a platform for knowledge sharing,
            collaboration, and growth, fostering a community that drives
            progress and innovation.
          </p>
          <p className={`${isDarkmode ? "text-[#FCFCFC]" : ""}`}>
            With a commitment to excellence and a passion for making a
            meaningful impact, our team works tirelessly to curate a
            comprehensive program, secure esteemed Speakers, and create a
            conducive environment for meaningful connections and learning.
          </p>
          <div className={`${isDarkmode ? "text-[#FCFCFC]" : ""}`}>
            <p>Our values are:</p>
            <ul>
              <li>
                - Connection: We believe in the power of people coming together
                to achieve great things.
              </li>
              <li>
                - Innovation: We embrace fresh ideas and perspectives that shape
                the future.
              </li>
              <li>
                - Growth: We strive to create opportunities for personal and
                professional development.
              </li>
              <li>
                - Community: We&rsquo;re dedicated to building a supportive and
                inclusive network
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-y-10 mb-[100px] ">
          <h3 className="border-y-[1.5px] w-fit self-center border-fbc_blue-100 text-[28px] leading-[42px] text-center py-2.5 px-5 text-gradient font-semibold">
            Meet the Organizing Committee
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-5 md:gap-10 mb-10">
            <div className="flex flex-col items-center">
              <StyledImageContainer />
              <p
                className={`mt-3 mb-1 font-semibold ${
                  isDarkmode ? "text-neutral-300" : "text-neutral-700"
                }`}
              >
                Rebecca Omolabake
              </p>
              <p
                className={`text-sm ${
                  isDarkmode ? "text-neutral-300" : "text-neutral-700"
                } text-center`}
              >
                Senior Flutter Developer, EdenLife
              </p>
            </div>
            <div className="flex flex-col items-center">
              <StyledImageContainer />
              <p
                className={`mt-3 mb-1 font-semibold ${
                  isDarkmode ? "text-neutral-300" : "text-neutral-700"
                }`}
              >
                Rebecca Omolabake
              </p>
              <p
                className={`text-sm ${
                  isDarkmode ? "text-neutral-300" : "text-neutral-700"
                } text-center`}
              >
                Senior Flutter Developer, EdenLife
              </p>
            </div>
            <div className="flex flex-col items-center">
              <StyledImageContainer />
              <p
                className={`mt-3 mb-1 font-semibold ${
                  isDarkmode ? "text-neutral-300" : "text-neutral-700"
                }`}
              >
                Rebecca Omolabake
              </p>
              <p
                className={`text-sm ${
                  isDarkmode ? "text-neutral-300" : "text-neutral-700"
                } text-center`}
              >
                Senior Flutter Developer, EdenLife
              </p>
            </div>
            <div className="flex flex-col items-center">
              <StyledImageContainer />
              <p
                className={`mt-3 mb-1 font-semibold ${
                  isDarkmode ? "text-neutral-300" : "text-neutral-700"
                } text-center`}
              >
                +20 other committee members
              </p>
              <p
                className={`text-sm ${
                  isDarkmode ? "text-neutral-300" : "text-neutral-700"
                } text-center`}
              >
                Across 10 teams for effective conference planning.
              </p>
            </div>
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
