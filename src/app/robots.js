

export default async function robots() {
    const baseUrl = "https://boezangapple.com"; 

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
