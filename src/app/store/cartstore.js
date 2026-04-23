import { create } from "zustand";
import { fetchCartCount } from "../utils/auth";


export const useCartStore = create((set) => ({
    cartCount: 0, // initial value

    // async action
    refreshCount: async () => {
        const count = await fetchCartCount(); // fetch from API
        set({ cartCount: count }); // update global state
    },
}));

