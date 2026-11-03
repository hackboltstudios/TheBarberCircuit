
import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
    const pages = [
        "",
        "/about",
        "/services",
        "/mobile-barber-johannesburg",
        "/mobile-barber-roodepoort",
    ];

    return pages.map((page) => ({
        url: `${siteConfig.url}${page}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority:
            page === ""
                ? 1
                : page.startsWith("/mobile-barber")
                    ? 0.9
                    : 0.7,
    }));
}
