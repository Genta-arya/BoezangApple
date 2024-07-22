"use client";

import { useSearchParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

import useKategoriStore from "@/ZustandState/useKategoriStore";
import Header from "./Header";
import CardProductMobile from "@/components/MobileProduct";
import { GetProductByCategory } from "@/Service/Api/GetProduct";
import SkeletonLoading from "@/components/SkeletonLoading";

const MainKatalog = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { kategori, setKategori } = useKategoriStore((state) => ({
    kategori: state.kategori,
    setKategori: state.setKategori,
  }));

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const ItemLength = products.length;

  useEffect(() => {
    const currentCategory = searchParams.get("kategori") || "all";

    if (kategori !== currentCategory) {
      setKategori(currentCategory);
    }

    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await GetProductByCategory(currentCategory);
        setProducts(response.data.filter(product => product.status === true)); // Filter products by status
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [searchParams]);

  if (loading)
    return (
      <>
        <Header loading={loading} state={setProducts} />
        <div className="p-4">
          <SkeletonLoading />
        </div>
      </>
    );

  return (
    <>
      <Header loading={loading} state={setProducts}/>
      {products.length === 0  ? (
        <div className="text-center text-white py-24">Produk tidak ditemukan</div>
      ) : (
        <div className="lg:px-24">
          <CardProductMobile products={products} item={ItemLength} />
        </div>
      )}
    </>
  );
};

export default MainKatalog;
