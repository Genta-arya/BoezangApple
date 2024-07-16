import React from "react";

const SkeletonDetailProduk = () => {
  return (
    <div className="p-4 w-full">
      <div className="flex justify-center md:flex-col lg:flex-row flex-col gap-4 lg:gap-12 md:gap-4 animate-pulse">
        <div className="flex justify-center ">
          <div className="bg-gray-300 h-96 w-96 mb-4"></div>
        </div>

        <div className="lg:max-w-xl md:w-full border py- lg:px-8 md:px-5 px-4 rounded-lg pt-8">
          <div className="bg-gray-300 h-8 w-3/4 mb-4"></div>
          <div className="bg-gray-300 h-4 w-full mb-4"></div>
          <div className="bg-gray-300 h-4 w-5/6 mb-4"></div>

          <div className="mb-6">
            <div className="bg-gray-300 h-6 w-1/2 mb-2"></div>
            <ul className="list-disc pl-5 space-y-2">
              <li className="bg-gray-300 h-4 w-1/2"></li>
              <li className="bg-gray-300 h-4 w-1/3"></li>
              <li className="bg-gray-300 h-4 w-1/4"></li>
              <li className="bg-gray-300 h-4 w-1/2"></li>
            </ul>
          </div>

          <div className="mb-6">
            <div className="bg-gray-300 h-6 w-1/2 mb-2"></div>
            <ul className="list-disc pl-5 space-y-2">
              <li className="bg-gray-300 h-4 w-3/4"></li>
              <li className="bg-gray-300 h-4 w-2/3"></li>
              <li className="bg-gray-300 h-4 w-3/5"></li>
              <li className="bg-gray-300 h-4 w-1/2"></li>
            </ul>
          </div>

          <div className="mb-6">
            <div className="bg-gray-300 h-6 w-1/2 mb-2"></div>
            <ul className="list-disc pl-5 space-y-2">
              <li className="bg-gray-300 h-4 w-1/4"></li>
              <li className="bg-gray-300 h-4 w-1/3"></li>
              <li className="bg-gray-300 h-4 w-1/2"></li>
            </ul>
          </div>

          <div className="mb-6">
            <div className="bg-gray-300 h-6 w-1/2 mb-2"></div>
            <ul className="list-disc pl-5 space-y-2">
              <li className="bg-gray-300 h-4 w-1/4"></li>
              <li className="bg-gray-300 h-4 w-1/3"></li>
              <li className="bg-gray-300 h-4 w-1/2"></li>
            </ul>
          </div>
        </div>

        <div className="mb-6 border py-2 px-8 rounded-lg pt-8 h-fit pb-8">
          <div className="bg-gray-300 h-12 w-40 mb-4"></div>
          <div className="bg-gray-300 h-8 w-1/2 mb-4"></div>
          <div className="bg-gray-300 h-12 w-full mb-4"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonDetailProduk;
