"use client";

import CardProductMobile from "@/components/MobileProduct";
import SkeletonLoading from "@/components/SkeletonLoading";
import { GetSearch } from "@/Service/Api/GetSearch";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const ResultSearch = () => {
  const { q } = useParams();
  const [data, setData] = useState([]);
  const [isFound, setIsFound] = useState(true);
  const [loading, setLoading] = useState(true);

  // Mengubah karakter '-' kembali menjadi spasi
  const searchFilter = q.replace(/-/g, " ");
  // Menggunakan decodeURIComponent untuk mendekode query
  const decodedQuery = decodeURIComponent(searchFilter);

  const resultData = async () => {
    try {
      const response = await GetSearch(searchFilter);
      setData(response.data);
      setIsFound(response.data.length > 0); // Memeriksa apakah ada produk yang ditemukan
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setIsFound(false);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    resultData();
  }, []);
  const truncateQuery = (query) => {
    return query.length > 50 ? query.slice(0, 50) + "..." : query;
  };
  if (loading) {
    return <SkeletonLoading />;
  }

  return (
    <div className=" w-full md:pt-12 text-white bg-black min-h-screen flex flex-col p-6 lg:px-24 ">
      <div className="text-sm lg:text-xl md:text-lg text-start md:ml-4 lg:ml-4 ml-2 flex flex-col ">
        <p>

        Terkait Hasil{" "}
        </p>
        <span className="text-white font-bold">
          {truncateQuery(decodedQuery)}
        </span>
      </div>

      {isFound ? (
        <CardProductMobile products={data} />
      ) : (
        <p className="text-gray-500 text-center pt-32 font-extrabold md:text-xl">
          Pencarian Tidak ditemukan
        </p>
      )}
    </div>
  );
};

export default ResultSearch;
