import { create } from "zustand";
import { persist } from "zustand/middleware";

const useProductStore = create(
  persist((set) => ({
    items: [],
    addItem:(item) => set((state) => ({ items: [...state.items, item] })),
    total: () => set((state) => ({ total: state.items.reduce((acc, item) => acc + item.price, 0)  })),
     }), { name: "cart" })
);

export const addCart = (item) => useProductStore.getState().addItem(item);

