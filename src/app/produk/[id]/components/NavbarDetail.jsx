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

  return (
    <header className="bg-black text-white p-6 flex items-center justify-between fixed w-full z-50">
      <button
        onClick={handleBack}
        className="flex items-center text-white gap-4 w-full pl-8"
      >
        <FaArrowLeft className="text-xl" />
        <p className="font-bold lg:ml-4">Detail Produk</p>
      </button>
    </header>
  );
};

export default NavbarDetail;
