import { TextGenerateEffect } from "@/components/ui/Text-Typing";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function TextGenerateEffectDemo(words) {
  return <TextGenerateEffect words={words.words} />;
}


export const formatIDR = (value) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};
