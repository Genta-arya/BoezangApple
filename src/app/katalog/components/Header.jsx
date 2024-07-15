"use client";

import useKategoriStore from "@/ZustandState/useKategoriStore";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import { FaArrowLeft, FaSearch } from "react-icons/fa";

const validCategories = ["iphone", "aksesoris"];

const Header = () => {
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

  // Fungsi untuk menangani klik tombol back

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  };

  return (
    <header className="flex bg-black items-center justify-between border-b border-gray-300 py-3 lg:px-24 px-4">
      <button
        onClick={handleBack}
        className="text-white hover:text-slate-200"
      >
        <FaArrowLeft className="text-xl" />
      </button>

      <div className="flex flex-grow justify-center">
        <button
          onClick={() => handleTabChange("iphone")}
          className={`py-2 px-4 font-semibold text-sm cursor-pointer ${
            kategori === "iphone"
              ? "text-white border-b-2 border-white"
              : "text-slate-300 hover:text-slate-200"
          }`}
        >
          Iphone
        </button>
        <button
          onClick={() => handleTabChange("aksesoris")}
          className={`py-2 px-4 font-semibold text-sm cursor-pointer ${
            kategori === "aksesoris"
              ? "text-white border-b-2 border-white"
              : "text-slate-300 hover:text-slate-200"
          }`}
        >
          Aksesoris
        </button>
      </div>

      <button className="text-white hover:text-slate-200">
        <FaSearch className="text-xl" />
      </button>
    </header>
  );
};

export default Header;
