//shopProductStore.ts
import create from 'zustand';
import {Products} from "@/types";

interface ShopProductsState {
    shopProducts: Products[];
    loading: boolean;
    fetchShopProducts: (shopId: number) => Promise<void>;
}

const useShopProductsStore = create<ShopProductsState>((set) => ({
    shopProducts: [],
    loading: true,
    fetchShopProducts: async (shopId: number) => {
        set({ loading: true });
        try {
            const response = await fetch(`https://api.shuamall.com/api/shop/products/${shopId}`);
            const data = await response.json();
            set({ shopProducts: data.products || [], loading: false });
        } catch (err) {
            console.error('Failed to fetch products', err);
            set({ loading: false });
        }
    },
}));

export default useShopProductsStore;

