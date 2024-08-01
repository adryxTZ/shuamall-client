import React from 'react';
import {ShoppingBag} from "lucide-react";

const Categories = () => {
    return (
        <div>
            <div className="container mx-auto">
                <div className="relative container flex items-center justify-between -mx-4">
                    <div className="w-full max-w-full lg:w-60 md:1/4">
                        <div className="relative py-4">
                            <a
                                href="#"

                                className="inline-flex items-center justify-between whitespace-nowrap rounded-[5px] bg-primary pl-4 pr-[10rem] py-[9px] text-base font-medium text-white hover:bg-opacity-90"
                            >
            <span className="pr-[10px] text-white">
           <ShoppingBag size={16} color="#ffffff" strokeWidth={2}/>
            </span>
                                Products
                                <span className="pl-3 text-white">

            </span>
                            </a>


                        </div>
                    </div>
                    <div className="flex items-center w-full px-4 md:3/4">
                        <div className="w-full">

                            <button

                                className={`absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden `}
                                id="navbarToggler"
                            >
            <span
                className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-dark-6"
            ></span>
                                <span
                                    className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-dark-6"
                                ></span>
                                <span
                                    className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-dark-6"
                                ></span>
                            </button>
                            <nav

                                id="navbarCollapse"
                                className="hidden absolute right-4 top-full z-50 w-full max-w-[250px] justify-center rounded-lg bg-white dark:bg-dark-2 py-5 px-6 shadow lg:static lg:flex lg:w-full lg:max-w-full lg:justify-end lg:bg-transparent lg:py-0 lg:px-0 lg:shadow-none dark:lg:bg-transparent"
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
                                    <li>
                                        <a
                                            href="#"
                                            className="flex justify-between py-2 text-base font-medium text-body-color dark:text-dark-6 hover:text-primary lg:mx-4 lg:inline-flex lg:py-6"
                                        >
                                            Electronics
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="flex justify-between py-2 text-base font-medium text-body-color dark:text-dark-6 hover:text-primary lg:mx-4 lg:inline-flex lg:py-6"
                                        >
                                            Cars
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="flex justify-between py-2 text-base font-medium text-body-color dark:text-dark-6 hover:text-primary lg:mx-4 lg:inline-flex lg:py-6"
                                        >
                                            Auto parts & Accessories
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="flex justify-between py-2 text-base font-medium text-body-color dark:text-dark-6 hover:text-primary lg:mx-4 lg:inline-flex lg:py-6"
                                        >
                                            Kitchen Accessories
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            href="#"
                                            className="flex justify-between py-2 text-base font-medium text-body-color dark:text-dark-6 hover:text-primary lg:mx-4 lg:inline-flex lg:py-6"
                                        >
                                            Other Categories
                                        </a>
                                    </li>
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
