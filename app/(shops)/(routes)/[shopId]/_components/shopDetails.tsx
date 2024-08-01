'use client';

import React, { useEffect, useState } from 'react';
import useDomainShopsStore from "@/app/store/domainShopStore";
import { ShopDetail } from '@/types';
import useShopDetailsStore from "@/app/store/shopDetailsStore";
import Landing from "@/app/(shops)/_components/landing/landing";
import FeaturesAndProducts from "@/app/(shops)/_components/featureAndProduct/featureAndProduct";
import ShopProductSection from "@/app/(shops)/_components/shopProductSection/productSection";
import ArrivalsSection from "@/app/(shops)/_components/shopProductSection/arrivalsSection";
import ShopHeader from "@/app/(shops)/_components/shopHeader/shopHeader";
import { Footer } from "@/shared";
import { ClipLoader } from "react-spinners";

interface ShopDetailsProps {
    shopId: number;
}

const ShopDetails = ({ shopId }: ShopDetailsProps) => {
    const [shop, setShop] = useState<ShopDetail["data"]["shop"] | null>(null);
    const [loadingShop, setLoadingShop] = useState(true);
    const fetchShops = useDomainShopsStore(state => state.fetchShops);
    const getShopByName = useDomainShopsStore(state => state.getShopByName);
    const { shopDetail, loading, error, fetchShopDetails } = useShopDetailsStore();

    useEffect(() => {
        const loadShop = async () => {
            setLoadingShop(true);
            console.log("Fetching shops...");
            await fetchShops();
            console.log("Shops fetched");

            const foundShop = getShopByName(shopId.toString());
            console.log(`Shop ID: ${shopId}, Found Shop: `, foundShop);

            if (foundShop) {
                setShop(foundShop);
                await fetchShopDetails(foundShop.id);
            }
            setLoadingShop(false);
        };

        loadShop();
    }, [shopId, fetchShops, getShopByName, fetchShopDetails]);

    if (loadingShop || loading) {
        return (
            <div className="w-full flex flex-col justify-center items-center py-[25rem] h-screen">
                <ClipLoader color="#293c2f" speedMultiplier={1} loading={true} />
            </div>
        );
    }

    if (error) {
        console.error("Error fetching shop details:", error);
        return <div>Error: {error}</div>;
    }

    if (!shop) {
        console.warn("Shop not found with shopId:", shopId);
        return <div>Shop not found.</div>;
    }

    return (
        <>
            <ShopHeader shopName={shopDetail?.data?.shop.shop_name ?? 'Loading..'} shopLogo={shopDetail?.data?.shop.shop_logo ?? ''} />
            <Landing shopId={shop.id} />
            <FeaturesAndProducts />
            <ShopProductSection shopId={shopId} />
            <ArrivalsSection />
            <Footer />
        </>
    );
};

export default ShopDetails;


