"use client";
import React from "react";

const Spesifikas = ({ data }) => {
  return (
    <div className="flex justify-center bg-white">
      <div className="w-full lg:max-w-[85%] border lg:px-8 pt-4 mt-4 md:px-8 px-2 pb-4 text-justify rounded-md">
        <h1 className="text-black font-extrabold lg:text-xl py-8 ">SPESIFIKASI</h1>
        <div
          className=" text-black"
          dangerouslySetInnerHTML={{ __html: data }}
        />
      </div>
    </div>
  );
};

export default Spesifikas;
