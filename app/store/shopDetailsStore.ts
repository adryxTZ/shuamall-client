// shopDetailsStore.ts
import create from 'zustand';
import {ShopDetail} from "@/types";

interface ShopDetailsState {
    shopDetail: ShopDetail | null;
    loading: boolean;
    error: string | null;
    fetchShopDetails: (shopId: number) => Promise<void>;
}

const useShopDetailsStore = create<ShopDetailsState>((set) => ({
    shopDetail: null,
    loading: false,
    error: null,
    fetchShopDetails: async (shopId: number) => {
        set({ loading: true, error: null });
        try {
            // const response = await fetch(`/api/shops/${shopId}`);
            const response = await fetch(`https://api.shuamall.com/api/shop/${shopId}`);

            const data: ShopDetail = await response.json();
            set({ shopDetail: data, loading: false });
        } catch (error) {
            // @ts-ignore
            set({ error: error.message, loading: false });
        }
    },
}));

export default useShopDetailsStore;
