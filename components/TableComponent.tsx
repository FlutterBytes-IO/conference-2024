"use client";
import { useContext } from "react";

import { DarkmodeContext } from "@/context/DarkMode";
import { KeyValueProps, TableComponentProps } from "@/types";
import { RightArrow2 } from "./vectors/RightArrow";
import Button from "./Button";
import { useEffect, useState } from "react";

function useIsSmlScreen() {
  const [isSmlScreen, setIsSmlScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmlScreen(window.matchMedia("(max-width: 767px)").matches);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return isSmlScreen;
}

export default function TableComponent({
  tableBody = bodyCells,
  more,
  isHomePage,
}: TableComponentProps) {
  const isSmlScreen = useIsSmlScreen();
  const [tableHead, setTableHead] = useState<KeyValueProps[]>([]);
  const { isDarkmode } = useContext(DarkmodeContext);

  useEffect(() => {
    setTableHead(isSmlScreen ? headCellsMobile : headCells);
  }, [isSmlScreen]);
  return (
    <div
      className={`mx-auto border-[0.5px] border-neutral-500 ${
        isDarkmode ? "text-neutral-300" : "text-neutral-700"
      } rounded-[40px] xs:w-[90%] md:w-[90%] md:max-w-[877px] flex flex-col`}
    >
      <table className="w-full max-md:flex max-md:flex-col max-md:gap-y-6 overflow-hidden">
        <thead className="font-semibold">
          <tr className="max-md:grid max-md:grid-cols-agenda">
            {tableHead.map((item) => (
              <th
                className="py-2 md:py-4 px-2.5 border border-neutral-300"
                key={item.key}
              >
                {item.value}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="max-md:flex max-md:flex-col max-md:gap-y-6">
          {tableBody.map((item, index) => (
            <tr
              key={item.key}
              className={`${
                index === tableBody.length - 1 ? "last-row-no-border" : ""
              } max-md:grid max-md:grid-cols-agenda`}
            >
              {tableHead.map((innerItem, index) => (
                <td
                  className={`py-[9px] md:py-4 px-2.5 border border-neutral-300 text-center ${
                    index === 1 ? "font-medium" : "text-sm font-normal"
                  } ${index === tableHead.length - 1 ? "px-5" : ""}`}
                  key={`${innerItem.key}-${item.key}`}
                >
                  {item[innerItem.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {isHomePage &&
        (more || (
          <div className="border-t border-neutral-300 py-2 max-md:pb-5 px-[50px] md:px-32 flex flex-col max-md:gap-y-5 md:flex-row items-center justify-between">
            <div className="py-4 px-2.5">
              <span
                className={`${
                  isDarkmode ? "text-neutral-300" : "text-neutral-600"
                } font-semibold italic text-center"`}
              >
                20+ more sessions
              </span>
            </div>
            <Button
              component="link"
              href="/agenda"
              variant="outlined"
              otherstyles="p-3 pl-5 text-sm font-semibold !bg-transparent"
            >
              Full agenda of the event <RightArrow2 />
            </Button>
          </div>
        ))}
    </div>
  );
}

const headCells = [
  {
    key: "timeline",
    value: <p className="max-md:text-xs">Timeline</p>,
  },
  {
    key: "session",
    value: "Session Title",
  },
  {
    key: "anchor",
    value: "Anchor (s)",
  },
  {
    key: "hall",
    value: <p className="max-md:text-xs">Hall</p>,
  },
];

const headCellsMobile = [
  {
    key: "timeline",
    value: <p className="max-md:text-xs">Timeline</p>,
  },
  {
    key: "session",
    value: "Session Title",
  },
  {
    key: "hall",
    value: <p className="max-md:text-xs">Hall</p>,
  },
  {
    key: "anchor",
    value: "Anchor (s)",
  },
];

const bodyCells = Array(5)
  .fill("")
  .map((_, i) => ({
    timeline: <p className="max-md:text-xs">10:03pm 8:04am</p>,
    session:
      "Flutter for Enterprise: Scaling and Integrating with Existing Systems",
    anchor: "Rebecca Omolabake, Christopher Nwosu-Madueke",
    day: <p className="max-md:text-xs">Friday</p>,
    key: `key-${i + 1}`,
  }));
