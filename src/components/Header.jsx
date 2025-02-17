"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./ui/aurora-background";
import { FaShoppingCart } from "react-icons/fa";
import Button from "./ui/Button";
import { TextGenerateEffectDemo } from "@/lib/utils";
import icon from "@/assets/asset3.jpg";
import Image from "next/image";
import Link from "next/link";
export function Header() {
  const word =
    "Memberikan pelayanan terbaik serta memberikan kualitas produk murah berkualitas";

  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl  md:-mt-32  -mt-24 lg:-mt-7 md:text-6xl font-bold dark:text-white text-center mb-4"></div>
        <Image
          src={icon}
          alt="boezang apple ketapang"
          className="rounded-lg lg:w-[70%] md:w-auto shadow-2xl border"
        />
        <div className="font-extralight text-center text-base dark:text-neutral-200 py-4">
          <div className="flex flex-col  md:gap-4 lg:gap-4">
            <p className="lg:text-5xl md:text-5xl text-3xl font-bold">MakeYourChoice Apple Gadget</p>
            <div className="">

            <TextGenerateEffectDemo  words={word} />
            </div>
          </div>
        </div>
        <Button>
          <Link
            href={"/katalog?kategori=iphone"}
            className="flex gap-2 items-center"
          >
            <FaShoppingCart className="mr-2" />
            <p className="font-bold">Belanja Sekarang</p>
          </Link>
        </Button>
      </motion.div>
    </AuroraBackground>
  );
}
