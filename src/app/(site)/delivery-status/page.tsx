import React from 'react';

const deliverystatus = () => {
    return (
        <div className="pt-40 pb-20">
            <div className="container max-w-2xl mx-auto px-5 text-center">
                <h1 className="text-4xl font-bold mb-8">Lacak Pesanan Anda</h1>
                <p className="mb-6">Masukkan nomor pesanan Anda di bawah ini untuk melihat status pengiriman.</p>
                <div className="flex gap-2 justify-center">
                    <input type="text" placeholder="Contoh: INV123456" className="px-4 py-2 border rounded-md w-full max-w-sm" />
                    <button className="px-6 py-2 bg-primary text-white rounded-md hover:bg-dark duration-300">Lacak</button>
                </div>
            </div>
        </div>
    );
};
export default deliverystatus;