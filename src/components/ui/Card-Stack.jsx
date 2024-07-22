"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GetQuotes } from "@/Service/Api/GetQuotes";

let interval;

export const CardStack = ({ offset = 10, scaleFactor = 0.06 }) => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchQuotes = async () => {
    try {
      const response = await GetQuotes();
      const filteredData = response.data.filter((data) => data.status === true);
      setCards(filteredData);
    } catch (error) {
      console.error("Failed to fetch quotes:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuotes(); // Fetch quotes when the component mounts
    startFlipping(); // Start the flipping animation

    return () => {
      clearInterval(interval); // Clear the interval on component unmount
    };
  }, []);

  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards) => {
        if (prevCards.length === 0) return prevCards; // Return if no cards to prevent errors
        const newArray = [...prevCards];
        newArray.unshift(newArray.pop()); // Rotate cards
        return newArray;
      });
    }, 5000);
  };

  return (
    <div className="relative h-60 w-80 md:h-60 md:w-[60%] lg:h-60 lg:w-[40%]">
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
                ~~ {card.author} ~~
              </p>
            </div>
          </motion.div>
        ))
      ) : (
        <>
          {loading && (
            <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              Loading...
            </p>
          )}
        </>
      )}
    </div>
  );
};
