import Container from "@/components/Container";
import FloatingCs from "@/components/FloatingCs";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import Lokasi from "@/components/Lokasi";

import Navbar from "@/components/MobileNavbar";

import { NavbarDemo } from "@/components/Navbar";
import Product from "@/components/Product";

import React from "react";

const page = () => {
  return (
    <main className="dark:bg-black">
      <div className="hidden lg:block md:block">
        <NavbarDemo />
      </div>

      <div className="lg:hidden md:hidden">
        <Navbar />
      </div>

      <Header />

    <Container />
      <div className="">
        <Product />
      </div>
      <Lokasi />
      <Footer />
      <FloatingCs />
    </main>
  );
};

export default page;
