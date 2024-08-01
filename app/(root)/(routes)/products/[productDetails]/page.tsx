import React from 'react';
import {HomeProductDetails} from "@/app/(root)/_components";
import "@/styles/shop.css";

const Page = ({params}: { params: { productDetails: string } }) => {
    const productDetail:string = params.productDetails;
console.log("more details" +productDetail)
    return (
        <div>
            <HomeProductDetails productId={productDetail as string}/>
        </div>
    );
};

export default Page;