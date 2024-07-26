import React, { Suspense } from "react";
import MainKatalog from "./components/MainKatalog";
import Footer from "@/components/Footer";


export const metadata = {
  title: "Katalog Produk - Boezang Apple Store Ketapang",
  description:
    "Store iPhone Pertama di Ketapang Kalimantan Barat, yang menjual produk iPhone second dan baru dan selain itu bisa melayani Service Center iPhone atau Produk Apple.",
  keywords:
    "Toko iPhone Ketapang, Apple Store ketapang, Store Iphone Ketapang, Ketapang Gadget, Kalimantan Barat, Iphone Second Ketapang, service center Iphone Ketapang",
  author: "Yogi",
  robots: "index, follow",
  openGraph: {
    title: "Katalog Produk - Boezang Apple Store Ketapang",
    description:
      "Store iPhone Pertama di Ketapang Kalimantan Barat, yang menjual produk iPhone second dan baru dan selain itu bisa melayani Service Center iPhone atau Produk Apple.",
    url: "https://boezangapple.com",
    images: [
      {
        url: 'https://boezangapple.com/icon.png',

        alt: `Boezang Apple Store | Ketapang Kalimantan Barat`,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Boezang Apple Store | Ketapang Kalimantan Barat",
    description:
      "Store iPhone Pertama di Ketapang Kalimantan Barat, yang menjual produk iPhone second dan baru dan selain itu bisa melayani Service Center iPhone atau Produk Apple.",
    images: [
      {
        url: `https://boezangapple.com/icon.png`,

        alt: `Boezang Apple Store | Ketapang Kalimantan Barat`,
      },
    ],
  },
};

const PageKatalog = () => {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
    
        <MainKatalog />
      </Suspense>
      <Footer />
    </main>
  );
};

export default PageKatalog;
