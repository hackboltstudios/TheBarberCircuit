
import Link from "next/link";
import {
  ArrowUpRight,
  Menu,
  Scissors,
  Zap,
  ShieldCheck,
  Clock3,
} from "lucide-react";

import {
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from 'react-icons/fa';

const services = [
  {
    number: "01",
    name: "THE CLASSIC",
    description: "A clean, precise haircut tailored to your style.",
    price: "FROM R___",
  },
  {
    number: "02",
    name: "THE FADE",
    description: "Seamless transitions. Sharp detailing. Perfect finish.",
    price: "FROM R___",
  },
  {
    number: "03",
    name: "BEARD GROOMING",
    description: "Professional beard shaping, trimming and detailing.",
    price: "FROM R___",
  },
];

export default function Home() {
  return (
      <main className="min-h-screen bg-[#080808] text-white">

        {/* HERO */}
        <section className="relative flex min-h-[750px] items-center overflow-hidden md:min-h-screen">

          <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=2000&q=90')",
              }}
          />

          <div className="hero-overlay absolute inset-0" />

          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-black/30" />

          <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-40">

            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-12 bg-[#ff202d]" />
              <span className="text-xs font-bold tracking-[0.35em] text-[#ff202d]">
              WELCOME TO THE CIRCUIT
            </span>
            </div>

            <h1 className="max-w-4xl text-7xl font-black leading-[0.85] tracking-tight md:text-9xl">
              NOT JUST
              <br />
              A HAIRCUT.
              <br />
              <span className="neon-text">AN IDENTITY.</span>
            </h1>

            <p className="mt-10 max-w-lg text-sm leading-7 text-gray-300 md:text-base">
              Precision cuts. Individual style. No compromises.
              Step into a different kind of barbershop experience.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                  href="/services"
                  className="group flex items-center gap-4 bg-[#ff202d] px-8 py-5 text-xs font-black tracking-widest transition hover:bg-white hover:text-black"
              >
                EXPLORE SERVICES
                <ArrowUpRight size={18} />
              </Link>

              <Link
                  href="/about"
                  className="flex items-center gap-4 border border-white/40 px-8 py-5 text-xs font-bold tracking-widest transition hover:border-[#ff202d] hover:text-[#ff202d]"
              >
                OUR STORY
              </Link>

            </div>

            <div className="mt-20 flex items-center gap-5 text-[10px] tracking-[0.3em] text-gray-400">
              <span className="neon-text">01</span>
              <span className="h-px w-12 bg-gray-600" />
              PRECISION IS THE STANDARD.
            </div>

          </div>
        </section>

        {/* BRAND STATEMENT */}
        <section className="border-y border-white/10 bg-[#101010] px-6 py-20">
          <div className="mx-auto max-w-7xl">

            <p className="text-xs font-bold tracking-[0.35em] text-[#ff202d]">
              THE CIRCUIT PHILOSOPHY
            </p>

            <h2 className="mt-6 max-w-5xl text-5xl font-black leading-none md:text-7xl">
              YOUR STYLE.
              <span className="neon-text"> YOUR RULES.</span>
              <br />
              OUR PRECISION.
            </h2>

            <div className="mt-10 grid gap-10 md:grid-cols-2">
              <p className="text-sm leading-8 text-gray-400">
                We believe a haircut is more than maintenance.
                It is confidence, expression and identity.
                Every detail matters. Every cut has a purpose.
              </p>

              <Link
                  href="/about"
                  className="flex items-center gap-3 text-sm font-bold tracking-widest transition hover:text-[#ff202d]"
              >
                DISCOVER THE CIRCUIT
                <ArrowUpRight size={18} />
              </Link>
            </div>

          </div>
        </section>

        {/* SERVICES */}
        <section className="mx-auto max-w-7xl px-6 py-28">

          <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-xs font-bold tracking-[0.35em] text-[#ff202d]">
                WHAT WE DO
              </p>
              <h2 className="mt-4 text-6xl font-black md:text-8xl">
                THE <span className="neon-text">SERVICES.</span>
              </h2>
            </div>

            <Link
                href="/services"
                className="flex items-center gap-2 text-xs font-bold tracking-widest hover:text-[#ff202d]"
            >
              VIEW ALL SERVICES <ArrowUpRight size={18} />
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {services.map((service) => (
                <div
                    key={service.number}
                    className="group border border-white/10 bg-[#111] p-8 transition duration-300 hover:-translate-y-2 hover:border-[#ff202d]"
                >
              <span className="text-sm font-bold text-[#ff202d]">
                / {service.number}
              </span>

                  <Scissors
                      size={35}
                      className="my-12 text-gray-500 transition group-hover:text-[#ff202d]"
                  />

                  <h3 className="text-3xl font-black">
                    {service.name}
                  </h3>

                  <p className="mt-4 min-h-12 text-sm leading-6 text-gray-400">
                    {service.description}
                  </p>

                  <div className="mt-8 border-t border-white/10 pt-6">
                <span className="text-xs font-bold tracking-widest text-[#ff202d]">
                  {service.price}
                </span>
                  </div>
                </div>
            ))}
          </div>
        </section>

        {/* WHY THE CIRCUIT */}
        <section className="border-y border-white/10 bg-[#101010] px-6 py-24">
          <div className="mx-auto max-w-7xl">

            <p className="text-xs font-bold tracking-[0.35em] text-[#ff202d]">
              THE DIFFERENCE
            </p>

            <h2 className="mt-5 text-5xl font-black md:text-7xl">
              BUILT ON <span className="neon-text">PRECISION.</span>
            </h2>

            <div className="mt-16 grid gap-12 md:grid-cols-3">

              <div>
                <Zap className="mb-6 text-[#ff202d]" size={32} />
                <h3 className="text-2xl font-bold">ATTENTION TO DETAIL</h3>
                <p className="mt-3 text-sm leading-7 text-gray-400">
                  Every line, blend and finish receives the attention it deserves.
                </p>
              </div>

              <div>
                <ShieldCheck className="mb-6 text-[#ff202d]" size={32} />
                <h3 className="text-2xl font-bold">QUALITY FIRST</h3>
                <p className="mt-3 text-sm leading-7 text-gray-400">
                  Professional standards and consistent results.
                </p>
              </div>

              <div>
                <Clock3 className="mb-6 text-[#ff202d]" size={32} />
                <h3 className="text-2xl font-bold">YOUR TIME MATTERS</h3>
                <p className="mt-3 text-sm leading-7 text-gray-400">
                  A focused experience built around you and your style.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="px-6 py-32 text-center">
          <p className="text-xs font-bold tracking-[0.35em] text-[#ff202d]">
            YOUR NEXT LOOK STARTS HERE
          </p>

          <h2 className="mt-8 text-6xl font-black md:text-9xl">
            ENTER THE
            <br />
            <span className="neon-text">CIRCUIT.</span>
          </h2>

          <Link
              href="/services"
              className="mt-10 inline-flex items-center gap-4 bg-[#ff202d] px-10 py-5 text-xs font-black tracking-widest transition hover:bg-white hover:text-black"
          >
            FIND YOUR STYLE <ArrowUpRight size={18} />
          </Link>
        </section>


      </main>
  );
}
