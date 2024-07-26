import { GetProduct } from "@/Service/Api/GetProduct";

export default async function sitemap() {
    const baseUrl = "https://boezangapple.com";

    const products = await GetProduct(); 

    const productUrls = products.data.map(product => ({
        url: `${baseUrl}/produk/${product.id}`, 
        lastmod: product.updatedAt, 
        priority: 0.5, // Atur prioritas sesuai kebutuhan, antara 0.0 dan 1.0
    }));

    return [
        {
            url: `${baseUrl}/`,
            lastmod: new Date().toISOString(),
            priority: 1.0, // Halaman utama memiliki prioritas tertinggi
        },
        {
            url: `${baseUrl}/katalog?kategori=iphone`,
            lastmod: new Date().toISOString(),
            priority: 0.8, // Prioritas untuk kategori iPhone
        },
        {
            url: `${baseUrl}/katalog?kategori=accessories`,
            lastmod: new Date().toISOString(),
            priority: 0.7, // Prioritas untuk kategori accessories
        },
        ...productUrls, // Gabungkan dengan URL produk
    ];
}
