import Link from "next/link";
import { Icon } from "@iconify/react"
import { FooterLinks } from "@/app/api/footerlinks";

const Footer = () => {
    return (
        <footer className="relative z-10 bg-dark">
            <div className="container mx-auto max-w-7xl pt-14 px-4 sm:px-6 lg:px-0">
                <div className="flex lg:items-center justify-between items-end lg:gap-11 pb-14 border-b border-white/10 lg:flex-nowrap flex-wrap gap-6">
                    <p className="text-white text-sm lg:max-w-1/5">
                        Dapatkan info terbaru tentang koleksi, promosi, dan penawaran eksklusif dari kami.
                    </p>
                    <div className="flex lg:flex-row flex-col items-center lg:gap-10 gap-3">
                        <div className="flex gap-2 lg:order-1 order-2">
                            <input type="email" placeholder="Masukkan Email Anda" className="rounded-full py-4 px-6 bg-white/10 placeholder:text-white text-white focus-visible:outline-0" />
                            <button className="text-dark bg-white py-4 px-8 font-semibold rounded-full hover:bg-primary hover:text-white duration-300 hover:cursor-pointer">
                                Subscribe
                            </button>
                        </div>
                        <p className="text-white/40 text-sm lg:max-w-[45%] order-1 lg:order-2">
                            Dengan menekan Subscribe, Anda setuju untuk menerima email promosi kami.
                        </p>
                    </div>
                    <div className="flex items-center gap-6">
                        {/* PASTIKAN link href ini diisi dengan URL media sosial Anda */}
                        <Link href="#">
                            <Icon icon="ph:x-logo-bold" width={24} height={24} className="text-white hover:text-primary duration-300" />
                        </Link>
                        <Link href="#">
                            <Icon icon="ph:facebook-logo-bold" width={24} height={24} className="text-white hover:text-primary duration-300" />
                        </Link>
                        <Link href="#">
                            <Icon icon="ph:instagram-logo-bold" width={24} height={24} className="text-white hover:text-primary duration-300" />
                        </Link>
                    </div>
                </div>
                <div className="py-16 border-b border-white/10">
                    <div className="grid grid-cols-12 sm:gap-10 gap-y-6">
                        <div className="md:col-span-7 col-span-12">
                            <h2 className="text-white leading-[1.2] text-40 font-medium mb-6 lg:max-w-3/4">
                                Ada Pertanyaan atau Butuh Bantuan? Hubungi Kami.
                            </h2>
                            <Link href="/contactus" className="bg-primary text-base font-semibold py-4 px-8 rounded-full text-white hover:bg-white hover:text-dark duration-300 hover:cursor-pointer">
                                Hubungi Kami
                            </Link>
                        </div>
                        {/* Kolom Link 1 */}
                        <div className="md:col-span-3 sm:col-span-6 col-span-12">
                            <div className="flex flex-col gap-4 w-fit">
                                <h4 className="text-white font-semibold text-xm mb-2">Bantuan & Info</h4>
                                {FooterLinks.slice(0, 4).map((item, index) => (
                                    <div key={index}>
                                        <Link href={item.href} className="text-white/40 text-xm hover:text-white">
                                            {item.label}
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Kolom Link 2 */}
                        <div className="md:col-span-2 sm:col-span-6 col-span-12">
                            <div className="flex flex-col gap-4 w-fit">
                                <h4 className="text-white font-semibold text-xm mb-2">Tentang Kami</h4>
                                {FooterLinks.slice(4, 8).map((item, index) => (
                                    <div key={index}>
                                        <Link href={item.href} className="text-white/40 text-xm hover:text-white">
                                            {item.label}
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between md:flex-nowrap flex-wrap items-center py-6 gap-6">
                    <p className="text-white/40 text-sm ">
                        ©2025 
                    </p>
                    <div className="flex gap-8 items-center">
                        <Link href="/terms" className="text-white/40 hover:text-primary text-sm">
                            Ketentuan Layanan
                        </Link>
                        <Link href="/privacy" className="text-white/40 hover:text-primary text-sm">
                            Kebijakan Privasi
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;