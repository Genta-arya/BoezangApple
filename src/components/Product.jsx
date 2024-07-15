"use client";

import React, { useEffect } from "react";
import useProductStore from "@/ZustandState/useProductStore";
import { GetProduct } from "@/Service/Api/GetProduct";
import { HoverEffect } from "./ui/card-hover-effect";
import CardProductMobile from "./MobileProduct";
import icon from "@/assets/icon.png";
import Image from "next/image";
import Link from "next/link";
import { AuroraBackground } from "./ui/aurora-background";
const Product = () => {
  const { products, setProducts } = useProductStore();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await GetProduct();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, [setProducts]);

  return (
    <div className="py-8 dark:bg-black dark:text-white bg-slate-100">
      <div className="lg:px-24">
        <div className="px-2 flex justify-center">
          <div className=" py-4">
            <p className="text-center  font-bold text-xl lg:text-4xl md:text-3xl">
              Garansi Harga Iphone Termurah{" "}
            </p>
            <p className="text-center  font-bold text-xl lg:text-4xl  lg:mt-4 md:text-3xl">
              Di Ketapang
            </p>
          </div>
        </div>

        <div className="px-4 md:pt-16 md:-mb-8 flex justify-end pt-12">
          <Link href={""}>
            <p className="md:text-xl font-bold hover:underline transition-all duration-300 ease-in mb-2">
              Lihat Semua
            </p>
          </Link>
        </div>

        <div className="hidden lg:block md:block">
          <HoverEffect items={products} />
        </div>
        <div className="lg:hidden md:hidden block">
          <AuroraBackground>
            <div className=" mt-12">
              <CardProductMobile products={products} />
            </div>
          </AuroraBackground>
        </div>
      </div>
    </div>
  );
};

export default Product;
