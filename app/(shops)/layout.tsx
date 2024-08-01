import {Footer, Header} from "@/shared";
import ShopHeader from "@/app/(shops)/_components/shopHeader/shopHeader";
import "@/styles/shop.css";



const ShopLayout = ({children,}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <>
            <div className="bg-[#f8f8f8]">


            {children}

            </div>
        </>

    );
}

export default ShopLayout;
