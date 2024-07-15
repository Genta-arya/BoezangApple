import React from "react";
import Mitra from "./Mitra";
import Support from "./Support";
import images from "@/assets/asset1.png";
import Image from "next/image";
import { LampDemo } from "./ui/LampDemo";
const Container = () => {
  return (
    <div className="bg-gray-100 dark:bg-black dark:border-t ">
      <div className="lg:block md:block hidden">
        <LampDemo />
        <Support />
        <Image src={images} className=" w-full "></Image>
      </div>
      <div className="lg:px-24 lg:pb-12">
        <div className="lg:hidden md:hidden block">
          <Mitra />
          <Image src={images} className=" w-full "></Image>
        </div>

       
      </div>
    </div>
  );
};

export default Container;
