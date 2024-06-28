"use client";

import Image from "next/image";
import { useState } from "react";

import Button from "@/components/Button";
import heroImage from "@/public/images/sponsorship-img.png";
import { RightArrow2 } from "@/components/vectors/RightArrow";
import CopyIcon from "@/components/vectors/CopyIcon";
import TickIcon from "@/components/vectors/TickIcon";

export default function Sponsorships() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const phoneNumber = "+2348108627764";
    navigator.clipboard.writeText(phoneNumber).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section className="min-h-screen gradient-no-grid max-w-[922px] mx-auto">
      <h2 className="font-gigaSans md:px-[33px] relative z-10 text-[2rem] leading-[38px] text-center mt-[140px] py-[10px] px-5 border-y-[1.5px] border-fbc_blue-100 font-semibold heading-text">
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
            <p className="text-center text-xl text-blue-500">
              Join us as a sponsor at Conference Name and connect with a
              targeted audience of number professionals, thought leaders, and
              innovators.{" "}
            </p>
            <br />
            <p className="text-center text-xl text-blue-500">
              By sponsoring our event, you&apos;ll be able to achieve your
              marketing goals and make a lasting impact. Contact us to discuss
              sponsorship packages and opportunities.{" "}
            </p>
          </div>
          <div className="flex w-full flex-col justify-center items-center sm:flex-row gap-4 mt-10">
            <a href="mailto:contact.flutterbytes@gmail.com">
              <Button
                variant="contained"
                otherstyles="text-base font-semibold"
                icon={<RightArrow2 color="#fff" />}
              >
                Send us a mail
              </Button>
            </a>
            <Button
              variant="outlined"
              otherstyles="text-base font-semibold"
              icon={copied ? <TickIcon fill="#2a9df4" /> : <CopyIcon />}
              onClick={handleCopy}
            >
              {copied ? "Copied!" : "Copy phone number"}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
