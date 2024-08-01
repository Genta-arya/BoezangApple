import React from "react";
import NavbarLayanan from "./components/NavbarLayanan";
import ContentLayanan from "./components/ContentLayanan";
import Footer from "@/components/Footer";

export const metadata = {
  title: "layanan kami - Boezang apple store",
  description:
    "Store iPhone Pertama di Ketapang Kalimantan Barat, yang menjual produk iPhone second serta menyediakan layanan Service Center iPhone dan program tukar tambah.",
  keywords:
    "Toko iPhone Ketapang, Apple Store Ketapang, Store iPhone Ketapang, Ketapang Gadget, Kalimantan Barat, iPhone Second Ketapang, service center iPhone Ketapang, iPhone Ketapang, tukar tambah iPhone Ketapang",
  author: "Yogi",
  robots: "index, follow",

  openGraph: {
    title: "layanan kami - Boezang apple store",
    description:
      "Store iPhone Pertama di Ketapang Kalimantan Barat, yang menjual produk iPhone second dan  serta menyediakan layanan Service Center iPhone dan program tukar tambah.",
    url: "https://boezangapple.com",
    images: [
      {
        url: "https://boezangapple.com/service.png",
        alt: "Boezang Apple Store - Ketapang Kalimantan Barat",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "layanan kami - Boezang apple store",
    description:
      "Store iPhone Pertama di Ketapang Kalimantan Barat, yang menjual produk iPhone second dan  serta menyediakan layanan Service Center iPhone dan program tukar tambah.",
    images: [
      {
        url: "https://boezangapple.com/service.png",
        alt: "Boezang Apple Store - Ketapang Kalimantan Barat",
      },
    ],
  },
};
const page = () => {
  return (
    <main className="min-h-screen">
      <nav>
        <NavbarLayanan />
      </nav>
        <ContentLayanan />
      <Footer />
    </main>
  );
};

export default page;
