"use client"

import Container from "@/components/Container";
import FloatingCs from "@/components/FloatingCs";
import Footer from "@/components/Footer";
import HarusKami from "@/components/HarusKami";
import { Header } from "@/components/Header";
import Lokasi from "@/components/Lokasi";

import Navbar from "@/components/MobileNavbar";

import { NavbarDemo } from "@/components/Navbar";
import Product from "@/components/Product";

import React, { useEffect } from "react";

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
      <HarusKami />
      <Footer />
      <FloatingCs />
    </main>
  );
};

export default page;
