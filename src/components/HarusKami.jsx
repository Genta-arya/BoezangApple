"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaChevronUp, FaStar } from "react-icons/fa";

const faqData = [
  {
    question: "Garansional Selama 1 Bulan?",
    answer:
      "Kami memberikan garansi real personal 1 bulan dengan syarat dan ketentuan",
  },
  {
    question: "Gratis Pembuatan Akun Icloud Baru",
    answer:
      "Kami akan membantu dalam pembuatan akun icloud secara gratis dengan syarat harus berumur diatas 10 Tahun dan membawa No Telpon / sim card yang aktif ",
  },
  {
    question: "Gratis Stiker",
    answer:
      "Kami akan memberikan Gratis Stiker untuk setiap pembelian Unit diBoezang Apple",
  },
  {
    question: "Gratis Case atau Tempered Glasses",
    answer:
      "Kalian akan mendapatkan Gratis Softcase atau Tempered Glasses untuk tiap unit pembelian",
  },
  {
    question: "Memberikan Kenyamanan dan Keamanan",
    answer:
      "Kami akan melayani customer sebaik mungkin, selalu menjaga kebersihana toko agar customer selalu nyaman",
  },
];

const HarusKami = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="lg:p-4 md:p-4 p-2 bg-gray-100 dark:bg-black dark:text-white rounded-lg shadow-md lg:px-24 md:mt-16 mt-12">
      <div className="flex justify-center flex-col items-center">
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="text-yellow-400" />
          ))}
        </div>
        <h2 className="text-2xl font-bold ">MENGAPA HARUS</h2>
        <h2 className="text-2xl md:text-3xl font-bold md:mb-12 lg:mb-12 mb-8 text-gray-800 dark:text-slate-300">
          DIBOEZANG APPLE STORE
        </h2>
      </div>

      {faqData.map((faq, index) => (
        <div key={index} className="mb-4 px-4">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <h3 className="md:text-xl lg:text-xl text-base font-semibold">{faq.question}</h3>
            {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          <AnimatePresence>
            {activeIndex === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p className="mt-2 lg:text-base md:text-sm text-sm max-w-[90%]">{faq.answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default HarusKami;
