import "./globals.css";
import Head from "next/head";
import { GoogleTagManager } from "@next/third-parties/google";
import GoogleAnalyticss from "./Analytic";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import TrackingAnalytic from "@/lib/TrackingAnalytic";
export const metadata = {
  title: "Boezang Apple Store - Ketapang Kalimantan Barat",
  description:
    "Store iPhone Pertama di Ketapang Kalimantan Barat, yang menjual produk iPhone second dan baru dan selain itu bisa melayani Service Center iPhone atau Produk Apple.",
  keywords:
    "Toko iPhone Ketapang, Apple Store ketapang, Store Iphone Ketapang, Ketapang Gadget, Kalimantan Barat, Iphone Second Ketapang, service center Iphone Ketapang , iphone Ketapang",
  author: "Yogi",
  robots: "index, follow",

  openGraph: {
    title: "Boezang Apple Store - Ketapang Kalimantan Barat",
    description:
      "Store iPhone Pertama di Ketapang Kalimantan Barat, yang menjual produk iPhone second dan baru dan selain itu bisa melayani Service Center iPhone atau Produk Apple.",
    url: "https://boezangapple.com",
    images: [
      {
        url: "https://boezangapple.com/ogimage.png",

        alt: `Boezang Apple Store - Ketapang Kalimantan Barat`,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Boezang Apple Store - Ketapang Kalimantan Barat",
    description:
      "Store iPhone Pertama di Ketapang Kalimantan Barat, yang menjual produk iPhone second dan baru dan selain itu bisa melayani Service Center iPhone atau Produk Apple.",
    images: [
      {
        url: `https://boezangapple.com/ogimage.png`,

        alt: `Boezang Apple Store - Ketapang Kalimantan Barat`,
      },
    ],
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="id" className="dark">
      <Head>
        <link
          rel="preload"
          href="https://www.googletagmanager.com/gtm.js?id=G-BVZKXGQEEF"
          as="script"
        />
            <link
          rel="preload"
          href="https://www.googletagmanager.com/gtm.js?id=GTM-ML3R2X4C"
          as="script"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-ML3R2X4C');`,
          }}
        />
      </Head>
      <GoogleAnalyticss />
      <Analytics />
      <GoogleTagManager gtmId="G-BVZKXGQEEF" />
      <TrackingAnalytic />
      <SpeedInsights />
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-ML3R2X4C"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {children}
      </body>
    </html>
  );
}
