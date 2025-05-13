"use client";

import React, { useState } from "react";
import { FaBars, FaSearch } from "react-icons/fa";
import Sidebar from "./Sidebar";
import icon from "@/assets/icon.png";
import Image from "next/image";
import SearchModal from "./SearchModal";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = ({ className }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);

  const onClose = () => {
    setSearchOpen(false);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div
      className={` dark:bg-black shadow-lg dark:border-b dark:border-gray-800 z-50 ${className}`}
    >
      <div className="flex justify-between items-center p-4 mx-auto max-w-screen-lg">
        <div className="flex items-center gap-6">
          <button onClick={toggleSidebar} className="text-xl dark:text-white">
            <FaBars />
          </button>
          <Image
            src={icon}
            alt="boezang icon"
            className="w-28 border-2 border-white"
          />
        </div>
        <div
          className="text-white cursor-pointer mr-2 hover:bg-opacity-80"
          onClick={() => setSearchOpen(!isSearchOpen)}
        >
          <FaSearch />
        </div>
      </div>
      <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div>
            <SearchModal isOpen={isSearchOpen} onClose={onClose} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
