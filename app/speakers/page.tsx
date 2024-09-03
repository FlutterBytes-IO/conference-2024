"use client"; // This is a client component
import { useEffect, useState } from "react";
import { useContext } from "react";

import { DarkmodeContext } from "@/context/DarkMode";
import Lineup from "@/components/Lineup";
import { currentSpeakers, pastSpeakers } from "@/utils/data";

export default function Speakers() {
  const [itemsPerRow, setItemsPerRow] = useState(4);
  const { isDarkmode } = useContext(DarkmodeContext);

  useEffect(() => {
    const updateItemsPerRow = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerRow(4);
      } else if (window.innerWidth >= 768) {
        setItemsPerRow(3);
      } else {
        setItemsPerRow(2);
      }
    };

    updateItemsPerRow();
    window.addEventListener("resize", updateItemsPerRow);
    return () => window.removeEventListener("resize", updateItemsPerRow);
  }, []);

  return (
    <main
      className={`min-h-screen ${
        isDarkmode ? "hero-grad-dark" : "gradient-no-grid"
      } pt-[200px]`}
    >
      <div className="relative z-10">
        <h1 className="font-gigaSans flex mx-auto w-fit text-center py-[10px] px-5 border-y-[1.5px] border-[#D0EFFF] md:text-[32px] text-[20px] font-semibold relative z-10 heading-text">
          Meet the amazing lineup of Speakers
        </h1>
        <div className="max-w-[920px] mx-auto mt-[40px]">
          {currentSpeakers.length <= 4 ? (
            <div className="flex justify-center">
              {currentSpeakers.map((item, index) => (
                <Lineup
                  key={index}
                  name={item.name}
                  role={item.role}
                  image={item.image}
                />
              ))}
            </div>
          ) : (
            currentSpeakers.map((item, index) =>
              index % itemsPerRow === 0 ? (
                <div
                  key={index}
                  className={`grid gap-x-8 pb-4 ${
                    itemsPerRow === 4
                      ? "lg:grid-cols-4"
                      : itemsPerRow === 3
                      ? "md:grid-cols-3"
                      : "grid-cols-2"
                  } ${
                    index + itemsPerRow < currentSpeakers.length
                      ? "mb-8 md:border-b md:border-gray-300"
                      : ""
                  }`}
                >
                  {currentSpeakers
                    .slice(index, index + itemsPerRow)
                    .map((subItem, subIndex) => (
                      <Lineup
                        key={subIndex}
                        name={subItem.name}
                        role={subItem.role}
                        image={subItem.image}
                      />
                    ))}
                </div>
              ) : null
            )
          )}
        </div>
      </div>

      <div className="relative z-10">
        <h1 className="font-gigaSans flex mx-auto w-fit text-center mt-[100px] py-[10px] px-5 border-y-[1.5px] border-[#D0EFFF] text-[28px] font-semibold relative z-10 text-[#879CAA]">
          Past Speakers
        </h1>
        <div className="max-w-[920px] mx-auto mt-[40px]">
          {pastSpeakers.length === 4 ? (
            <div
              className={`grid gap-x-8 pb-4 lg:grid-cols-4 md:grid-cols-3 xs:grid-cols-2 grid-cols-1`}
            >
              {pastSpeakers.map((item, index) => (
                <Lineup
                  key={index}
                  name={item.name}
                  role={item.role}
                  image={item.image}
                />
              ))}
            </div>
          ) : (
            pastSpeakers.map((item, index) =>
              index % itemsPerRow === 0 ? (
                <div
                  key={index}
                  className={`grid gap-x-2 sm:gap-x-8 pb-4 ${
                    itemsPerRow === 4
                      ? "lg:grid-cols-4"
                      : itemsPerRow === 3
                      ? "md:grid-cols-3"
                      : "grid-cols-1 xs:grid-cols-2"
                  } ${
                    index + itemsPerRow < pastSpeakers.length
                      ? "mb-8 md:border-b md:border-gray-300"
                      : ""
                  }`}
                >
                  {pastSpeakers
                    .slice(index, index + itemsPerRow)
                    .map((subItem, subIndex) => (
                      <Lineup
                        key={subIndex}
                        name={subItem.name}
                        role={subItem.role}
                        image={subItem.image}
                      />
                    ))}
                </div>
              ) : null
            )
          )}
        </div>
      </div>
    </main>
  );
}
