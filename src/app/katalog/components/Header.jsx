"use client";

import SearchModal from "@/components/SearchModal";
import useKategoriStore from "@/ZustandState/useKategoriStore";
import { AnimatePresence , motion } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaSearch } from "react-icons/fa";

const validCategories = ["iphone", "accessories"];

const Header = ({ loading, state }) => {
  const [isSearchOpen, setSearchOpen] = useState(false);

  const onClose = () => {
    setSearchOpen(false);
  };

  const searchParams = useSearchParams();
  const router = useRouter();
  const { kategori, setKategori } = useKategoriStore((state) => ({
    kategori: state.kategori,
    setKategori: state.setKategori,
  }));

  useEffect(() => {
    const currentCategory = searchParams.get("kategori");

    if (!currentCategory) {
      const url = new URL(window.location.href);
      url.searchParams.set("kategori", "all");
      window.history.replaceState({}, "", url.toString());
    } else if (validCategories.includes(currentCategory)) {
      setKategori(currentCategory);
    } else {
      router.push("/404");
    }
  }, [searchParams, setKategori, router]);

  const handleTabChange = (newKategori) => {
    setKategori(newKategori);
    const url = new URL(window.location.href);
    url.searchParams.set("kategori", newKategori);
    router.push(url.toString());
  };

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  };

  return (
    <>
      <header
        className={`flex bg-black items-center justify-between border-b border-gray-300 ${
          loading ? "py-6" : "py-5"
        } lg:px-24 px-5  `}
      >
        <button
          onClick={handleBack}
          className="text-white hover:text-slate-200 md:ml-4"
        >
          <FaArrowLeft className="text-xl" />
        </button>

        <div className="flex flex-grow justify-center ">
          <button
            disabled={loading}
            onClick={() => handleTabChange("iphone")}
            className={`py-2 px-4 ${
              loading ? "hidden " : ""
            } font-semibold lg:text-sm md:text-sm text-xs cursor-pointer ${
              kategori === "iphone"
                ? "text-white border-b-2 border-white"
                : "text-slate-300 hover:text-slate-200"
            }`}
          >
            Iphone
          </button>
          <button
            disabled={loading}
            onClick={() => handleTabChange("accessories")}
            className={`py-2 px-4 ${
              loading ? "hidden " : ""
            }  font-semibold lg:text-sm md:text-sm text-xs cursor-pointer ${
              kategori === "accessories"
                ? "text-white border-b-2 border-white"
                : "text-slate-300 hover:text-slate-200"
            }`}
          >
            Aksesoris
          </button>
        </div>

        <button
          className="text-white"
          onClick={() => setSearchOpen(!isSearchOpen)}
        >
          <FaSearch />
        </button>
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

export default Header;
