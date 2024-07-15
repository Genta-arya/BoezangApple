import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import imageDummy from "@/assets/dummy.png";

const USD_TO_IDR = 15000; // Konversi dari USD ke IDR

export const HoverEffect = ({ items, className }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={cn(
        "grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 py-10",
        className
      )}
    >
      {items.slice(0, 8).map((item, idx) => {
        const priceInIDR = item.basePrice * USD_TO_IDR; 
        const rating = 5; 

        const content = (
          <div
            key={item.id}
            className="relative group block p-2 h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
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
              <Image
                src={imageDummy}
                alt={item.name}
                className="rounded-t-2xl"
                width={400}
                height={300}
              />

              <CardTitle>{item.name}</CardTitle>
              <div className="flex items-center mt-2">
                {[...Array(rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>
              <CardDescription>{item.description}</CardDescription>
              <p className="text-zinc-400 mt-2">
                IDR {priceInIDR.toLocaleString()}
              </p>

              <p className="text-zinc-400 mt-2">
                In Stock: {item.inStock ? "Yes" : "No"}
              </p>
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
    <h4 className={cn(" font-bold tracking-wide mt-4", className)}>
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
