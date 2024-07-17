"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CARDS } from "@/app/Data";

let interval;

export const CardStack = ({ offset = 10, scaleFactor = 0.06 }) => {
  const [cards, setCards] = useState(CARDS);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);

  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards) => {
        const newArray = [...prevCards];
        newArray.unshift(newArray.pop());
        return newArray;
      });
    }, 5000);
  };

  return (
    <div className="relative h-60 w-80 md:h-60 md:w-[60%] lg:h-60 lg:w-[40%] ">
      {cards.length > 0 ? (
        cards.map((card, index) => (
          <motion.div
            key={card.id}
            className="absolute dark:bg-black bg-white h-60 w-80 lg:h-60 lg:w-[100%] md:h-60 md:w-[100%] rounded-3xl p-4 shadow-xl border border-neutral-200 dark:border-white/[0.1] shadow-black/[0.1] dark:shadow-white/[0.3] flex flex-col justify-between"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -offset,
              scale: 1 - index * scaleFactor,
              zIndex: cards.length - index,
            }}
          >
            <div className="font-normal text-neutral-700 dark:text-neutral-200 text-center md:mt-6 mt-8">
              {card.content}
            </div>
            <div className="flex justify-center">
              <p className="text-neutral-500 font-medium dark:text-white">
                 ~~ {card.name} ~~
              </p>
            </div>
          </motion.div>
        ))
      ) : (
        <p>No cards available</p> // Optional: Message when there are no cards
      )}
    </div>
  );
};
