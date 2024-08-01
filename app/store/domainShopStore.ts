import { create } from 'zustand';
import { Shop } from '@/types';

interface ShopsState {
    shops: Shop[];
    currentShop: Shop | null;
    loading: boolean;
    fetchShops: () => Promise<void>;
    getShopByName: (name: string) => Shop | undefined;
    setCurrentShop: (shop: Shop) => void;
}

const useDomainShopsStore = create<ShopsState>((set, get) => ({
    shops: [],
    currentShop: null,
    loading: false,
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
    getShopByName: (name: string) => {
        return get().shops.find(shop => shop.shop_name.toLowerCase() === name.toLowerCase());
    },
    setCurrentShop: (shop: Shop) => set({ currentShop: shop }),
}));

export default useDomainShopsStore;
