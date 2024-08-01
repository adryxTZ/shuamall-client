import { create } from 'zustand'
import { CategoriesProps } from '@/types';

interface CategoriesState {
    categories: CategoriesProps[];
    fetchCategories: () => Promise<void>;
}

const useCategoriesStore = create<CategoriesState>((set) => ({
    categories: [],
    fetchCategories: async () => {
        try {
            const response = await fetch("https://api.shuamall.com/api/category/get_all_categories");
            const data = await response.json();
            set({ categories: data.categories || [] });
        } catch (err) {
            console.error('Failed to fetch categories', err);
        }
    },
}));

export default useCategoriesStore;