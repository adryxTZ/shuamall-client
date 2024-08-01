import React from 'react';
import ShopProductCard from "@/app/(shops)/(routes)/shop/all-products/_components/shopAllProducts/poductCard";

const AllShopProducts = () => {
    return (
        <div
            className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-[30px] gap-5 mb-[40px]">
            <ShopProductCard />
            <ShopProductCard />
            <ShopProductCard />
            <ShopProductCard />
            <ShopProductCard />
            <ShopProductCard />
        </div>
    );
};

export default AllShopProducts;