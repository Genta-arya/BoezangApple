"use client";

import React from "react";
import Image from "next/image";
import images from "@/assets/asset2.jpg";

const Lokasi = () => {
  return (
    <>
      <div className="dark:bg-black dark:text-white mt-8">
        <div className=" pb-8 lg:px-24">
            <p>test</p>
          <div className="mb-8">
            <Image
              src={images}
              alt="Background"
              layout="responsive"
              width={1200}
              height={800}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Lokasi;
