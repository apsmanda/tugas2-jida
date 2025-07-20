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
            setFormData({
                name: initialData.name,
                category: initialData.category,
                price: initialData.price,
                rating: initialData.rating,
                reviews: initialData.reviews,
                slug: initialData.slug,
                images: initialData.images,
            });
        }
    }, [initialData]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
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
            {/* ... sisa kode JSX Anda tidak berubah ... */}
            <div className="bg-white dark:bg-dark p-8 rounded-lg w-full max-w-lg">
                <h2 className="text-2xl font-bold mb-6">{initialData ? 'Edit Produk' : 'Tambah Produk Baru'}</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* ... input form Anda ... */}
                </form>
            </div>
        </div>
    );
};

export default ProductForm;