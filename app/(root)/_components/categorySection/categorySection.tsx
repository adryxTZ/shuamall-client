"use client"

import React, {useEffect} from 'react';
import CategoryCard from "@/app/(root)/_components/categorySection/categoryCard";
import useCategoriesStore from "@/app/store/categoriesStore";

const CategorySection = () => {
    const { categories, fetchCategories } = useCategoriesStore();

    useEffect(() => {
        if (categories.length === 0) {
            fetchCategories();
        }
    }, [categories, fetchCategories]);
    return (
        <section className="bg-white dark:bg-dark pt-[40px]">
            <div className="container mx-auto">
                <div className="flex flex-wrap items-end -mx-4">
                    <div className="w-full px-4 lg:w-2/3">
                        <div className="mb-4 max-w-[510px]">
                            <h2
                                className="text-dark dark:text-white mb-2 text-2xl font-bold md:leading-[45px] md:text-2xl"
                            >
                                Shop By Category
                            </h2>
                            {/*<p className="text-base text-body-color dark:text-dark-6">*/}
                            {/*    There are many variations of passages of Lorem Ipsum available*/}
                            {/*    but the majority have suffered alteration in some form.*/}
                            {/*</p>*/}
                        </div>
                    </div>

                </div>

                <div className="flex flex-wrap -mx-4">
                    {categories?.slice(0, 4).map((category) => (
                        <CategoryCard key={category.id} category={category}/>
                    ))}
                    {/*<CategoryCard/>*/}
                    {/*<CategoryCard/>*/}
                    {/*<CategoryCard/>*/}
                    {/*<CategoryCard/>*/}
                </div>
            </div>
        </section>
    );
};

export default CategorySection;
