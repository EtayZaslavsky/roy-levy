"use client";
import React from "react";
import { cn } from "../../lib/utils";
import { Container } from "../layout/container";
import { useLayout } from "../layout/layout-context";

export default function Footer() {
  const { theme, globalSettings, pageData } = useLayout();
  const footer = globalSettings?.footer;

  const socialIconClasses = "h-7 w-auto";
  const socialIconColorClasses = {
    blue: "text-blue-500 dark:text-blue-400 hover:text-blue-300",
    teal: "text-teal-500 dark:text-teal-400 hover:text-teal-300",
    green: "text-green-500 dark:text-green-400 hover:text-green-300",
    red: "text-red-500 dark:text-red-400 hover:text-red-300",
    pink: "text-pink-500 dark:text-pink-400 hover:text-pink-300",
    purple: "text-purple-500 dark:text-purple-400 hover:text-purple-300",
    orange: "text-orange-500 dark:text-orange-400 hover:text-orange-300",
    yellow: "text-yellow-500 dark:text-yellow-400 hover:text-yellow-300",
    primary: "text-white opacity-80 hover:opacity-100",
  };

  const footerColor = {
    default:
      "text-white from-green-500 to-green-600",
    // "text-gray-800 from-white to-gray-50 dark:from-gray-900 dark:to-gray-1000",
    primary: {
      blue: "text-white from-blue-500 to-blue-700",
      teal: "text-white from-teal-500 to-teal-600",
      green: "text-white from-green-500 to-green-600",
      red: "text-white from-red-500 to-red-600",
      pink: "text-white from-pink-500 to-pink-600",
      purple: "text-white from-purple-500 to-purple-600",
      orange: "text-white from-orange-500 to-orange-600",
      yellow: "text-white from-yellow-500 to-yellow-600",
    },
  };

  const footerColorCss =
    theme?.darkMode === "primary"
      ? footerColor.primary[theme.color as keyof typeof footerColor.primary]
      : footerColor.default;

  return (
    <footer className={cn(`bg-gradient-to-br`, footerColorCss)}>
      <Container className="relative" size="small">
        <div className="flex justify-between items-center gap-6 flex-wrap">
          <img src={footer?.image || ""} />
          {footer?.text && (
            <div className="text-center w-full">
              {/* <div className="border-t border-yellow-500 my-4"></div> */}
              <div className="text-xs sm:text-sm text-yellow-50">
                {footer.text}
              </div>
            </div>
          )}
        </div>
      </Container>
    </footer>
  );
}
