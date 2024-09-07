import type { Metadata } from "next";
import { Inter } from "next/font/google";

import DarkmodeProvider from "@/context/DarkMode";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FlutterBytes Conference 2024",
  description:
    "Join us at FlutterBytes conference to gain technical knowledge, and network with like minds.",
  keywords: [
    "Flutterbytes", 
    "Tech conference",
    "Technical knowledge",
    "Hackathon",
    "Lagos Tech Event",
    "Mobile apps",
    "Networking",
    "Techies",
  ],
  openGraph: {
    title: "FlutterBytes Conference 2024",
    description:
      "Join us at FlutterBytes conference to gain technical knowledge, and network with like minds.",
    images: [
      {
        url: "https://i.ibb.co/Dz7KvHy/FBC-Meta-Data-Thumbnail-1.png",
        width: 800,
        height: 600,
        alt: "FlutterBytes Conference 2024",
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
          <main className="overflow-x-hidden">{children}</main>
          <Footer />
        </DarkmodeProvider>
      </body>
    </html>
  );
}
