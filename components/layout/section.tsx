import React from "react";
import { useLayout } from "../layout/layout-context";

export const Section = ({ children, color = "", className = "" }) => {
  const { theme } = useLayout();
  const sectionColor = {
    default:
      "text-gray-800 bg-gradient-to-tl from-gray-50 to-transparent",
    tint: "text-gray-900 bg-gradient-to-br from-gray-100 ",
    primary: {
      blue: "text-white bg-blue-500 bg-gradient-to-br from-blue-500 to-blue-600",
      teal: "text-white bg-teal-500 bg-gradient-to-br from-teal-500 to-teal-600",
      green:
        "text-white bg-green-600 bg-gradient-to-br from-green-600 to-green-700",
      red: "text-white bg-red-500 bg-gradient-to-br from-red-500 to-red-600",
      pink: "text-white bg-pink-500 bg-gradient-to-br from-pink-500 to-pink-600",
      purple:
        "text-white bg-purple-500 bg-gradient-to-br from-purple-500 to-purple-600",
      orange:
        "text-white bg-orange-500 bg-gradient-to-br from-orange-500 to-orange-600",
      yellow:
        "text-white bg-yellow-500 bg-gradient-to-br from-yellow-500 to-yellow-600",
    },
  };
  const sectionColorCss =
    color === "primary"
      ? sectionColor.primary[theme?.color as keyof typeof sectionColor.primary]
      : sectionColor[color]
        ? sectionColor[color]
        : sectionColor.default;

  return (
    <section
      className={`flex-1 relative transition duration-150 ease-out body-font overflow-hidden ${sectionColorCss} ${className}`}
    >
      {/* <img className="absolute right-0 top-0 w-[20] opacity-30" src="/uploads/kutna" /> */}
      {children}
    </section>
  );
};
