"use client";


import { cn } from "@/lib/utils";
import { CardStack } from "./ui/Card-Stack";

export const Highlight = ({ children, className }) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

export function CardStackDemo() {
  return (
    <div className="h-[40rem] flex items-center justify-center w-full">
      <CardStack  />
    </div>
  );
}
