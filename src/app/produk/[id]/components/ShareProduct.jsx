"use client";
import useSingleProductStore from "@/ZustandState/useSingleProductStore";
import React from "react";
import { FaFacebookF, FaTiktok, FaWhatsapp } from "react-icons/fa";

const ShareProduct = () => {
  const { products } = useSingleProductStore(); // Ambil produk dari Zustand store
  const handleShareWhatsApp = () => {
    const message = `Hai, cek produk ini: ${products.name} - ${window.location.href}`;
    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  // Fungsi untuk membagikan produk ke Facebook
  const handleShareFacebook = () => {
    const message = `Cek produk ini: ${products.name}`;
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      window.location.href
    )}&quote=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  // Fungsi untuk membagikan produk ke TikTok
  const handleShareTikTok = () => {
    const message = `Cek produk ini: ${products.name}`;
    const url = `https://www.tiktok.com/share/item?url=${encodeURIComponent(
      window.location.href
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div className="py-4 flex flex-col gap-4">
    <p className="text-gray-500">Bagikan Produk</p>
      <div className="flex items-center  justify-start">
        <button
          onClick={handleShareWhatsApp}
          className="flex items-center text-green-500 mx-2"
        >
          <FaWhatsapp className="text-xl" />
        </button>
        <button
          onClick={handleShareFacebook}
          className="flex items-center  text-blue-500 mx-2"
        >
          <FaFacebookF className="text-xl" />
        </button>
        <button
          onClick={handleShareTikTok}
          className="flex items-center text-black mx-2"
        >
          <FaTiktok className="text-xl" />
        </button>
      </div>
   
    </div>
  );
};

export default ShareProduct;
