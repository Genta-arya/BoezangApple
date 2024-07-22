"use client";

import React from "react";

const SkeletonDetailProduk = () => {
  return (
    <div className="p-4 w-full bg-white pt-32">
      <div className="flex justify-center md:flex-col lg:flex-row flex-col gap-4 lg:gap-12 md:gap-4 animate-pulse">
        <div className="flex justify-center">
          <div className="bg-gray-200 h-96 w-96 mb-4"></div>
        </div>

        <div className="lg:max-w-xl md:w-full py-2 lg:px-8 md:px-5 px-4 rounded-lg pt-8">
          <div className="bg-gray-200 h-8 w-3/4 mb-4"></div>
          <div className="bg-gray-200 h-4 w-full mb-4"></div>
          <div className="bg-gray-200 h-4 w-5/6 mb-4"></div>

          <div className="mb-6">
            <div className="bg-gray-200 h-6 w-1/2 mb-2"></div>
            <div className="space-y-2">
              <div className="bg-gray-200 h-4 w-1/2"></div>
              <div className="bg-gray-200 h-4 w-1/3"></div>
              <div className="bg-gray-200 h-4 w-1/4"></div>
              <div className="bg-gray-200 h-4 w-1/2"></div>
            </div>
          </div>

          <div className="mb-6">
            <div className="bg-gray-200 h-6 w-1/2 mb-2"></div>
            <div className="space-y-2">
              <div className="bg-gray-200 h-4 w-3/4"></div>
              <div className="bg-gray-200 h-4 w-2/3"></div>
              <div className="bg-gray-200 h-4 w-3/5"></div>
              <div className="bg-gray-200 h-4 w-1/2"></div>
            </div>
          </div>

          <div className="mb-6">
            <div className="bg-gray-200 h-6 w-1/2 mb-2"></div>
            <div className="space-y-2">
              <div className="bg-gray-200 h-4 w-1/4"></div>
              <div className="bg-gray-200 h-4 w-1/3"></div>
              <div className="bg-gray-200 h-4 w-1/2"></div>
            </div>
          </div>

          <div className="mb-6">
            <div className="bg-gray-200 h-6 w-1/2 mb-2"></div>
            <div className="space-y-2">
              <div className="bg-gray-200 h-4 w-1/4"></div>
              <div className="bg-gray-200 h-4 w-1/3"></div>
              <div className="bg-gray-200 h-4 w-1/2"></div>
            </div>
          </div>
        </div>

        <div className="mb-6 border py-2 px-8 rounded-lg pt-8 h-fit pb-8">
          <div className="bg-gray-200 h-12 w-40 mb-4"></div>
          <div className="bg-gray-200 h-8 w-1/2 mb-4"></div>
          <div className="bg-gray-200 h-12 w-full mb-4"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonDetailProduk;
