
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
    FaInstagram,
    FaMapMarkerAlt,
    FaPhoneAlt,
} from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="border-t border-white/10 bg-black px-6 py-12">
            <div className="mx-auto max-w-7xl">

                <div className="grid gap-10 md:grid-cols-3">

                    <div>
                        <h3 className="display-font text-3xl font-black">
                            THE BARBER <span className="neon-text">CIRCUIT.</span>
                        </h3>
                        <p className="mt-3 text-xs tracking-widest text-gray-500">
                            PRECISION IS THE STANDARD.
                        </p>
                    </div>

                    <div>
                        <h4 className="mb-5 text-xs font-bold tracking-widest text-[#ff202d]">
                            EXPLORE
                        </h4>
                        <div className="flex flex-col gap-3 text-sm text-gray-400">
                            <Link href="/" className="hover:text-white">Home</Link>
                            <Link href="/about" className="hover:text-white">About</Link>
                            <Link href="/services" className="hover:text-white">Services</Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="mb-5 text-xs font-bold tracking-widest text-[#ff202d]">
                            CONNECT
                        </h4>
                        <Link
                            href="/services#booking"
                            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white"
                        >
                            Appointment enquiries <ArrowUpRight size={16} />
                        </Link>
                        <a
                            href="https://www.instagram.com/thebarbercircuit/ "
                            aria-label="Instagram"
                            className="mt-4 inline-flex text-gray-400 hover:text-[#ff202d]"
                        >
                            <FaInstagram size={21} />
                        </a>
                    </div>

                </div>

                <div className="mt-12 flex flex-wrap justify-between gap-4 border-t border-white/10 pt-7 text-[10px] tracking-widest text-gray-600">
                    <p>© 2026 THE BARBER CIRCUIT. ALL RIGHTS RESERVED.</p>
                    <p>BUILT ON PRECISION. DRIVEN BY STYLE.</p>
                </div>

            </div>
        </footer>
    );
}
