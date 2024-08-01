import React from "react";
import Landing from "@/app/(shops)/_components/landing/landing";
import FeaturesAndProducts from "@/app/(shops)/_components/featureAndProduct/featureAndProduct";
import ShopProductSection from "@/app/(shops)/_components/shopProductSection/productSection";
import ProductSection from "@/app/(root)/_components/productSection/products";
import ShopOffer from "@/app/(shops)/_components/shopOffer/shopOffer";
import ArrivalsSection from "@/app/(shops)/_components/shopProductSection/arrivalsSection";

export default function Shop() {
    return (
        <>
            {/*<Landing />*/}
            <FeaturesAndProducts />
            {/*<ShopProductSection />*/}
            <ArrivalsSection />
            <div className="container-x mx-auto">
            <ProductSection />

            </div>
            <ShopOffer />
        </>
    );
}
