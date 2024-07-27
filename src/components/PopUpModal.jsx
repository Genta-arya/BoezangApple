"use client"

import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Slider from "react-slick";
import Image from "next/image";
import promo1 from "@/assets/promo1.png";
import promo2 from "@/assets/promo2.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaTimes } from "react-icons/fa";

const PopUpModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(true); // Set to true to open modal on render
  const [currentSlide, setCurrentSlide] = useState(0); // Track the current slide index
  const sliderRef = useRef(null); // Create a ref for the slider

  const closeModal = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    if (modalIsOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto"; // Clean up on unmount
    };
  }, [modalIsOpen]);

  const settings = {
    dots: false, // Disable default dots
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    afterChange: (current) => setCurrentSlide(current),
    ref: sliderRef,
  };

  const promos = [
    {
      image: promo1,
    },
    {
      image: promo2,
    },
    // Tambahkan promo lain jika perlu
  ];

  return (
    <div>
      <AnimatePresence>
        {modalIsOpen && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="lg:w-[30%] md:w-[60%] w-[80%] relative"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <button
                onClick={closeModal}
                className="text-white -translate-x-3 -translate-y-2"
              >
                <FaTimes />
              </button>
              <Slider {...settings} ref={sliderRef}>
                {promos.map((promo, index) => (
                  <div key={index} className="text-center">
                    <Image
                      src={promo.image}
                      alt={`Promo ${index + 1}`}
                      className="mx-auto rounded-lg w-full h-full"
                    />
                  </div>
                ))}
              </Slider>
              <div className="flex justify-center mt-3">
                <div className="flex justify-center bg-white w-fit py-1 px-4 rounded-md">
                  {promos.map((_, index) => (
                    <button
                      key={index}
                      className={`w-5 h-2 mx-1 rounded-full ${
                        currentSlide === index ? "bg-gray-800" : "bg-gray-400"
                      }`}
                      onClick={() => {
                        setCurrentSlide(index);
                        sliderRef.current.slickGoTo(index);
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PopUpModal;
