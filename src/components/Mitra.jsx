"use client";
import React from "react";
import { FaTruck, FaShieldAlt, FaTags, FaClock } from "react-icons/fa";

const Mitra = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-gray-100 dark:bg-black  ">
      <div className="flex flex-col md:flex-row justify-around items-center w-full max-w-4xl space-y-8 md:space-y-0 md:space-x-8 mt-10">
        <div className="flex flex-col items-center text-center">
          <FaTruck className="text-4xl text-gray-600 dark:text-gray-400 mb-2" />
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
            Kirim Produk
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Ke Seluruh Indonesia
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <FaShieldAlt className="text-4xl text-gray-600 dark:text-gray-400 mb-2" />
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
            Produk Bergaransi
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            100% Aman dan Nyaman
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <FaTags className="text-4xl text-gray-600 dark:text-gray-400 mb-2" />
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
            Beragam Promo
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Discount, Give Away, Lomba
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <FaClock className="text-4xl text-gray-600 dark:text-gray-400 mb-2" />
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
            Layanan Tercepat
          </h3>
          <div className="text-gray-600 dark:text-gray-400">
            <span className="sr-only">Layanan Tercepat</span>
            <p className="text-gray-600 dark:text-gray-400">
              Responsive Kepada Customer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mitra;
