"use client"

import React, {useEffect, useState} from 'react';
import {Products} from "@/types";
import {ShopProductCard} from "@/app/(root)/_components";
import useProductsStore from "@/app/store/productStore";

const AllShopProducts: React.FC = () => {
    const { products, loading, fetchProducts } = useProductsStore();

    useEffect(() => {
        if (products.length === 0) {
            fetchProducts();
        }
    }, [products, fetchProducts]);

    return (
        <div
            className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-[30px] gap-5 mb-[40px]">
            {loading ? (
                Array.from({ length: 6 }).map((_, index) => (
                    <div key={index} className="animate-pulse bg-gray-300 h-64 rounded-md"></div>
                ))
            ) : (
                products.map((product) => (
                    <ShopProductCard key={product.product_uuid} product={product} />
                ))
            )}

        </div>
    );
};

export default AllShopProducts;