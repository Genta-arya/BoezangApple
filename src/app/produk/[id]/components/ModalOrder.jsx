import React from "react";
import icon from "@/assets/icon.png";
import Image from "next/image";
const ModalOrder = ({
  handleChange,
  formData,
  handleSubmit,
  setShowModal,
  productName,
  productPrice,
  productColorOptions,
}) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg md:max-w-xl lg:max-w-xl max-w-80 w-full">
      <div className="flex justify-center">
        <Image src={icon} className="w-32  rounded-full pb-12" />
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Produk
          </label>
          <input
            type="text"
            name="name"
            value={productName}
            disabled
            className="w-full border border-gray-300 p-2 rounded-lg"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Warna
          </label>
          <select
            name="color"
            value={formData.color || ""}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-lg mt-2"
          >
            {productColorOptions.map((color, index) => (
              <option key={index} value={color}>
                {color}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Nama
          </label>
          <input
            type="text"
            name="name"
            placeholder="Nama"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-2 rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Telepon
          </label>
          <input
            type="number"
            placeholder="628xxxxxxx"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-2 rounded-lg"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Harga
          </label>
          <input
            type="text"
            value={productPrice}
            disabled
            className="w-full border border-gray-300 p-2 rounded-lg"
          />
        </div>
        <div className="flex flex-col-reverse justify-end gap-2">
          <button
            type="button"
            onClick={() => setShowModal(false)}
            className="bg-gray-600 text-white px-4 py-2 rounded-lg "
          >
            Batal
          </button>
          <button
            type="submit"
            className="bg-black text-white px-4 py-2 rounded-lg font-bold hover:bg-gray-800 transition-colors"
          >
            Chat WhatsApp
          </button>
        </div>
      </form>
    </div>
  );
};

export default ModalOrder;
