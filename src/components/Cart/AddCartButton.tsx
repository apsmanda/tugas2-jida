'use client';

import { useDispatch } from 'react-redux';
import { addToCart } from '@/lib/features/cart/cartSlice';
import { toast } from 'react-hot-toast';

interface Product {
  id: number;
  name: string;
  price: number;
}

export default function AddToCartButton({ product }: { product: Product }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    toast.success(`${product.name} ditambahkan ke keranjang!`);
  };

  return (
    <button
      onClick={handleAddToCart}
      className="flex items-center justify-center w-10 h-10 bg-primary/10 text-primary rounded-full hover:bg-primary hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
      aria-label="Tambah ke Keranjang"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="9" cy="21" r="1"></circle>
        <circle cx="20" cy="21" r="1"></circle>
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
      </svg>
    </button>
  );
}
