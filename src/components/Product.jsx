"use client";

import React, { useEffect, useState } from "react";
import useProductStore from "@/ZustandState/useProductStore";
import { GetProduct } from "@/Service/Api/GetProduct";
import { HoverEffect } from "./ui/card-hover-effect";
import CardProductMobile from "./MobileProduct";
import { MdOutlinePushPin } from "react-icons/md";
import Link from "next/link";
import { FaCartPlus } from "react-icons/fa";
import SkeletonLoading from "./SkeletonLoading";

const Product = () => {
  const { products, setProducts } = useProductStore();
  const [loading, setLoading] = useState(true);

 const fetchProducts = async () => {
  try {
    const data = await GetProduct();

    // Filter produk aktif & kategori iPhone
    const filteredProducts = data.data
      .filter(
        (product) => product.status === true && product.category === "iphone"
      )
      // Urutkan berdasarkan harga termurah dari variant
      .sort((a, b) => {
        const minA = Math.min(...a.variants.map((v) => v.price));
        const minB = Math.min(...b.variants.map((v) => v.price));
        return minA - minB;
      });

    setProducts(filteredProducts);
  } catch (error) {
    console.error("Failed to fetch products:", error);
  } finally {
    setLoading(false);
  }
};

  useEffect(() => {
    fetchProducts();
  }, [setProducts]);

  return (
    <div className="py-8 dark:bg-black dark:text-white bg-slate-100">
      <div className="lg:px-24">
        <div className="px-2 flex justify-center py-4">
          <MdOutlinePushPin className="lg:text-4xl md:text-4xl text-3xl mr-2 font-bold" />
          <div>
            <p className="text-center font-bold text-xl lg:text-4xl md:text-3xl">
              Garansi Harga Iphone Termurah{" "}
            </p>
            <p className="text-center font-bold text-xl lg:text-4xl lg:mt-4 md:text-3xl">
              Di Ketapang
            </p>
          </div>
        </div>

        {loading ? (
          <div className="md:p-2">
            <SkeletonLoading />
          </div>
        ) : (
          <>
            {products.length === 0  && loading ? (
              <>
                <div>
                  {" "}
                  <h1 className="text-white font-bold text-center lg:mt-24 lg:text-2xl">Katalog kami masih kosong</h1>
                </div>
              </>
            ) : (
              <>
                <div className="hidden lg:block md:block">
                  <HoverEffect items={products} />
                </div>
                <div className="lg:hidden md:hidden block">
                  <div className="mt-2">
                    <CardProductMobile products={products} item={6} />
                  </div>
                </div>
                <div className="flex justify-center hover:transition-all hover:scale-95 duration-300 ease-in">
                  <div className="px-4 flex justify-center p-2 dark:border w-fit items-center rounded-lg bg-black dark:bg-black text-white">
                    <Link href={"/katalog?kategori=iphone"}>
                      <div className="flex items-center gap-2">
                        <FaCartPlus size={24} />
                        <p className="md:text-xl text-sm font-bold">
                          Lihat Semua Katalog
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Product;
