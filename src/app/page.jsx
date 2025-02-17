"use client";

import Container from "@/components/Container";
import FloatingCs from "@/components/FloatingCs";
import Footer from "@/components/Footer";
import HarusKami from "@/components/HarusKami";
import { Header } from "@/components/Header";

import Navbar from "@/components/MobileNavbar";

import { NavbarDemo } from "@/components/Navbar";
import PopUpModal from "@/components/PopUpModal";
import Product from "@/components/Product";
import { CardStack } from "@/components/ui/Card-Stack";

import React from "react";

const page = () => {
  return (
    <main className="dark:bg-black">
      <div className="hidden lg:block md:block border-b   w-full">
        <div className="">
          <NavbarDemo />
        </div>
      </div>

      <div className="lg:hidden md:hidden">
        <Navbar />
      </div>
      <div className="">
        <Header />

        <Container />
        <div className="">
          <Product />
        </div>

        <HarusKami />
        <div className="flex justify-center md:py-24 border-t py-24 lg:py-24">
          <CardStack />
        </div>
        <Footer />
      </div>

      <FloatingCs />
      <PopUpModal />
    </main>
  );
};

export default page;
