"use client";

import { ProdukPakaian } from "@/app/api/propertyhomes";
import ProductForm from "@/components/Admin/ProductForm"; 
import { useState, useEffect } from "react";

const AdminDashboard = () => {
    const [products, setProducts] = useState<ProdukPakaian[]>([]);
    const [isStyleOpen, setIsStyleOpen] = useState(false);
    const [editingProduct, setEditingProduct] = useState<ProdukPakaian | null>(null);

    const fetchProducts = async () => {
        const res = await fetch('/api/products');
        const data = await res.json();
        setProducts(data);
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleAdd = () => {
        setEditingProduct(null);
        setIsStyleOpen(true);
    };

    const handleEdit = (product: ProdukPakaian) => {
        setEditingProduct(product);
        setIsStyleOpen(true);
    };

    const handleDelete = async (id: number) => {
        if (confirm("Apakah Anda yakin ingin menghapus produk ini?")) {
            await fetch(`/api/products/${id}`, {
                method: 'DELETE',
            });
            fetchProducts(); 
        }
    };

    const handleSubmit = async (productData: Omit<ProdukPakaian, 'id'>) => {
        const method = editingProduct ? 'PUT' : 'POST';
        const url = editingProduct ? `/api/products/${editingProduct.id}` : '/api/products';

        await fetch(url, {
            method: method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(productData),
        });

        setIsStyleOpen(false); 
        fetchProducts(); 
    };

    return (
        <div className="pt-40 pb-20">
            <div className="container mx-auto px-5">
                <h1 className="text-3xl font-bold mb-6 text-center">Kelola Produk</h1>

                <button onClick={handleAdd} className="mb-6 px-4 py-2 bg-primary text-white rounded-md hover:bg-dark">
                    + Tambah Produk Baru
                </button>

                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white dark:bg-dark border">
                        <thead>
                            <tr className="w-full bg-slate-50 dark:bg-dark/40">
                                <th className="p-3 text-left">ID</th>
                                <th className="p-3 text-left">Nama Produk</th>
                                <th className="p-3 text-left">Kategori</th>
                                <th className="p-3 text-left">Harga</th>
                                <th className="p-3 text-left">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map(product => (
                                <tr key={product.id} className="border-b">
                                    <td className="p-3">{product.id}</td>
                                    <td className="p-3">{product.name}</td>
                                    <td className="p-3">{product.category}</td>
                                    <td className="p-3">Rp {product.price.toLocaleString('id-ID')}</td>
                                    <td className="p-3">
                                        <button onClick={() => handleEdit(product)} className="text-blue-500 hover:underline mr-4">Edit</button>
                                        <button onClick={() => handleDelete(product.id)} className="text-red-500 hover:underline">Hapus</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {isStyleOpen && (
                    <ProductForm 
                        onSubmit={handleSubmit}
                        onClose={() => setIsStyleOpen(false)}
                        initialData={editingProduct}
                    />
                )}
            </div>
        </div>
    );
};

export default AdminDashboard;