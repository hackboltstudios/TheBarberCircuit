
import type { Metadata } from "next";

export const siteConfig = {
    name: "The Barber Circuit",
    description:
        "The Barber Circuit brings professional barbering to your doorstep. Book mobile haircuts, fades and grooming services in Johannesburg and Roodepoort, Gauteng.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.yourdomain.co.za",
    locale: "en_ZA",
};

export const defaultMetadata: Metadata = {
    metadataBase: new URL(siteConfig.url),

    title: {
        default:
            "The Barber Circuit | Mobile Barber in Johannesburg & Roodepoort",
        template: "%s | The Barber Circuit",
    },

    description: siteConfig.description,

    applicationName: siteConfig.name,

    keywords: [
        "mobile barber Johannesburg",
        "mobile barber Roodepoort",
        "barber Johannesburg",
        "barber Roodepoort",
        "mobile barber near me",
        "barber that comes to your house",
        "home haircut service Johannesburg",
        "mobile haircuts Gauteng",
        "men's grooming Johannesburg",
        "mobile fade specialist",
        "at home barber Roodepoort",
        "The Barber Circuit",
    ],

    openGraph: {
        type: "website",
        locale: siteConfig.locale,
        siteName: siteConfig.name,
        title:
            "The Barber Circuit | Mobile Barbering in Johannesburg & Roodepoort",
        description: siteConfig.description,
        url: siteConfig.url,
    },

    twitter: {
        card: "summary_large_image",
        title: "The Barber Circuit | Mobile Barbering",
        description: siteConfig.description,
    },

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
        },
    },
};
