import React from "react";
import Mitra from "./Mitra";
import Support from "./Support";
import images from "@/assets/asset1.png";
import Image from "next/image";
const Container = () => {
  return (
    <div className="bg-gray-100 dark:bg-black dark:border-t ">
      <div className="lg:px-24 lg:pb-12">
        <Mitra />
        <Support />
        <Image src={images} className=" w-full "></Image>
      </div>
    </div>
  );
};

export default Container;
