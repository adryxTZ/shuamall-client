import Image from 'next/image'
import {images} from "@/shared/constants/image";
import React from "react";
import Link from "next/link";

const ShopProductCard = () => {
    return (
        <div>
            <div
                className="product-card-one w-full h-full bg-white relative group overflow-hidden"
                style={{ boxShadow: '0px 15px 64px 0px rgba(0, 0, 0, 0.05)' }}
            >
                <div className="product-card-img w-full md:h-[225px] relative">
                    <Image
                        src={images.car}
                        width={300}
                        height={300}
                        alt="Recent Products"
                        className="w-full pb-4"
                    />
                    <div className="product-type absolute right-[14px] top-[17px]">
            <span className="text-[9px] font-700 leading-none py-[6px] px-3 uppercase text-white rounded-full tracking-wider bg-qyellow">
              new
            </span>
                    </div>
                </div>
                <div className="product-card-details px-[30px] pb-[30px] relative">
                    <Link href="/shop/product-details">

                    <div className="absolute w-full h-10 px-[30px] left-0 top-40 group-hover:top-[62px] transition-all duration-300 ease-in-out">
                        <button type="button" className="yellow-btn">
                            <div className="flex items-center space-x-3">
                <span>
                  <svg
                      width="14"
                      height="16"
                      viewBox="0 0 14 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-current"
                  >
                    <path d="M12.5664 4.14176C12.4665 3.87701 12.2378 3.85413 11.1135 3.85413H10.1792V3.43576C10.1792 2.78532 10.089 2.33099 9.86993 1.86359C9.47367 1.01704 8.81003 0.425438 7.94986 0.150881C7.53106 0.0201398 6.90607 -0.0354253 6.52592 0.0234083C5.47246 0.193372 4.57364 0.876496 4.11617 1.85052C3.89389 2.32772 3.80368 2.78532 3.80368 3.43576V3.8574H2.8662C1.74187 3.8574 1.51313 3.88028 1.41326 4.15483C1.36172 4.32807 0.878481 8.05093 0.6723 9.65578C0.491891 11.0547 0.324369 12.3752 0.201948 13.3688C-0.0106763 15.0815 -0.00423318 15.1077 0.00220999 15.1371V15.1404C0.0312043 15.2515 0.317925 15.5424 0.404908 15.6274L0.781834 16H13.1785L13.4588 15.7483C13.5844 15.6339 14 15.245 14 15.0521C14 14.9214 12.5922 4.21694 12.5664 4.14176ZM12.982 14.8037C12.9788 14.8266 12.953 14.8952 12.9079 14.9443L12.8435 15.0162H1.13943L0.971907 14.8331L1.63233 9.82901C1.86429 8.04766 2.07047 6.4951 2.19289 5.56684C2.24766 5.16154 2.27343 4.95563 2.28631 4.8543C2.72123 4.85103 4.62196 4.84776 6.98661 4.84776H11.6901L11.6966 4.88372C11.7481 5.1452 12.9594 14.5128 12.982 14.8037ZM4.77338 3.8574V3.48479C4.77338 3.23311 4.80559 2.88664 4.84103 2.72649C5.03111 1.90935 5.67864 1.24584 6.48726 1.03339C6.82553 0.948403 7.37964 0.97782 7.71791 1.10202H7.72113C8.0755 1.22296 8.36545 1.41907 8.63284 1.71978C9.06453 2.19698 9.2095 2.62516 9.2095 3.41615V3.8574H4.77338Z"></path>
                  </svg>
                </span>
                                <span>View </span>
                            </div>
                        </button>
                    </div>
    </Link>
                    <div className="reviews flex space-x-[1px] mb-3">
            <span>
              <svg
                  width="18"
                  height="17"
                  viewBox="0 0 18 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill="#FFA800"></path>
              </svg>
            </span>
                        <span>
              <svg
                  width="18"
                  height="17"
                  viewBox="0 0 18 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill="#FFA800"></path>
              </svg>
            </span>
                        <span>
              <svg
                  width="18"
                  height="17"
                  viewBox="0 0 18 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill="#FFA800"></path>
              </svg>
            </span>
                        <span>
              <svg
                  width="18"
                  height="17"
                  viewBox="0 0 18 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill="#FFA800"></path>
              </svg>
            </span>
                        <span>
              <svg
                  width="18"
                  height="17"
                  viewBox="0 0 18 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill="#FFA800"></path>
              </svg>
            </span>
                    </div>
                    <Link href="/shop/product-details" className="title text-qblack text-[15px] font-600 block mb-2">
                        Gaming Headset for PC & PS4
                    </Link>
                    <p className="price">
            <span className="main-price text-qgray line-through mr-2 text-[13px] font-600">
              $120
            </span>
                        <span className="text-qyellow font-600">$99</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ShopProductCard
