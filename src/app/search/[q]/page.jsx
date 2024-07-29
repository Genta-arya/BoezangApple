import React from "react";
import ResultSearch from "./components/ResultSearch";
import HeaderSearch from "./components/HeaderSearch";

export async function generateMetadata({ params }) {
  const { q } = params;

  return {
    title: `Hasil Pencarian ${q.replace(
      /-/g,
      " "
    )} - Boezang Apple Store Ketapang`, // Title halaman
    description: `Hasil Pencarian ${q.replace(
      /-/g,
      " "
    )} Boezang Apple Store Ketapang`,
    keywords: `Cari Produk ${q.replace(
      /-/g,
      " "
    )} Boezang Apple Store Ketapang`,
    openGraph: {
      title: `Hasil Pencarian ${q.replace(
        /-/g,
        " "
      )} - Boezang Apple Store Ketapang`,
      description: `Detail lengkap produk ${q.replace(
        /-/g,
        " "
      )}. Lihat Sekarang.`,
      images: [
        {
          url: "https://boezangapple.com/ogimage.png",

          alt: `Jual ${q.replace(/-/g, " ")} | Boezang Apple`,
        },
      ],
      siteName: "Boezang Apple",
    },
  };
}
const Page = () => {
  return (
    <main className="">
      <header>
        <HeaderSearch />
      </header>

      <ResultSearch />
    </main>
  );
};

export default Page;
