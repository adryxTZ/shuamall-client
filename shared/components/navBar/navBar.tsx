"use client"

import React from 'react';
import {MainLogo, ModeToggle} from "@/shared";

const Navbar = () => {
    return (
        <div>
            <div className="border-b border-stroke dark:border-dark-3 lg:py-2">
                <div className="container mx-auto">
                    <div
                        className="relative flex items-center justify-center -mx-4 sm:justify-between"
                    >
                        <div className="w-48 max-w-full px-4 sm:w-60 lg:w-48">
                            <MainLogo/>
                            {/*<a href="#" className="block w-full py-5 lg:py-3">*/}
                            {/*    <img*/}
                            {/*        src="src/assets/images/logo/logo-primary.svg"*/}
                            {/*        alt="logo"*/}
                            {/*        className="w-full dark:hidden"*/}
                            {/*    />*/}
                            {/*    <img*/}
                            {/*        src="src/assets/images/logo/logo-white.svg"*/}
                            {/*        alt="logo"*/}
                            {/*        className="hidden w-full dark:block"*/}
                            {/*    />*/}
                            {/*</a>*/}
                        </div>
                        <div
                            className="items-center justify-end hidden w-full px-4 sm:flex lg:justify-between"
                        >
                            <div className="hidden w-full lg:flex">
                                <form
                                    className="relative flex items-center w-full border rounded-md border-stroke dark:border-dark-3 bg-gray-2 dark:bg-dark-2"
                                >
                                    <div className="relative border-r border-stroke dark:border-dark-3">
                                        <select
                                            className="appearance-none bg-transparent pr-10 pl-[22px] py-[14px] text-base font-medium text-dark dark:text-white outline-none"
                                        >
                                            <option className="dark:bg-dark-2">All categories</option>
                                            <option className="dark:bg-dark-2">Best matches</option>
                                            <option className="dark:bg-dark-2">Newest</option>
                                        </select>
                                        <span
                                            className="absolute -translate-y-1/2 right-4 top-1/2 text-dark dark:text-white"
                                        >
                  <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-current"
                  >
                    <path
                        d="M7.00001 9.975C6.86876 9.975 6.75938 9.93125 6.65001 9.84375L1.61876 4.9C1.42188 4.70312 1.42188 4.39687 1.61876 4.2C1.81563 4.00312 2.12188 4.00312 2.31876 4.2L7.00001 8.77187L11.6813 4.15625C11.8781 3.95937 12.1844 3.95937 12.3813 4.15625C12.5781 4.35312 12.5781 4.65937 12.3813 4.85625L7.35001 9.8C7.24063 9.90937 7.13126 9.975 7.00001 9.975Z"
                    />
                  </svg>
                </span>
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="I'm shopping for..."
                                        className="w-full bg-transparent py-3 pl-6 pr-[58px] text-base text-body-color dark:text-dark-6 outline-none"
                                    />
                                    <button
                                        className="absolute top-0 right-0 flex h-full w-[52px] items-center justify-center rounded-tr-md rounded-br-md border border-primary bg-primary text-white"
                                    >
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="fill-current"
                                        >
                                            <path
                                                d="M23.025 20.8875L16.8375 15.8625C19.3875 12.375 19.125 7.3875 15.9375 4.2375C14.25 2.55 12 1.6125 9.6 1.6125C7.2 1.6125 4.95 2.55 3.2625 4.2375C-0.225 7.725 -0.225 13.425 3.2625 16.9125C4.95 18.6 7.2 19.5375 9.6 19.5375C11.8875 19.5375 14.025 18.675 15.7125 17.1375L21.975 22.2C22.125 22.3125 22.3125 22.3875 22.5 22.3875C22.7625 22.3875 22.9875 22.275 23.1375 22.0875C23.4375 21.7125 23.4 21.1875 23.025 20.8875ZM9.6 17.85C7.65 17.85 5.85 17.1 4.4625 15.7125C1.6125 12.8625 1.6125 8.25 4.4625 5.4375C5.85 4.05 7.65 3.3 9.6 3.3C11.55 3.3 13.35 4.05 14.7375 5.4375C17.5875 8.2875 17.5875 12.9 14.7375 15.7125C13.3875 17.1 11.55 17.85 9.6 17.85Z"
                                            />
                                        </svg>
                                    </button>
                                </form>
                            </div>
                            <div className="flex items-center justify-end w-full space-x-4">
                                <ModeToggle/>

                                <div>
                                    <button
                                        className="relative flex h-[42px] w-[42px] items-center justify-center rounded-full border-[.5px] border-stroke dark:border-dark-3 bg-gray-2 dark:bg-dark-2 text-dark dark:text-white"
                                    >
                                        <svg
                                            width="22"
                                            height="22"
                                            viewBox="0 0 22 22"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="fill-current"
                                        >
                                            <path
                                                d="M11 9.62499C8.42188 9.62499 6.35938 7.59687 6.35938 5.12187C6.35938 2.64687 8.42188 0.618744 11 0.618744C13.5781 0.618744 15.6406 2.64687 15.6406 5.12187C15.6406 7.59687 13.5781 9.62499 11 9.62499ZM11 2.16562C9.28125 2.16562 7.90625 3.50624 7.90625 5.12187C7.90625 6.73749 9.28125 8.07812 11 8.07812C12.7188 8.07812 14.0938 6.73749 14.0938 5.12187C14.0938 3.50624 12.7188 2.16562 11 2.16562Z"
                                            />
                                            <path
                                                d="M18.2531 21.4156C17.8406 21.4156 17.4625 21.0719 17.4625 20.625V19.6281C17.4625 16.0531 14.575 13.1656 11 13.1656C7.42499 13.1656 4.53749 16.0531 4.53749 19.6281V20.625C4.53749 21.0375 4.19374 21.4156 3.74686 21.4156C3.29999 21.4156 2.95624 21.0719 2.95624 20.625V19.6281C2.95624 15.1937 6.56561 11.6187 10.9656 11.6187C15.3656 11.6187 18.975 15.2281 18.975 19.6281V20.625C19.0094 21.0375 18.6656 21.4156 18.2531 21.4156Z"
                                            />
                                        </svg>
                                    </button>
                                </div>


                        <div className="relative z-20">
                            <div className="flex max-w-[200px] justify-end">
                                <button
                                className="relative flex h-[42px] w-[42px] items-center justify-center rounded-full border-[.5px] border-stroke dark:border-dark-3 bg-gray-2 dark:bg-dark-2 text-dark dark:text-white"
                                >
                                <svg
                                    width="22"
                                    height="22"
                                    viewBox="0 0 22 22"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="fill-current"
                                >
                                    <path
                                        d="M19.3875 6.7375H18.5625L16.3281 1.1C16.1562 0.687499 15.7094 0.515624 15.3312 0.653124C14.9187 0.824999 14.7469 1.27187 14.8844 1.65L16.8781 6.7375H5.12187L7.11562 1.68437C7.28749 1.27187 7.08124 0.824999 6.66874 0.687499C6.29062 0.515624 5.84374 0.687499 5.67187 1.1L3.43749 6.7375H2.61249C1.99374 6.7375 1.47812 7.25312 1.47812 7.87187V10.6562C1.47812 11.2406 1.89062 11.6875 2.47499 11.7562L3.33437 19.25C3.47187 20.4875 4.50312 21.4156 5.74062 21.4156H16.2594C17.4969 21.4156 18.5281 20.4875 18.6656 19.25L19.525 11.7562C20.075 11.6875 20.5219 11.2062 20.5219 10.6562V7.8375C20.5219 7.21875 20.0062 6.7375 19.3875 6.7375ZM3.02499 8.28437H18.975V10.2437H3.02499V8.28437ZM16.2594 19.8687H5.74062C5.29374 19.8687 4.91562 19.525 4.84687 19.0781L4.02187 11.7906H17.9781L17.1531 19.0781C17.0844 19.525 16.7062 19.8687 16.2594 19.8687Z"
                                    />
                                    <path
                                        d="M7.49375 13.3375C7.08125 13.3375 6.70312 13.6812 6.70312 14.1281V16.7062C6.70312 17.1187 7.04687 17.4969 7.49375 17.4969C7.94062 17.4969 8.28438 17.1531 8.28438 16.7062V14.0937C8.28438 13.6812 7.94062 13.3375 7.49375 13.3375Z"
                                    />
                                    <path
                                        d="M14.5062 13.3375C14.0937 13.3375 13.7156 13.6812 13.7156 14.1281V16.7062C13.7156 17.1187 14.0594 17.4969 14.5062 17.4969C14.9531 17.4969 15.2969 17.1531 15.2969 16.7062V14.0937C15.2625 13.6812 14.9187 13.3375 14.5062 13.3375Z"
                                    />
                                </svg>

                                <span
                                    className="absolute -top-1 -right-1 h-[18px] w-[18px] rounded-full bg-primary leading-[18px] text-[10px] font-semibold text-white"
                                >
                    1
                  </span>
                            </button>
                        </div>
                            <div>

                            </div>
                    {/*    <div*/}
                    {/*    className="absolute top-full right-0 mt-5 w-[330px]"*/}
                    {/*    >*/}
                    {/*    <div*/}
                    {/*        className="p-8 overflow-hidden bg-white rounded-lg dark:bg-dark-2 shadow-1 dark:shadow-box-dark"*/}
                    {/*    >*/}
                    {/*        <div*/}
                    {/*            className="pb-3 mb-5 border-b border-stroke dark:border-dark-3"*/}
                    {/*        >*/}
                    {/*            <div className="flex items-center justify-between pb-4 -mx-1">*/}
                    {/*                <div className="flex items-center px-1">*/}
                    {/*                    <div*/}
                    {/*                        className="mr-3 h-10 w-full max-w-[40px] overflow-hidden rounded"*/}
                    {/*                    >*/}
                    {/*                        <img*/}
                    {/*                            src="src/assets/ecom-images/checkout/checkout-02/image-02.jpg"*/}
                    {/*                            alt="product image"*/}
                    {/*                            className="w-full"*/}
                    {/*                        />*/}
                    {/*                    </div>*/}
                    {/*                    <div>*/}
                    {/*                        <a*/}
                    {/*                            href="#"*/}
                    {/*                            className="text-sm font-medium text-dark dark:text-white hover:text-primary"*/}
                    {/*                        >*/}
                    {/*                            Circular Sienna*/}
                    {/*                        </a>*/}
                    {/*                        <p*/}
                    {/*                            className="text-xs font-medium truncate text-body-color dark:text-dark-6"*/}
                    {/*                        >*/}
                    {/*                            Awesome white shirt*/}
                    {/*                        </p>*/}
                    {/*                    </div>*/}
                    {/*                </div>*/}
                    {/*                <div className="px-1">*/}
                    {/*                    <p*/}
                    {/*                        className="text-base font-semibold text-dark dark:text-white"*/}
                    {/*                    >*/}
                    {/*                        $36.00*/}
                    {/*                    </p>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*            <div className="flex items-center justify-between py-4 -mx-1">*/}
                    {/*                <div className="flex items-center px-1">*/}
                    {/*                    <div*/}
                    {/*                        className="mr-3 h-10 w-full max-w-[40px] overflow-hidden rounded"*/}
                    {/*                    >*/}
                    {/*                        <img*/}
                    {/*                            src="src/assets/ecom-images/checkout/checkout-02/image-03.jpg"*/}
                    {/*                            alt="product image"*/}
                    {/*                            className="w-full"*/}
                    {/*                        />*/}
                    {/*                    </div>*/}
                    {/*                    <div>*/}
                    {/*                        <a*/}
                    {/*                            href="#"*/}
                    {/*                            className="text-sm font-medium text-dark dark:text-white hover:text-primary"*/}
                    {/*                        >*/}
                    {/*                            Black T-shirt*/}
                    {/*                        </a>*/}
                    {/*                        <p*/}
                    {/*                            className="text-xs font-medium truncate text-body-color dark:text-dark-6"*/}
                    {/*                        >*/}
                    {/*                            It's a nice black t-shirt*/}
                    {/*                        </p>*/}
                    {/*                    </div>*/}
                    {/*                </div>*/}
                    {/*                <div className="px-1">*/}
                    {/*                    <p*/}
                    {/*                        className="text-base font-semibold text-dark dark:text-white"*/}
                    {/*                    >*/}
                    {/*                        $36.00*/}
                    {/*                    </p>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <div*/}
                    {/*            className="pb-5 -mx-1 border-b border-stroke dark:border-dark-3"*/}
                    {/*        >*/}
                    {/*            <div className="flex items-center justify-between mb-3">*/}
                    {/*                <div className="px-1">*/}
                    {/*                    <p className="text-base text-dark dark:text-white">*/}
                    {/*                        Subtotal*/}
                    {/*                    </p>*/}
                    {/*                </div>*/}
                    {/*                <div className="px-1">*/}
                    {/*                    <p*/}
                    {/*                        className="text-base font-medium text-dark dark:text-white"*/}
                    {/*                    >*/}
                    {/*                        $108*/}
                    {/*                    </p>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*            <div className="flex items-center justify-between mb-3">*/}
                    {/*                <div className="px-1">*/}
                    {/*                    <p className="text-base text-dark dark:text-white">*/}
                    {/*                        Shipping Cost (+)*/}
                    {/*                    </p>*/}
                    {/*                </div>*/}
                    {/*                <div className="px-1">*/}
                    {/*                    <p*/}
                    {/*                        className="text-base font-medium text-dark dark:text-white"*/}
                    {/*                    >*/}
                    {/*                        $10.85*/}
                    {/*                    </p>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*            <div className="flex items-center justify-between">*/}
                    {/*                <div className="px-1">*/}
                    {/*                    <p className="text-base text-dark dark:text-white">*/}
                    {/*                        Discount (-)*/}
                    {/*                    </p>*/}
                    {/*                </div>*/}
                    {/*                <div className="px-1">*/}
                    {/*                    <p*/}
                    {/*                        className="text-base font-medium text-dark dark:text-white"*/}
                    {/*                    >*/}
                    {/*                        $9.00*/}
                    {/*                    </p>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*        <div*/}
                    {/*            className="flex items-center justify-between pt-5 pb-6 -mx-1"*/}
                    {/*        >*/}
                    {/*            <div className="px-1">*/}
                    {/*                <p className="text-base text-dark dark:text-white">*/}
                    {/*                    Total Payable*/}
                    {/*                </p>*/}
                    {/*            </div>*/}
                    {/*            <div className="px-1">*/}
                    {/*                <p*/}
                    {/*                    className="text-base font-medium text-dark dark:text-white"*/}
                    {/*                >*/}
                    {/*                    $88.15*/}
                    {/*                </p>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}

                    {/*        <div>*/}
                    {/*            <button*/}
                    {/*                className="flex w-full items-center justify-center rounded-md bg-primary py-[13px] px-10 text-center text-base font-medium text-white hover:bg-blue-dark"*/}
                    {/*            >*/}
                    {/*                Place Order*/}
                    {/*            </button>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                        </div>
            </div>
        </div>
</div>
</div>
</div>
        </div>
    );
};

export default Navbar;
