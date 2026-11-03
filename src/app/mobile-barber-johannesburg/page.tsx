
import type { Metadata } from "next";
import LocationLandingPage from "@/components/LocationLandingPage";

export const metadata: Metadata = {
    title: "Mobile Barber Johannesburg | Home Haircuts",
    description:
        "Looking for a mobile barber in Johannesburg? The Barber Circuit brings professional haircuts, fades and family grooming directly to your home. Book an appointment.",
    alternates: {
        canonical:
            "/mobile-barber-johannesburg",
    },
};

export default function JohannesburgPage() {
    return (
        <LocationLandingPage
            location={{
                name: "Johannesburg",
                title: "Mobile Barber in Johannesburg",
                description:
                    "Mobile barbering and home haircut appointments in Johannesburg, Gauteng.",
                introduction:
                    "Looking for a reliable mobile barber in Johannesburg? The Barber Circuit brings the barbering experience to your doorstep. Enjoy convenient haircuts, fades and grooming without travelling to a barbershop.",
                localCopy:
                    "From busy professionals to parents looking for a convenient haircut for their children, The Barber Circuit makes grooming easier. We travel to customers' homes across Johannesburg. Contact us with your suburb to arrange an appointment.",
            }}
        />
    );
}
