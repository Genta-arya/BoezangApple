"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // import carousel styles
import Image from "next/image";
import promo1 from "@/assets/promo1.png";
import promo2 from "@/assets/promo2.png";
import { FaTimes } from "react-icons/fa";

const slides = [
  {
    id: 1,
    image: promo1,
  },
  {
    id: 2,
    image: promo2,
  },
];

const PopUpModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(true); // Set to true to open modal on render
  const [currentSlide, setCurrentSlide] = useState(0); // Track current slide index

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleThumbnailClick = (index) => {
    setCurrentSlide(index); // Set current slide to clicked thumbnail
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
                className="text-white "
              >
                <FaTimes />
              </button>
              <Carousel
                selectedItem={currentSlide}
                onChange={(index) => setCurrentSlide(index)} // Update current slide index on change
                showStatus={false}
                showArrows={false}
                showThumbs={false}
                infiniteLoop={true}
                showIndicators={true}
                autoPlay={true}
                interval={10000}
                transitionTime={1000}
                swipeable={true}
                dynamicHeight={true}
                emulateTouch={true}
                useKeyboardArrows={true}
                className="rounded-lg"
              >
                {slides.map((slide) => (
                  <div key={slide.id}>
                    <Image
                      src={slide.image}
                      alt={`Promo ${slide.id}`}
                      className="mx-auto rounded-lg"
                    />
                  </div>
                ))}
              </Carousel>
             
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PopUpModal;
