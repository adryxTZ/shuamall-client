import React, { FC } from 'react';
import Image from "next/image";
import Link from "next/link";
import { Shops } from "@/types";

interface ShopProps {
    shop: Shops;
}

const ShopProductCard: FC<ShopProps> = ({ shop }) => {
    const defaultImage = '/assets/img/shops/1.webp';

    const getValidImageUrl = (url: string) => {
        if (url.startsWith('http://') || url.startsWith('https://')) {
            return url;
        }
        return `https://${url}`;
    };

    const imageUrl = shop.shop_logo ? getValidImageUrl(shop.shop_logo) : defaultImage;

    // Replace spaces with hyphens in the shop name
    const formattedShopName = shop.shop_name.toLowerCase().replace(/\s+/g, '-');

    const isDevelopment = process.env.NODE_ENV === 'development';
    const baseURL = isDevelopment
        ? `http://${formattedShopName}.localhost:3001`
        : `https://${formattedShopName}.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`;

    return (
        <div className="w-full px-4 md:w-1/2 lg:w-1/3 xl:w-1/4">
            <div className="mb-10 flex flex-col p-6 card-product bg-white border rounded-lg group border-stroke dark:border-dark-3 dark:bg-dark-2">
                <div>
                    <Image src={imageUrl} width={100} height={100} alt={shop.shop_name} className="rounded-full icon-shape w-16 h-16" />
                </div>
                <div className="mt-4">
                    <h5 className="mb-1 capitalize">
                        <a href="#" className="text-inherit">{shop.shop_name}</a>
                    </h5>
                    <div className="text-sm text-gray-500 flex items-center">
                        <span>{shop.physical_address}</span>
                        <span className="mx-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" fill="#C1C7C6" className="bi bi-circle-fill align-middle" viewBox="0 0 16 16">
                                <circle cx="8" cy="8" r="8" />
                            </svg>
                        </span>
                        <span>Groceries</span>
                    </div>
                    <div className="py-3">
                        <ul className="list-none mb-0 text-sm text-gray-500">
                            <li className="underline">Location</li>
                            <li className="capitalize">{shop.location}, {shop.city}</li>
                        </ul>
                    </div>
                    <div>
                        <Link
                            href={baseURL}
                            className="inline-flex items-center justify-center rounded-full border border-primary py-2 px-5 text-center text-base dark:text-white transition hover:bg-primary hover:text-white"
                            target="_blank"
                        >
                            Visit Shop
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopProductCard;
