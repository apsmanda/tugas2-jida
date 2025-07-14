import { Icon } from '@iconify/react';
import Image from 'next/image';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const FAQ: React.FC = () => {
    return (
        <section id='faqs'>
            <div className='container max-w-6xl mx-auto px-5 2xl:px-0'>
                <div className="grid lg:grid-cols-2 gap-10 ">
                    {/* Kolom Kiri: Gambar */}
                    <div className='lg:mx-0 mx-auto'>
                        <Image
                            src="/images/faqs/faq-image.png"
                            alt='Suasana toko pakaian'
                            width={680}
                            height={644}
                            className='lg:w-full object-cover rounded-2xl'
                            unoptimized={true}
                        />
                    </div>
                    <div className='lg:px-12'>
                        <p className="text-dark/75 dark:text-white/75 text-base font-semibold flex gap-2">
                            <Icon icon="ph:question-fill" className="text-2xl text-primary " />
                            FAQs
                        </p>
                        <h2 className='lg:text-52 text-40 leading-[1.2] font-medium text-dark dark:text-white'>
                            Pertanyaan Umum
                        </h2>
                        <p className='text-dark/50 dark:text-white/50 pr-20'>
                            Kami tahu Anda mungkin memiliki pertanyaan tentang produk, ukuran, pengiriman, atau layanan Made-to-Order (M2O) kami. Temukan jawabannya di sini.
                        </p>
                        <div className="my-8">
                            <Accordion type="single" defaultValue="item-1" collapsible className="w-full flex flex-col gap-6">
                                {/* Pertanyaan 1: Custom Order (M2O) */}
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>1. Apakah saya bisa memesan baju secara custom (Made-to-Order)?</AccordionTrigger>
                                    <AccordionContent>
                                        Tentu! Kami menyediakan layanan Made-to-Order (M2O) di mana Anda bisa menyesuaikan model, ukuran, dan bahkan bahan sesuai keinginan. Silakan hubungi tim kami melalui halaman kontak untuk konsultasi lebih lanjut.
                                    </AccordionContent>
                                </AccordionItem>
                                {/* Pertanyaan 2: Ukuran */}
                                <AccordionItem value="item-2">
                                    <AccordionTrigger>2. Bagaimana cara mengetahui ukuran yang pas untuk saya?</AccordionTrigger>
                                    <AccordionContent>
                                        Setiap halaman produk dilengkapi dengan panduan ukuran (size chart) yang detail. Anda dapat mengukur lingkar dada, pinggang, dan pinggul Anda, lalu mencocokkannya dengan tabel kami untuk menemukan ukuran yang paling sesuai.
                                    </AccordionContent>
                                </AccordionItem>
                                {/* Pertanyaan 3: Pengiriman */}
                                <AccordionItem value="item-3">
                                    <AccordionTrigger>3. Berapa lama proses pengiriman dan apa saja opsi kurirnya?</AccordionTrigger>
                                    <AccordionContent>
                                        Proses pengemasan pesanan biasanya memakan waktu 1-2 hari kerja. Untuk pengiriman, kami bekerja sama dengan beberapa kurir terpercaya seperti JNE, Sicepat, dan J&T. Estimasi waktu pengiriman tergantung pada lokasi Anda dan layanan kurir yang dipilih saat checkout.
                                    </AccordionContent>
                                </AccordionItem>
                                {/* Pertanyaan 4: Kebijakan Pengembalian */}
                                <AccordionItem value="item-4">
                                    <AccordionTrigger>4. Bagaimana kebijakan pengembalian atau penukaran barang?</AccordionTrigger>
                                    <AccordionContent>
                                        Kami menerima pengembalian atau penukaran barang dalam waktu 7 hari setelah barang diterima, dengan syarat barang masih dalam kondisi baru, belum dipakai, dan label masih terpasang. Untuk produk M2O, pengembalian hanya berlaku jika ada kesalahan produksi dari pihak kami.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;