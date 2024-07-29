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
          className="fixed md:right-12 md:top-[90px] right-[7%] top-20 lg:top-20 lg:right-32 z-50"
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
              className="absolute top-0 right-0 m-4 text-white"
              onClick={onClose}
            >
              &#x2715;
            </button>
            <h2 className="lg:text-xl font-bold mb-4 text-white">Pencarian</h2>
            <div className="relative">
              <input
                type="text"
                placeholder="Cari Produk..."
                className="w-full placeholder:text-white p-2 pr-8 pl-8 border bg-gray-600 rounded-lg text-white lg:text-sm placeholder:text-sm"
                value={query}
                maxLength={50}
                minLength={3}
                required
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <FaSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white" />
            </div>
            <button
              onClick={handleSearch}
              className="mt-4 w-full border text-white font-bold py-1.5 md:text-sm rounded-lg"
            >
              Cari
            </button>
          </motion.div>
        </motion.div>
      )}
      <ToastContainer />
    </AnimatePresence>
  );
};

export default SearchModal;