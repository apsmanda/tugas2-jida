"use client";

import { propertyHomes } from "@/app/api/propertyhomes";
import { useCart } from "@/cart/CartContext";
import Image from "next/image";
import { notFound, useParams } from "next/navigation";
import { Icon } from '@iconify/react';
import { useState } from "react";
import toast from 'react-hot-toast';

const ProductDetailPage = () => {
    const { slug } = useParams();
    const { addToCart } = useCart();
    const [selectedSize, setSelectedSize] = useState<string | null>(null);

    const product = propertyHomes.find(p => p.slug === slug);

    if (!product) {
        notFound();
    }

    const handleAddToCart = () => {
        if (!selectedSize) {
            toast.error("Silakan pilih ukuran terlebih dahulu.");
            return;
        }
        addToCart(product);
        toast.success(`'${product.name}' (Ukuran ${selectedSize}) ditambahkan!`);
    };

    const availableSizes = ["S", "M", "L", "XL"];

    return (
        <section className="pt-40 pb-20">
            <div className="container mx-auto px-5 max-w-5xl">
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Kolom Gambar Produk */}
                    <div>
                        <Image
                            src={product.images[0].src}
                            alt={product.name}
                            width={600}
                            height={750}
                            className="w-full h-auto object-cover rounded-lg shadow-lg"
                        />
                        {/* Anda bisa menambahkan galeri kecil di sini jika mau */}
                    </div>

                    {/* Kolom Detail Produk */}
                    <div>
                        <p className="text-primary font-semibold mb-2">{product.category}</p>
                        <h1 className="text-4xl font-bold text-dark dark:text-white">{product.name}</h1>

                        <div className="flex items-center gap-4 my-4">
                            <div className="flex items-center gap-1 text-amber-500">
                                <Icon icon="ph:star-fill" />
                                <span className="font-bold text-dark dark:text-white">{product.rating}</span>
                            </div>
                            <span className="text-dark/50 dark:text-white/50">({product.reviews} ulasan)</span>
                        </div>

                        <p className="text-3xl font-light text-dark dark:text-white mb-6">
                            {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(product.price)}
                        </p>

                        <p className="text-dark/70 dark:text-white/70 mb-8 leading-relaxed">
                            Deskripsi produk.
                        </p>

                        {/* Pemilih Ukuran */}
                        <div className="mb-8">
                            <p className="font-semibold mb-3">Pilih Ukuran:</p>
                            <div className="flex gap-3">
                                {availableSizes.map(size => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`w-12 h-12 border rounded-md font-bold transition-colors duration-200 ${selectedSize === size ? 'bg-primary text-white border-primary' : 'bg-transparent border-dark/20 dark:border-white/20 hover:border-primary'}`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Tombol Tambah ke Keranjang */}
                        <button
                            onClick={handleAddToCart}
                            className="w-full px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-dark duration-300 flex items-center justify-center gap-3"
                        >
                            <Icon icon="ph:shopping-cart-simple-bold" width={20} height={20} />
                            Tambah ke Keranjang
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDetailPage;