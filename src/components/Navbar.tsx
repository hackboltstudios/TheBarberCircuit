
import Link from "next/link";
import { Menu } from "lucide-react";

export default function Navbar() {
    return (
        <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/85 backdrop-blur-xl">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

                {/* BRAND LOGO */}
                <Link
                    href="/"
                    className="display-font text-2xl font-black tracking-wider text-white"
                >
                    THE BARBER <span className="neon-text">CIRCUIT.</span>
                </Link>

                {/* DESKTOP NAVIGATION */}
                <div className="hidden items-center gap-10 text-xs font-semibold tracking-[0.2em] md:flex">
                    <Link href="/" className="neon-text">HOME</Link>
                    <Link href="/about" className="text-white transition hover:text-[#ff202d]">ABOUT</Link>
                    <Link href="/services" className="text-white transition hover:text-[#ff202d]">SERVICES</Link>
                </div>

                {/* BOOKING BUTTON */}
                <Link
                    href="/services#booking"
                    className="hidden border border-[#ff202d] px-6 py-3 text-xs font-bold tracking-widest text-white transition hover:bg-[#ff202d] md:block"
                >
                    EXPLORE SERVICES ↗
                </Link>

                {/* MOBILE NAVIGATION */}
                <details className="group relative md:hidden">
                    <summary className="list-none cursor-pointer text-white">
                        <Menu size={25} />
                    </summary>

                    <div className="absolute right-0 top-12 flex w-48 flex-col gap-5 border border-white/10 bg-[#111] p-5 text-sm text-white shadow-xl">
                        <Link href="/" className="hover:text-[#ff202d]">HOME</Link>
                        <Link href="/about" className="hover:text-[#ff202d]">ABOUT</Link>
                        <Link href="/services" className="hover:text-[#ff202d]">SERVICES</Link>
                    </div>
                </details>

            </nav>
        </header>
    );
}
