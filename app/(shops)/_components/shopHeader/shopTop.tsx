import React from 'react';
import {MainLogo, ModeToggle} from "@/shared";

const ShopTop = () => {
    return (
        <div>
            <div className="border-b border-stroke dark:border-dark-3">
                <div className="px-20 mx-auto">
                    <div
                        className="relative flex items-center justify-center -mx-4 sm:justify-between"
                    >
                        <div className="w-40 max-w-full px-4 sm:w-44 lg:w-40">
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

                            <div className="flex items-center justify-end w-full space-x-4">
                                {/*<ModeToggle/>*/}

                                <div className="become-seller-btn">
                                    <div className="black-btn w-[161px] h-[40px] flex justify-center items-center cursor-pointer">
                                        <div className="flex space-x-2 items-center">
                                            {/*<a href={"http://localhost:3000/register"} className="text-sm font-600">Become a Vendor</a>*/}
                                            <a href={"https://shuamall.com/register"} className="text-sm font-600">Become a Vendor</a>
                                            <span>
                                                <svg className="fill-current" width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect x="1.08984" width="6.94106" height="1.54246"
                                                          transform="rotate(45 1.08984 0)" fill="white"></rect>
                                                    <rect x="6" y="4.9082" width="6.94106" height="1.54246"
                                                          transform="rotate(135 6 4.9082)" fill="white"></rect>
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopTop;