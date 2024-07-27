import React from "react";
import icon from "@/assets/icon.png";
import Image from "next/image";
const ModalOrder = ({
  handleChange,
  formData,
  handleSubmit,
  setShowModal,
  productKapasitas,
  productName,
  productPrice,
  productColorOptions,
}) => {
  return (
    <div className="bg-black  p-8 rounded-lg shadow-xl md:max-w-xl lg:max-w-xl max-w-[90%] w-full text-white">
      <div className="flex justify-center">
        <Image src={icon} className="w-32  rounded-full pb-12" alt="boezang icon" />
      </div>

      <form onSubmit={handleSubmit} className="">
        <div className="max-h-[400px] overflow-auto">
          <div className="mb-4">
            <label className="block text-sm font-medium  mb-1">Produk</label>
            <input
              type="text"
              name="name"
              value={productName}
              disabled
              className="w-full border border-gray-300 p-2 text-sm lg:text-base rounded-lg disabled:bg-gray-600"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium  mb-1">Warna</label>
            <select
              name="color"
              value={formData.color || ""}
              onChange={handleChange}
              className="w-full border border-gray-300 bg-gray-600 text-sm lg:text-base p-2 rounded-lg mt-2"
            >
              {productColorOptions.map((color, index) => (
                <option key={index} value={color}>
                  {color}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium   mb-1">
              Kapasitas
            </label>
            <select
              name="kapasitas"
              value={formData.kapasitas || ""}
              onChange={handleChange}
              className="w-full border border-gray-300 text-sm   bg-gray-600 lg:text-base p-2 rounded-lg mt-2"
            >
              {productKapasitas.map((color, index) => (
                <option key={index} value={color}>
                  {color}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium  mb-1">Nama</label>
            <input
              type="text"
              name="name"
              placeholder="Nama"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 bg-gray-600  p-2 text-sm lg:text-base rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium  mb-1">Telepon</label>
            <input
              type="number"
              placeholder="628xxxxxxx"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 bg-gray-600  p-2 text-sm lg:text-base rounded-lg"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium  mb-1">Harga</label>
            <input
              type="text"
              value={productPrice}
              disabled
              className="w-full border border-gray-300 p-2 bg-gray-600   text-sm lg:text-base rounded-lg"
            />
          </div>
        </div>
        <div className="flex flex-col-reverse justify-end gap-2">
          <button
            type="button"
            onClick={() => setShowModal(false)}
            className="bg-gray-500  text-white px-4 py-2 text-sm lg:text-base rounded-lg "
          >
            Batal
          </button>
          <button
            type="submit"
            className="bg-black text-white border mt-8 px-4 py-2 rounded-lg  text-sm lg:text-base font-bold hover:bg-gray-800 transition-colors"
          >
            Chat WhatsApp
          </button>
        </div>
      </form>
    </div>
  );
};

export default ModalOrder;
