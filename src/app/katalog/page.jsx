import React, { Suspense } from "react";
import MainKatalog from "./components/MainKatalog";
import Footer from "@/components/Footer";




export async function generateMetadata({ params, searchParams }) {
  const { kategori } = searchParams;
  try {
    let title, description, keywords;
    
    if (kategori === 'iphone') {
      title = "Katalog iPhone - Boezang Apple Store Ketapang";
      description = "Katalog produk iPhone di Boezang Apple Store Ketapang.";
      keywords = "Katalog iPhone, Boezang Apple Store Ketapang, Toko iPhone Ketapang";
    } else if (kategori === 'accessories') {
      title = "Katalog Aksesoris - Boezang Apple Store Ketapang";
      description = "Katalog produk aksesoris di Boezang Apple Store Ketapang.";
      keywords = "Katalog Aksesoris, Boezang Apple Store Ketapang, Toko Aksesoris iPhone Ketapang";
    } else {
      title = "Katalog - Boezang Apple Store Ketapang";
      description = "Store iPhone Pertama di Ketapang Kalimantan Barat.";
      keywords = "Toko iPhone Ketapang, Apple Store Ketapang";
    }
    
    return {
      title,
      description,
      keywords,
      openGraph: {
        title,
        description,
        images: [
          {
            url: 'https://boezangapple.com/ogimage.png',
            alt: title,
          },
        ],
        siteName: "Boezang Apple",
      },
    };
  } catch (error) {
    return {
      title: "Produk Tidak Ditemukan",
      description: "Halaman ini tidak dapat ditemukan.",
      openGraph: {
        title: "Produk Tidak Ditemukan",
        description: "Halaman ini tidak dapat ditemukan.",
        images: [
          {
            url: "https://boezangapple.com/ogimage.png",
            width: 800,
            height: 600,
            alt: "Gambar Error",
          },
        ],
      },
    };
  }
}

const PageKatalog = () => {

  
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <MainKatalog  />
      </Suspense>
      <Footer />
    </main>
  );
};

export default PageKatalog;
