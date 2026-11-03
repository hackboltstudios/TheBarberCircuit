
import BookingCTA from "@/components/BookingCTA";

type LocationConfig = {
    name: string;
    title: string;
    description: string;
    introduction: string;
    localCopy: string;
};

export default function LocationLandingPage({
                                                location,
                                            }: {
    location: LocationConfig;
}) {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "BarberShop",
        name: "The Barber Circuit",
        description: location.description,
        areaServed: {
            "@type": "City",
            name: location.name,
        },
        serviceType: [
            "Mobile barbering",
            "Haircuts",
            "Fade haircuts",
            "Hair styling",
            "Family haircuts",
        ],
        url: "https://www.yourdomain.co.za",
    };

    return (
        <main className="min-h-screen bg-[#080808] text-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(structuredData).replace(
                        /</g,
                        "\\u003c"
                    ),
                }}
            />

            <section className="mx-auto max-w-6xl px-6 py-24">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#ff202d]">
                    The Barber Circuit / Mobile Barbering
                </p>

                <h1 className="max-w-4xl text-5xl font-bold uppercase leading-tight md:text-7xl">
                    {location.title}
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
                    {location.introduction}
                </p>

                <div className="mt-10">
                    <BookingCTA />
                </div>
            </section>

            <section className="border-t border-white/10 bg-[#101010]">
                <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2">
                    <div>
                        <h2 className="text-3xl font-bold uppercase">
                            Your barber. Your location.
                        </h2>

                        <p className="mt-5 leading-8 text-gray-400">
                            Forget travelling to a barbershop or waiting in a queue.
                            The Barber Circuit brings professional barbering directly
                            to your home in {location.name}.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold uppercase">
                            Barbering for everyone
                        </h2>

                        <p className="mt-5 leading-8 text-gray-400">
                            Whether you need a fresh fade, a clean haircut, a
                            restyle or a haircut for your child, our mobile service
                            is designed to make grooming more convenient.
                        </p>
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-6xl px-6 py-20">
                <h2 className="text-3xl font-bold uppercase">
                    Mobile barbering in {location.name}
                </h2>

                <p className="mt-5 max-w-3xl leading-8 text-gray-400">
                    {location.localCopy}
                </p>

                <h2 className="mt-16 text-3xl font-bold uppercase">
                    Frequently asked questions
                </h2>

                <div className="mt-8 space-y-8">
                    <div>
                        <h3 className="text-xl font-semibold">
                            Do you come to my home?
                        </h3>
                        <p className="mt-2 text-gray-400">
                            Yes. The Barber Circuit is a mobile barbering service.
                            We travel to your home for your booked appointment.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold">
                            Which areas do you cover?
                        </h3>
                        <p className="mt-2 text-gray-400">
                            We serve {location.name} and surrounding areas.
                            Contact us with your suburb to confirm your booking.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold">
                            Can I book a haircut for my child?
                        </h3>
                        <p className="mt-2 text-gray-400">
                            Yes. Our mobile barbering service caters to adults
                            and children.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold">
                            How do I make a booking?
                        </h3>
                        <p className="mt-2 text-gray-400">
                            Contact The Barber Circuit to arrange your preferred
                            appointment and provide your location.
                        </p>
                    </div>
                </div>

                <div className="mt-16 border-t border-white/10 pt-10">
                    <h2 className="text-3xl font-bold uppercase">
                        Ready for your next cut?
                    </h2>

                    <p className="mt-4 text-gray-400">
                        Book The Barber Circuit and enjoy barbering at home.
                    </p>

                    <div className="mt-8">
                        <BookingCTA />
                    </div>
                </div>
            </section>
        </main>
    );
}
