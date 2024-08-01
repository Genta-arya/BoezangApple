"use client";

import React, { useState } from "react";
import {
  FaTools,
  FaShoppingCart,
  FaInfoCircle,
  FaMapMarked,
  FaChevronRight,
} from "react-icons/fa";
import icon from "@/assets/icon.png";
import Image from "next/image";
const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div className="relative z-50">
      <div
        className={`fixed top-0 left-0 h-full w-full border-r border-gray-700 bg-white dark:bg-black shadow-lg z-50 transform transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={onClose}
          className="absolute top-4 left-5 text-xl dark:text-white"
        >
          &times;
        </button>

        <div className="flex justify-center mx-auto mt-8 border-b pb-8">
          <Image
            src={icon}
            alt="boezang icon"
            className="w-40 rounded-md border-2 border-white"
          />
        </div>

        <div className="flex flex-col items-start mt-10 ml-5 space-y-6 text-sm">
          <a
            href="/layanan"
            className="flex items-center space-x-2 text-black dark:text-white w-full"
          >
            <div className="flex justify-between items-center w-full">
              <div className="flex gap-2 items-center">
              <FaTools className="text-2xl" color="gray" />
              <span>Layanan</span>
              </div>
              <div className="text-white mr-6">
                <FaChevronRight />
              </div>
            </div>
           
          </a>
          <a
            href="/katalog?kategori=iphone"
               className="flex items-center space-x-2 text-black dark:text-white w-full"
          >
            <div className="flex justify-between items-center w-full">
              <div className="flex gap-2 items-center ">
                <FaShoppingCart className="text-2xl" color="gray" />
                <span>Produk</span>
              </div>
              <div className="text-white mr-6">
                <FaChevronRight />
              </div>
            </div>
          </a>

          <a
            href="https://maps.google.com/maps?ll=-1.85345,109.964145&z=16&t=m&hl=en&gl=ID&mapclient=embed&cid=16693213662924400108"
            className="flex items-center space-x-2 text-black dark:text-white w-full"
          >
            <div className="flex justify-between items-center w-full">
              <div className="flex gap-2 items-center">
                <FaMapMarked className="text-2xl" color="gray" />
                <span>Lokasi</span>
              </div>
              <div className="text-white mr-6">
                <FaChevronRight />
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
