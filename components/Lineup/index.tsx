"use client";
import { useContext } from "react";

import { DarkmodeContext } from "@/context/DarkMode";
import StyledImageContainer from "../StyledImageContainer";

interface Details {
  image: string;
  name: string;
  role: string;
}

export default function Lineup({ image, name, role }: Details) {
  const { isDarkmode } = useContext(DarkmodeContext);
  return (
    <div className="flex flex-col items-center">
      <StyledImageContainer src={image} />
      <p
        className={`mt-3 mb-1 font-semibold ${
          isDarkmode ? "text-neutral-300" : "text-neutral-700"
        }`}
      >
        {name}
      </p>
      <p
        className={`text-sm ${
          isDarkmode ? "text-neutral-300" : "text-neutral-700"
        } text-center`}
      >
        {role}
      </p>
    </div>
  );
}
