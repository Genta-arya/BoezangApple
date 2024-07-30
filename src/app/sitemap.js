import { GetProduct } from "@/Service/Api/GetProduct";

export default async function sitemap() {
    const baseUrl = "https://boezangapple.com";

    const products = await GetProduct(); 

    const productUrls = products.data.map(product => ({
        url: `${baseUrl}/produk/${product.id}`, 
        lastmod: product.updatedAt, 
        priority: 0.5, 
    }));

    return [
        {
            url: `${baseUrl}/`,
            lastmod: new Date().toISOString(),
            priority: 1.0, 
        },
        {
            url: `${baseUrl}/katalog?kategori=iphone`,
            lastmod: new Date().toISOString(),
            priority: 0.8, 
        },
        {
            url: `${baseUrl}/search/iphone`,
            lastmod: new Date().toISOString(),
            priority: 0.7,
        },
        {
            url: `${baseUrl}/katalog?kategori=accessories`,
            lastmod: new Date().toISOString(),
            priority: 0.7, 
        },
        ...productUrls, 
    ];
}
