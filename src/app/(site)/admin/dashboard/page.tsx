'use client';

import { useState, useEffect, useCallback } from "react";

interface ProdukPakaian {
  id: number;
  name: string;
  price: number;
}

type UIState = 'loading' | 'success' | 'error' | 'empty';

export default function AdminDashboard() {
    const [products, setProducts] = useState<ProdukPakaian[]>([]);
    const [uiState, setUiState] = useState<UIState>('loading');
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const fetchProducts = useCallback(async () => {
        setUiState('loading');
        setErrorMessage(null);
        try {
            const response = await fetch('/api/products');
            const data = await response.json();

            if (!response.ok) {
                const errorMsg = data.message || 'Gagal mengambil data dari server.';
                throw new Error(errorMsg);
            }

            if (!Array.isArray(data)) {
                throw new Error('Format data dari API salah, seharusnya array.');
            }
            
            setProducts(data);
            setUiState(data.length === 0 ? 'empty' : 'success');

        } catch (error: any) {
            console.error("Terjadi kesalahan fatal saat mengambil produk:", error);
            setProducts([]); 
            setUiState('error'); 
            setErrorMessage(error.message || 'Terjadi kesalahan yang tidak diketahui.');
        }
    }, []);

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    const renderContent = () => {
        switch (uiState) {
            case 'loading':
                return <p className="text-center text-gray-500 py-10">Memuat data produk...</p>;
            
            case 'error':
                return (
                    <div className="text-center text-red-600 bg-red-50 p-6 rounded-lg">
                        <p className="font-bold text-lg">Oops! Terjadi Kesalahan</p>
                        <p className="text-sm mt-1">{errorMessage}</p>
                        <button 
                            onClick={fetchProducts} 
                            className="mt-4 px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                        >
                            Coba Lagi
                        </button>
                    </div>
                );
            
            case 'empty':
                return <p className="text-center text-gray-500 py-10">Belum ada produk yang ditambahkan.</p>;
            
            case 'success':
                return (
                    <div className="grid grid-cols-1 gap-4">
                        {products.map(product => (
                            <div key={product.id} className="flex justify-between items-center p-4 border rounded-lg shadow-sm">
                                <span>{product.name}</span>
                                <div>
                                    <button className="px-3 py-1 bg-yellow-500 text-white rounded mr-2 text-sm">Edit</button>
                                    <button className="px-3 py-1 bg-red-600 text-white rounded text-sm">Hapus</button>
                                </div>
                            </div>
                        ))}
                    </div>
                );
            
            default:
                return null;
        }
    };

    return (
        <div className="container mx-auto p-8">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Admin Dashboard</h1>
                <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 font-semibold">
                    + Tambah Produk
                </button>
            </div>
            
            {renderContent()}
        </div>
    );
}
