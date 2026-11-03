
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingCTA from "@/components/BookingCTA";
import { Scissors, Target, Zap } from "lucide-react";

export default function AboutPage() {
    return (
        <>
            <main className="min-h-screen bg-[#080808] text-white">

                {/* PAGE HERO */}
                <section className="relative flex min-h-[65vh] items-center overflow-hidden">

                    <div className="absolute inset-0">
                        <Image
                            src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=2000&q=90"
                            alt="Professional barber working on a haircut"
                            fill
                            priority
                            unoptimized
                            className="object-cover object-center opacity-40"
                        />
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

                    <div className="relative mx-auto w-full max-w-7xl px-6 pt-32">
                        <p className="text-xs font-bold tracking-[0.4em] text-[#ff202d]">
                            GET TO KNOW US
                        </p>

                        <h1 className="mt-8 text-7xl font-black leading-none md:text-9xl">
                            BEHIND
                            <br />
                            THE <span className="neon-text">CIRCUIT.</span>
                        </h1>

                        <p className="mt-8 max-w-xl text-sm leading-8 text-gray-300 md:text-base">
                            More than a barbershop. A commitment to precision,
                            individuality and the craft of barbering.
                        </p>
                    </div>
                </section>

                {/* OUR STORY */}
                <section className="mx-auto grid max-w-7xl gap-14 px-6 py-28 md:grid-cols-2 md:items-center">

                    <div className="relative min-h-[400px] overflow-hidden border border-white/10">
                        <Image
                            src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=85"
                            alt="Modern barber shop"
                            fill
                            unoptimized
                            className="object-cover"
                        />
                    </div>

                    <div>
                        <p className="text-xs font-bold tracking-[0.35em] text-[#ff202d]">
                            OUR STORY
                        </p>

                        <h2 className="mt-5 text-6xl font-black leading-none">
                            A DIFFERENT
                            <br />
                            KIND OF <span className="neon-text">STANDARD.</span>
                        </h2>

                        <p className="mt-8 text-sm leading-8 text-gray-400">
                            The Barber Circuit was built around one simple idea:
                            barbering should be about more than taking length off.
                        </p>

                        <p className="mt-5 text-sm leading-8 text-gray-400">
                            Every haircut is an opportunity to express individuality.
                            From sharp fades and detailed line-ups to carefully
                            sculpted beards, we believe that the details make
                            the difference.
                        </p>

                        <p className="mt-5 text-sm leading-8 text-gray-400">
                            Our approach combines traditional barbering craftsmanship
                            with a modern outlook on style, service and personal identity.
                        </p>
                    </div>

                </section>

                {/* OUR PHILOSOPHY */}
                <section className="border-y border-white/10 bg-[#101010] px-6 py-28">
                    <div className="mx-auto max-w-7xl">

                        <p className="text-xs font-bold tracking-[0.35em] text-[#ff202d]">
                            WHAT WE STAND FOR
                        </p>

                        <h2 className="mt-5 text-6xl font-black md:text-8xl">
                            THE <span className="neon-text">PHILOSOPHY.</span>
                        </h2>

                        <div className="mt-16 grid gap-12 md:grid-cols-3">

                            <div>
                                <Scissors size={36} className="text-[#ff202d]" />
                                <h3 className="mt-7 text-3xl font-black">THE CRAFT</h3>
                                <p className="mt-4 text-sm leading-7 text-gray-400">
                                    Respect the fundamentals. Master the techniques.
                                    Never stop improving.
                                </p>
                            </div>

                            <div>
                                <Target size={36} className="text-[#ff202d]" />
                                <h3 className="mt-7 text-3xl font-black">THE DETAIL</h3>
                                <p className="mt-4 text-sm leading-7 text-gray-400">
                                    Precision matters. From the first consultation
                                    to the final finishing touches.
                                </p>
                            </div>

                            <div>
                                <Zap size={36} className="text-[#ff202d]" />
                                <h3 className="mt-7 text-3xl font-black">THE IDENTITY</h3>
                                <p className="mt-4 text-sm leading-7 text-gray-400">
                                    Your style should represent you.
                                    We help bring that vision to life.
                                </p>
                            </div>

                        </div>
                    </div>
                </section>

                {/* CLOSING */}
                <section className="px-6 py-28 text-center">
                    <p className="text-xs font-bold tracking-[0.35em] text-[#ff202d]">
                        EXPERIENCE THE DIFFERENCE
                    </p>

                    <h2 className="mt-7 text-6xl font-black md:text-8xl">
                        YOUR STYLE.
                        <br />
                        YOUR <span className="neon-text">CIRCUIT.</span>
                    </h2>

                    <div className="mt-10">
                        <BookingCTA />
                    </div>
                </section>

            </main>

        </>
    );
}
