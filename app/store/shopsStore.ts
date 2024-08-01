import { create } from 'zustand'
import { Shops } from '@/types';

interface ShopsState {
    shops: Shops[];
    loading: boolean;
    fetchShops: () => Promise<void>;
}

const useShopsStore = create<ShopsState>((set) => ({
    shops: [],
    loading: true,
    fetchShops: async () => {
        set({ loading: true });
        try {
            const response = await fetch("https://api.shuamall.com/api/shop/shopList");
            const data = await response.json();
            set({ shops: data.shops || [], loading: false });
        } catch (err) {
            console.error('Failed to fetch shops', err);
            set({ loading: false });
        }
    },
}));

export default useShopsStore;
