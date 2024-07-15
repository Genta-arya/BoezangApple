"use client";

import React, { useState } from "react";
import {
  FaTools,
  FaShoppingCart,
  FaInfoCircle,
  FaMapMarked,
} from "react-icons/fa";

const Sidebar = ({ isOpen, onClose }) => {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark", !isDarkMode);
  };

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
        <div className="absolute top-4 right-4 flex items-center">
          <label
            htmlFor="theme-toggle"
            className="flex items-center cursor-pointer"
          >
            <div className="relative">
              <input
                id="theme-toggle"
                type="checkbox"
                checked={isDarkMode}
                onChange={toggleTheme}
                className="sr-only"
              />
              <div className="w-7 h-4 bg-gray-300 rounded-full shadow-inner"></div>
              <div
                className={`absolute w-4 h-4 bg-white rounded-full shadow inset-y-0 left-0 ${
                  isDarkMode
                    ? "transform translate-x-4 bg-yellow-400"
                    : "transform translate-x-0"
                } transition-transform duration-300`}
              ></div>
            </div>
          </label>
        </div>
        <div className="flex flex-col items-start mt-16 ml-5 space-y-4 text-sm">
          <a
            href="/services"
            className="flex items-center space-x-2 text-black dark:text-white"
          >
            <FaTools className="text-2xl" color="gray" />
            <span>Layanan</span>
          </a>
          <a
            href="/products"
            className="flex items-center space-x-2 text-black dark:text-white"
          >
            <FaShoppingCart className="text-2xl" color="gray" />
            <span>Produk</span>
          </a>
          <a
            href="/about-us"
            className="flex items-center space-x-2 text-black dark:text-white"
          >
            <FaInfoCircle className="text-2xl" color="gray" />
            <span>Tentang Kami</span>
          </a>
          <a
            href="/location"
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
