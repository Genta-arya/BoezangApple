"use client";
import useSingleProductStore from "@/ZustandState/useSingleProductStore";
import React from "react";
import { FaFacebookF, FaTwitter, FaWhatsapp } from "react-icons/fa";

const ShareProduct = () => {
  const { products } = useSingleProductStore(); // Ambil produk dari Zustand store
  const handleShareWhatsApp = () => {
    const message = `Lihat Produk ini ${products.name} ${window.location.href}`;
    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const handleShareFacebook = () => {
    const message = `Lihat Produk ini ${products.name}`;
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      window.location.href
    )}&quote=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const handleShareTwitter = () => {
    const message = `Lihat Produk ini ${products.name} ${window.location.href}`;
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div className="py-4 flex flex-col gap-2">
      <p className="text-gray-500 font-bold">Bagikan</p>
      <div className="flex items-center  justify-start">
        <button
          onClick={handleShareWhatsApp}
          className="flex items-center text-green-500 "
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
          onClick={handleShareTwitter}
          className="flex items-center text-sky-400 mx-2"
        >
          <FaTwitter className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default ShareProduct;
