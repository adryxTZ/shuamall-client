import React from "react";
import ShopSideBar from "@/app/(shops)/(routes)/shop/all-products/_components/sideBar/sideBar";
import AllShopProducts from "@/app/(shops)/(routes)/shop/all-products/_components/shopAllProducts/AllShopProducts";


export default function AllProducts() {
    return (
        <>
            <div className="w-full  pt-[30px] pb-[60px]">
                <div className="products-page-wrapper w-full">
                    <div className="container-x mx-auto">
                        <div className="w-full lg:flex lg:space-x-[30px]">
                            <ShopSideBar/>
                            <div className="flex-1">
                                <div
                                    className="products-sorting w-full bg-white dark:bg-dark md:h-[70px] flex md:flex-row flex-col md:space-y-0 space-y-5 md:justify-between md:items-center p-[30px] mb-[40px]">
                                    <div>
                                        <p className="font-400 text-[13px]"><span
                                            className="text-qgray"> Showing</span> 1–16 of
                                            66 results</p>
                                    </div>
                                    <div className="flex space-x-3 items-center"><span className="font-400 text-[13px]">Sort
                                            by:</span>
                                        <div className="flex space-x-3 items-center border-b border-b-qgray"><span
                                            className="font-400 text-[13px] text-qgray">Default</span><span><svg
                                            width="10" height="6" viewBox="0 0 10 6" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 1L5 5L9 1" stroke="#9A9A9A"></path>
                                                </svg></span></div>
                                    </div>
                                    <button type="button"
                                            className="w-10 lg:hidden h-10 rounded flex justify-center items-center border border-qyellow text-qyellow">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z">
                                            </path>
                                        </svg>
                                    </button>
                                </div>
                                <AllShopProducts />
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}