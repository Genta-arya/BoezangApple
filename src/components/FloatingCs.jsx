'use client';

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Import ikon WhatsApp dari react-icons

const FloatingCs = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Floating Button */}
      <a
        href="https://wa.me/08112787771" // Ganti dengan nomor WhatsApp Anda
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-16 h-16 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition duration-300"
        aria-label="Hubungi Kami di WhatsApp"
      >
        <FaWhatsapp className="text-3xl" />
      </a>

      {/* Card */}
      <div className="absolute lg:-left-[12rem] -left-[10.5rem] md:-left-[12rem]  bottom-2 ml-4 bg-white border border-gray-300 shadow-lg rounded-lg p-2 max-w-xs dark:bg-gray-800 dark:border-gray-700">
        <h3 className="text-xs font-semibold dark:text-gray-300">Butuh Bantuan?</h3>
        <p className="text-xs text-gray-700  dark:text-gray-300">
          Hubungi kami sekarang.
        </p>
      </div>
    </div>
  );
};

export default FloatingCs;
