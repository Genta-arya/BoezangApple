"use client";

import React from "react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import default CSS

import images1 from "@/assets/asset2.jpg";
import images2 from "@/assets/asset1.png";

const Lokasi = () => {
  return (
    <div className="dark:bg-black dark:text-white pt-12 bg-slate-100 lg:px-32">
      <div className="pb-8">
        <Carousel
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
        >
          <div>
            <Image src={images2} alt="Background 1" layout="responsive" className="" />
          </div>
          <div>
            <Image src={images1} alt="Background 2" layout="responsive" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Lokasi;
