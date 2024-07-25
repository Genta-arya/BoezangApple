import { Roboto } from "next/font/google";
import "./globals.css";
import Head from "next/head";

export const metadata = {
  title: "Boezang Apple",
  description:
    "Store iPhone Pertama diKetapang Kalimantan Barat , yang menjual produk iPhone second dan baru dan selain itu bisa melayani Service Center iPhone atau Produk Apple",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className="dark">
      <Head>
        <link
          rel="icon"
          href="https://boezang-apple-development.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ficon.e16eee5c.png&w=256&q=75"
        />
      </Head>
      <body>{children}</body>
    </html>
  );
}
