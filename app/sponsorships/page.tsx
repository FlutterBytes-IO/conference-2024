import Image from "next/image";
import Button from "@/components/Button";

import heroImage from "@/public/images/sponsorship-img.png";

export default function Sponsorships() {
  return (
    <section className="gradient-bg">
      <main className="flex relative z-10 px-4 py-32 md:py-[180px] flex-col items-center md:w-4/5 sm:w-full mx-0 sm:mx-auto">
        <div className="mb-12 border-y-2 border-fbc_blue-100 py-[10px]">
          <h1 className="text-gradient text-center text-xl md:text-3xl font-semibold">
            Become a Sponsor of FlutterBytes Conference 2024!
          </h1>
        </div>
        <Image
          src={heroImage}
          alt="Image of some of our sponsors on the FlutterBytes Conference merch"
          className="mb-12 md:h-auto sm:max-w-[80%]"
        />
        <div className="flex flex-col items-center max-w-[700px]">
          <div>
            <p className="text-center">
              Join us as a sponsor at Conference Name and connect with a
              targeted audience of number professionals, thought leaders, and
              innovators.{" "}
            </p>
            <br />
            <p className="text-center">
              By sponsoring our event, you'll be able to achieve your marketing
              goals and make a lasting impact. Contact us to discuss sponsorship
              packages and opportunities.{" "}
            </p>
          </div>
          <div className="flex w-full flex-col justify-center sm:sm:flex-row gap-2 mt-8">
            <Button
              children={"Send us a mail"}
			  otherstyles="flex justify-center w-full sm:w-fit"
            />
            <Button
              children={"Copy phone number"}
              otherstyles="flex w-full bg-transparent text-[#2A9DF4] border-[1.5px] border-[#2A9DF4] justify-center sm:w-fit"
            />
          </div>
        </div>
      </main>
    </section>
  );
}
