"use client";

import { useCart } from "@/cart/CartContext"; 
import Image from "next/image";
import Link from "next/link";
import { Icon } from '@iconify/react';
import { Metadata } from "next";

const CartPage = () => {
    const { cartItems, removeFromCart, updateQuantity, totalPrice } = useCart();

    return (
        <section className="pt-40 pb-20 min-h-screen bg-slate-50 dark:bg-dark/20">
            <div className="container mx-auto px-5 max-w-6xl">
                
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-dark dark:text-white">Keranjang Belanja</h1>
                    <p className="text-lg mt-2 text-dark/60 dark:text-white/60">
                        Periksa kembali pesanan Anda sebelum melanjutkan ke checkout.
                    </p>
                </div>

                {cartItems.length === 0 ? (
                    <div className="text-center py-20">
                        <Icon icon="ph:shopping-cart-simple-light" className="mx-auto text-6xl text-gray-300 dark:text-gray-600 mb-4" />
                        <h2 className="text-2xl font-semibold mb-2">Keranjang Anda Kosong</h2>
                        <p className="text-gray-500 mb-6">Sepertinya Anda belum menambahkan produk apapun.</p>
                        <Link href="/properties" className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-dark duration-300">
                            Kembali Belanja
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-12">
                        
                        <div className="lg:col-span-2">
                            <div className="space-y-4">
                                {cartItems.map(item => (
                                    <div key={item.slug} className="flex flex-col sm:flex-row items-center p-4 border rounded-lg gap-4 bg-white dark:bg-dark/40 shadow-sm">
                                        <Image src={item.images[0].src} alt={item.name} width={100} height={120} className="rounded-md object-cover" />
                                        
                                        <div className="flex-grow text-center sm:text-left">
                                            <Link href={`/properties/${item.slug}`} className="font-semibold text-lg hover:text-primary">{item.name}</Link>
                                            <p className="text-sm text-gray-500">{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(item.price)}</p>
                                        </div>
                                        
                                        <div className="flex items-center gap-2">
                                            <button onClick={() => updateQuantity(item.slug, item.quantity - 1)} className="px-3 py-1 border rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">-</button>
                                            <input
                                                type="number"
                                                value={item.quantity}
                                                readOnly
                                                className="w-12 p-2 border-t border-b text-center bg-transparent"
                                            />
                                            <button onClick={() => updateQuantity(item.slug, item.quantity + 1)} className="px-3 py-1 border rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">+</button>
                                        </div>
                                        
                                        <p className="font-semibold w-24 text-center">
                                            {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(item.price * item.quantity)}
                                        </p>
                                        
                                        <button onClick={() => removeFromCart(item.slug)} className="text-gray-400 hover:text-red-500 transition-colors">
                                            <Icon icon="ph:trash-bold" width={24} height={24} />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="lg:col-span-1">
                            <div className="p-6 border rounded-lg bg-white dark:bg-dark/40 shadow-sm lg:sticky lg:top-40">
                                <h2 className="text-xl font-bold mb-4">Ringkasan Pesanan</h2>
                                <div className="space-y-2">
                                    <div className="flex justify-between">
                                        <span>Subtotal</span>
                                        <span>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(totalPrice)}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Ongkos Kirim</span>
                                        <span>Rp 10.000</span>
                                    </div>
                                </div>
                                <hr className="my-4" />
                                <div className="flex justify-between font-bold text-lg mb-6">
                                    <span>Total</span>
                                    <span>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(totalPrice + 10000)}</span>
                                </div>
                                <button className="w-full px-6 py-3 bg-primary text-white font-semibold text-lg rounded-lg hover:bg-dark duration-300">
                                    Lanjut ke Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section> 
    );
};

export default CartPage;

