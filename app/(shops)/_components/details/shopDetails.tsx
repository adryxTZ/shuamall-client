import React from 'react';
import {Clock9, MapPin} from "lucide-react";

const ShopDetails = () => {
    return (
        <div className="w-full max-w-screen-xl mx-auto px-5">
            <div>
                <div className="border-b border-offgreen-medium">
                    <div className="py-8">
                        <div className="flex gap-10 md:gap-5 flex-wrap items-center justify-around md:justify-between">
                            <div
                                className="items-center gap-2 md:gap-5 md:text-start flex md:flex-row ">
                                <MapPin size={40} color="#334d3a" />
                                <div className=""><span className="text-sm text-offgreen-dark">Location</span>
                                    <p className="mt-1 font-semibold leading-none">Kijitonyama, Bamaga</p>
                                </div>
                            </div>
                            <div
                                className="items-center gap-2 md:gap-5 md:text-start flex md:flex-row ">
                            <Clock9 size={40} color="#334d3a" />
                                <div className=""><span className="text-sm text-offgreen-dark">Opening & Closing time</span>
                                    <p className="mt-1 font-semibold leading-none">Monday - Sunday,
                                        10 am - 4 pm</p>
                                </div>
                            </div>
                            <div
                                className="items-center gap-2 md:gap-5 md:text-start flex md:flex-row ">
                            <Clock9 size={40} color="#334d3a" />
                                <div className=""><span className="text-sm text-offgreen-dark">Opening & Closing time</span>
                                    <p className="mt-1 font-semibold leading-none">Monday - Sunday,
                                        10 am - 4 pm</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ShopDetails;
