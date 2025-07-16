"use client";

import { ProdukPakaian } from "@/app/api/propertyhomes";
import { useState, useEffect } from "react";

interface ProductFormProps {
    onSubmit: (productData: Omit<ProdukPakaian, 'id'>) => void;
    onClose: () => void;
    initialData?: ProdukPakaian | null;
}

const ProductForm: React.FC<ProductFormProps> = ({ onSubmit, onClose, initialData }) => {
    const [formData, setFormData] = useState({
        name: '',
        category: 'Atasan',
        price: 0,
        rating: 0,
        reviews: 0,
        slug: '',
        images: [{ src: '' }],
    });

    useEffect(() => {
        if (initialData) {
            setFormData(initialData);
        }
    }, [initialData]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        // Konversi ke angka jika fieldnya adalah price, rating, atau reviews
        const parsedValue = ['price', 'rating', 'reviews'].includes(name) ? parseFloat(value) : value;
        setFormData(prev => ({ ...prev, [name]: parsedValue }));
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({...prev, images: [{src: e.target.value}]}))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white dark:bg-dark p-8 rounded-lg w-full max-w-lg">
                <h2 className="text-2xl font-bold mb-6">{initialData ? 'Edit Produk' : 'Tambah Produk Baru'}</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Nama Produk" className="w-full p-2 border rounded" required />
                    <select name="category" value={formData.category} onChange={handleChange} className="w-full p-2 border rounded">
                        <option value="Atasan">Atasan</option>
                        <option value="Bawahan">Bawahan</option>
                        <option value="Dress">Dress</option>
                        <option value="Outerwear">Outerwear</option>
                    </select>
                    <input type="number" name="price" value={formData.price} onChange={handleChange} placeholder="Harga" className="w-full p-2 border rounded" required />
                    <input type="text" name="slug" value={formData.slug} onChange={handleChange} placeholder="Slug (e.g., nama-produk-baru)" className="w-full p-2 border rounded" required />
                    <input type="text" name="image" value={formData.images[0].src} onChange={handleImageChange} placeholder="Path Gambar (e.g., /images/properties/new.jpg)" className="w-full p-2 border rounded" required />
                    <div className="flex justify-end gap-4">
                        <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-300 dark:bg-gray-600 rounded">Batal</button>
                        <button type="submit" className="px-4 py-2 bg-primary text-white rounded">Simpan</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProductForm;