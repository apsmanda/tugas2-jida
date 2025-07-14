import React from 'react';

const shoppingtutorial = () => {
    return (
        <div className="pt-40 pb-20">
            <div className="container max-w-4xl mx-auto px-5">
                <h1 className="text-4xl font-bold text-center mb-8">Cara Pemesanan:</h1>
                <ol className="list-decimal list-inside space-y-4 text-lg">
                    <li>Pilih produk favorit Anda dari halaman koleksi kami.</li>
                    <li>Pada halaman detail produk, pilih ukuran yang sesuai dan klik tombol "Tambah ke Keranjang".</li>
                    <li>Setelah selesai memilih produk, klik ikon keranjang belanja di pojok kanan atas.</li>
                    <li>Periksa kembali pesanan Anda, lalu klik "Checkout" untuk melanjutkan ke pembayaran.</li>
                    <li>Isi alamat pengiriman dan pilih metode pembayaran yang Anda inginkan.</li>
                    <li>Selesaikan pembayaran dan tunggu konfirmasi pesanan dari kami melalui email.</li>
                </ol>
            </div>
        </div>
    );
};
export default shoppingtutorial;