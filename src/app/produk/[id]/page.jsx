// app/produk/[id]/page.tsx
import { GetSingleProduct } from "@/Service/Api/GetProduct";
import NavbarDetail from "./components/NavbarDetail";
import DetailProduk from "./components/DetailProduk";
import Footer from "@/components/Footer";

export async function generateMetadata({ params }) {
  const { id } = params;
  try {
    const data = await GetSingleProduct(id);
    return {
      title: `${data.name} - Boezang Apple`, // Title halaman
      description: `Detail lengkap tentang produk ${data.name}. Temukan fitur, harga, dan informasi lainnya.`,
      keywords: `${data.name}, produk, belanja`, // Keywords untuk SEO (opsional)
      openGraph: {
        title: `${data.name} - Boezang Apple`,
        description: `Detail lengkap tentang produk ${data.name}. Temukan fitur, harga, dan informasi lainnya.`,
        images: [
          {
            url: data.thumbnailImage || "/default-image.jpg", // Gambar default jika tidak ada
            width: 800,
            height: 600,
            alt: `${data.name} - Boezang Apple`,
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
      <Footer />
    </main>
  );
};

export default PageDetail;
