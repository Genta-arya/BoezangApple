import React, { Suspense } from "react";
import MainKatalog from "./components/MainKatalog";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Katalog Produk - Boezang Apple", // Ganti dengan judul yang diinginkan
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
