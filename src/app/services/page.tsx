
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingCTA from "@/components/BookingCTA";
import { Scissors, ArrowUpRight, Users, MapPin } from "lucide-react";

const haircutServices = [
    { name: "Classic Haircut", price: 120, description: "A clean, timeless haircut tailored to your look." },
    { name: "Skin Fade", price: 150, description: "A seamless skin fade with precise blending." },
    { name: "Taper Fade", price: 150, description: "A refined taper with sharp, clean detailing." },
    // { name: "Scissor Cut", price: 140, description: "A detailed cut using traditional scissor techniques." },
    { name: "Premium Haircut & Styling", price: 170, description: "A complete haircut with professional styling." },
    { name: "Children's Haircut", price: 100, description: "A neat, comfortable haircut for younger clients." },
    { name: "Hairline & Edge-up", price: 60, description: "Sharp detailing to keep your hairline looking fresh." },
];

const beardServices = [
    { name: "Beard Trim", price: 80, description: "A clean trim to maintain your beard." },
    { name: "Beard Sculpting", price: 120, description: "Detailed shaping to complement your facial structure." },
    { name: "Beard Shape-up", price: 70, description: "Clean lines and precise beard detailing." },
    { name: "Beard Treatment", price: 100, description: "A grooming treatment for a healthier-looking beard." },
    // { name: "Hot Towel Beard Treatment", price: 130, description: "A relaxing hot towel experience with beard grooming." },
];

