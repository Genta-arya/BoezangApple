"use client";

import React from "react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import default CSS

import images1 from "@/assets/asset2.jpg";
import images2 from "@/assets/asset1.png";

const Lokasi = () => {
  return (
    <div className="dark:bg-black dark:text-white pt-12 bg-slate-100">
      <div className="pb-8">
        <Carousel
          showArrows={false}
          showThumbs={false}
          infiniteLoop={true}
          showIndicators={false}
          autoPlay={true}
          interval={3000}
          transitionTime={1000} // Time for fade transition
          swipeable={true}
          dynamicHeight={true}
          emulateTouch={true}
          useKeyboardArrows={true}
        >
          <div>
            <Image 
              src={images2} 
              alt="Background 1" 
              width={1200} 
              height={800} 
              layout="responsive" 
            />
          </div>
          <div>
            <Image 
              src={images1} 
              alt="Background 2" 
              width={1200} 
              height={800} 
              layout="responsive" 
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Lokasi;
