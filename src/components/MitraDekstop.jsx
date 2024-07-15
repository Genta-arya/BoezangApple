"use client";
import React from "react";
import { FaTruck, FaShieldAlt, FaTags, FaClock } from "react-icons/fa";

const MitraDekstop = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8  text-white ">
      <div className="flex flex-col md:flex-row justify-around items-center w-full max-w-4xl space-y-8 md:space-y-0 md:space-x-8 mt-10">
        <div className="flex flex-col items-center text-center">
          <FaTruck className="text-4xl  mb-2" />
          <h3 className="text-xl font-semibold mb-2">
            Kirim Produk
          </h3>
          <p className="">
            Ke Seluruh Indonesia
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <FaShieldAlt className="text-4xl  mb-2" />
          <h3 className="text-xl font-semibold  mb-2">
            Produk Bergaransi
          </h3>
          <p className=" ">
            100% Aman dan Nyaman
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <FaTags className="text-4xl mb-2" />
          <h3 className="text-xl font-semibold  mb-2">
            Beragam Promo
          </h3>
          <p className="">
            Discount, Give Away, Lomba
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <FaClock className="text-4xl mb-2" />
          <h3 className="text-xl font-semibold  mb-2">
            Layanan Tercepat
          </h3>
          <div className="">
            <span className="sr-only">Layanan Tercepat</span>
            <p className="">
              Responsive Kepada Customer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MitraDekstop;
