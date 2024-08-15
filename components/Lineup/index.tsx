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
    <div>
      <div className="outer-border h-[300px] w-[200px] mx-auto">
        <StyledImageContainer src={image} />
      </div>
      <div className="person-details w-[200px] text-center mt-2 mb-6 mx-auto">
        <p
          className={`name ${
            isDarkmode ? "text-neutral-200" : "text-[#424E57]"
          } font-bold my-1`}
        >
          {name}
        </p>
        <p
          className={`role text-[14px] ${
            isDarkmode ? "text-neutral-200" : "text-[#424E57]"
          }`}
        >
          {role}
        </p>
      </div>
      {/* </div> */}
    </div>
  );
}
