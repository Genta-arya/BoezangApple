"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaArrowLeft, FaFacebookF, FaWhatsapp, FaTiktok } from "react-icons/fa";


const NavbarLayanan = ({title}) => {
  const router = useRouter();

  const handleBack = () => {
    router.push("/");
  };

  return (
    <header className="bg-black text-white p-6 flex items-center justify-between fixed w-full z-50">
      <button
        onClick={handleBack}
        className="flex items-center text-white gap-4  lg:pl-8 pl-1 "
      >
        <FaArrowLeft className="text-lg" />
        <p className="font-bold lg:ml-3 md:ml-3 ml-1 ">Layanan Kami</p>
      </button>
    </header>
  );
};

export default NavbarLayanan;
