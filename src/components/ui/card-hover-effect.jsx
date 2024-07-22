"use client";
import { cn, formatDate, formatIDR } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import imageDummy from "@/assets/dummy.png";
import { useRouter } from "next/navigation";

export const HoverEffect = ({ items, className }) => {
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
    <div
      className={cn(
        "grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 py-10",
        className
      )}
    >
      {items.map((item, idx) => {
        const rating = 5;
        const lowestPriceVariant = getLowestPriceVariant(item.variants);

        const content = (
          <div
            key={item.id}
            className="relative group block p-2 h-full w-full hover:cursor-pointer"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => handleClick(item.id)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <Card>
              <div className="flex justify-center">
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  className="rounded-lg"
                  width={300}
                  height={300}
                />
              </div>

              <div className="flex justify-between items-center gap-4">
                <CardTitle>{item.name}</CardTitle>
                <div className="flex items-center mt-2 justify-end">
                  {[...Array(rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>
              </div>

              <div className="mt-2">
                {lowestPriceVariant && lowestPriceVariant.promo ? (
                  <div>
                    <p className="text-gray-800 dark:text-gray-100 text-base font-bold">
                      <span className="line-through text-gray-500">
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
                    <p className="text-gray-600 dark:text-gray-300 text-base font-bold">
                      Promo hingga {" "}
                      {formatDate(lowestPriceVariant.promo.expiryDate)}
                    </p>
                  </div>
                ) : (
                  lowestPriceVariant && (
                    <p className="text-gray-800 dark:text-gray-100 text-base font-bold">
                      Mulai Dari {formatIDR(lowestPriceVariant.price)}
                    </p>
                  )
                )}
              </div>
            </Card>
          </div>
        );

        return item.link ? (
          <Link href={item.link} key={item.id}>
            {content}
          </Link>
        ) : (
          <div key={item.id}>{content}</div>
        );
      })}
    </div>
  );
};

export const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full  p-4 overflow-hidden shadow-2xl bg-white dark:bg-black border border-transparent dark:border-white/[0.2]  relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({ className, children }) => {
  return (
    <h4 className={cn(" font-bold tracking-wide mt-4 text-lg", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({ className, children }) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
