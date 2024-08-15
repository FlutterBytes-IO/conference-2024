"use client";
import { useContext } from "react";

import { DarkmodeContext } from "@/context/DarkMode";
import Lineup from "@/components/Lineup";
import { committee } from "@/utils/data";
import { useEffect, useState } from "react";

export default function Organizers() {
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
      } md:pt-[200px]`}
    >
      <div className="relative z-10">
        <h2 className="font-gigaSans flex mx-auto w-fit text-center py-[10px] px-5 border-y-[1.5px] border-fbc_blue-100 text-xl md:text-[32px] font-semibold relative z-10 heading-text">
          Organizing committee
        </h2>
        <div
          style={{
            backgroundColor: `${isDarkmode ? "#1167B14D" : "#ebf8ff"}`,
          }}
          className="lg:max-w-[920px] rounded-xl md:max-w-[734px] w-full mx-auto mt-[40px] md:py-[30px] lg:px-[100px] md:px-[50px] px-[28px]"
        >
          <p
            className={`text-14px mb-4 ${
              isDarkmode ? "text-fbc_blue-100" : "text-blue-500"
            }`}
          >
            The success of FlutterBytes Conference is made possible by the
            tireless efforts of our dedicated Organizing Committee, comprising
            over 24 members from diverse backgrounds and expertise. Our
            committee members, drawn from various niches and aspects, bring
            their unique perspectives and skills to ensure a seamless and
            impactful event.
          </p>
          <p
            className={`text-14px ${
              isDarkmode ? "text-fbc_blue-100" : "text-blue-500"
            }`}
          >
            With representation from various tech niches such as mobile
            development, design, project management etc., the committee works
            together to curate a comprehensive program, secure esteemed
            Speakers, and create a conducive environment for meaningful
            connections and knowledge sharing.
          </p>
        </div>
        <div className="max-w-[920px] mx-auto mt-[40px]">
          {committee.length <= 4 ? (
            <div
              className={`grid gap-x-8 pb-4 lg:grid-cols-4 md:grid-cols-3 grid-cols-2`}
            >
              {committee.map((item, index) => (
                <Lineup
                  key={index}
                  name={item.name}
                  role={item.role}
                  image={item.image}
                />
              ))}
            </div>
          ) : (
            committee.map((item, index) =>
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
                    index + itemsPerRow < committee.length
                      ? "mb-8 md:border-b md:border-gray-300"
                      : ""
                  }`}
                >
                  {committee
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
