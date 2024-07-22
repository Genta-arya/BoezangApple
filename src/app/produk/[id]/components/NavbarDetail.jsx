"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaArrowLeft, FaFacebookF, FaWhatsapp, FaTiktok } from "react-icons/fa";
import useSingleProductStore from "@/ZustandState/useSingleProductStore";

const NavbarDetail = () => {
  const router = useRouter();

  const handleBack = () => {
    router.push("/");
  };

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []); // Empty dependency array ensures this effect runs only on mount

  return (
    <header className="bg-black text-white p-6 flex items-center justify-between">
      <button
        onClick={handleBack}
        className="flex items-center text-white gap-4 lg:pl-12"
      >
        <FaArrowLeft className="text-xl" />
        <p className="font-bold">Detail Produk</p>
      </button>
    </header>
  );
};

export default NavbarDetail;
