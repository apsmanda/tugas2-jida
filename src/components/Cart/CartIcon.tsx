'use client';

import { useSelector } from 'react-redux';
import type { RootState } from '@/lib/store';
import { Icon } from '@iconify/react';

export default function CartIcon() {
  const itemCount = useSelector((state: RootState) => state.cart.items.length);

  return (
    <div className="fixed top-5 right-5 flex items-center p-3 bg-white rounded-full shadow-lg">
      <Icon icon="ph:shopping-cart-simple-fill" width={28} height={28} className="text-gray-800" />
      <span className="ml-2 flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full">
        {itemCount}
      </span>
    </div>
  );
}