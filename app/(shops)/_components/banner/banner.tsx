import React from 'react';
import Image from "next/image";
import {images} from "@/shared/constants/image";

const Banner = () => {
    return (
        <div className="text-center">
            <div className="mt-4 mb-4">
                <div className="container">
                    <div className="grid grid-cols-1">
                        <div className="col-span-1">
                            <nav aria-label="breadcrumb">
                                <ol className="flex flex-wrap items-center mb-0">
                                    <li className="breadcrumb-item"><a href="#!" className="text-green-500 text-sm">Home / </a></li>
                                    <li className="breadcrumb-item"><a href="#!" className="text-green-500 pl-2 text-sm"> Shops  / </a>
                                    </li>
                                    <li className="breadcrumb-item text-gray-400 pl-2 text-sm" aria-current="page"> Shop List
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full max-w-screen-xl mx-auto mt-8">
                <div className="">

                <div>
                    <div className="grid gap-3">

                        <div className="flex sm:flex-col md:flex-row md:items-center  gap-3 md:justify-between ">

                            <div className="hidden w-full md:block mb-8 bg-gray-100 lg:flex lg:justify-between rounded lg:shadow-lg ">
                                <div className="flex lg:align-self-center items-center text-left p-8">
                                    <div className="mb-3">
                                        <h1 className="mb-0 text-2xl font-black">Shops</h1>
                                        <p className="mb-0 text-gray-500">Whatever the occasion, we've got you
                                            covered.</p>
                                    </div>
                                </div>
                                <div className="py-4">
                                    <Image src={images.banner} alt=""
                                           className="w-full"/>
                                </div>
                            </div>


                            {/*<div className="flex  md:flex-row items-center flex-1 gap-6">*/}
                            {/*    <div className="w-24 h-24 bg-white rounded-2xl grid place-items-center">*/}
                            {/*        <Image alt="Logo"*/}
                            {/*               className=" rounded-2xl object-cover"*/}
                            {/*               src={images.music}*/}
                            {/*               width={100}*/}
                            {/*               height={400}*/}
                            {/*               decoding="async"*/}
                            {/*               data-nimg="1"*/}
                            {/*               loading="lazy"*/}
                            {/*        />*/}
                            {/*    </div>*/}
                            {/*    <div className="md:text-left">*/}
                            {/*        <h2 className="m-0 text-3xl font-bold tracking-tight">Joeh Music</h2>*/}
                            {/*        <div className="text-offgreen-dark text-lg mt-1">*/}
                            {/*            <span>Music Store</span>*/}
                            {/*            <span className="text-offgreen-dark"> | </span>*/}
                            {/*            <span>Music Instruments</span>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            {/*<div*/}
                            {/*    className="flex items-center flex-col md:first-letter:flex-row justify-between gap-px mr-2 md:flex-col md:items-end">*/}
                            {/*    <span className="text-lg font-medium">Contact Us</span>*/}
                            {/*    <p*/}
                            {/*        className="text-offgreen-dark flex ">*/}
                            {/*        <Phone size={16}/> +255755550037*/}
                            {/*    </p>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
