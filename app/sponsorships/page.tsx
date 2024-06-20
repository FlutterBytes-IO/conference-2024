import Image from "next/image";
import Button from "@/components/Button";

import heroImage from "@/public/images/sponsorship-img.png";

export default function Sponsorships() {
  return (
    <section className="gradient-bg">
      <main className="flex relative z-10 my-[200px] mx-auto flex-col items-center w-4/5">
        <div>
          <h1>Become a Sponsor of FlutterBytes Conference 2024</h1>
        </div>
        <Image
          src={heroImage}
          alt="Image of some of our sponsors on our merch"
          className="transition-all duration-500 h-6 md:h-auto w-[122.53px] md:w-auto"
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
          <div>
            <Button children={"Send us a mail"} />
            <Button children={"Copy phone number"} />
          </div>
        </div>
      </main>
    </section>
  );
}
