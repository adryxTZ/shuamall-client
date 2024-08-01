// aboutShopStore.ts
import create from 'zustand';
import { AboutShop } from '@/types';

interface AboutShopState {
    aboutShop: AboutShop | null;
    loading: boolean;
    error: string | null;
    fetchAboutShop: (shopId: number) => Promise<void>;
}

const useAboutShopStore = create<AboutShopState>((set) => ({
    aboutShop: null,
    loading: false,
    error: null,
    fetchAboutShop: async (shopId: number) => {
        set({ loading: true, error: null });
        try {
            const response = await fetch(`https://api.shuamall.com/api/shop/about/${shopId}`);

            const data: AboutShop = await response.json();
            set({ aboutShop: data, loading: false });
        } catch (error) {
            // @ts-ignore
            set({ error: error.message, loading: false });
        }
    },
}));

export default useAboutShopStore;
