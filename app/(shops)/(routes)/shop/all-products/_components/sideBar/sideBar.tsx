import React from 'react';
import {images} from "@/shared/constants/image";
import Image from 'next/image'


const ShopSideBar = () => {
    return (
        <div className="lg:w-[270px] dark:bg-dark">
            <div
                className="filter-widget w-full fixed lg:relative left-0 top-0 h-screen z-10 lg:h-auto overflow-y-scroll lg:overflow-y-auto bg-white px-[30px] pt-[40px] mb-[30px]  hidden lg:block">
                <div className="filter-subject-item pb-10 border-b border-qgray-border">
                    <div className="subject-title mb-[30px]">
                        <h1 className="text-black text-base font-500">Product categories</h1>
                    </div>
                    <div className="filter-items">
                        <ul>
                            <li className="item flex justify-between items-center mb-5">
                                <div className="flex space-x-[14px] items-center">
                                    <div>
                                        <div><input id="mobileLaptop" type="checkbox"
                                                    name="mobileLaptop"/></div>
                                    </div>
                                    <div><label htmlFor="mobileLaptop"
                                                className="text-xs font-black font-400 capitalize">Mobile
                                        &amp; Laptops</label></div>
                                </div>
                                <div><span className="cursor-pointer"><svg width="10" height="10"
                                                                           viewBox="0 0 10 10" fill="none"
                                                                           xmlns="http://www.w3.org/2000/svg">
                                                                <rect y="4" width="10" height="2" fill="#C4C4C4"></rect>
                                                                <rect x="6" width="10" height="2"
                                                                      transform="rotate(90 6 0)" fill="#C4C4C4"></rect>
                                                            </svg></span></div>
                            </li>
                            <li className="item flex justify-between items-center mb-5">
                                <div className="flex space-x-[14px] items-center">
                                    <div>
                                        <div><input id="gaming" type="checkbox" name="gaming"/>
                                        </div>
                                    </div>
                                    <div><label htmlFor="gaming"
                                                className="text-xs font-black font-400 capitalize">Gaming
                                        Entertainment</label></div>
                                </div>
                                <div><span className="cursor-pointer"><svg width="10" height="10"
                                                                           viewBox="0 0 10 10" fill="none"
                                                                           xmlns="http://www.w3.org/2000/svg">
                                                                <rect y="4" width="10" height="2" fill="#C4C4C4"></rect>
                                                                <rect x="6" width="10" height="2"
                                                                      transform="rotate(90 6 0)" fill="#C4C4C4"></rect>
                                                            </svg></span></div>
                            </li>
                            <li className="item flex justify-between items-center mb-5">
                                <div className="flex space-x-[14px] items-center">
                                    <div>
                                        <div><input id="imageVideo" type="checkbox"
                                                    name="imageVideo"/></div>
                                    </div>
                                    <div><label htmlFor="imageVideo"
                                                className="text-xs font-black font-400 capitalize">Image
                                        &amp; Video</label></div>
                                </div>
                                <div><span className="cursor-pointer"><svg width="10" height="10"
                                                                           viewBox="0 0 10 10" fill="none"
                                                                           xmlns="http://www.w3.org/2000/svg">
                                                                <rect y="4" width="10" height="2" fill="#C4C4C4"></rect>
                                                                <rect x="6" width="10" height="2"
                                                                      transform="rotate(90 6 0)" fill="#C4C4C4"></rect>
                                                            </svg></span></div>
                            </li>
                            <li className="item flex justify-between items-center mb-5">
                                <div className="flex space-x-[14px] items-center">
                                    <div>
                                        <div><input id="vehicles" type="checkbox" name="vehicles"/>
                                        </div>
                                    </div>
                                    <div><label htmlFor="vehicles"
                                                className="text-xs font-black font-400 capitalize">Vehicles</label>
                                    </div>
                                </div>
                                <div><span className="cursor-pointer"><svg width="10" height="10"
                                                                           viewBox="0 0 10 10" fill="none"
                                                                           xmlns="http://www.w3.org/2000/svg">
                                                                <rect y="4" width="10" height="2" fill="#C4C4C4"></rect>
                                                                <rect x="6" width="10" height="2"
                                                                      transform="rotate(90 6 0)" fill="#C4C4C4"></rect>
                                                            </svg></span></div>
                            </li>
                            <li className="item flex justify-between items-center mb-5">
                                <div className="flex space-x-[14px] items-center">
                                    <div>
                                        <div><input id="furnitures" type="checkbox"
                                                    name="furnitures"/></div>
                                    </div>
                                    <div><label htmlFor="furnitures"
                                                className="text-xs font-black font-400 capitalize">Furnitures</label>
                                    </div>
                                </div>
                                <div><span className="cursor-pointer"><svg width="10" height="10"
                                                                           viewBox="0 0 10 10" fill="none"
                                                                           xmlns="http://www.w3.org/2000/svg">
                                                                <rect y="4" width="10" height="2" fill="#C4C4C4"></rect>
                                                                <rect x="6" width="10" height="2"
                                                                      transform="rotate(90 6 0)" fill="#C4C4C4"></rect>
                                                            </svg></span></div>
                            </li>
                            <li className="item flex justify-between items-center mb-5">
                                <div className="flex space-x-[14px] items-center">
                                    <div>
                                        <div><input id="sport" type="checkbox" name="sport"/></div>
                                    </div>
                                    <div><label htmlFor="sport"
                                                className="text-xs font-black font-400 capitalize">Sport</label>
                                    </div>
                                </div>
                                <div><span className="cursor-pointer"><svg width="10" height="10"
                                                                           viewBox="0 0 10 10" fill="none"
                                                                           xmlns="http://www.w3.org/2000/svg">
                                                                <rect y="4" width="10" height="2" fill="#C4C4C4"></rect>
                                                                <rect x="6" width="10" height="2"
                                                                      transform="rotate(90 6 0)" fill="#C4C4C4"></rect>
                                                            </svg></span></div>
                            </li>
                            <li className="item flex justify-between items-center mb-5">
                                <div className="flex space-x-[14px] items-center">
                                    <div>
                                        <div><input id="foodDrinks" type="checkbox"
                                                    name="foodDrinks"/></div>
                                    </div>
                                    <div><label htmlFor="foodDrinks"
                                                className="text-xs font-black font-400 capitalize">Food
                                        &amp; Drinks</label></div>
                                </div>
                                <div><span className="cursor-pointer"><svg width="10" height="10"
                                                                           viewBox="0 0 10 10" fill="none"
                                                                           xmlns="http://www.w3.org/2000/svg">
                                                                <rect y="4" width="10" height="2" fill="#C4C4C4"></rect>
                                                                <rect x="6" width="10" height="2"
                                                                      transform="rotate(90 6 0)" fill="#C4C4C4"></rect>
                                                            </svg></span></div>
                            </li>
                            <li className="item flex justify-between items-center mb-5">
                                <div className="flex space-x-[14px] items-center">
                                    <div>
                                        <div><input id="fashion" type="checkbox" name="fashion"/>
                                        </div>
                                    </div>
                                    <div><label htmlFor="fashion"
                                                className="text-xs font-black font-400 capitalize">Fashion
                                        Accessories</label></div>
                                </div>
                                <div><span className="cursor-pointer"><svg width="10" height="10"
                                                                           viewBox="0 0 10 10" fill="none"
                                                                           xmlns="http://www.w3.org/2000/svg">
                                                                <rect y="4" width="10" height="2" fill="#C4C4C4"></rect>
                                                                <rect x="6" width="10" height="2"
                                                                      transform="rotate(90 6 0)" fill="#C4C4C4"></rect>
                                                            </svg></span></div>
                            </li>
                            <li className="item flex justify-between items-center mb-5">
                                <div className="flex space-x-[14px] items-center">
                                    <div>
                                        <div><input id="toilet" type="checkbox" name="toilet"/>
                                        </div>
                                    </div>
                                    <div><label htmlFor="toilet"
                                                className="text-xs font-black font-400 capitalize">Toilet
                                        &amp; Sanitation</label></div>
                                </div>
                                <div><span className="cursor-pointer"><svg width="10" height="10"
                                                                           viewBox="0 0 10 10" fill="none"
                                                                           xmlns="http://www.w3.org/2000/svg">
                                                                <rect y="4" width="10" height="2" fill="#C4C4C4"></rect>
                                                                <rect x="6" width="10" height="2"
                                                                      transform="rotate(90 6 0)" fill="#C4C4C4"></rect>
                                                            </svg></span></div>
                            </li>
                            <li className="item flex justify-between items-center mb-5">
                                <div className="flex space-x-[14px] items-center">
                                    <div>
                                        <div><input id="makeupCorner" type="checkbox"
                                                    name="makeupCorner"/></div>
                                    </div>
                                    <div><label htmlFor="makeupCorner"
                                                className="text-xs font-black font-400 capitalize">Makeup
                                        Corner</label></div>
                                </div>
                                <div><span className="cursor-pointer"><svg width="10" height="10"
                                                                           viewBox="0 0 10 10" fill="none"
                                                                           xmlns="http://www.w3.org/2000/svg">
                                                                <rect y="4" width="10" height="2" fill="#C4C4C4"></rect>
                                                                <rect x="6" width="10" height="2"
                                                                      transform="rotate(90 6 0)" fill="#C4C4C4"></rect>
                                                            </svg></span></div>
                            </li>
                            <li className="item flex justify-between items-center mb-5">
                                <div className="flex space-x-[14px] items-center">
                                    <div>
                                        <div><input id="babyItem" type="checkbox" name="babyItem"/>
                                        </div>
                                    </div>
                                    <div><label htmlFor="babyItem"
                                                className="text-xs font-black font-400 capitalize">Baby
                                        Items</label></div>
                                </div>
                                <div><span className="cursor-pointer"><svg width="10" height="10"
                                                                           viewBox="0 0 10 10" fill="none"
                                                                           xmlns="http://www.w3.org/2000/svg">
                                                                <rect y="4" width="10" height="2" fill="#C4C4C4"></rect>
                                                                <rect x="6" width="10" height="2"
                                                                      transform="rotate(90 6 0)" fill="#C4C4C4"></rect>
                                                            </svg></span></div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/*<div className="filter-subject-item pb-10 mt-10">*/}
                {/*    <div className="subject-title mb-[30px]">*/}
                {/*        <h1 className="text-black text-base font-500">Sizes</h1>*/}
                {/*    </div>*/}
                {/*    <div className="filter-items">*/}
                {/*        <ul>*/}
                {/*            <li className="item flex justify-between items-center mb-5">*/}
                {/*                <div className="flex space-x-[14px] items-center">*/}
                {/*                    <div>*/}
                {/*                        <div><input id="sizeS" type="checkbox" name="sizeS"/></div>*/}
                {/*                    </div>*/}
                {/*                    <div><label htmlFor="sizeS"*/}
                {/*                                className="text-xs font-black font-400 capitalize">s</label>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </li>*/}
                {/*            <li className="item flex justify-between items-center mb-5">*/}
                {/*                <div className="flex space-x-[14px] items-center">*/}
                {/*                    <div>*/}
                {/*                        <div><input id="sizeM" type="checkbox" name="sizeM"/></div>*/}
                {/*                    </div>*/}
                {/*                    <div><label htmlFor="sizeM"*/}
                {/*                                className="text-xs font-black font-400 capitalize">M</label>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </li>*/}
                {/*            <li className="item flex justify-between items-center mb-5">*/}
                {/*                <div className="flex space-x-[14px] items-center">*/}
                {/*                    <div>*/}
                {/*                        <div><input id="sizeXL" type="checkbox" name="sizeXL"/>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                    <div><label htmlFor="sizeXL"*/}
                {/*                                className="text-xs font-black font-400 capitalize">XL</label>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </li>*/}
                {/*            <li className="item flex justify-between items-center mb-5">*/}
                {/*                <div className="flex space-x-[14px] items-center">*/}
                {/*                    <div>*/}
                {/*                        <div><input id="sizeXXL" type="checkbox" name="sizeXXL"/>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                    <div><label htmlFor="sizeXXL"*/}
                {/*                                className="text-xs font-black font-400 capitalize">XXL</label>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </li>*/}
                {/*            <li className="item flex justify-between items-center mb-5">*/}
                {/*                <div className="flex space-x-[14px] items-center">*/}
                {/*                    <div>*/}
                {/*                        <div><input id="sizeFit" type="checkbox" name="sizeFit"/>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                    <div><label htmlFor="sizeFit"*/}
                {/*                                className="text-xs font-black font-400 capitalize">Sliem*/}
                {/*                        Fit</label></div>*/}
                {/*                </div>*/}
                {/*            </li>*/}
                {/*        </ul>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <button type="button"
                        className="w-10 h-10 fixed top-5 right-5 z-50 rounded lg:hidden flex justify-center items-center border border-qred text-qred">
                    <svg
                        xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20"
                        fill="currentColor">
                        <path fillRule="evenodd"
                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                              clipRule="evenodd"></path>
                    </svg>
                </button>
            </div>
            <div className="w-full hidden lg:block h-[295px]">
                <Image src={images.car} alt=""
                     className="w-full h-full object-contain"/>
            </div>
        </div>
    );
};

export default ShopSideBar;