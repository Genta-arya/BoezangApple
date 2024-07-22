"use client";

import React from "react";

const AvaibleStock = () => {
  return (
    <div className="bg-white p-6 border border-black">
      <h1 className="text-xl font-bold text-gray-600 mb-4">
        Produk Tersedia di Toko!
      </h1>
      <p className="text-gray-700 ">
        Kunjungi{" "}
        <a className="font-bold text-black text-base" href="https://www.google.com/maps?ll=-1.85345,109.964145&z=17&t=m&hl=en&gl=ID&mapclient=embed&cid=16693213662924400108">
          Boezang Apple Store
        </a>{" "}
        untuk melihat produk secara langsung dan melakukan pembelian. Jika Anda
        memiliki pertanyaan tentang stok atau ketersediaan produk, jangan ragu
        untuk menghubungi kami untuk informasi lebih lanjut.
      </p>
    </div>
  );
};

export default AvaibleStock;
