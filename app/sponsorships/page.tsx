"use client";
import Image from "next/image";
import { useContext } from "react";

import { DarkmodeContext } from "@/context/DarkMode";
import Button from "@/components/Button";
import heroImage from "@/public/images/sponsorship-img.png";
import { RightArrow2 } from "@/components/vectors/RightArrow";
import CopyIcon from "@/components/vectors/CopyIcon";

export default function Sponsorships() {
  const { isDarkmode } = useContext(DarkmodeContext);
  return (
    <div
      className={`${
        isDarkmode ? "hero-grad-dark z-20" : ""
      } max-md:px-5 pt-[170px] md:pt-[200px]`}
    >
      <section
        className={`${
          isDarkmode ? "" : "gradient-no-grid"
        } max-w-[922px] mx-auto`}
      >
        <h2 className="font-gigaSans flex mx-auto w-fit text-center py-[10px] px-5 border-y-[1.5px] border-fbc_blue-100 text-xl md:text-[32px] font-semibold relative z-10 heading-text">
          Become a Sponsor of FlutterBytes Conference 2024!
        </h2>
        <div className="flex relative z-10 px-4 mt-[50px] flex-col items-center">
          <Image
            src={heroImage}
            alt="Image of some of our sponsors on the FlutterBytes Conference merch"
            className="mb-12"
          />
          <div className="flex flex-col items-center xl:px-[111px] mb-[168px]">
            <div>
              <p
                className={`text-center text-xl ${
                  isDarkmode ? "text-fbc_blue-100" : "text-blue-500"
                }`}
              >
                Join us as a sponsor at Conference Name and connect with a
                targeted audience of number professionals, thought leaders, and
                innovators.
              </p>
              <br />
              <p
                className={`text-center text-xl ${
                  isDarkmode ? "text-fbc_blue-100" : "text-blue-500"
                }`}
              >
                By sponsoring our event, you&apos;ll be able to achieve your
                marketing goals and make a lasting impact. Contact us to discuss
                sponsorship packages and opportunities.{" "}
              </p>
            </div>
            <div className="flex w-full justify-center items-center flex-col sm:flex-row-reverse md:flex-row gap-4 mt-10">
              <Button
                variant="contained"
                otherstyles="text-base font-semibold"
                icon={<RightArrow2 color="#fff" />}
              >
                Send us a mail
              </Button>
              <Button
                component="button"
                onClick={()=>navigator.clipboard}
                variant="outlined"
                otherstyles="text-base font-semibold bg-white hover:text-[#fff] group"
                icon={<CopyIcon />}
              >
                Copy phone number
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
