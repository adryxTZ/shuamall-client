import React, {FC} from 'react';
import Image from "next/image";
import {images} from "@/shared/constants/image";
import {Shops} from "@/types";

interface ShopProps {
    shop: Shops
}
const ShopCard: FC<ShopProps> = ({ shop }) => {
    const defaultImage = '/assets/img/shops/1.webp';

    // Ensure the URL is absolute by adding the protocol if it's missing
    const getValidImageUrl = (url: string) => {
        if (url.startsWith('http://') || url.startsWith('https://')) {
            return url;
        }
        return `https://${url}`;
    };

    const imageUrl = shop.shop_logo ? getValidImageUrl(shop.shop_logo) : defaultImage;

    return (
        <div className="w-full px-4 sm:w-1/2 lg:w-1/3 xl:w-1/4">
            <div className="mb-10">
                <div className="relative mb-5 overflow-hidden rounded-[5px]">
                    <Image
                        // src={images.music}
                        // src={shop.shop_logo || images.music}
                        src={imageUrl}
                        width={300}
                        height={230}
                        alt="shop logo"
                        className="w-full h-[200px]"
                    />
                </div>
                <div className="text-center">
                    <h3>
                        <a
                            href="#"
                            className="mb-[5px] capitalize block text-lg font-semibold text-dark dark:text-white hover:text-primary md:text-xl"
                        >
                            {shop.shop_name}

                        </a>
                    </h3>
                    <p className="mb-5 text-base font-medium text-dark dark:text-white">
                  {/*<span*/}
                  {/*    className="pr-2 line-through text-body-color dark:text-dark-6"*/}
                  {/*>*/}
                  {/*  $50.00*/}
                  {/*</span>*/}
                  {/*      <span>Kijitonyama, Bamaga</span>*/}
                  {/*      <span>{shop.physical_address}</span>*/}
                        <span className={"capitalize lowercase"}>{shop.location}, {shop.city}</span>
                    </p>
                    <a
                        href="#"
                        className="inline-flex items-center justify-center rounded-md border border-primary py-[9px] px-5 text-center text-base font-medium dark:text-white transition hover:bg-primary hover:text-white"
                    >
                        Shop Now
                    </a>
                </div>
            </div>
        </div>

    );
};

export default ShopCard;
