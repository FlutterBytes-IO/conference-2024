"use client";
import { useState } from "react";
import { useContext } from "react";

import { DarkmodeContext } from "@/context/DarkMode";
import TableComponent from "./TableComponent";
import { TabStepComponentProps } from "@/types";
import { fridayAgenda, saturdayAgenda } from "@/utils/data";

export const Agenda = ({ isHomePage }: { isHomePage?: boolean }) => {
  const steps = [
    {
      id: 1,
      name: "Friday agenda",
    },
    {
      id: 2,
      name: "Saturday agenda",
    },
  ];

  const [activeTab, setActiveTab] = useState<number>(1);
  const { isDarkmode } = useContext(DarkmodeContext);

  const stepComponents: TabStepComponentProps = {
    1: (
      <TableComponent
        tableBody={isHomePage ? fridayAgenda.slice(0, 5) : fridayAgenda}
        isHomePage={isHomePage}
      />
    ),
    2: (
      <TableComponent
        tableBody={isHomePage ? saturdayAgenda.slice(0, 5) : saturdayAgenda}
        isHomePage={isHomePage}
      />
    ),
  };

  return (
    <>
      <h2
        className={`font-gigaSans flex mx-auto w-fit text-center py-[10px] px-5 border-y-[1.5px] border-fbc_blue-100 text-xl md:text-[32px] font-semibold relative z-10 ${
          isDarkmode ? "heading-text-dark" : "heading-text"
        }`}
      >
        Agenda for FlutterBytes Conference 2024
      </h2>
      <div className="flex flex-col gap-y-10 mt-[52px]">
        <div className="flex items-center border border-blue-200 rounded-[40px] divide-x w-fit self-center">
          {steps.map((step) => (
            <button
              key={step.id}
              className={`py-3 px-5 text-sm font-bold ${
                activeTab === step.id
                  ? "text-blue-200"
                  : isDarkmode
                  ? "text-neutral-300"
                  : "text-neutral-700"
              }`}
              onClick={() => setActiveTab(step.id)}
            >
              {step.name}
            </button>
          ))}
        </div>
        {stepComponents[activeTab]}
        {!isHomePage && (
          <div className="flex items-center border border-blue-200 rounded-[40px] divide-x w-fit self-center">
            {steps.map((step) => (
              <button
                key={step.id}
                className={`py-3 px-5 text-sm font-bold ${
                  activeTab === step.id
                    ? "text-blue-200"
                    : isDarkmode
                    ? "text-neutral-300"
                    : "text-neutral-700"
                }`}
                onClick={() => setActiveTab(step.id)}
              >
                {step.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
