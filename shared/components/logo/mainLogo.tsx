import Image from "next/image";
import {images} from "@/shared/constants/image";
import React from "react";
import Link from "next/link";

const MainLogo = () => {
    return (
        <a href="/" className="block w-full py-5 lg:py-">
            <Image src={images.logo} height={35} alt="Shuamall logo"/>
        </a>
    );
};

export default MainLogo;