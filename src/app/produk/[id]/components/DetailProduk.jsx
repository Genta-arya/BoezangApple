"use client";

import { useEffect, useState } from "react";
import { GetSingleProduct } from "@/Service/Api/GetProduct";
import { useParams } from "next/navigation";
import React from "react";
import useSingleProductStore from "@/ZustandState/useSingleProductStore";
import Image from "next/image";
import SkeletonDetailProduk from "@/components/SkeletonDetail";
import { formatDate, formatIDR } from "@/lib/utils";
import { FaWhatsapp } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spesifikas from "./Spesifikas";
import HarusKami from "@/components/HarusKami";
import ShareProduct from "./ShareProduct";
import AvaibleStock from "./Avaible";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
export const DataColor = [
  { name: "Black", hex: "#000000" },
  { name: "White", hex: "#FFFFFF" },
  { name: "Red", hex: "#FF3B30" },
  { name: "Green", hex: "#4CAF50" },
  { name: "Blue", hex: "#007AFF" },
  { name: "Purple", hex: "#6A0D91" },
  { name: "Pacific Blue", hex: "#003F5C" },
  { name: "Silver", hex: "#C0C0C0" },
  { name: "Gold", hex: "#FFD700" },
  { name: "Graphite", hex: "#4B4B4B" },
  { name: "Starlight", hex: "#F0E6F6" },
  { name: "Midnight", hex: "#003F5C" },
  { name: "Pink", hex: "#FF69B4" },
  { name: "Yellow", hex: "#FFFF00" },
  { name: "Deep Purple", hex: "#4B0082" },
  { name: "Space Black", hex: "#1C1C1C" },
  { name: "Sierra Blue", hex: "#7B8D9B" },
  { name: "Light Green", hex: "#00FF00" },
];

const validateColor = (colorName) => {
  const color = DataColor.find(
    (c) => c.hex.toLowerCase() === colorName.toLowerCase()
  );
  return color ? color.hex : null;
};

