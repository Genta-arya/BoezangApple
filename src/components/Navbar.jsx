"use client";
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import icon from "@/assets/icon.png";
import Image from "next/image";
import {
  FaInstagram,
  FaMapMarkerAlt,
  FaMoon,
  FaSearch,
  FaSun,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";
import Link from "next/link";
import SearchModal from "./SearchModal";
import { AnimatePresence, motion } from "framer-motion";

export function NavbarDemo() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="bg-transparent ">
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
    </div>
  );
}

function Navbar({ className, toggleDarkMode, darkMode }) {
  const [active, setActive] = useState(null);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const openSearchModal = () => {
    setIsSearchModalOpen(true);
  };

  const closeSearchModal = () => {
    setIsSearchModalOpen(false);
  };
  return (
    <div className="flex justify-between items-center w-full lg:px-32 bg-gray-100  shadow-none md:px-12 mx-auto border-b  dark:border-gray-500 dark:text-white dark:bg-black">
      <div>
        <Image
          src={icon}
          alt="boezang apple ketapang"
          className="lg:w-36 md:w-36   border-2 border-white"
        />
      </div>

      <div
        className={cn("z-50 rounded-md flex  w-full  justify-center lg:pr-32 ")}
      >
        <Menu setActive={setActive}>
          <MenuItem setActive={setActive} active={active} item="Layanan">
            <div className="text-sm grid grid-cols-2 gap-10 p-4 pl-8">
              <ProductItem
                title="Service Iphone"
                href="/layanan"
                src="data:image/jpeg;base64,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"
                description="Melayani perbaikan segala keruskakan iphone."
              />
              <ProductItem
                title="Tukar Tambah"
                href="/layanan"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEMzIx8RZwk6ri1QQ4WMBwcxJX4nmRfCa1iQ&s"
                description="Melayani Tukar Tambah Iphone"
              />
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Katalog">
            <div className="text-sm grid grid-cols-2 gap-10 p-4">
              <ProductItem
                title="Iphone"
                href="/katalog?kategori=iphone"
                src="data:image/jpeg;base64,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"
                description="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual  "
              />
              <ProductItem
                title="Aksesoris"
                href="/katalog?kategori=accessories"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc9X3OLr9FXyPNGoaTAL8xXAFNJvs4VcNLUw&s"
                description="In publishing and graphic design, Lorem ipsum is a placeholder text commonly "
              />
            </div>
          </MenuItem>

         
          <MenuItem setActive={setActive} active={active} item="Kontak">
            <h1 className="text-center mb-2 font-bold">Temukan Kami</h1>
            <div className="text-sm grid grid-cols-2 gap-10 px-8 py-4">
              <div className="flex items-center space-x-2">
                <FaWhatsapp className="text-xl" />
                <HoveredLink href="https://api.whatsapp.com/message/ESTYNQBHHMZEB1?autoload=1&app_absent=0">
                  WhatsApp
                </HoveredLink>
              </div>
              <div className="flex items-center space-x-2">
                <FaInstagram className="text-xl" />
                <HoveredLink href="https://www.instagram.com/boezangapple/">
                  Instagram
                </HoveredLink>
              </div>
              <div className="flex items-center space-x-2">
                <FaTiktok className="text-xl" />
                <HoveredLink href="https://www.tiktok.com/@boezangapple">
                  Tiktok
                </HoveredLink>
              </div>
              <div className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-xl" />
                <HoveredLink href="https://maps.app.goo.gl/bYiS5YXvs6WVJQMs5">
                  Lokasi
                </HoveredLink>
              </div>
            </div>
          </MenuItem>
        </Menu>
      </div>

      <div
        className="cursor-pointer hover:bg-opacity-60 transition-all "
        onClick={() => setIsSearchModalOpen(!isSearchModalOpen)}
      >
        <FaSearch />
      </div>
      <AnimatePresence>
        {isSearchModalOpen && (
          <motion.div
           
          >
            <SearchModal
              onClose={closeSearchModal}
              isOpen={isSearchModalOpen}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
