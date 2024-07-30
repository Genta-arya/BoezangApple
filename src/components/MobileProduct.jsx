"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import productImage from "@/assets/dummy.png";
import { useRouter } from "next/navigation";
import { formatDate, formatIDR } from "@/lib/utils";
import { FaStar } from "react-icons/fa";

const CardProductMobile = ({ products, item }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const router = useRouter();

  const handleClick = (item) => {
    router.push(`/produk/${item}`);
  };

  const getLowestPriceVariant = (variants) => {
    if (!variants || variants.length === 0) return null;
    return variants.reduce((prev, curr) =>
      curr.price < prev.price ? curr : prev
    );
  };

  const getPromoPrice = (price, discount) => {
    return price - (price * discount) / 100;
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 py-4 px-2 md:px-4 dark:text-white dark:bg-black">
      {products.map((product, idx) => {
        const lowestPriceVariant = getLowestPriceVariant(product.variants);

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
                  className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-lg z-0"
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
                src={product.imageUrl}
                alt={product.name}
                className="w-full rounded-t-lg"
                width={400}
                height={300}
              />
              <div className="flex items-center justify-between mt-2">
                <h2 className="text-base font-semibold ">{product.name}</h2>
                {lowestPriceVariant && (
                  <p className={` ${lowestPriceVariant.quality ? "bg-green-500" : "bg-red-500" } px-2 rounded-md font-bold text-white text-xs`}>
                  {lowestPriceVariant.quality ? "New" : "Second"}
                  </p>
                )}
              </div>
              <div className="mt-2">
                {lowestPriceVariant && lowestPriceVariant.promo ? (
                  <div>
                    <p className="text-gray-800 dark:text-gray-100 text-xs">
                      <span className="line-through">
                        {formatIDR(lowestPriceVariant.price)}
                      </span>{" "}
                      <span className="text-red-500">
                        {formatIDR(
                          getPromoPrice(
                            lowestPriceVariant.price,
                            lowestPriceVariant.promo.discount
                          )
                        )}
                      </span>
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-xs">
                      Promo hingga{" "}
                      {formatDate(lowestPriceVariant.promo.expiryDate)}
                    </p>
                  </div>
                ) : (
                  lowestPriceVariant && (
                    <p className="text-gray-800 dark:text-gray-100 text-xs font-bold">
                      {formatIDR(lowestPriceVariant.price)}
                    </p>
                  )
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardProductMobile;
