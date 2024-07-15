import Container from "@/components/Container";
import { Header } from "@/components/Header";

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
      <div className="lg:px-24">
        <Product />
      </div>
    </main>
  );
};

export default page;
