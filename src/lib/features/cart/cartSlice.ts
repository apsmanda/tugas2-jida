import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Omit<CartItem, 'quantity'>>) => {
      const itemPayload = action.payload;
      const existingItem = state.items.find(item => item.id === itemPayload.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...itemPayload, quantity: 1 });
      }
    },
    
    removeFromCart: (state, action: PayloadAction<number>) => { 
      const itemIndex = state.items.findIndex(item => item.id === action.payload);
      
      if (itemIndex !== -1) {
        if (state.items[itemIndex].quantity > 1) {
          state.items[itemIndex].quantity -= 1;
        } else {
          state.items.splice(itemIndex, 1);
        }
      }
    },

    removeItemCompletely: (state, action: PayloadAction<number>) => { 
        state.items = state.items.filter(item => item.id !== action.payload);
    },

    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, removeItemCompletely, clearCart } = cartSlice.actions;
export const selectCartItems = (state: RootState): CartItem[] => state.cart.items;

export const selectTotalItemCount = (state: RootState): number => {
    return state.cart.items.reduce((total, item) => total + item.quantity, 0);
};

export const selectTotalPrice = (state: RootState): number => {
    return state.cart.items.reduce((total, item) => total + (item.price * item.quantity), 0);
};

export default cartSlice.reducer;