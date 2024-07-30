"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // import carousel styles
import Image from "next/image";
import { FaTimes } from "react-icons/fa";
import { GetPopup } from "@/Service/Api/GetPopup";

const PopUpModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slides, setSlides] = useState([]);

  const closeModal = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const response = await GetPopup();

        const filteredSlides = response.data.filter(
          (slide) => slide.status === true
        );
        setSlides(filteredSlides);

        if (filteredSlides.length > 0) {
          setModalIsOpen(true);
        }
      } catch (error) {
        console.error("Error fetching slides:", error);
      }
    };

    fetchSlides();
  }, []);

  useEffect(() => {
    if (modalIsOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modalIsOpen]);

  return (
    <div>
      <AnimatePresence>
        {modalIsOpen && slides.length > 0 && (
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
              <button onClick={closeModal} className="text-white ">
                <FaTimes />
              </button>
              <Carousel
                selectedItem={currentSlide}
                onChange={(index) => setCurrentSlide(index)}
                showStatus={false}
                showArrows={false}
                showThumbs={false}
                infiniteLoop={true}
                showIndicators={true}
                autoPlay={false}
                interval={10000}
                transitionTime={1000}
                swipeable={true}
                dynamicHeight={true}
                emulateTouch={true}
                useKeyboardArrows={true}
                className="rounded-lg"
              >
                {slides.flatMap((slide) =>
                  slide.images.map((image) => (
                    <div key={image.id}>
                      <Image
                        src={image.url}
                        alt={slide.title}
                        className="mx-auto rounded-lg"
                        width={500}
                        height={300}
                      />
                    </div>
                  ))
                )}
              </Carousel>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PopUpModal;
