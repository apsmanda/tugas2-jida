import React from 'react';
import { Metadata } from 'next';
import { propertyHomes } from '@/app/api/propertyhomes';
import ProductCard from '@/components/Home/Properties/Card/Card';

export const metadata: Metadata = {
    title: "Koleksi Outerwear - Stylish Threads",
};

const OuterwearPage = () => {
    const outerwearProducts = propertyHomes.filter(
        (item) => item.category === 'Outerwear'
    );

    return (
        <div className="pt-40 pb-20">
            <div className="container max-w-6xl mx-auto px-5">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold">Koleksi Outerwear</h1>
                    <p className="text-lg mt-2 text-dark/70 dark:text-white/70">
                        Lengkapi gayamu dengan jaket, kardigan, dan blazer trendi.
                    </p>
                </div>

                {/* Cek apakah ada produk di kategori ini */}
                {outerwearProducts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
                        {outerwearProducts.map((item) => (
                            <ProductCard key={item.slug} item={item} />
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-dark/70 dark:text-white/70">
                        Oops! Belum ada produk di kategori ini.
                    </p>
                )}
            </div>
        </div>
    );
};

export default OuterwearPage;