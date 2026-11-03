
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface BookingCTAProps {
    service?: string;
    label?: string;
}

export default function BookingCTA({
                                       service = "",
                                       label = "BOOK YOUR APPOINTMENT",
                                   }: BookingCTAProps) {
    const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

    const message = encodeURIComponent(
        `Hi The Barber Circuit! I'd like to enquire about an appointment${service ? ` for ${service}` : ""}. Please let me know your availability.`
    );

    const whatsappUrl = number
        ? `https://wa.me/${number}?text=${message}`
        : "/services#booking";

    return (
        <Link
            href={whatsappUrl}
            target={number ? "_blank" : undefined}
            rel={number ? "noopener noreferrer" : undefined}
            className="inline-flex items-center justify-center gap-4 bg-[#ff202d] px-8 py-5 text-xs font-black tracking-widest text-white transition hover:bg-white hover:text-black"
        >
            {label}
            <ArrowUpRight size={18} />
        </Link>
    );
}
