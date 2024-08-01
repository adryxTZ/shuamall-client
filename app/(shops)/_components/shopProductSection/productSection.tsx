"use client"

import React, {useEffect} from 'react';
import useShopProductsStore from "@/app/store/shopProductsStore";
import {Products} from "@/types";
import ProductShopCard from "@/app/(shops)/(routes)/[shopId]/_components/productShop";

interface shopProductProps {
    shopId: number;
}
const ShopProductSection: React.FC<shopProductProps> = ({shopId}) => {
    const { shopProducts, fetchShopProducts, loading } = useShopProductsStore();
    useEffect(() => {
        if (shopProducts.length === 0) {
            fetchShopProducts(shopId);
        }
    }, [shopProducts, fetchShopProducts]);



    return (
        <div className="py-8  mb-[60px]">
            <div className="container-x mx-auto">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">Featured Products</h2>
                    <a href="#" className="text-sm text-gray-600 hover:text-gray-800">View More &rarr;</a>
                </div>
                <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-[30px] gap-5">
                    {/*<div className="bg-blue-100 p-6 rounded-lg">*/}
                    {/*    <h3 className="text-lg font-bold mb-4">Shop by Category</h3>*/}
                    {/*    <ul className="text-gray-600 mb-4">*/}
                    {/*        <li>Guitars</li>*/}
                    {/*        <li>Keyboards</li>*/}
                    {/*        <li>Drums</li>*/}
                    {/*        <li>Trumpets</li>*/}
                    {/*    </ul>*/}
                    {/*    <a href="#" className="text-sm text-blue-600 hover:underline">Shop Now &rarr;</a>*/}
                    {/*    <div className="mt-4">*/}
                    {/*        <Image src={images.music} alt="Product" className="w-full h-auto" />*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    {/* Product 1 */}
                    {shopProducts.slice(0, 8).map((product: Products) => (
                        <ProductShopCard key={product.product_uuid} product={product} />
                    ))}

                    {/*<div className="bg-white p-6 rounded-lg shadow">*/}
                    {/*    <Image src={images.music} alt="Controller" className="w-full h-auto mb-4" />*/}
                    {/*    <h4 className="text-md font-semibold mb-2">Xoggle aute et pariatur adipisicing nostrud et...</h4>*/}
                    {/*    <div className="flex items-center mb-2">*/}
                    {/*        <span className="text-yellow-500 mr-1">&#9733;&#9733;&#9733;</span>*/}
                    {/*        <span className="text-gray-400">&#9734;&#9734;</span>*/}
                    {/*    </div>*/}
                    {/*    <div className="flex justify-between items-center">*/}
                    {/*        <span className="line-through text-gray-500">$27.27</span>*/}
                    {/*        <span className="text-red-500">$18.73</span>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className="bg-white p-6 rounded-lg shadow">*/}
                    {/*    <Image src={images.music} alt="Controller" className="w-full h-auto mb-4" />*/}
                    {/*    <h4 className="text-md font-semibold mb-2">Xoggle aute et pariatur adipisicing nostrud et...</h4>*/}
                    {/*    <div className="flex items-center mb-2">*/}
                    {/*        <span className="text-yellow-500 mr-1">&#9733;&#9733;&#9733;</span>*/}
                    {/*        <span className="text-gray-400">&#9734;&#9734;</span>*/}
                    {/*    </div>*/}
                    {/*    <div className="flex justify-between items-center">*/}
                    {/*        <span className="line-through text-gray-500">$27.27</span>*/}
                    {/*        <span className="text-red-500">$18.73</span>*/}
                    {/*    </div>*/}
                    {/*</div>*/}


                </div>
            </div>
        </div>
    );
};

export default ShopProductSection;
