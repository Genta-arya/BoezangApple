import React from "react";
import Mitra from "./Mitra";
import Support from "./Support";
import images from "@/assets/asset1.png";
import Image from "next/image";
import { LampDemo } from "./ui/LampDemo";
import Lokasi from "./Lokasi";
import ServiceBnner from "./ServiceBnner";
const Container = () => {
  return (
    <div className="bg-gray-100 dark:bg-black dark:border-t ">
      <div className="lg:block md:block hidden">
        <LampDemo />
       
        <Support />
        <Lokasi />
      </div>
      <div className="lg:px-24 lg:pb-12">
        <div className="lg:hidden md:hidden block">
          <ServiceBnner />
          <Support />
          <Mitra />
          <Lokasi />
        </div>
      </div>
    </div>
  );
};

export default Container;
