import { create } from 'zustand';
import { persist } from "zustand/middleware";


const useCartStore = create(
  persist((set) => ({
    items: [],
    addItem:(item) => set((state) => ({ items: [...state.items, item] })),
     }), { name: "cart" })
);

export const addToCart = (item) => useCartStore.getState().addItem(item);



const clearCartStore = create(
  persist((set) => ({
    items: [],
    clearItems:(clear) => set((state) => ({ items: [...state.items, clear] })),
     }), { name: "cart" })
);

export const clearCart = (item) => clearCartStore.getState().clearItems(item);



