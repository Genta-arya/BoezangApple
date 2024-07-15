"use client";

import React, { useEffect } from "react";
import useProductStore from "@/ZustandState/useProductStore";
import { GetProduct } from "@/Service/Api/GetProduct";
import { HoverEffect } from "./ui/card-hover-effect";
import CardProductMobile from "./MobileProduct";
import { MdOutlinePushPin } from "react-icons/md";
import Link from "next/link";
import { FaCartPlus } from "react-icons/fa";

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
        <div className="px-2 flex justify-center py-4">
          <MdOutlinePushPin className="lg:text-4xl md:text-4xl text-3xl mr-2 font-bold" />
          <div className=" ">
            <p className="text-center  font-bold text-xl lg:text-4xl md:text-3xl">
              Garansi Harga Iphone Termurah{" "}
            </p>
            <p className="text-center  font-bold text-xl lg:text-4xl  lg:mt-4 md:text-3xl">
              Di Ketapang
            </p>
          </div>
        </div>

        <div className="hidden lg:block md:block">
          <HoverEffect items={products} />
        </div>
        <div className="lg:hidden md:hidden block">
          <div className=" mt-2">
            <CardProductMobile products={products} item={6} />
          </div>
        </div>
        <div className="flex justify-center hover:transition-all hover:scale-95 duration-300 ease-in">
          <div className="px-4  flex justify-center  p-2 dark:border w-fit items-center rounded-lg bg-black dark:bg-black text-white">
            <Link href={""}>
              <div className="flex items-center gap-2">
              <FaCartPlus size={24} />
                <p className="md:text-xl text-sm font-bold ">
                  Lihat Semua Katalog
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
