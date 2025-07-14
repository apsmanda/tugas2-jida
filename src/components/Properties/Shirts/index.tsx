import { propertyHomes } from "@/app/api/propertyhomes";
import ProductCard from "@/components/Home/Properties/Card/Card";
import React from "react";

const LuxuryVilla = () => {
    // 1. Kita filter semua produk untuk hanya mengambil yang kategori "Atasan"
    const atasanProducts = propertyHomes.filter(
        (item) => item.category === 'Atasan'
    );

    return (
        <section className="pb-20">
            <div className="container max-w-6xl mx-auto px-5">
                {/* 2. Kita buat judul untuk halaman kategori ini */}
                <div className="text-center mb-12 pt-40">
                    <h1 className="text-4xl font-bold text-dark dark:text-white">
                        Koleksi Atasan
                    </h1>
                    <p className="text-lg mt-2 text-dark/70 dark:text-white/70">
                        Temukan semua pilihan atasan terbaik kami di sini.
                    </p>
                </div>

                {/* 3. Kita tampilkan produk yang sudah difilter */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
                    {atasanProducts.map((item, index) => (
                        <div key={index}>
                            <ProductCard item={item} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LuxuryVilla;