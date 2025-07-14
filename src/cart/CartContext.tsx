"use client";

import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

export interface ProdukPakaian {
  name: string;
  category: string;
  price: number;
  rating: number;
  reviews: number;
  slug: string;
  images: {
    src: string;
  }[];
}

interface CartItem extends ProdukPakaian {
    quantity: number;
}

interface CartContextType {
    cartItems: CartItem[];
    addToCart: (product: ProdukPakaian) => void;
    removeFromCart: (productId: string) => void;
    updateQuantity: (productId: string, quantity: number) => void;
    clearCart: () => void;
    totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    useEffect(() => {
        try {
            const storedCart = localStorage.getItem('shoppingCart');
            if (storedCart) {
                setCartItems(JSON.parse(storedCart));
            }
        } catch (error) {
            console.error("Could not parse cart from localStorage", error);
            setCartItems([]);
        }
    }, []);

    useEffect(() => {
        try {
            localStorage.setItem('shoppingCart', JSON.stringify(cartItems));
        } catch (error) {
            console.error("Could not save cart to localStorage", error);
        }
    }, [cartItems]);

    const addToCart = (product: ProdukPakaian) => {
        setCartItems(prevItems => {
            const itemExists = prevItems.find(item => item.slug === product.slug);
            if (itemExists) {
                return prevItems.map(item =>
                    item.slug === product.slug ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevItems, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (productId: string) => {
        setCartItems(prevItems => prevItems.filter(item => item.slug !== productId));
    };

    const updateQuantity = (productId: string, quantity: number) => {
        if (quantity <= 0) {
            removeFromCart(productId);
        } else {
            setCartItems(prevItems =>
                prevItems.map(item =>
                    item.slug === productId ? { ...item, quantity } : item
                )
            );
        }
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart, totalPrice }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};