import type { Metadata } from "next";
import { Inter } from "next/font/google";

import DarkmodeProvider from "@/context/DarkMode";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "FLUTTERBYTES CONFERENCE 2024",
	description:
		"Join us at Flutterbytes conference to gain technical knowledge, and network with quality people.",
	keywords: [
		"Flutterbytes, Tech conference",
		"Technical knowledge",
		"Pitch ideas",
		"Networking",
		"Techies",
	],
	openGraph: {
		title: "FLUTTERBYTES CONFERENCE 2024",
		description:
			"Join us at Flutterbytes conference to gain technical knowledge, and network with quality people.",
		images: [
			{
				url: "https://i.ibb.co/qs64th1/opengraph-image.png",
				width: 800,
				height: 600,
				alt: "Flutterbytes Conference 2024",
			},
		],
		type: "website",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.className} overflow-x-hidden`}>
				<div className="main-container bg-blend-multiply" />
				<DarkmodeProvider>
					<Navbar />
					<main>{children}</main>
					<Footer />
				</DarkmodeProvider>
			</body>
		</html>
	);
}
