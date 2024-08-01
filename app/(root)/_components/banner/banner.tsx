import React from 'react';
import Image from "next/image";
import {images} from "@/shared/constants/image";

const Banner = () => {
    return (
        <section className="mb-10 dark:bg-dark">
        <div className="container mx-auto px-6">
            <div className="h-64 rounded-md overflow-hidden bg-cover bg-center backgroundHeader"
                 >
                <div className="flex items-center h-full space-x-[10rem]">
                    <div className="px-10 max-w-xl">
                        <h2 className="text-3xl text-primary font-semibold">Explore, shop, repeat again.</h2>
                        <p className="mt-2 text-primary">Explore the Shua Mall. Shop Online for Fashion, Electronics,
                            Home Decor, Toys, and More.</p>
                        <a href={'/products'}>
                        <button
                            className="flex items-center mt-4 px-4 py-2 bg-primary text-white text-sm font-bold rounded-full hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                            Shop Now

                        </button>
                    </a>
                    </div>
                    <div className="hidden md:block lg:block w-full h-full">
                        <Image src={images.electronics}
                               width={400}
                                 height={400}
                             className="fancy-border-radius shadow-2xl rotate-lg-6 w-full dark:shadow-black/20" alt="banner"/>
                    </div>
                </div>
            </div>
        </div>
            {/*    <div className="container mx-auto px-6">*/}
            {/*    <div className="h-64 rounded-md overflow-hidden bg-cover bg-center"*/}
            {/*         style={{backgroundImage: "url('https://images.unsplash.com/photo-1577655197620-704858b270ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1280&q=144')"}}>*/}
        {/*        <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">*/}
        {/*            <div className="px-10 max-w-xl">*/}
        {/*                <h2 className="text-2xl text-white font-semibold">Explore, shop, repeat again.</h2>*/}
        {/*                <p className="mt-2 text-gray-400">Explore the Shua Mall. Shop Online for Fashion, Electronics, Home Decor, Toys, and More.</p>*/}
        {/*                <button*/}
        {/*                    className="flex items-center mt-4 px-4 py-2 bg-white text-primary text-sm font-bold rounded-full hover:bg-blue-500 focus:outline-none focus:bg-blue-500">*/}
        {/*                    Shop Now*/}

        {/*                </button>*/}
        {/*            </div>*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*</div>*/}
        </section>

    );
};

export default Banner;
