// src/app/robots.js
export const runtime = "edge";

export default async function robots() {
    const baseUrl = "https://boezangapple.com"; // Ganti dengan URL situs Anda

    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/api/", "/admin/", "/private/"],
            },
        ],
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}
