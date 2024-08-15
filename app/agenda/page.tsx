"use client";
import { useContext } from "react";

import { DarkmodeContext } from "@/context/DarkMode";
import { Agenda } from "@/components/Agenda";

export default function AgendaPage() {
  const { isDarkmode } = useContext(DarkmodeContext);
  return (
    <div
      className={`${
        isDarkmode ? "hero-grad-dark z-20" : ""
      } max-md:px-5 md:pt-[200px]`}
    >
      <section
        className={`min-h-screen ${
          isDarkmode ? "" : "gradient-no-grid"
        } max-w-[920px] mx-auto w-full`}
      >
        <div className="relative z-10 pb-32 flex flex-col items-center">
          <Agenda />
        </div>
      </section>
    </div>
  );
}
