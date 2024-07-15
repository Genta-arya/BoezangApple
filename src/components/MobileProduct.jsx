"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import productImage from "@/assets/dummy.png";
import { useRouter } from "next/navigation";
import { formatIDR } from "@/lib/utils";

const CardProductMobile = ({ products, item }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const router = useRouter();

  const handleClick = (item) => {
    router.push(`/produk/${item}`);
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 py-4 px-2 md:px-4 dark:text-white dark:bg-black">
      {products.slice(0, item).map((product, idx) => {
        // Menghitung harga dalam IDR per produk
        const priceInIDR = product.basePrice * 15500;

        return (
          <div
            key={product.id}
            className="relative group border rounded-lg p-4 bg-white shadow-md dark:bg-black hover:cursor-pointer"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => handleClick(product.id)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-lg z-0" // Pastikan z-index lebih rendah
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.15 } }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <div className="relative z-10">
              <Image
                src={productImage}
                alt={product.name}
                className="w-full rounded-t-lg"
                width={400}
                height={300}
              />
              <h2 className="text-base font-semibold mt-2">{product.name}</h2>
              <p className="text-gray-800 dark:text-gray-100 mt-2">
                {formatIDR(priceInIDR)}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardProductMobile;
