import React from "react";

const SkeletonLoading = () => {
  const skeletons = Array.from({ length: 6 });

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 md:gap-4 lg:gap-4 gap-1 p-1">
      {skeletons.map((_, index) => (
        <div
          key={index}
          className="p-4 border border-gray-300 rounded-lg shadow-lg "
        >
          <div className="bg-gray-300 h-48 w-full mb-4 animate-pulse"></div>
          <div className="bg-gray-300 h-6 w-3/4 mb-2 animate-pulse"></div>
          <div className="bg-gray-300 h-6 w-1/2 animate-pulse"></div>
          <div className="bg-gray-300 h-8 w-1/3 mt-4 animate-pulse"></div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonLoading;
