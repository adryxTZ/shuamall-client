import React from 'react';
import Image from "next/image";
import {images} from "@/shared/constants/image";
import {CategoriesProps} from "@/types";

interface CategoryCardProps {
    category: CategoriesProps;

}
const CategoryCard: React.FC<CategoryCardProps> = ({category}) => {
    return (
        <div className="w-full px-4 md:w-1/2 lg:w-1/3 xl:w-1/4">
            <div
                className="p-3 mb-10 bg-white border rounded-xl border-stroke dark:border-dark-3 dark:bg-dark-2"
            >
                <a href="#" className="block">
                    <Image
                        src={images.electronics}
                        alt="category"
                        className="w-full rounded-lg"
                    />
                </a>
                <div className="px-3 pt-6 pb-3">
                <span
                    className="mb-1 text-base font-medium text-body-color dark:text-dark-6"
                >
                  #{category.category_name}
                </span>

                    <a
                        href="#"
                        className="block text-lg font-semibold hover:text-primary text-dark dark:text-white
                         sm:text-2xl md:text-xl lg:text-lg"
                    >
                        {category.category_name}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;
