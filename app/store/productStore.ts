import { create } from 'zustand'
import { Products } from '@/types';

interface ProductsState {
    products: Products[];
    loading: boolean;
    fetchProducts: () => Promise<void>;
}

const useProductsStore = create<ProductsState>((set) => ({
    products: [],
    loading: true,
    fetchProducts: async () => {
        set({ loading: true });
        try {
            const response = await fetch("https://api.shuamall.com/api/product/productList");
            const data = await response.json();
            set({ products: data.products || [], loading: false });
        } catch (err) {
            console.error('Failed to fetch products', err);
            set({ loading: false });
        }
    },
}));

export default useProductsStore;
