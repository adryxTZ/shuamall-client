import React from 'react';
import Link from "next/link";
import {Navbar} from "@/shared";

const Index = () => {
    return (
        <>
            <header className="w-full pt-2 dark:bg-dark">
                <div className="hidden border-b border-stroke dark:border-dark-3 sm:block">

                    <div className="container mx-auto">
                        <div className="flex flex-wrap items-center -mx-4">

                            <div className="w-full px-4 md:w-2/3 lg:w-1/2">

                                <ul className="flex items-center -mx-3">

                                    <li>
                                        <Link
                                            href="/"
                                            className="inline-block px-3 py-4 text-md font-medium text-body-color dark:text-dark-6 hover:text-primary dark:hover:text-primary"
                                        >
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={"/shops"}
                                              className="inline-block px-3 py-4 text-md font-medium text-body-color dark:text-dark-6 hover:text-primary dark:hover:text-primary"
                                        >
                                            Shops
                                        </Link>
                                    </li>
                                    <li>
                                        <a
                                            href="/products"
                                            className="inline-block px-3 py-4 text-md font-medium text-body-color dark:text-dark-6 hover:text-primary dark:hover:text-primary"
                                        >
                                            Products
                                        </a>
                                    </li>
                                    {/*<li>*/}
                                    {/*    <a*/}
                                    {/*        href="#"*/}
                                    {/*        className="inline-block px-3 py-4 text-sm font-medium text-body-color dark:text-dark-6 hover:text-primary dark:hover:text-primary"*/}
                                    {/*    >*/}
                                    {/*        FAQs*/}
                                    {/*    </a>*/}
                                    {/*</li>*/}
                                </ul>
                            </div>
                            <div className="w-full px-4 md:w-1/3 lg:w-1/2">
                                <div className="items-center justify-end hidden md:flex space-x-2">

                                    <div className=" mr-4">
                                        <div
                                            className="mr-4 flex w-full flex-col space-y-2 border-primary/10 dark:border-gray-700 sm:flex-row md:w-max lg:mt-0 lg:mr-6 lg:space-y-0 lg:border-l lg:pl-6">
                                            <Link href="/sign-in"
                                                  className="relative ml-auto flex items-center justify-center px-4 py-2  w-full text-center binset-0 rounded-full backgroundHeader transition-transform duration-300 before:scale-105 active:duration-75 active:scale-95 dark:before:border-gray-700 dark:before:bg-primaryLight sm:px-4 lg:before:border lg:before:border-gray-200 lg:before:bg-gray-100 lg:dark:before:bg-gray-800">
                                <span
                                    className="flex relative text-sm font-semibold text-primary dark:text-primary lg:text-primary dark:text-gray-900">Sign in </span>
                                            </Link>
                                        </div>
                                    </div>
                                    <div>
                                        <div
                                            className="ml-2 flex w-full flex-col space-y-2 border-primary/10 dark:border-gray-700 sm:flex-row
                                         md:w-max lg:mt-0 lg:mr-6 lg:space-y-0 lg:border-l lg:pl-6">
                                            <Link href="/register"
                                                  className="relative ml-auto flex items-center justify-center
                                              px-2 text-sm md:px-4 py-2 w-full text-center binset-0 rounded-full bg-primary transition-transform duration-300 before:scale-105 active:duration-75 active:scale-95 dark:before:border-gray-700 dark:before:bg-primaryLight sm:px-4 lg:before:border lg:before:border-gray-200 lg:before:bg-gray-100 lg:dark:before:bg-gray-800">
                                <span
                                    className="flex relative text-sm font-semibold text-white dark:text-white">Get Started </span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Navbar/>

            </header>

        </>
    );
};

export default Index;