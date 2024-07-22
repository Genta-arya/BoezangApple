"use client";

import React from "react";
import { useRouter } from "next/navigation"; // Untuk navigasi kembali
import { FaArrowLeft, FaFacebookF, FaWhatsapp, FaTiktok } from "react-icons/fa"; // Ikon kembali, Facebook, WhatsApp, TikTok
import useSingleProductStore from "@/ZustandState/useSingleProductStore";

const NavbarDetail = () => {
  const router = useRouter();

  const handleBack = () => {
    router.push("/");
  };

  return (
    <header className="bg-black text-white p-6 flex items-center justify-between">
      <button
        onClick={handleBack}
        className="flex items-center text-white gap-4"
      >
        <FaArrowLeft className="text-xl" />
        <p className="font-bold">Detail Produk</p>
      </button>
    </header>
  );
};

export default NavbarDetail;
