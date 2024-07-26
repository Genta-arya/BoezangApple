// app/produk/[id]/page.tsx
import { GetProduct, GetSingleProduct } from "@/Service/Api/GetProduct";
import NavbarDetail from "./components/NavbarDetail";
import DetailProduk from "./components/DetailProduk";
import Footer from "@/components/Footer";
import ScrollToTop from "./components/ScrollOntop";


export async function generateMetadata({ params }) {
  const { id } = params;
  try {
    const data = await GetSingleProduct(id);
    return {
      title: `Jual ${data.data.name} | Boezang Apple Store Ketapang`, // Title halaman
      description: `Detail lengkap  ${data.data.name}. Lihat Sekarang`,
      keywords: `Jual Produk ${data.data.name} Boezang Apple Store Ketapang`,
      openGraph: {
        title: `Jual ${data.data.name} | Boezang Apple Store Ketapang`,
        description: `Detail lengkap  ${data.data.name}. Lihat Sekarang.`,
        images: [
          {
            url: `${data.data.imageUrl}`,

            alt: `Jual ${data.data.name} | Boezang Apple`,
          },
        ],
        siteName: "Boezang Apple",
      },
    };
  } catch (error) {
    return {
      title: "Produk Tidak Ditemukan",
      description: "Halaman ini tidak dapat ditemukan.",
      openGraph: {
        title: "Produk Tidak Ditemukan",
        description: "Halaman ini tidak dapat ditemukan.",
        images: [
          {
            url: "/default-error-image.jpg",
            width: 800,
            height: 600,
            alt: "Gambar Error",
          },
        ],
      },
    };
  }
}

const PageDetail = () => {
  return (
    <main>
      <NavbarDetail />

      <DetailProduk />
      <ScrollToTop />

      <Footer />
    </main>
  );
};

export default PageDetail;
