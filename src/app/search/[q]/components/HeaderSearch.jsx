"use client";
import SearchModal from "@/components/SearchModal";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaArrowLeft, FaSearch } from "react-icons/fa";

const HeaderSearch = () => {
  const [isSearchOpen, setSearchOpen] = useState(false);

  const onClose = () => {
    setSearchOpen(false);
  };
  const router = useRouter();

  const handleBack = () => {
    router.push("/");
  };
  return (
    <>
      <header className="bg-black text-white p-6 flex items-center justify-between  w-full lg:px-24">
        <div>
          <button
            onClick={handleBack}
            className="flex items-center text-white gap-4   pl-1 "
          >
            <FaArrowLeft className="text-lg" />
            <p className="font-bold lg:ml-3 md:ml-3 ml-1 ">Pencarian</p>
          </button>
        </div>
        <FaSearch
          className="text-lg text-white cursor-pointer"
          onClick={() => setSearchOpen(!isSearchOpen)}
        />
      </header>
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div>
            <SearchModal isOpen={isSearchOpen} onClose={onClose} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HeaderSearch;
