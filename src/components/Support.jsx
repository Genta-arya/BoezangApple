import React from "react";
import ibox from "@/assets/ibox.png";
import tam from "@/assets/tam.png";
import Image from "next/image";
// import asset2 from "@/assets/tam.png"
const partners = [
  {
    name: "iBOX (Pt. Data Citra Mandiri)",
    description:
      "iBox merupakan reseller iPhone resmi di Indonesia yang telah lama menjadi mitra Boezang Apple dalam penjualan iPhone, iPad, dan Macbook second.",
    icon: ibox,
  },
  {
    name: "TAM (Teletama Artha Mandiri)",
    description:
      "Dalam penjualan iPhone new brand, selain bermitra dengan Global Danapati Niaga (GDN). Boezang Apple turut bermitra dengan distributor resmi Apple di Indonesia yaitu TAM.",
    icon: tam,
  },
];

const Support = () => {
  return (
    <div className="p-4 dark:bg-black dark:text-white bg-slate-100 text-center pt-12 pb-12">
      <div className="flex justify-center mb-4 ">
        <h1 className="text-2xl font-bold border-dashed border-b w-fit">
          Mitra Resmi Kami
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 md:mt-12 gap-2">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="bg-white dark:bg-black dark:border dark:border-gray-500 p-4 rounded-lg shadow-xl flex flex-col items-center"
          >
            <Image
              src={partner.icon}
              alt={partner.name}
              className="w-32 mb-4 dark:bg-white dark:rounded-full mt-4"
            />
            <h2 className="text-xl font-semibold py-4">{partner.name}</h2>
            <p className="text-gray-400">{partner.description}</p>
          </div>
        ))}
      </div>


    </div>
  );
};

export default Support;