function ServiceCard({
                         name,
                         price,
                         description,
                     }: {
    name: string;
    price: number;
    description: string;
}) {
    return (
        <div className="group flex flex-col justify-between border border-white/10 bg-[#101010] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#ff202d]">

            <div>
                <div className="flex items-start justify-between gap-3">
                    <Scissors
                        size={23}
                        className="text-[#ff202d]"
                    />
                    <span className="text-xs font-bold tracking-widest text-gray-600">
            THE CIRCUIT
          </span>
                </div>

                <h3 className="mt-8 text-3xl font-black">
                    {name}
                </h3>

                <p className="mt-3 min-h-12 text-sm leading-6 text-gray-400">
                    {description}
                </p>
            </div>

            <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
                <div>
                    <p className="text-[10px] tracking-widest text-gray-500">PRICE</p>
                    <p className="mt-1 text-2xl font-black text-[#ff202d]">
                        R{price}
                    </p>
                </div>

                <a
                    href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? ""}?text=${encodeURIComponent(`Hi The Barber Circuit! I'd like to book a ${name}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs font-bold tracking-widest transition hover:text-[#ff202d]"
                >
                    ENQUIRE <ArrowUpRight size={17} />
                </a>
            </div>
        </div>
    );
}

export default function ServicesPage() {
    return (
        <>

            <main className="min-h-screen bg-[#080808] text-white">

                {/* HERO */}
                <section className="relative overflow-hidden border-b border-white/10 px-6 pb-24 pt-48">
                    <div className="absolute right-[-100px] top-20 h-96 w-96 rounded-full bg-[#ff202d]/10 blur-[120px]" />

                    <div className="relative mx-auto max-w-7xl">
                        <p className="text-xs font-bold tracking-[0.4em] text-[#ff202d]">
                            PRECISION. CRAFT. DETAIL.
                        </p>

                        <h1 className="mt-8 text-7xl font-black leading-[0.85] md:text-9xl">
                            THE SERVICE
                            <br />
                            <span className="neon-text">MENU.</span>
                        </h1>

                        <p className="mt-10 max-w-xl text-sm leading-8 text-gray-400 md:text-base">
                            From precision fades to complete beard grooming.
                            Find your style and let us take care of the details.
                        </p>
                    </div>
                </section>

                {/* HAIRCUTS */}
                <section className="mx-auto max-w-7xl px-6 py-24">
                    <div className="mb-12">
                        <p className="text-xs font-bold tracking-[0.35em] text-[#ff202d]">
                            01 / HAIR
                        </p>
                        <h2 className="mt-4 text-5xl font-black md:text-7xl">
                            HAIRCUTS<span className="neon-text">.</span>
                        </h2>
                        <p className="mt-4 text-sm text-gray-400">
                            Every cut starts with understanding your style.
                        </p>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {haircutServices.map((service) => (
                            <ServiceCard key={service.name} {...service} />
                        ))}
                    </div>
                </section>

                {/* BEARD */}
                <section className="border-y border-white/10 bg-[#101010] px-6 py-24">
                    <div className="mx-auto max-w-7xl">
                        <div className="mb-12">
                            <p className="text-xs font-bold tracking-[0.35em] text-[#ff202d]">
                                02 / GROOMING
                            </p>
                            <h2 className="mt-4 text-5xl font-black md:text-7xl">
                                BEARD <span className="neon-text">CULTURE.</span>
                            </h2>
                            <p className="mt-4 text-sm text-gray-400">
                                Shape it. Define it. Own it.
                            </p>
                        </div>

                        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                            {beardServices.map((service) => (
                                <ServiceCard key={service.name} {...service} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* COMBINATION PACKAGES */}
                <section className="mx-auto max-w-7xl px-6 py-24">
                    <div className="grid gap-12 md:grid-cols-2 md:items-center">

                        <div>
                            <p className="text-xs font-bold tracking-[0.35em] text-[#ff202d]">
                                03 / COMPLETE EXPERIENCE
                            </p>

                            <h2 className="mt-5 text-6xl font-black leading-none md:text-7xl">
                                THE COMPLETE
                                <br />
                                <span className="neon-text">PACKAGE.</span>
                            </h2>

                            <p className="mt-7 text-sm leading-8 text-gray-400">
                                Combine your haircut and beard grooming for a complete,
                                polished look. Package options are tailored to the
                                services selected.
                            </p>

                            <p className="mt-6 text-3xl font-black text-[#ff202d]">
                                R180 – R300
                            </p>

                            <p className="mt-2 text-xs tracking-widest text-gray-500">
                                WORKING PACKAGE PRICE RANGE
                            </p>
                        </div>

                        <div className="border border-[#ff202d]/40 bg-[#111] p-10">
                            <Scissors size={42} className="text-[#ff202d]" />
                            <h3 className="mt-8 text-4xl font-black">ONE APPOINTMENT.</h3>
                            <h3 className="text-4xl font-black neon-text">COMPLETE LOOK.</h3>

                            <p className="mt-5 text-sm leading-7 text-gray-400">
                                Tell us what you have in mind and we'll help you
                                select the right combination.
                            </p>

                            <div className="mt-8">
                                <BookingCTA service="a haircut and beard package" label="ENQUIRE ABOUT PACKAGES" />
                            </div>
                        </div>

                    </div>
                </section>

                {/* HOUSE CALLS */}
                <section className="border-y border-white/10 bg-[#101010] px-6 py-20">
                    <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 md:items-center">
                        <div>
                            <MapPin size={35} className="text-[#ff202d]" />
                            <h2 className="mt-6 text-5xl font-black">
                                THE CIRCUIT
                                <br />
                                <span className="neon-text">COMES TO YOU.</span>
                            </h2>
                            <p className="mt-5 max-w-lg text-sm leading-7 text-gray-400">
                                Prefer getting groomed at home? House-call appointments
                                are available by arrangement.
                            </p>
                        </div>

                        <div className="border border-white/10 bg-[#080808] p-8">
                            <p className="text-xs tracking-widest text-gray-500">
                                MINIMUM HOUSE-CALL BOOKING
                            </p>
                            <p className="mt-3 text-5xl font-black text-[#ff202d]">
                                R180
                            </p>
                            <p className="mt-4 text-sm text-gray-400">
                                Travel arrangements and availability must be confirmed
                                before booking.
                            </p>
                            <div className="mt-7">
                                <BookingCTA service="a house call" label="ENQUIRE ABOUT HOUSE CALLS" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* GROUP BOOKINGS */}
                <section className="mx-auto max-w-7xl px-6 py-24">
                    <div className="mb-12">
                        <p className="text-xs font-bold tracking-[0.35em] text-[#ff202d]">
                            04 / GROUP EXPERIENCE
                        </p>
                        <h2 className="mt-5 text-5xl font-black md:text-7xl">
                            BRING THE <span className="neon-text">CREW.</span>
                        </h2>
                        <p className="mt-5 max-w-xl text-sm leading-7 text-gray-400">
                            Weekend group bookings are available for friends,
                            family and special occasions. Contact us to arrange
                            your session.
                        </p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {[
                            { people: "2 PEOPLE", price: "R300" },
                            { people: "3 PEOPLE", price: "R450" },
                            { people: "4 PEOPLE", price: "R600" },
                            { people: "5 PEOPLE", price: "R750" },
                        ].map((group) => (
                            <div key={group.people} className="border border-white/10 bg-[#111] p-7">
                                <Users className="text-[#ff202d]" size={28} />
                                <p className="mt-6 text-xs font-bold tracking-widest text-gray-400">
                                    {group.people}
                                </p>
                                <p className="mt-3 text-4xl font-black text-[#ff202d]">
                                    {group.price}
                                </p>
                            </div>
                        ))}
                    </div>

                    <p className="mt-6 text-xs leading-6 text-gray-500">
                        Working group rates. Confirm service inclusions and availability
                        when enquiring. Weekend bookings by arrangement.
                    </p>
                </section>

                {/* BOOKING */}
                <section id="booking" className="border-t border-white/10 bg-[#111] px-6 py-28 text-center">
                    <p className="text-xs font-bold tracking-[0.35em] text-[#ff202d]">
                        READY FOR YOUR NEXT LOOK?
                    </p>

                    <h2 className="mt-7 text-6xl font-black md:text-8xl">
                        GET IN THE
                        <br />
                        <span className="neon-text">CIRCUIT.</span>
                    </h2>

                    <p className="mx-auto mt-7 max-w-lg text-sm leading-7 text-gray-400">
                        Contact us on WhatsApp to enquire about services,
                        availability and appointments.
                    </p>

                    <div className="mt-10">
                        <BookingCTA label="ENQUIRE ON WHATSAPP" />
                    </div>
                </section>

            </main>
        </>
    );
}
