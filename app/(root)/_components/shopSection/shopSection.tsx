"use client"

import React, {useEffect, useState} from 'react';
import {ShopCard} from "@/app/(root)/_components";
import useShopsStore from "@/app/store/shopsStore";


const ShopSection: React.FC = () => {
    const { shops, loading, fetchShops } = useShopsStore();

    useEffect(() => {
        if (shops.length === 0) {
            fetchShops();
        }
    }, [shops, fetchShops]);

    return (
        <section className="pt-[40px] bg-white dark:bg-dark">
            <div className="container mx-auto">
                <div className="w-full lg:w-2/3">
                    <div className="max-w-[510px] mb-10">
                        <h2
                            className="text-dark dark:text-white text-2xl font-bold  md:text-2xl lg:text-2xl "
                        >
                            Top Featured Shops
                        </h2>
                        <p className="text-base text-body-color dark:text-dark-6">
                            Top most popular shops based on sales and reviews.
                        </p>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-4">

                    {loading ? (
                        Array.from({ length: 4 }).map((_, index) => (
                            <div key={index} className="w-full px-4 md:w-1/2 lg:w-1/3 xl:w-1/4 mb-6">
                                <div className="animate-pulse bg-gray-300 h-60 rounded-md"></div>
                            </div>
                        ))
                    ) : (
                        shops.map((shop) => (
                            <ShopCard  key={shop.id} shop={shop} />
                        ))
                    )}

                </div>
            </div>
        </section>
    );
};

export default ShopSection;
