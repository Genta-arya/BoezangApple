"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./ui/aurora-background";
import { FaShoppingCart } from "react-icons/fa";
import Button from "./ui/Button";
import { TextGenerateEffectDemo } from "@/lib/utils";
import slide1 from "@/assets/asset3.jpg";
import slide2 from "@/assets/slide2.jpg";
import slide3 from "@/assets/slide3.jpg";
import Image from "next/image";
import Link from "next/link";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const slides = [slide1, slide2, slide3];

export function Header() {
  const word =
    "Memberikan pelayanan terbaik serta memberikan kualitas produk murah berkualitas";

  return (
    <>
      <motion.div
        initial={{ opacity: 0.0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center"
      >
        {/* SLIDER IMAGE */}
        <div className="bg-fixed ">
          {/* Tulisan tetap & tombol di luar Carousel */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 px-4 pointer-events-none">
            <p className="lg:text-5xl md:text-5xl text-3xl font-bold mb-4">
              MakeYourChoice Apple Gadget
            </p>
            <div className="max-w-2xl mb-6">
              <TextGenerateEffectDemo words={word} />
            </div>
            <div className="pointer-events-auto">
              <Button>
                <Link
                  href={"/katalog?kategori=iphone"}
                  className="flex gap-2 items-center"
                >
                  <FaShoppingCart className="mr-2" />
                  <p className="font-bold">Belanja Sekarang</p>
                </Link>
              </Button>
            </div>
          </div>

          {/* SLIDER IMAGE */}
       
            <Carousel
              showStatus={false}
              showArrows={false}
              showThumbs={false}
              infiniteLoop={true}
              showIndicators={true}
              autoPlay={true}
              interval={10000}
              transitionTime={1000}
              swipeable={false}
              dynamicHeight={true}
              
              emulateTouch={true}
              useKeyboardArrows={true}
              renderIndicator={(onClickHandler, isSelected, index, label) => {
                const className = isSelected
                  ? "w-10 lg:h-2 h-1 bg-white rounded-full mx-1"
                  : "w-10 lg:h-2 h-1 bg-gray-600 rounded-full mx-1";
                return (
                  <li
                    className={className + " inline-block cursor-pointer"}
                    onClick={onClickHandler}
                    key={index}
                    role="button"
                    aria-label={`${label} ${index + 1}`}
                  />
                );
              }}
            >
              {slides.map((src, index) => (
                <div key={index} className="relative h-[900px]">
                  <Image
                    src={src}
                    alt={`slide-${index}`}
                    className="w-full h-full lg:object-cover object-cover bg-fixed"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                </div>
              ))}
            </Carousel>
       
        </div>

        {/* TULISAN TETAP */}
      </motion.div>
    </>
  );
}
