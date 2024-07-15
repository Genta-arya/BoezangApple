"use client";

import { useEffect, useState } from "react";
import { GetSingleProduct } from "@/Service/Api/GetProduct";
import { useParams } from "next/navigation";
import React from "react";
import useSingleProductStore from "@/ZustandState/useSingleProductStore";
import Image from "next/image";
import dummyImage from "@/assets/dummy.png";
import ModalOrder from "./ModalOrder";
import ShareProduct from "./ShareProduct";
import { formatIDR } from "@/lib/utils";

const exchangeRate = 15500; // Contoh kurs USD ke IDR, sesuaikan dengan kurs terkini

const DetailProduk = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false); // State untuk kontrol modal
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    color: "",
    kapasitas: "",
  });
  const { products, setProducts } = useSingleProductStore();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await GetSingleProduct(id);
        setProducts(data);
        if (data.colorOptions.length > 0) {
          setFormData((prev) => ({
            ...prev,
            color: data.colorOptions[0],
          }));
        }
        if (data.storageOptions.length > 0) {
          setFormData((prev) => ({
            ...prev,
            kapasitas: data.storageOptions[0],
          }));
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  useEffect(() => {
    if (showModal) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    // Clean up the effect
    return () => document.body.classList.remove("no-scroll");
  }, [showModal]);

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error)
    return <p className="text-center text-red-500">Error: {error.message}</p>;

  const priceInIDR = products.basePrice * exchangeRate;


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = ` Hallo Admin Boezang Apple, \n saya ${
      formData.name
    } ingin membeli produk \n ${products.name} \n Penyimpanan ${formData.kapasitas}  \n warna ${
      formData.color
    } \n dengan harga ${formatIDR(
      priceInIDR
    )}. \n Apakah masih tersedia? \n\n Berikut link produk: \n ${
      window.location.href
    }`;

    const phoneNumber = "6289618601348";

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.location.href = whatsappUrl;

    // Tutup modal
    setShowModal(false);
  };

  return (
    <div className="p-4 w-full">
      {products ? (
        <div className="flex justify-center md:flex-col lg:flex-row flex-col gap-4 lg:gap-12 md:gap-4">
          {/* Gambar Produk */}
          <div className="flex justify-center">
            <Image
              src={dummyImage}
              alt={products.name}
              className="rounded-lg lg:shadow-lg lg:border lg:w-96 lg:h-96  lg:border-gray-300"
            />
          </div>

          {/* Detail Produk */}
          <div className="lg:max-w-xl md:w-full border py- lg:px-8 md:px-5 px-4 rounded-lg pt-8">
            <h1 className="lg:text-3xl md:text-2xl text-xl font-bold mb-4">
              {products.name}
            </h1>
            <p className="text-base text-gray-700 mb-4">
              {products.description}
            </p>

            <div className="mb-6">
              <h2 className="text-base font-semibold mb-2">
                Informasi Tambahan
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>CLICK & PICKUP</li>
                <li>Stok: {products.inStock ? "Tersedia" : "Habis"}</li>
                <li>Bebas Biaya Pengiriman</li>
                <li>Cicilan 0% Hingga 24 Bulan</li>
              </ul>
            </div>

            {/* Spesifikasi Produk */}
            <div className="mb-6">
              <h2 className="text-base font-semibold mb-2">
                Spesifikasi Produk
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>
                  <strong>Display:</strong> {products.display}
                </li>
                <li>
                  <strong>CPU:</strong> {products.CPU}
                </li>
                <li>
                  <strong>Rear Camera:</strong> {products.camera?.rearCamera}
                </li>
                <li>
                  <strong>Front Camera:</strong> {products.camera?.frontCamera}
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h2 className="text-base font-semibold mb-2">WARNA:</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                {products.colorOptions.map((color, index) => (
                  <li key={index}>{color}</li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <h2 className="text-base font-semibold mb-2">KAPASITAS:</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                {products.storageOptions.map((storage, index) => (
                  <li key={index}>{storage}</li>
                ))}
              </ul>
            </div>

            <ShareProduct />
          </div>

          {/* Harga dan Tombol */}
          <div className="mb-6 border py-2 px-8 rounded-lg pt-8 h-fit pb-8">
            <p className="lg:text-2xl md:text-xl text-xl font-semibold text-green-600 mb-4">
              {formatIDR(priceInIDR)}
            </p>

            <div className="mb-6">
              <h2 className="text-base font-semibold mb-2">Qty:</h2>
              <input
                type="number"
                min="1"
                value={1}
                disabled
                className="w-full border border-gray-300 p-2 rounded-lg"
              />
            </div>
            <button
              onClick={() => setShowModal(true)}
              className="bg-black font-bold hover:scale-95 duration-300 ease-in text-white px-6 py-2 rounded-lg w-full hover:bg-gray-800 transition-all text-sm lg:text-base md:text-base"
            >
              Pesan Sekarang
            </button>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-500">Produk tidak ditemukan</p>
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <ModalOrder
            formData={formData}
            handleSubmit={handleSubmit}
            setShowModal={setShowModal}
            handleChange={handleChange}
            productName={products.name}
            productPrice={formatIDR(priceInIDR)}
            productKapasitas={products.storageOptions}
            productColorOptions={products.colorOptions}
          />
        </div>
      )}
    </div>
  );
};

export default DetailProduk;
