import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Defina o tipo de item no carrinho
interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

// Estado inicial tipado
const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItem>) {
      state.items.push(action.payload);
    },
    removeItem(state, action: PayloadAction<{ id: string }>) {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
  },
});

// Exporte as ações e o reducer
export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
