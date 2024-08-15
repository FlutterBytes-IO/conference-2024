"use client";
import Link from "next/link";
import { useContext } from "react";

import { DarkmodeContext } from "@/context/DarkMode";
import { ButtonProps } from "@/types";

export default function Button({
  children,
  icon,
  leftIcon,
  otherstyles,
  onClick,
  type,
  variant = "contained",
  disabled,
  component = "button",
  href,
}: ButtonProps) {
  const validHref = href || "#";
  const { isDarkmode } = useContext(DarkmodeContext);
  return (
    <>
      {component === "link" ? (
        <Link
          href={validHref}
          className={`rounded-[30px] ${
            icon && "!pr-3"
          } w-fit py-2 px-2 md:px-4 flex items-center gap-2 font-medium text-xs md:text-sm btn-grad transition-all duration-500 ${
            variant === "contained"
              ? "bg-blue-200 text-white"
              : "bg-white border border-blue-200 text-blue-200"
          } ${otherstyles}`}
        >
          {leftIcon && leftIcon} {children} {icon && icon}
        </Link>
      ) : (
        <button
          disabled={disabled}
          type={type || "button"}
          onClick={onClick}
          className={`rounded-[30px] ${
            icon && "pr-3"
          } w-fit py-2 px-2 md:px-4 flex items-center gap-2 font-medium text-xs md:text-sm btn-grad transition-all duration-500 ${
            variant === "contained"
              ? "bg-blue-200 text-white"
              : `${
                  isDarkmode ? "bg-transparent hover:!bg-none" : "bg-white"
                } border border-blue-200 text-blue-200`
          } ${otherstyles}`}
        >
          {leftIcon && leftIcon} {children} {icon && icon}
        </button>
      )}
    </>
  );
}
