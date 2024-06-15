/* eslint-disable react/display-name */
"use client";

import { useContext, forwardRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { DarkmodeContext } from "@/context/DarkMode";

import Button from "../Button";
import NavLogoDark from "@/public/images/NavLogoDark.svg";
import NavLogoLight from "@/public/images/NavLogoLight.svg";
import DarkModeIcon, { LightModeIcon } from "../vectors/ModeIcon";
import { NavbarProps } from "@/types";

const Navbar = forwardRef<HTMLDivElement, NavbarProps>(
	({ handleClick }, ref) => {
		const { isDarkmode, setIsDarkmode } = useContext(DarkmodeContext);
		return (
			<div
				ref={ref}
				className={`px-5 md:px-10 top-0 bg-opacity-[88%] blur-[4%] py-5 transition-all z-20 duration-500 flex items-center justify-between fixed w-full ${
					isDarkmode
						? "border-[#1167B1] hero-grad-dark"
						: "border-[#D0EFFF] bg-white"
				}`}
			>
				<div className="relative after:absolute after:content-[''] after:left-full after:top-1/2 after:-translate-y-1/2 after:w-full after:overflow-hidden after:h-px after:bg-fbc_blue-100">
					<Image
						src={isDarkmode ? NavLogoDark : NavLogoLight}
						alt="logo"
						className="transition-all duration-500 h-6 md:h-auto w-[122.53px] md:w-auto"
					/>
				</div>
				<div className="hidden z-10 md:flex items-center gap-x-3 px-3 py-1 rounded-[60px] border border-fbc_blue-100 bg-white bg-opacity-[84%] nav-shadow">
					<Link
						href="/volunteer"
						className="py-1 px-3 rounded-[40px] text-sm text-neutral-500 font-semibold leading-6"
					>
						Apply to volunteer
					</Link>
					<Link
						href="/speakers"
						className="py-1 px-3 rounded-[40px] text-sm text-neutral-500 font-semibold leading-6"
					>
						Apply to speak
					</Link>
					<Link
						href="/sponsorships"
						className="py-1 px-3 rounded-[40px] text-sm text-neutral-500 font-semibold leading-6"
					>
						Be a sponsor
					</Link>
					<Link
						href="/about"
						className="py-1 px-3 rounded-[40px] text-sm text-neutral-500 font-semibold leading-6"
					>
						About us
					</Link>
				</div>
				<div className="flex items-center gap-x-3 relative before:absolute before:content-[''] before:right-full before:top-1/2 before:-translate-y-1/2 before:w-[115%] before:h-px before:bg-fbc_blue-100">
					<Button onClick={handleClick}>Get Tickets</Button>
					<button onClick={() => setIsDarkmode((prev) => !prev)}>
						{isDarkmode ? <DarkModeIcon /> : <LightModeIcon />}
					</button>
				</div>
			</div>
		);
	}
);

export default Navbar;
