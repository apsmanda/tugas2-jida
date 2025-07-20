'use client';

import { useSelector, useDispatch } from 'react-redux';
import {
  selectCartItems,
  selectTotalPrice,
  removeFromCart,
  removeItemCompletely,
  clearCart,
  addToCart 
} from '@/lib/features/cart/cartSlice';

export default function CartPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectTotalPrice);

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto text-center py-20">
        <h1 className="text-3xl font-bold">Keranjang Belanja Anda Kosong</h1>
        <p className="mt-4 text-gray-600">Sepertinya Anda belum menambahkan barang apapun.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Keranjang Belanja</h1>
        <button 
          onClick={() => dispatch(clearCart())} 
          className="px-4 py-2 text-sm font-medium text-red-600 bg-red-100 rounded-md hover:bg-red-200"
        >
          Kosongkan Keranjang
        </button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map(item => (
            <div key={item.id} className="flex items-center justify-between p-4 border rounded-lg shadow-sm">
              <div className="flex items-center gap-4">
                <div>
                  <h2 className="font-semibold text-lg">{item.name}</h2>
                  <p className="text-gray-500 text-sm">{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(item.price)} / item</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center border rounded-md">
                  <button onClick={() => dispatch(removeFromCart(item.id))} className="px-3 py-1 font-bold">-</button>
                  <span className="px-4 py-1">{item.quantity}</span>
                  <button onClick={() => dispatch(addToCart(item))} className="px-3 py-1 font-bold">+</button>
                </div>
                <button onClick={() => dispatch(removeItemCompletely(item.id))} className="text-gray-400 hover:text-red-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="p-6 border rounded-lg shadow-sm h-fit lg:sticky lg:top-24">
          <h2 className="text-xl font-bold mb-4">Ringkasan</h2>
          <div className="flex justify-between mt-4 border-t pt-4">
            <span className="text-lg font-semibold">Total Harga:</span>
            <span className="text-lg font-semibold text-primary">{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(totalPrice)}</span>
          </div>
          <button className="w-full mt-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
