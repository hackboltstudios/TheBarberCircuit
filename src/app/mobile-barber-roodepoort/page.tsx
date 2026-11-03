
import type { Metadata } from "next";
import LocationLandingPage from "@/components/LocationLandingPage";

export const metadata: Metadata = {
    title: "Mobile Barber Roodepoort | Barber at Home",
    description:
        "Need a mobile barber in Roodepoort? The Barber Circuit offers convenient home haircuts, fades and grooming for adults and children. Book your appointment.",
    alternates: {
        canonical:
            "/mobile-barber-roodepoort",
    },
};

export default function RoodepoortPage() {
    return (
        <LocationLandingPage
            location={{
                name: "Roodepoort",
                title: "Mobile Barber in Roodepoort",
                description:
                    "Mobile barbering and home haircut appointments in Roodepoort, Gauteng.",
                introduction:
                    "Your next haircut doesn't have to mean a trip to the barbershop. The Barber Circuit provides mobile barbering in Roodepoort, bringing professional haircuts and grooming directly to your home.",
                localCopy:
                    "Whether you live in a residential neighbourhood or are looking for a convenient family haircut service, The Barber Circuit makes home grooming simple. We travel to customers throughout Roodepoort. Get in touch with your suburb to arrange an appointment.",
            }}
        />
    );
}
