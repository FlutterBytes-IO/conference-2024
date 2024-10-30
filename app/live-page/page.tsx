"use client";
import { useContext } from "react";

import { DarkmodeContext } from "@/context/DarkMode";
import Button from "@/components/Button";
import StyledImageContainer from "@/components/StyledImageContainer";
import { RightArrow2 } from "@/components/vectors/RightArrow";

export default function LivePage() {
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
          Live Page
        </h2>
        <div className="font-gigaSans mt-8 md:mt-[52px] mb-[100px] relative z-10 space-y-5">
          <div
            style={{
              backgroundColor: `${isDarkmode ? "#1167B133" : "#D0EFFF"}`,
            }}
            className="p-2 border-[0.5px] border-blue-100 text-blue-500 rounded-2xl"
          >
            <iframe
              width="100%"
              height="500px"
              src="https://www.youtube.com/embed/dXrvd3nKKFE?autoplay=1"
              title="YouTube live stream"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-2xl h-[400px] sm:h-[500px]"
            ></iframe>
          </div>
          <p className="text-2xl md:text-4xl font-semibold dark:text-fbc_blue-100 text-blue-400">
            Ruby Hall
          </p>
        </div>
        <div className="flex flex-col gap-y-10 mb-[100px]">
          <h3 className="border-y-[1.5px] w-fit self-center border-fbc_blue-100 text-[28px] leading-[42px] text-center py-2.5 px-5 text-gradient font-semibold">
            Meet the Organizing Committee
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-5 md:gap-10 mb-10">
            <div className="font-gigaSans space-y-5">
              <div
                style={{
                  backgroundColor: `${isDarkmode ? "#1167B133" : "#D0EFFF"}`,
                }}
                className="p-2 border-[0.5px] border-blue-100 rounded-2xl"
              >
                <iframe
                  width="100%"
                  height="400px"
                  src="https://www.youtube.com/embed/-xD5zcRgJH8?autoplay=1"
                  title="YouTube live stream"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-2xl"
                ></iframe>
              </div>
              <p className="text-2xl md:text-3xl font-semibold dark:text-fbc_blue-100 text-blue-400">
                Emerald Hall
              </p>
            </div>
            <div className="font-gigaSans space-y-5">
              <div
                style={{
                  backgroundColor: `${isDarkmode ? "#1167B133" : "#D0EFFF"}`,
                }}
                className="p-2 border-[0.5px] border-blue-100 rounded-2xl"
              >
                <iframe
                  width="100%"
                  height="400px"
                  src="https://www.youtube.com/embed/oX2nflUz3vQ?autoplay=1"
                  title="YouTube live stream"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-2xl"
                ></iframe>
              </div>
              <p className="text-2xl md:text-3xl font-semibold dark:text-fbc_blue-100 text-blue-400">
                Sapphire Hall
              </p>
            </div>
            <div className="font-gigaSans space-y-5">
              <div
                style={{
                  backgroundColor: `${isDarkmode ? "#1167B133" : "#D0EFFF"}`,
                }}
                className="p-2 border-[0.5px] border-blue-100 rounded-2xl"
              >
                <iframe
                  width="100%"
                  height="400px"
                  src="https://www.youtube.com/embed/-xD5zcRgJH8?autoplay=1"
                  title="YouTube live stream"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-2xl"
                ></iframe>
              </div>
              <p className="text-2xl md:text-3xl font-semibold dark:text-fbc_blue-100 text-blue-400">
                Ruby Hall
              </p>
            </div>
            <div className="font-gigaSans space-y-5">
              <div
                style={{
                  backgroundColor: `${isDarkmode ? "#1167B133" : "#D0EFFF"}`,
                }}
                className="p-2 border-[0.5px] border-blue-100 rounded-2xl"
              >
                <iframe
                  width="100%"
                  height="400px"
                  src="https://www.youtube.com/embed/oX2nflUz3vQ?autoplay=1"
                  title="YouTube live stream"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-2xl"
                ></iframe>
              </div>
              <p className="text-2xl md:text-3xl font-semibold dark:text-fbc_blue-100 text-blue-400">
                Emerald Hall
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
