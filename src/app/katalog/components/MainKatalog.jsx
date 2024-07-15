"use client";

import { useSearchParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

import useKategoriStore from "@/ZustandState/useKategoriStore";
import Header from "./Header";
import CardProductMobile from "@/components/MobileProduct";
import { GetProduct } from "@/Service/Api/GetProduct";

const MainKatalog = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { kategori, setKategori } = useKategoriStore((state) => ({
    kategori: state.kategori,
    setKategori: state.setKategori,
  }));

  const [products, setProducts] = useState([]);

  const ItemLength = products.length;

  useEffect(() => {
    const currentCategory = searchParams.get("kategori") || "all";

    if (kategori !== currentCategory) {
      setKategori(currentCategory);
    }

    const fetchProducts = async () => {
      try {
        const response = await GetProduct(currentCategory);
        setProducts(response);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [searchParams, setKategori, kategori]);

  return (
    <>
      <Header />

      <div className="lg:px-24">
        <CardProductMobile products={products} item={ItemLength} />
      </div>
    </>
  );
};

export default MainKatalog;
