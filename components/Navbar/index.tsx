/* eslint-disable react/display-name */
"use client";

import { useContext, forwardRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DarkmodeContext } from "@/context/DarkMode";

import Button from "../Button";
import NavLogoDark from "@/public/images/NavLogoDark.svg";
import NavLogoLight from "@/public/images/NavLogoLight.svg";
import DarkModeIcon, { LightModeIcon } from "../vectors/ModeIcon";
import HamburgerIcon from "../vectors/HamburgerIcon";
import CancelIcon from "../vectors/CancelIcon";
import { NavbarProps } from "@/types";
import { RightArrow2 } from "../vectors/RightArrow";

const Navbar = forwardRef<HTMLDivElement, NavbarProps>(
  ({ handleClick }, ref) => {
    const { isDarkmode, setIsDarkmode } = useContext(DarkmodeContext);
    const [scrollPosition, setScrollPosition] = useState<number | null>(null);
    const [showMobileNav, setShowMobileNav] = useState(false);
    const pathname = usePathname();
    const updateScrollPosition = () => {
      setScrollPosition(window.scrollY);
    };

    useEffect(() => {
      window.addEventListener("scroll", updateScrollPosition);

      return () => window.removeEventListener("scroll", updateScrollPosition);
    }, []);

    useEffect(() => {
      setShowMobileNav(false);
    }, [pathname]);

    return (
      <nav
        ref={ref}
        className={`px-5 md:px-10 top-0 bg-opacity-[10%] backdrop-blur-[10px] ${
          scrollPosition! > 50 ? "bg-white" : "bg-transparent"
        } py-5 transition-all z-30 duration-500 flex items-center gap-x-10 justify-between fixed w-screen ${
          isDarkmode
            ? "border-[#1167B1] hero-grad-dark"
            : "border-[#D0EFFF] bg-transparent"
        }`}
      >
        <Link
          href="/"
          className="relative max-xl:after:hidden after:absolute after:content-[''] after:left-full after:top-1/2 after:-translate-y-1/2 after:w-[125%] after:overflow-hidden after:h-px after:bg-fbc_blue-100"
        >
          <Image
            src={isDarkmode ? NavLogoDark : NavLogoLight}
            alt="logo"
            className="transition-all duration-500 h-6 md:h-auto w-[122.53px] md:w-auto"
          />
        </Link>
        <div className="lg:hidden gap-3 flex">
          <button onClick={() => setIsDarkmode((prev) => !prev)}>
            {isDarkmode ? <DarkModeIcon /> : <LightModeIcon />}
          </button>
          <button onClick={() => setShowMobileNav((prev) => !prev)}>
            {showMobileNav ? <CancelIcon /> : <HamburgerIcon />}
          </button>
          <div
            className={`absolute top-14 -left-3 xs:left-0 py-3 px-5 lg:hidden w-full flex !bg-opacity-100 justify-between transition duration-500 ${
              showMobileNav ? "translate-x-0" : "-translate-x-full"
            } ${isDarkmode ? "bg-hero-grad-dark" : "bg-neutral-50"}`}
          >
            <div
              className={`flex flex-col gap-y-[9px] py-2  ml-1 xs:ml-0 pl-2 xs:pl-3 border-l ${
                isDarkmode ? "border-blue-200" : "border-neutral-400"
              }`}
            >
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSc8NVvyUfiSlrJpC-WAHrH_1T1j-KAGvToEDYX11xeYo02rjQ/viewform"
                className={`flex items-center py-1.5 px-1 w-[140px] justify-between text-[11px] font-semibold ${
                  isDarkmode ? "text-blue-300" : "text-neutral-500"
                }`}
              >
                Product Showcase
                <RightArrow2 color={!isDarkmode ? "#879CAA" : ""} />
              </Link>
              <Link
                href="https://drive.google.com/file/d/1fy53GKvSgOuhk6ZqjcWthuhFCHVomHve/view?usp=sharing"
                className={`flex items-center py-1.5 px-1 w-[130px] justify-between text-[11px] font-semibold ${
                  isDarkmode ? "text-blue-300" : "text-neutral-500"
                }`}
              >
                Hackathon
                <RightArrow2 color={!isDarkmode ? "#879CAA" : ""} />
              </Link>
            </div>
            <div
              className={`flex flex-col gap-y-[9px] py-2 ml-1 xs:ml-0 pl-2 xs:pl-3 border-l ${
                isDarkmode ? "border-blue-200" : "border-neutral-400"
              }`}
            >
              <Link
                href="/about"
                className={`flex items-center py-1.5 px-1 w-[130px] justify-between text-[11px] font-semibold ${
                  isDarkmode ? "text-blue-300" : "text-neutral-500"
                }`}
              >
                About us
                <RightArrow2 color={!isDarkmode ? "#879CAA" : ""} />
              </Link>
              <Link
                href="/sponsorships"
                className={`flex items-center py-1.5 px-1 w-[130px] justify-between text-[11px] font-semibold ${
                  isDarkmode ? "text-blue-300" : "text-neutral-500"
                }`}
              >
                Be a sponsor
                <RightArrow2 color={!isDarkmode ? "#879CAA" : ""} />
              </Link>
            </div>
          </div>
        </div>
        <div
          className={`hidden z-10 lg:flex items-center bg-opacity-[84%] gap-x-3 px-3 py-1 rounded-[60px] border ${
            isDarkmode
              ? "bg-[#1167B1CC] border-blue-300"
              : "bg-white border-fbc_blue-100"
          } nav-shadow`}
        >
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSc8NVvyUfiSlrJpC-WAHrH_1T1j-KAGvToEDYX11xeYo02rjQ/viewform"
            className={`${
              isDarkmode ? "text-neutral-400" : "text-neutral-500"
            } py-1 px-3 rounded-[40px] text-sm font-semibold leading-6 text-center`}
          >
            Product Showcase
          </Link>
          <Link
            href="/sponsorships"
            className={`${
              isDarkmode ? "text-neutral-400" : "text-neutral-500"
            } py-1 px-3 rounded-[40px] text-sm font-semibold leading-6 text-center`}
          >
            Be a sponsor
          </Link>
          <Link
            href="https://drive.google.com/file/d/1fy53GKvSgOuhk6ZqjcWthuhFCHVomHve/view?usp=sharing"
            className={`${
              isDarkmode ? "text-neutral-400" : "text-neutral-500"
            } py-1 px-3 rounded-[40px] text-sm font-semibold leading-6 text-center`}
          >
            Hackathon
          </Link>
          <Link
            href="/about"
            className={`${
              isDarkmode ? "text-neutral-400" : "text-neutral-500"
            } py-1 px-3 rounded-[40px] text-sm font-semibold leading-6 text-center`}
          >
            About us
          </Link>
        </div>
        <div className="hidden lg:flex items-center gap-x-3 relative before:max-xl:hidden before:absolute before:content-[''] before:right-full before:top-1/2 before:-translate-y-1/2 before:w-[175%] before:h-px before:bg-fbc_blue-100">
          <Button component="link" href="/live">
            Watch Live
          </Button>
          <button onClick={() => setIsDarkmode((prev) => !prev)}>
            {isDarkmode ? <DarkModeIcon /> : <LightModeIcon />}
          </button>
        </div>
      </nav>
    );
  }
);

export default Navbar;
