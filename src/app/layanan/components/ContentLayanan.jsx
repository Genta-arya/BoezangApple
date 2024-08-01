import Image from "next/image";
import React from "react";
import icon from "@/assets/serviceIphone.png";
import Link from "next/link";

const ContentLayanan = () => {
  return (
    <div className="p-8 font-sans text-white pt-24">
      <div className="flex justify-center">
        <Image src={icon} alt="Icon" className="w-full lg:w-[70%] rounded-md" />
      </div>

      <h3 className="text-xl font-semibold text-white mb-2 mt-8">
        Service Center iPhone
      </h3>
      <p className="leading-relaxed mb-6">
        Ada masalah dengan iPhone Anda? Tim teknisi kami siap membantu! Mulai
        dari perbaikan layar, penggantian baterai, hingga masalah software, kami
        menawarkan solusi cepat dan efisien dengan suku cadang asli Apple. Jadi,
        tidak perlu khawatir lagi!
      </p>

      <h3 className="text-xl font-semibold text-white mb-2">
        Produk Baru dan Second
      </h3>
      <p className="leading-relaxed mb-6">
        Kami punya berbagai pilihan iPhone baru dan second dengan kualitas
        terjamin. Semua produk second kami telah melalui inspeksi ketat, jadi
        Anda bisa membeli dengan percaya diri. Dapatkan iPhone impian Anda di
        sini!
      </p>

      <h3 className="text-xl font-semibold text-white mb-2">
        Aksesoris dan Perlengkapan
      </h3>
      <p className="leading-relaxed mb-6">
        Lengkapi iPhone Anda dengan aksesoris terbaik! Dari casing pelindung,
        charger, earphone, hingga perlengkapan lainnya, kami punya semuanya
        untuk mendukung gaya hidup digital Anda. Temukan aksesoris yang pas
        untuk Anda!
      </p>

      <h3 className="text-xl font-semibold text-white mb-2">
        Program Tukar Tambah
      </h3>
      <p className="leading-relaxed mb-6">
        Ingin iPhone baru? Tukarkan iPhone lama Anda dengan yang baru di program
        tukar tambah kami! Prosesnya mudah dan Anda bisa mendapatkan potongan
        harga. Upgrade jadi lebih hemat dan praktis!
      </p>

      <h3 className="text-xl font-semibold text-white mb-2">
        Prosedur Tukar Tambah
      </h3>
      <ol className="list-decimal pl-6 mb-6 leading-relaxed">
        <li className="mb-2">
          <strong>Siapkan iPhone Lama Anda:</strong> Pastikan data Anda sudah
          dicadangkan dan perangkat telah di-reset ke pengaturan pabrik.
        </li>
        <li className="mb-2">
          <strong>Kunjungi Boezang Apple Store:</strong> Bawa iPhone lama Anda
          ke toko kami untuk evaluasi kondisi.
        </li>
        <li className="mb-2">
          <strong>Penilaian oleh Teknisi:</strong> Tim teknisi kami akan menilai
          kondisi fisik dan fungsional iPhone Anda untuk menentukan nilai tukar.
        </li>
        <li className="mb-2">
          <strong>Pilih iPhone Baru Anda:</strong> Pilih model iPhone baru yang
          Anda inginkan dan dapatkan potongan harga berdasarkan nilai tukar
          iPhone lama Anda.
        </li>
        <li className="mb-2">
          <strong>Proses Pembayaran:</strong> Lakukan pembayaran sesuai dengan
          harga iPhone baru setelah dipotong nilai tukar.
        </li>
      </ol>

      <p className="leading-relaxed">
        Kunjungi{" "}
        <Link
          href="https://maps.app.goo.gl/bfG5Wd2oMvYG9ZkD8"
          className="underline"
        >
          <strong>Boezang Apple Store</strong>
        </Link>{" "}
        sekarang dan rasakan layanan terbaik kami. Kami selalu siap membantu
        Anda dengan senyuman!
      </p>
    </div>
  );
};

export default ContentLayanan;
