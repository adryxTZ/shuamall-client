"use client"
import React, {useEffect, useState} from 'react';
import useCategoriesStore from "@/app/store/categoriesStore";

const MobileCategory: React.FC = () => {
    const { categories, fetchCategories } = useCategoriesStore();

    useEffect(() => {
        if (categories.length === 0) {
            fetchCategories();
        }
    }, [categories, fetchCategories]);

    return (
        <>
            <div
                className="block lg:hidden md:hidden absolute left-0 top-[115%] z-10 w-[180px] rounded-lg border-[.5px] border-stroke dark:border-dark-3 bg-white dark:bg-dark-2 py-4 transition-all"
            >
            <span
                className="absolute -top-[6px] left-6 -z-10 hidden h-3 w-3 rotate-45 rounded-sm border-[.5px] border-r-0 border-b-0 border-stroke dark:border-dark-3 bg-white dark:bg-dark-2 lg:block"
            ></span>
                {categories?.slice(0, 5).map((category) => (

                    <div className="pl-6 pr-[18px]">
                    <a
                        href="#"
                        className="flex items-center justify-between py-[6px] text-sm text-body-color dark:text-dark-6 hover:text-primary"
                    >
                        {category.category_name}
                    </a>
                </div>
                        ))}
                {/*                <div className="group relative pl-6 pr-[18px]">*/}
                {/*                    <a*/}
                {/*                        href="#"*/}

                {/*                        className="flex items-center justify-between py-[6px] text-sm text-body-color dark:text-dark-6 hover:text-primary"*/}
                {/*                    >*/}
                {/*                        Fashion*/}

                {/*                        <span>*/}
                {/*  <svg*/}
                {/*      width="14"*/}
                {/*      height="14"*/}
                {/*      viewBox="0 0 14 14"*/}
                {/*      fill="none"*/}
                {/*      xmlns="http://www.w3.org/2000/svg"*/}
                {/*      className="fill-current"*/}
                {/*  >*/}
                {/*    <path*/}
                {/*        d="M4.52811 12.5344C4.39686 12.5344 4.28749 12.4906 4.17811 12.4031C3.98124 12.2063 3.98124 11.9 4.17811 11.7031L8.77186 7L4.17811 2.31875C3.98124 2.12188 3.98124 1.81563 4.17811 1.61875C4.37499 1.42188 4.68124 1.42188 4.87811 1.61875L9.82186 6.65C10.0187 6.84688 10.0187 7.15313 9.82186 7.35L4.87811 12.3813C4.79061 12.4688 4.65936 12.5344 4.52811 12.5344Z"*/}
                {/*    />*/}
                {/*  </svg>*/}
                {/*</span>*/}
                {/*                    </a>*/}

                {/*                    <div*/}

                {/*                        className="left-full top-0 border-stroke*/}
                {/*                        dark:border-dark-3 bg-white dark:bg-dark-2 py-2 group-hover:visible group-hover:opacity-100 lg:invisible lg:absolute lg:w-[600px] lg:rounded lg:border-[.5px] lg:py-8 lg:px-8 lg:opacity-0 xl:w-[650px]"*/}
                {/*                    >*/}
                {/*                        <div className="flex flex-wrap -mx-2">*/}
                {/*                            <div className="w-full px-2 lg:w-1/3">*/}
                {/*                                <div>*/}
                {/*                                    <h3*/}
                {/*                                        className="mb-[14px] text-base font-semibold text-dark dark:text-white"*/}
                {/*                                    >*/}
                {/*                                        New Arrivals*/}
                {/*                                    </h3>*/}
                {/*                                    <a*/}
                {/*                                        href="#"*/}
                {/*                                        className="block py-[6px] text-base text-body-color dark:text-dark-6 hover:text-primary"*/}
                {/*                                    >*/}
                {/*                                        Dresses*/}
                {/*                                    </a>*/}
                {/*                                    <a*/}
                {/*                                        href="#"*/}
                {/*                                        className="block py-[6px] text-base text-body-color dark:text-dark-6 hover:text-primary"*/}
                {/*                                    >*/}
                {/*                                        Jackets*/}
                {/*                                    </a>*/}
                {/*                                    <a*/}
                {/*                                        href="#"*/}
                {/*                                        className="block py-[6px] text-base text-body-color dark:text-dark-6 hover:text-primary"*/}
                {/*                                    >*/}
                {/*                                        Sweatshirts*/}
                {/*                                    </a>*/}
                {/*                                    <a*/}
                {/*                                        href="#"*/}
                {/*                                        className="block py-[6px] text-base text-body-color dark:text-dark-6 hover:text-primary"*/}
                {/*                                    >*/}
                {/*                                        Tops & Tees*/}
                {/*                                    </a>*/}
                {/*                                    <a*/}
                {/*                                        href="#"*/}
                {/*                                        className="block py-[6px] text-base text-body-color dark:text-dark-6 hover:text-primary"*/}
                {/*                                    >*/}
                {/*                                        Party Dresses*/}
                {/*                                    </a>*/}
                {/*                                </div>*/}
                {/*                            </div>*/}
                {/*                            <div className="w-full px-2 lg:w-1/3">*/}
                {/*                                <div>*/}
                {/*                                    <h3*/}
                {/*                                        className="mb-[14px] text-base font-semibold text-dark dark:text-white"*/}
                {/*                                    >*/}
                {/*                                        New Arrivals*/}
                {/*                                    </h3>*/}
                {/*                                    <a*/}
                {/*                                        href="#"*/}
                {/*                                        className="block py-[6px] text-base text-body-color dark:text-dark-6 hover:text-primary"*/}
                {/*                                    >*/}
                {/*                                        Dresses*/}
                {/*                                    </a>*/}
                {/*                                    <a*/}
                {/*                                        href="#"*/}
                {/*                                        className="block py-[6px] text-base text-body-color dark:text-dark-6 hover:text-primary"*/}
                {/*                                    >*/}
                {/*                                        Jackets*/}
                {/*                                    </a>*/}
                {/*                                    <a*/}
                {/*                                        href="#"*/}
                {/*                                        className="block py-[6px] text-base text-body-color dark:text-dark-6 hover:text-primary"*/}
                {/*                                    >*/}
                {/*                                        Sweatshirts*/}
                {/*                                    </a>*/}
                {/*                                    <a*/}
                {/*                                        href="#"*/}
                {/*                                        className="block py-[6px] text-base text-body-color dark:text-dark-6 hover:text-primary"*/}
                {/*                                    >*/}
                {/*                                        Tops & Tees*/}
                {/*                                    </a>*/}
                {/*                                    <a*/}
                {/*                                        href="#"*/}
                {/*                                        className="block py-[6px] text-base text-body-color dark:text-dark-6 hover:text-primary"*/}
                {/*                                    >*/}
                {/*                                        Party Dresses*/}
                {/*                                    </a>*/}
                {/*                                </div>*/}
                {/*                            </div>*/}
                {/*                           */}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*                <div className="pl-6 pr-[18px]">*/}
                {/*                    <a*/}
                {/*                        href="#"*/}
                {/*                        className="flex items-center justify-between py-[6px] text-sm text-body-color dark:text-dark-6 hover:text-primary"*/}
                {/*                    >*/}
                {/*                        Bags & Shoes*/}
                {/*                    </a>*/}
                {/*                </div>*/}
                {/*                <div className="pl-6 pr-[18px]">*/}
                {/*                    <a*/}
                {/*                        href="#"*/}
                {/*                        className="flex items-center justify-between py-[6px] text-sm text-body-color dark:text-dark-6 hover:text-primary"*/}
                {/*                    >*/}
                {/*                        Jewelry & Watch*/}
                {/*                    </a>*/}
                {/*                </div>*/}
            </div>
        </>
    );
};

export default MobileCategory;