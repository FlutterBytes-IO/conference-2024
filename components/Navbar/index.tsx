/* eslint-disable react/display-name */
"use client";

import { useContext, forwardRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { DarkmodeContext } from "@/context/DarkMode";

import Button from "../Button";
import NavLogoDark from "@/public/images/NavLogoDark.svg";
import NavLogoLight from "@/public/images/NavLogoLight.svg";
import DarkModeIcon, { LightModeIcon } from "../vectors/ModeIcon";
import HamburgerIcon from "../vectors/HamburgerIcon";
import { NavbarProps } from "@/types";

const Navbar = forwardRef<HTMLDivElement, NavbarProps>(
  ({ handleClick }, ref) => {
    const { isDarkmode, setIsDarkmode } = useContext(DarkmodeContext);
    const [scrollPosition, setScrollPosition] = useState<number | null>(null);

    const updateScrollPosition = () => {
      setScrollPosition(window.scrollY);
    };

    useEffect(() => {
      window.addEventListener("scroll", updateScrollPosition);

      return () => window.removeEventListener("scroll", updateScrollPosition);
    }, []);

    return (
      <nav
        ref={ref}
        className={`px-5 md:px-10 top-0 bg-opacity-[10%] backdrop-blur-[10px] ${
          scrollPosition! > 50 ? "bg-white" : "bg-transparent"
        } py-5 transition-all z-30 duration-500 flex items-center justify-between fixed w-screen ${
          isDarkmode
            ? "border-[#1167B1] hero-grad-dark"
            : "border-[#D0EFFF] bg-transparent"
        }`}
      >
        <Link
          href="/"
          className="relative max-lg:after:hidden after:absolute after:content-[''] after:left-full after:top-1/2 after:-translate-y-1/2 after:w-[170%] after:overflow-hidden after:h-px after:bg-fbc_blue-100"
        >
          <Image
            src={isDarkmode ? NavLogoDark : NavLogoLight}
            alt="logo"
            className="transition-all duration-500 h-6 md:h-auto w-[122.53px] md:w-auto"
          />
        </Link>
        <button className="lg:hidden">
          <HamburgerIcon />
        </button>
        <div
          className={`hidden z-10 lg:flex items-center gap-x-3 px-3 py-1 rounded-[60px] border ${
            isDarkmode
              ? "bg-[#1167B1CC] border-blue-300 bg-opacity-100"
              : "bg-white border-fbc_blue-100 bg-opacity-[84%]"
          } nav-shadow`}
        >
          <Link
            href="/volunteer"
            className={`${
              isDarkmode ? "text-neutral-400" : "text-neutral-500"
            } py-1 px-3 rounded-[40px] text-sm font-semibold leading-6`}
          >
            Apply to volunteer
          </Link>
          <Link
            href="/speakers-application"
            className={`${
              isDarkmode ? "text-neutral-400" : "text-neutral-500"
            } py-1 px-3 rounded-[40px] text-sm font-semibold leading-6`}
          >
            Apply to speak
          </Link>
          <Link
            href="/sponsorships"
            className={`${
              isDarkmode ? "text-neutral-400" : "text-neutral-500"
            } py-1 px-3 rounded-[40px] text-sm font-semibold leading-6`}
          >
            Be a sponsor
          </Link>
          <Link
            href="/about"
            className={`${
              isDarkmode ? "text-neutral-400" : "text-neutral-500"
            } py-1 px-3 rounded-[40px] text-sm font-semibold leading-6`}
          >
            About us
          </Link>
        </div>
        <div className="hidden lg:flex items-center gap-x-3 relative before:max-lg:hidden before:absolute before:content-[''] before:right-full before:top-1/2 before:-translate-y-1/2 before:w-[170%] before:h-px before:bg-fbc_blue-100">
          <Button onClick={handleClick}>Get Tickets</Button>
          <button onClick={() => setIsDarkmode((prev) => !prev)}>
            {isDarkmode ? <DarkModeIcon /> : <LightModeIcon />}
          </button>
        </div>
      </nav>
    );
  }
);

export default Navbar;
