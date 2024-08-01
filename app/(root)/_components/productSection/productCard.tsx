import React from 'react';
import Image from "next/image";
import {images} from "@/shared/constants/image";
import {Products} from "@/types";
import {truncateText} from "@/utils/truncateText";



interface ProductProps {
    product: Products;
}
const ProductCard: React.FC<ProductProps> = ({ product }) => {
    const defaultImage = '/assets/img/products/card.jpeg';

    // Ensure the URL is absolute by adding the protocol if it's missing
    const getValidImageUrl = (url: string) => {
        if (url.startsWith('http://') || url.startsWith('https://')) {
            return url;
        }
        return `https://${url}`;
    };

    const imageUrl = product.product_thumbnails.map((thumbnail) => thumbnail.product_photo)[0] ? getValidImageUrl(product.product_thumbnails.map((thumbnail) => thumbnail.product_photo)[0]) : defaultImage;
    return (
        <div className="w-full px-4 md:w-1/2 lg:w-1/3 xl:w-1/4">
            <div className="mb-10">
                <a href={`/products/${product.product_uuid}`}>

                    <div className="mb-5 overflow-hidden rounded-[5px]">
                        <Image
                            // src={images.car}
                            src={imageUrl}
                            width={300}
                            height={300}
                            alt="Recent Products"
                            className="w-full h-[250px]"
                        />
                    </div>
                </a>
                    <div className="flex-wrap justify-between xs:flex">
                        <div className="mb-3 xs:mb-0">
                            <h3>
                                <a
                                    href="#"
                                    className="capitalize inline-block mb-1 text-lg font-semibold transition hover:text-primary text-dark dark:text-white 2xl:text-xl"
                                >
                                    {product.product_title}

                                </a>
                            </h3>
                            <p className="text-base text-body-color dark:text-dark-6">
                                {truncateText(product.product_description, 10)}


                            </p>
                        </div>

                    </div>
                    <div>
                        <p className="text-base mt-2  font-bold text-primary dark:text-white">TZS 7,000,000</p>
                    </div>
            </div>
        </div>
);
};

export default ProductCard;