const DetailProduk = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    color: "",
    kapasitas: "",
  });
  const [selectedCapacity, setSelectedCapacity] = useState("");
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [isIphoneCategory, setIsIphoneCategory] = useState(false); // State to track category

  const { products, setProducts } = useSingleProductStore();
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await GetSingleProduct(id);
        setProducts(data.data);

        // Check if the category is 'iphone'
        setIsIphoneCategory(data.data.category === "iphone");

        if (data.data.variants.length > 0) {
          const firstVariant = data.data.variants[0];
          setSelectedCapacity(firstVariant.kapasitas.toString());
          setSelectedVariant(null); // Initialize as null

          // Optionally, you can set `formData` here if needed, but keep values empty initially
          setFormData((prev) => ({
            ...prev,
            color: "",
            kapasitas: "",
          }));
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id, setProducts]);

  useEffect(() => {
    if (products?.variants) {
      const variant = products.variants.find(
        (v) => v.kapasitas.toString() === selectedCapacity
      );
      setSelectedVariant(variant || null);
    }
  }, [selectedCapacity, products]);

  if (loading) return <SkeletonDetailProduk />;
  if (error)
    return (
      <p className="text-center text-white py-8">Produk Tidak ditemukan</p>
    );

  const handleCapacityClick = (capacity) => {
    setSelectedCapacity(capacity.toString());
  };

  const handleColorClick = (colorName) => {
    const hexColor = validateColor(colorName);
    if (hexColor) {
      setFormData((prev) => ({
        ...prev,
        color: colorName,
      }));
    } else {
      console.error(`Color ${colorName} is not valid.`);
    }
  };

  const colorName =
    DataColor.find((c) => c.hex.toLowerCase() === formData.color.toLowerCase())
      ?.name || "";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.color) {
      return toast.info("Silahkan Pilih Warna");
    }
    const price = selectedVariant?.promo
      ? selectedVariant.price -
        (selectedVariant.price * selectedVariant.promo.discount) / 100
      : selectedVariant?.price || 0;

    const message = `Hallo Admin Boezang Apple, \n saya ${
      formData.name
    } ingin membeli produk \n ${products.name} \n Penyimpanan ${
      formData.kapasitas
    } GB \n warna ${colorName} \n dengan harga ${formatIDR(
      price
    )}. \n Apakah masih tersedia? \n\n Berikut link produk: \n ${
      window.location.href
    }`;

    const phoneNumber = "6289694451774";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.location.href = whatsappUrl;
  };

  return (
    <div className="p-4 w-full bg-white pt-36">
      {products ? (
        <div className="flex justify-center md:flex-col lg:flex-row flex-col gap-4 lg:gap-4 md:gap-4 ">
          {/* Gambar Produk */}
          <div className="flex justify-center">
            <Carousel
              className="w-96"
              showStatus={false}
              showArrows={true}
              showThumbs={true} // Menampilkan thumbnail
              infiniteLoop={true}
              showIndicators={true}
              autoPlay={true}
              interval={10000}
              transitionTime={1000}
              swipeable={true}
              dynamicHeight={true}
              emulateTouch={true}
              useKeyboardArrows={true}
            >
              {/* Gambar Utama (dari data produk) */}

              <div className="">
                <img
                  src={products.imageUrl}
                  alt={products.name}
                  className=" rounded-lg"
                />
              </div>
            </Carousel>
          </div>

          {/* Detail Produk */}
          <div className="lg:max-w-[35%] md:w-full  lg:px-8 md:px-5 px-4 rounded-lg pt-8 ">
            <h1 className="lg:text-4xl font-extrabold text-[#555555] md:text-[28px] text-xl pb-3 mb-4 ">
              {products.name}{" "}
              {isIphoneCategory && selectedCapacity && `${selectedCapacity} GB`}
              {formData.color && ` , ${colorName}`}
            </h1>

            {/* Kapasitas Buttons */}

            <div>
              <AvaibleStock />
            </div>

            {selectedVariant?.colorVariants && (
              <div className="mb-4 mt-8">
                <p className="block mb-2 text-sm font-bold text-gray-500">
                  WARNA
                </p>
                <div className="flex gap-2 flex-wrap md:w-96 w-80 lg:w-96 text-sm">
                  {selectedVariant?.colorVariants.map((color) => (
                    <button
                      key={color.id}
                      onClick={() => handleColorClick(color.value)}
                      className={`py-4 w-20 rounded border ${
                        formData.color === color.value
                          ? "ring-2 scale-110 ring-blue-800 shadow-2xl shadow-white"
                          : ""
                      } transition-all`}
                      style={{ backgroundColor: color.value }}
                    />
                  ))}
                </div>
              </div>
            )}

            {isIphoneCategory && (
              <div className="mb-4">
                <p className="block mb-2 text-sm font-bold text-gray-500">
                  KAPASITAS
                </p>
                <div className="flex gap-2 flex-wrap w-80 md:w-96 lg:w-96 text-sm">
                  {products.variants.map((variant) => (
                    <button
                      key={variant.id}
                      onClick={() => handleCapacityClick(variant.kapasitas)}
                      className={`py-2 px-4 rounded ${
                        selectedCapacity === variant.kapasitas.toString()
                          ? "bg-blue-800 text-white scale-110 "
                          : "text-black border"
                      }  transition-all`}
                    >
                      {variant.kapasitas} GB
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div
              className="border-t pt-4 mt-4 pb-4 text-justify"
              dangerouslySetInnerHTML={{ __html: products.deskripsi }}
            />

            <div className="w-full border-t">
              {" "}
              <ShareProduct />
            </div>
          </div>

          {/* Harga dan Kapasitas */}
          <div className="mb-6 border py-2  px-8 lg:max-w-lg lg:w-[25%] rounded-lg pt-8 h-fit pb-8">
            {/* Price Display */}
            {selectedVariant?.promo ? (
              <div className="text-red-500 lg:text-2xl md:text-xl text-xl font-semibold mb-8">
                {/* Original Price */}
                <p className="text-black font-bold text-center">
                  {formatIDR(
                    selectedVariant.price -
                      (selectedVariant.price * selectedVariant.promo.discount) /
                        100
                  )}
                </p>
                <div className="flex items-center gap-2 justify-center">
                  <p className="line-through text-gray-600 dark:text-gray-300 text-center text-sm font-sans">
                    {formatIDR(selectedVariant.price)}
                  </p>
                  <p className="text-red-500 font-light text-sm">
                    [{selectedVariant.promo.discount}%]
                  </p>
                </div>
                {/* Promo Expiry Date */}
                <p className="text-gray-600 dark:text-gray-300 text-xs text-center mt-2">
                  Berlaku Hingga: {formatDate(selectedVariant.promo.expiryDate)}
                </p>
              </div>
            ) : (
              <h1 className="lg:text-3xl md:text-xl text-xl  text-gray-600 font-bold  mb-4 text-center">
                {formatIDR(selectedVariant?.price || 0)}
              </h1>
            )}
            <div className="flex items-center justify-center mb-4 gap-6">
              <button
                disabled
                className="flex items-center justify-center "
              >
                <span className="text-lg">-</span>
              </button>
              <span className="mx-4 text-lg border w-28 text-center">1</span>{" "}
            
              <button
                disabled
                className="flex items-center justify-center "
              >
                <span className="text-lg">+</span>
              </button>
            </div>

            <button
              onClick={handleSubmit}
              className="bg-black border font-bold duration-300 ease-in text-white px-6 py-2 rounded w-full hover:bg-opacity-80 transition-all text-sm lg:text-base md:text-base"
            >
              <div className="flex items-center gap-2 lg:text-lg justify-center">
                <FaWhatsapp size={24} />
                <p>Pesan Sekarang</p>
              </div>
            </button>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-500">Produk tidak ditemukan</p>
      )}

      <div className="bg-white">
        <Spesifikas data={products.spesifikasi} />
        <HarusKami />
      </div>
      <ToastContainer />
    </div>
  );
};

export default DetailProduk;
