import Image from "next/image";
import Link from "next/link";

import NavLogoDark from "@/public/images/NavLogoDark.svg";
import IconContainer from "../IconContainer";
import TwitterIcon from "../vectors/TwitterIcon";
import LinkedInIcon from "../vectors/LinkedInIcon";
import InstagramIcon from "../vectors/InstagramIcon";
import MessageIcon from "../vectors/MessageIcon";
import { links1, links2 } from "@/utils/data";

export default function Footer() {
	return (
		<footer className="flex md:px-10 pt-7 pb-5 flex-col md:flex-row justify-between px-6 md:mx-[100px] md:mb-10 border-t border-blue-200">
			<div className="flex flex-col gap-y-[27.5px]">
				<Image
					src={NavLogoDark}
					alt="logo"
					className="transition-all duration-500 h-6 md:h-auto w-[122.53px] md:w-auto"
				/>
				<div className="flex items-center gap-x-4">
					<IconContainer
						icon={<TwitterIcon small />}
						href="https://x.com/flutterbyteconf"
					/>
					<IconContainer
						icon={<LinkedInIcon small />}
						href="https://www.linkedin.com/company/flutterbytes/"
					/>
					<IconContainer
						icon={<MessageIcon small />}
						href="mailto:contact.flutterbytes@gmail.com"
					/>
					<IconContainer
						icon={<InstagramIcon small />}
						href="https://www.instagram.com/flutterbytes_c"
					/>
				</div>
				<p className="text-xs text-neutral-500">
					©{new Date().getFullYear()} Copyrights FlutterBytes
				</p>
			</div>
			<div className="flex flex-col md:flex-row gap-10">
				<div className="py-3 px-2 flex flex-col justify-between md:border-l border-neutral-300">
					{links1.map((item) => (
						<Link
							key={item.link}
							href={item.link}
							className="py-1 px-3 text-xs text-neutral-500 font-semibold"
						>
							{item.value}
						</Link>
					))}
				</div>
				<div className="py-3 px-2 flex flex-col justify-between md:border-l border-neutral-300">
					{links2.map((item) => (
						<Link
							key={item.link}
							href={item.link}
							className="py-1 px-3 text-xs text-neutral-500 font-semibold"
						>
							{item.value}
						</Link>
					))}
				</div>
			</div>
		</footer>
	);
}
