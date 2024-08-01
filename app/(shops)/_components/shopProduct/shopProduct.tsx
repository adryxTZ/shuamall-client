"use client"

import React, {useEffect} from 'react';

import {ShopProductCard} from "@/app/(shops)/_components";
import useShopsStore from "@/app/store/shopsStore";


const ShopProducts: React.FC = () => {
    const { shops, loading, fetchShops } = useShopsStore();

    useEffect(() => {
        if (shops.length === 0) {
            fetchShops();
        }
    }, [shops, fetchShops]);

    return (
        <section className=" dark:bg-dark">

            <div className="container mx-auto">
                <p className="mb-3">We have <span className="text-green-500">{shops.length}</span> Shops</p>
                <div className=" flex flex-wrap -mx-4">

                    {/*{loading? (*/}
                    {/*    Array.from({ length: 4 }).map((_, index) => (*/}
                    {/*        <SkeletonCard key={index} />*/}
                    {/*    ))*/}
                    {/*):*/}
                    {/*    <>*/}
                    {/*        {shops?.map((shop) => (*/}
                    {/*            <ShopProductCard key={shop.id} shop={shop} />*/}
                    {/*        ))}*/}
                    {/*    </>*/}
                    {/*}*/}

                    {loading ? (
                        Array.from({ length: 4 }).map((_, index) => (
                            <div key={index} className="w-full px-4 md:w-1/2 lg:w-1/3 xl:w-1/4 mb-6">
                                <div className="animate-pulse bg-gray-300 h-60 rounded-md"></div>
                            </div>
                        ))
                    ) : (
                        shops.map((shop) => (
                            <ShopProductCard key={shop.id} shop={shop} />
                        ))
                    )}




                </div>
            </div>
        </section>
    );
};

export default ShopProducts;
