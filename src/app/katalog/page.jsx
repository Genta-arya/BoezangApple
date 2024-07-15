

import React from "react";
import MainKatalog from "./components/MainKatalog";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Katalog Produk - Boezang Apple"  // Ganti dengan judul yang diinginkan
};

const PageKatalog = () => {
  return (
    <main>
      <MainKatalog />{" "}
      <Footer />
    </main>
  );
};

export default PageKatalog;
