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
  // Base neutral
  { name: 'Black', hex: '#1C1C1E' },
  { name: 'White', hex: '#F2F2F7' },
  { name: 'Silver', hex: '#D1D1D6' },
  { name: 'Gold', hex: '#FAD7A0' },

  // Pro tones
  { name: 'Graphite', hex: '#3A3A3C' },
  { name: 'Space Black', hex: '#2C2C2E' },

  // Standard Apple naming (frequently seen in iBox pages)
  { name: 'Midnight', hex: '#1A1A1A' },
  { name: 'Starlight', hex: '#F5EDE3' },

  { name: 'Red', hex: '#FF3B30' },

  { name: 'Blue', hex: '#0A84FF' },
  { name: 'Sierra Blue', hex: '#A7C7E7' },
  { name: 'Pacific Blue', hex: '#1B3A5B' },

  { name: 'Green', hex: '#34C759' },
  { name: 'Alpine Green', hex: '#355E3B' },

  { name: 'Purple', hex: '#AF52DE' },
  { name: 'Deep Purple', hex: '#3B2F5A' },

  { name: 'Pink', hex: '#FF9F9F' },
  { name: 'Yellow', hex: '#FFD60A' },

  // iPhone 16 (derived from official release pattern)
  { name: 'Teal', hex: '#2FA4A9' },
  { name: 'Ultramarine', hex: '#3F00FF' },

  // iPhone 17 (BELUM FIX DI IBOX → marked as tentative)
  { name: 'Lavender', hex: '#C8A2D1' },
  { name: 'Sage', hex: '#9CAF88' },
  { name: 'Mist Blue', hex: '#6B85A6' },
  {name:'Cosmic Orange', hex: '#f77f2c'},
  {name:'Deep Blue', hex:'#384672'},

  // Titanium (Pro series)
  { name: 'Black Titanium', hex: '#3C3C3D' },
  { name: 'White Titanium', hex: '#E5E5E7' },
  { name: 'Blue Titanium', hex: '#4A5A6A' },
  { name: 'Natural Titanium', hex: '#8A8A85' }
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
        console.error(err);
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
      <p className="flex justify-center items-center text-black py-8 pt-24 font-bold bg-white h-screen">
        404 | Produk Tidak Ditemukan
      </p>
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
  const qualityMessage = selectedVariant?.quality === true ? "News" : "Second";
  const fakeMarkup = 500000;

const realPrice = selectedVariant?.price || 0;
const displayedOriginalPrice = realPrice + fakeMarkup;
const displayedDiscountPrice = displayedOriginalPrice - fakeMarkup;
const price = displayedDiscountPrice;
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
            <div className="flex flex-col pb-3 mb-4">
              <h1 className="lg:text-4xl font-extrabold text-[#555555] md:text-[28px] text-xl  ">
                {products.name}{" "}
                {isIphoneCategory &&
                  selectedCapacity &&
                  `${selectedCapacity} GB`}
                {formData.color && ` , ${colorName}`}
              </h1>
              <div className="mt-4">
                <p className="text-gray-600 font-semibold text-end">
                  Quality {qualityMessage}
                </p>
              </div>
            </div>

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
  
  {/* Harga Promo */}
  <p className="text-black font-bold text-center">
    {formatIDR(displayedDiscountPrice)}
  </p>

  <div className="flex items-center gap-2 justify-center">
    
    {/* Harga Coret */}
    <p className="line-through text-gray-600 text-center text-sm font-sans">
      {formatIDR(displayedOriginalPrice)}
    </p>

    {/* Label */}
    <p className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
      PROMO
    </p>
  </div>
</div>
              
            ) : (
             <div className="text-red-500 lg:text-2xl md:text-xl text-xl font-semibold mb-8">
  
  {/* Harga Promo */}
  <p className="text-black font-bold text-center">
    {formatIDR(displayedDiscountPrice)}
  </p>

  <div className="flex items-center gap-2 justify-center">
    
    {/* Harga Coret */}
    <p className="line-through text-gray-600 text-sm">
      {formatIDR(displayedOriginalPrice)}
    </p>

    {/* Label */}
    <p className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
      PROMO
    </p>
  </div>
</div>
            )}
            <div className="flex items-center justify-center mb-4 gap-6">
              <button disabled className="flex items-center justify-center ">
                <span className="text-lg">-</span>
              </button>
              <span className="mx-4 text-lg border w-28 text-center">1</span>{" "}
              <button disabled className="flex items-center justify-center ">
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
