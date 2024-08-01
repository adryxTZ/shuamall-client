"use client"

import React, {useEffect, useState} from 'react';
import MobileNav from "@/shared/components/navBar/mobileNav";
import { X } from 'lucide-react';
import MobileCategory from './mobileCategory';
import useCategoriesStore from "@/app/store/categoriesStore";


const Categories = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const toggleCategoryMenu = () => {
        setIsCategoryOpen(!isCategoryOpen);
    };

    const { categories, fetchCategories } = useCategoriesStore();

    useEffect(() => {
        if (categories.length === 0) {
            fetchCategories();
        }
    }, [categories, fetchCategories]);
    // console.log("shoooopppsss"+categories)
    return (
        <div>
            <div className="container mx-auto">
                <div className="relative flex items-center justify-center -mx-4">
                    <div className="w-full max-w-full px-4 lg:w-60 block lg:hidden md:hidden">
                        <div className="relative py-4" >
                            <a
                                onClick={toggleCategoryMenu}
                                href="#"

                                className="inline-flex items-center justify-between whitespace-nowrap rounded-[5px] bg-primary pl-4 pr-[18px] py-[9px] text-base font-medium text-white hover:bg-opacity-90"
                            >
            <span className="pr-[10px] text-white">
              <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current"
              >
                <path
                    d="M16.875 8.38125H1.12502C0.787524 8.38125 0.478149 8.6625 0.478149 9.02812C0.478149 9.36562 0.759399 9.675 1.12502 9.675H16.875C17.2125 9.675 17.5219 9.39375 17.5219 9.02812C17.5219 8.6625 17.2125 8.38125 16.875 8.38125Z"
                />
                <path
                    d="M16.875 13.1625H1.12502C0.787524 13.1625 0.478149 13.4437 0.478149 13.8094C0.478149 14.175 0.759399 14.4562 1.12502 14.4562H16.875C17.2125 14.4562 17.5219 14.175 17.5219 13.8094C17.5219 13.4437 17.2125 13.1625 16.875 13.1625Z"
                />
                <path
                    d="M1.12502 4.8375H16.875C17.2125 4.8375 17.5219 4.55625 17.5219 4.19062C17.5219 3.825 17.2406 3.54375 16.875 3.54375H1.12502C0.787524 3.54375 0.478149 3.825 0.478149 4.19062C0.478149 4.55625 0.787524 4.8375 1.12502 4.8375Z"
                />
              </svg>
            </span>

                                All categories

                                <span className="pl-3 text-white">
              <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current"
              >
                <path
                    d="M8.00002 11.4C7.85002 11.4 7.72502 11.35 7.60002 11.25L1.85002 5.6C1.62502 5.375 1.62502 5.025 1.85002 4.8C2.07502 4.575 2.42502 4.575 2.65002 4.8L8.00002 10.025L13.35 4.75C13.575 4.525 13.925 4.525 14.15 4.75C14.375 4.975 14.375 5.325 14.15 5.55L8.40002 11.2C8.27502 11.325 8.15002 11.4 8.00002 11.4Z"
                />
              </svg>
            </span>
                            </a>

                            {isCategoryOpen && (

                               <MobileCategory />
                            )}

                        </div>
                    </div>
                    <div className="flex items-center justify-center w-full px-4">
                        <div className="w-full">
                            <button
                                onClick={toggleMenu}
                                className={`absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden `}
                                id="navbarToggler"
                            >
                                {isOpen ? (
                                    <>
                                        <X size={30}/>
                                    </>

                                ) : (
                                    <>
                                        <span
                                            className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-dark-6"
                                        ></span>
                                        <span
                                            className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-dark-6"
                                        ></span>
                                        <span
                                            className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-dark-6"
                                        ></span>
                                    </>

                                )}
                            </button>
                            {isOpen && (
                                <MobileNav/>

                            )}

                            <nav

                                id="navbarCollapse"
                                className="hidden absolute right-4 top-full z-50 w-full max-w-[250px] justify-center contentCenter rounded-lg bg-white dark:bg-dark-2 py-5 px-6 shadow lg:static lg:flex lg:w-full lg:max-w-full lg:justify-end lg:bg-transparent lg:py-0 lg:px-0 lg:shadow-none dark:lg:bg-transparent"
                            >
                                <ul className="items-center block lg:flex">
                                    <li>
                                        <a
                                            href="#"
                                            className="flex justify-between py-2 text-base font-medium text-body-color dark:text-dark-6 hover:text-primary lg:mx-4 lg:inline-flex lg:py-6"
                                        >
                                            Top Categories
                                        </a>
                                    </li>

                                    {categories?.slice(0, 5).map((category) => (
                                        <li key={category.id}>
                                            <a
                                                href="#"
                                                className="flex justify-between py-2 text-base font-medium text-body-color dark:text-dark-6 hover:text-primary lg:mx-4 lg:inline-flex lg:py-6"
                                            >
                                                {category.category_name}
                                            </a>
                                        </li>
                                    ))}
                                    {/*<li>*/}
                                    {/*    <a*/}
                                    {/*        href="#"*/}
                                    {/*        className="flex justify-between py-2 text-base font-medium text-body-color dark:text-dark-6 hover:text-primary lg:mx-4 lg:inline-flex lg:py-6"*/}
                                    {/*    >*/}
                                    {/*        Electronics*/}
                                    {/*    </a>*/}
                                    {/*</li>*/}
                                    {/*<li>*/}
                                    {/*    <a*/}
                                    {/*        href="#"*/}
                                    {/*        className="flex justify-between py-2 text-base font-medium text-body-color dark:text-dark-6 hover:text-primary lg:mx-4 lg:inline-flex lg:py-6"*/}
                                    {/*    >*/}
                                    {/*        Cars*/}
                                    {/*    </a>*/}
                                    {/*</li>*/}
                                    {/*<li>*/}
                                    {/*    <a*/}
                                    {/*        href="#"*/}
                                    {/*        className="flex justify-between py-2 text-base font-medium text-body-color dark:text-dark-6 hover:text-primary lg:mx-4 lg:inline-flex lg:py-6"*/}
                                    {/*    >*/}
                                    {/*       Auto parts & Accessories*/}
                                    {/*    </a>*/}
                                    {/*</li>*/}
                                    {/*<li>*/}
                                    {/*    <a*/}
                                    {/*        href="#"*/}
                                    {/*        className="flex justify-between py-2 text-base font-medium text-body-color dark:text-dark-6 hover:text-primary lg:mx-4 lg:inline-flex lg:py-6"*/}
                                    {/*    >*/}
                                    {/*        Kitchen Accessories*/}
                                    {/*    </a>*/}
                                    {/*</li>*/}

                                    {/*<li>*/}
                                    {/*    <a*/}
                                    {/*        href="#"*/}
                                    {/*        className="flex justify-between py-2 text-base font-medium text-body-color dark:text-dark-6 hover:text-primary lg:mx-4 lg:inline-flex lg:py-6"*/}
                                    {/*    >*/}
                                    {/*        Other Categories*/}
                                    {/*    </a>*/}
                                    {/*</li>*/}
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Categories;
