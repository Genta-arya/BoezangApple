"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSearch } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const SearchModal = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleSearch = () => {
    const formattedQuery = query.trim().replace(/\s+/g, "-");

    
    if (formattedQuery.length >= 3) {
      router.push(`/search/${formattedQuery}`);
    } else {
      toast.info("Kata pencarian harus terdiri dari minimal 3 karakter.");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="absolute md:right-12 md:top-[90px] right-[7%] top-20 lg:top-20 lg:right-32 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-black p-6 px-8 rounded-lg shadow-lg w-full relative border border-gray-500"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
          >
            <button
              className="absolute -top-1 right-4 m-4 text-white"
              onClick={onClose}
            >
              &#x2715;
            </button>
       
            <div className="relative mt-7">
              <input
                type="text"
                placeholder="Cari Produk di Boezang..."
                className="w-full placeholder:text-white p-1 pl-2 pr-8  border bg-gray-600 rounded-sm text-white lg:text-sm placeholder:text-xs"
                value={query}
                maxLength={50}
                minLength={3}
                required
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <FaSearch className=" cursor-pointer absolute right-2 top-1/2 transform -translate-y-1/2 text-white"   onClick={handleSearch}/>
            </div>
           
          </motion.div>
        </motion.div>
      )}
      <ToastContainer />
    </AnimatePresence>
  );
};

export default SearchModal;
