"use client";
import { useContext } from "react";
import Image from "next/image";
import Button from "@/components/Button";
import GallerySection from "@/components/GallerySection";
import StyledImageContainer, {
  StyledLogoContainer,
} from "@/components/StyledImageContainer";
import { RightArrow2 } from "@/components/vectors/RightArrow";
import CalendarIcon from "@/components/vectors/CalendarIcon";
import TicketIcon from "@/components/vectors/TicketIcon";
import BeyondTheBorders from "@/components/vectors/BeyondTheBorders";
import { Agenda } from "../components/Agenda";
import { DarkmodeContext } from "@/context/DarkMode";
import { currentSpeakers, homepageSpeakers, sponsors } from "@/utils/data";
import Link from "next/link";

export default function Home() {
  const { isDarkmode } = useContext(DarkmodeContext);
  return (
    <section
      className={`flex min-h-screen flex-col gradient-no-grid w-full mx-auto`}
    >
      <div className={`${isDarkmode ? "hero-grad-dark z-20" : ""} max-md:px-5`}>
        <div
          className={`max-w-[758px] relative mx-auto w-full flex flex-col md:justify-center items-center mt-[140px] md:pb-[200px] max-md:mb-[120px] px-5 z-10 md:min-h-[60vh]`}
        >
          {isDarkmode ? (
            <Image
              src="/images/BeyondBordersTextDark.png"
              width={644}
              height={335}
              alt="beyond-borders"
              className="object-contain z-10"
            />
          ) : (
            <Image
              src="/images/BeyondBordersText.png"
              width={644}
              height={335}
              alt="beyond-borders"
              className="object-contain z-10"
            />
          )}

          {isDarkmode ? (
            <Image
              src="/images/LargeDarkGlobe.gif"
              width={140}
              height={140}
              alt="beyond-borders"
              className="object-contain hidden md:block absolute left-[265px] top-[130px]"
            />
          ) : (
            <Image
              src="/images/GlobeAnimation.gif"
              width={140}
              height={140}
              alt="beyond-borders"
              className="object-contain hidden md:block absolute left-[265px] top-[130px]"
            />
          )}
          {isDarkmode ? (
            <Image
              src="/images/SmallDarkGlobe.gif"
              width={80}
              height={80}
              alt="beyond-borders"
              className="object-contain globe md:hidden absolute"
            />
          ) : (
            <Image
              src="/images/GlobeAnimationsml.gif"
              width={80}
              height={80}
              alt="beyond-borders"
              className="object-contain globe md:hidden absolute"
              unoptimized
            />
          )}
          {/* <p className="text-neutral-700 text-center md:text-xl font-medium px-6 pb-3 border-b mb-3 italic">
          The Global Impact of African Flutter Developers/Engineers
        </p> */}
          <p
            className={`text-lg xs:text-xl max-md:font-medium md:text-4xl ${
              isDarkmode ? "text-neutral-400" : "text-neutral-500"
            } mt-4 xs:mt-0 leading-normal xs:leading-[67.2px] whitespace-nowrap xs:whitespace-normal text-center mb-8`}
          >
            &#123;FlutterBytes Conference 2024&#125;
          </p>
          <Button
            variant="contained"
            component="link"
            href="/live-page"
            target="_blank"
            icon={<RightArrow2 color="#fff" />}
            otherstyles="font-semibold text-2xl !rounded-[40px] !py-4 !pl-8 !pr-8 !text-base !md:text-2xl !font-semibold"
          >
            Watch Live
          </Button>
        </div>
      </div>
      <div
        className={`pb-[120px] flex justify-center relative z-10 px-5 ${
          isDarkmode ? "hero-grad-dark" : ""
        }`}
      >
        <div className="grid gap-8 md:gap-3 grid-cols-1 md:grid-rows-5 max-w-[920px] w-full">
          <div className="row-start-1 row-end-3 rounded-2xl bg-blue-200 bg-[url('/images/datebg-pattern.png')] bg-right bg-contain bg-no-repeat bg-blend-soft-light p-7 md:py-[46px] md:px-12 flex flex-col gap-y-6">
            <p className="flex items-center gap-x-2.5 text-white text-lg font-medium">
              <CalendarIcon /> A 2-day Event
            </p>
            <p className="text-white font-semibold text-[2rem] leading-[38px]">
              Friday and Saturday, <br className="max-md:hidden" />
              November 1st-2nd, 2024.
            </p>
            <div className="border border-dotted border-white pt-0.5 pb-1 px-[18px] rounded-[60px] w-fit">
              <p className="text-white text-lg font-medium">
                8:00AM on both days
              </p>
            </div>
          </div>
          <div className="md:row-start-3 md:row-end-5 flex flex-col md:flex-row gap-8 md:gap-3">
            <div className="bg-[url('/images/stat-bg.png')] rounded-2xl bg-center bg-cover py-10 px-[46px] flex place-content-center md:basis-[43%]">
              <div className="bg-white grid grid-cols-2 py-[17px] px-6 rounded-xl border border-blue-200 inner-shadow">
                <div className="flex flex-col text-center place-content-center">
                  <p className="font-semibold text-[2rem] leading-[38px] text-gradient">
                    16
                  </p>
                  <p className="text-neutral-500 font-medium text-base">
                    Speakers
                  </p>
                </div>
                <div className="flex flex-col text-center place-content-center">
                  <p className="font-semibold text-[2rem] leading-[38px] text-gradient">
                    500
                  </p>
                  <p className="text-neutral-500 font-medium text-base">
                    Flutter Devs
                  </p>
                </div>
                <div className="flex flex-col text-center place-content-center">
                  <p className="font-semibold text-[2rem] leading-[38px] text-gradient">
                    12
                  </p>
                  <p className="text-neutral-500 font-medium text-base">
                    Sessions
                  </p>
                </div>
                <div className="flex flex-col text-center place-content-center">
                  <p className="font-semibold text-[2rem] leading-[38px] text-gradient">
                    02
                  </p>
                  <p className="text-neutral-500 font-medium text-base">Days</p>
                </div>
              </div>
            </div>
            <Link
              href="https://www.google.com/maps/dir//Plot+9+Gbagada+Industrial+Scheme,+Beside+UPS,+Gbagada+Expressway/@6.5514241,3.2944381,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x103b8d73a658782b:0x7a1de11d89cccc84!2m2!1d3.37684!2d6.5514308?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              className="md:basis-[57%] max-md:h-[280px] flex bg-[url('/images/map-bg.png')] rounded-2xl bg-center bg-cover place-content-center border border-neutral-400"
            >
              <div className="flex flex-col justify-end pb-5">
                <Image
                  src="/images/somewhere-in-lag.png"
                  width={232}
                  height={58}
                  alt="somewhere-in-lag"
                  className="object-contain"
                />
              </div>
            </Link>
          </div>
          <div className="row-auto bg-fbc_blue-100 rounded-2xl py-9 px-9 flex flex-col gap-3 md:flex-row items-start md:items-center justify-between">
            <p className="text-blue-500 font-semibold text-[28px] leading-[33.6px] max-w-[270px]">
              Don’t miss out on all the fun!
            </p>
            <Button
              component="link"
              href="https://eventprime.co/e/flutter-bytes-conference-2024"
              target="_blank"
              leftIcon={<TicketIcon />}
              icon={<RightArrow2 color="#fff" />}
              otherstyles="gap-x-3"
            >
              Pick Up a Ticket
            </Button>
          </div>
        </div>
      </div>
      <div
        className={`${
          isDarkmode ? "bg-[#1167B1]" : "bg-blue-50"
        } relative z-10 pt-[116px] pb-32 flex flex-col items-center max-md:px-5 w-screen -mx-[50vw] left-1/2 right-1/2`}
      >
        <Agenda isHomePage={true} />
      </div>
      <div
        className={`flex flex-col items-center max-md:px-5 relative z-10 py-[120px] ${
          isDarkmode ? "hero-grad-dark" : ""
        }`}
      >
        <h3 className="text-center mb-[52px] heading-text w-fit py-2.5 px-5 border-y-[1.5px] border-fbc_blue-100 text-[2rem] leading-[38px] font-semibold">
          Meet the amazing lineup of Speakers
        </h3>
        <div className="grid grid-cols-1 xs:grid-cols-2 justify-center mb-10">
          {homepageSpeakers.map((speaker) => (
            <div key={speaker.name} className="flex flex-col items-center">
              <StyledImageContainer src={speaker?.image} />
              <p
                className={`mt-3 mb-1 font-semibold ${
                  isDarkmode ? "text-neutral-300" : "text-neutral-700"
                }`}
              >
                {speaker?.name}
              </p>
              <p
                className={`text-sm ${
                  isDarkmode ? "text-neutral-300" : "text-neutral-700"
                } text-center`}
              >
                {speaker?.role}
              </p>
            </div>
          ))}
        </div>
        <div className="self-center flex flex-col max-sm:gap-y-5 sm:flex-row items-center gap-x-10">
          <Button
            component="link"
            href="/speakers-application"
            variant="contained"
            otherstyles="text-base font-semibold py-3 px-5"
            icon={<RightArrow2 color="#fff" />}
          >
            Apply to speak
          </Button>
          <Button
            component="link"
            href="/speakers"
            variant="outlined"
            otherstyles="text-base font-semibold py-3 px-5"
            icon={<RightArrow2 />}
          >
            See all Speakers
          </Button>
        </div>
      </div>
      <div
        className={`flex max-md:px-5 flex-col items-center relative z-10 pb-[120px] ${
          isDarkmode ? "hero-grad-dark" : ""
        }`}
      >
        <h3
          className={`text-center mb-[52px] ${
            isDarkmode ? "text-white" : "text-neutral-900"
          } w-fit py-2.5 px-5 border-y-[1.5px] border-fbc_blue-100 text-[28px] leading-[42px] font-semibold`}
        >
          FlutterBytes Conference 2024 is being sponsored by:
        </h3>
        {/* <div className="grid grid-cols-2 md:grid-cols-5 gap-y-10 gap-x-5 md:gap-10 mb-12"> */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 place-content-center mb-12">
          {sponsors.map((sponsor, index) => (
            <Link
              href={sponsor.link}
              className="flex flex-col items-center"
              key={`key-${index++}`}
            >
              <StyledLogoContainer
                src={sponsor.image}
                otherstyles="!w-[150px] !h-[180px] p-2.5"
                innerstyles="border-4 border-white"
                bgStyles="bg-multicolor-grad"
              />
              <p
                className={`mt-3 mb-1 font-semibold ${
                  isDarkmode ? "text-neutral-300" : "text-neutral-700"
                }`}
              >
                {sponsor.company}
              </p>
              <p
                className={`text-sm ${
                  isDarkmode ? "text-neutral-300" : "text-neutral-700"
                } text-center`}
              >
                {sponsor.level} Sponsor
              </p>
            </Link>
          ))}
        </div>
        <div className="flex justify-center">
          <Button
            component="link"
            href="/sponsorships"
            icon={<RightArrow2 color="#fff" />}
            otherstyles="w-full py-3 px-5"
          >
            Be a sponsor
          </Button>
        </div>
      </div>
      <div
        id="gallery"
        className={`flex ${
          isDarkmode ? "hero-grad-dark" : ""
        } gap-y-[52px] flex-col items-center relative z-10 pt-[120px] w-screen -mx-[50vw] right-1/2 left-1/2`}
      >
        <div className="max-md:px-5">
          <h3
            className={`text-center ${
              isDarkmode ? "text-neutral-400" : "text-neutral-600"
            } w-fit py-2.5 px-5 border-y-[1.5px] border-fbc_blue-100 text-[28px] leading-[42px] font-semibold`}
          >
            Testimonials and Pictures from Previous Editions of FlutterBytes
            Conference
          </h3>
        </div>
        <GallerySection />
      </div>
      <div
        className={`flex flex-col items-center relative z-10 px-5 py-[120px] md:px-[120px] lg:px-[200px] hero-grad-dark ${
          isDarkmode ? " hero-grad-dark" : ""
        }`}
      >
        <h3 className="text-center mb-[52px] heading-text w-fit py-2.5 px-5 border-y-[1.5px] border-fbc_blue-100 text-[28px] leading-[42px] font-semibold">
          Meet the Organizing Committee
        </h3>
        <div className="grid grid-cols-1 x1:grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-5 md:gap-10 mb-10">
          <div className="flex flex-col items-center text-center">
            <StyledImageContainer src="https://i.ibb.co/Wk71k9H/IMG-7013-Flutter-Bytes.jpg" />
            <p
              className={`mt-3 mb-1 font-semibold ${
                isDarkmode ? "text-neutral-300" : "text-neutral-700"
              }`}
            >
              Jamiu Okanlawon
            </p>
            <p
              className={`text-sm ${
                isDarkmode ? "text-neutral-300" : "text-neutral-700"
              } text-center`}
            >
              Convener
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <StyledImageContainer src="https://i.ibb.co/GvHmn6y/professional-headshot-Adegoke-David.jpg" />
            <p
              className={`mt-3 mb-1 font-semibold ${
                isDarkmode ? "text-neutral-300" : "text-neutral-700"
              }`}
            >
              David Adegoke
            </p>
            <p
              className={`text-sm ${
                isDarkmode ? "text-neutral-300" : "text-neutral-700"
              } text-center`}
            >
              Co-Convener/Organizing Committee Lead
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <StyledImageContainer src="https://i.ibb.co/FHFNHQY/IMG-20230110-002128-829-Mariam-Hamzat.webp" />
            <p
              className={`mt-3 mb-1 font-semibold ${
                isDarkmode ? "text-neutral-300" : "text-neutral-700"
              }`}
            >
              Mariam Hamzat (BusyBee)
            </p>
            <p
              className={`text-sm ${
                isDarkmode ? "text-neutral-300" : "text-neutral-700"
              } text-center`}
            >
              Co-Convener/PowerHouse
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <StyledImageContainer src="https://robohash.org/flutterbyte.png" />
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
        <div className="self-center flex flex-col md:flex-row gap-y-5 items-center gap-x-10">
          <Button
            component="link"
            href="/volunteer"
            variant="contained"
            otherstyles="text-base font-semibold py-3 px-5"
            icon={<RightArrow2 color="#fff" />}
          >
            Apply to volunteer
          </Button>
          <Button
            component="link"
            href="/organizers"
            variant="outlined"
            otherstyles="text-base font-semibold hover:text-[#fff] group py-3 px-5"
            icon={<RightArrow2 />}
          >
            See full committee
          </Button>
        </div>
      </div>
    </section>
  );
}
