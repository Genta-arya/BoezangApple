"use client";

import React, { useState } from "react";
import {
  FaTools,
  FaShoppingCart,
  FaInfoCircle,
  FaMapMarked,
} from "react-icons/fa";

const Sidebar = ({ isOpen, onClose }) => {


  
  return (
    <div className="relative">
      <div
        className={`fixed top-0 left-0 h-full w-52 border-r border-gray-700 bg-white dark:bg-black shadow-lg z-50 transform transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={onClose}
          className="absolute top-4 left-5 text-xl dark:text-white"
        >
          &times;
        </button>
       
        <div className="flex flex-col items-start mt-16 ml-5 space-y-4 text-sm">
          <a
            href="#"
            className="flex items-center space-x-2 text-black dark:text-white"
          >
            <FaTools className="text-2xl" color="gray" />
            <span>Layanan</span>
          </a>
          <a
            href="/katalog?kategori=aksesoris"
            className="flex items-center space-x-2 text-black dark:text-white"
          >
            <FaShoppingCart className="text-2xl" color="gray" />
            <span>Produk</span>
          </a>

          <a
            href="https://maps.google.com/maps?ll=-1.85345,109.964145&z=16&t=m&hl=en&gl=ID&mapclient=embed&cid=16693213662924400108"
            className="flex items-center space-x-2 text-black dark:text-white"
          >
            <FaMapMarked className="text-2xl" color="gray" />
            <span>Lokasi</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
