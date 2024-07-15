"use client";

import React from "react";
import icon from "@/assets/icon.png";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="bg-slate-100 dark:bg-black dark:text-white dark:border-gray-500  border-t py-8 px-4 md:px-8">
      <div className="lg:px-24">
        <div className="container mx-auto">
          <div className="container mx-auto flex lg:flex-row md:flex-col-reverse flex-col-reverse gap-4  md:gap-4 lg:gap-24 justify-between">
            <div className="relative w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.730950246081!2d109.96156977717112!3d-1.853445136513588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e05197a82605831%3A0xe7aa3561ca4e65ec!2sBoezang%20Apple!5e0!3m2!1sen!2sid!4v1721026662245!5m2!1sen!2sid"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg shadow-md"
              ></iframe>
            </div>

            <div className="mb-8">
              <Image
                src={icon}
                className="rounded-full mb-4 md:w-32 w-20 p-1 bg-white"
              />
              <h2 className="md:text-2xl text-lg font-bold mb-4">
                BOEZANG APPLE
              </h2>
              <p className="mb-4 md:text-base text-sm text-justify">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <p className="mb-4 md:text-base text-sm">
                Jl. Pawan 1 No.54, Kauman, Kec. Benua Kayong, Kabupaten
                Ketapang, Kalimantan Barat 78821
              </p>
              <p className="mb-4 md:text-base text-sm">
                Setiap Hari : 9:30 - 22:00 WIB
              </p>
              <p>0896-9445-1774</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-600 dark:text-gray-300 md:text-base text-xs pt-12">
        <p>
          &copy; {new Date().getFullYear()} BOEZANG APPLE. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
