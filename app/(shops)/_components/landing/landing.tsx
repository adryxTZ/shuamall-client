import React, {useEffect} from 'react';
import useAboutShopStore from "@/app/store/shopAbout";

interface bannerProps {
    shopId: number;
}
const Landing: React.FC<bannerProps> = ({shopId}) => {
    const {aboutShop, loading, error, fetchAboutShop} = useAboutShopStore();
    useEffect(() => {
        fetchAboutShop(shopId);
    }, [aboutShop, fetchAboutShop, shopId]);

    return (
        <div >
            <div className="lg:mb-8">
                <div
                    className="relative flex items-center justify-center  h-96 bg-cover bg-center"
                    style={{backgroundImage: "url('/assets/img/shops/1.webp')"}}
                >
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="relative z-10 text-center text-white p-4 container-x mx-auto">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Discover Your Sound with <br/> <span className="text-yellow-500"> {aboutShop?.shop_name}</span>
                           </h1>
                        <p className="text-lg md:text-xl lg:text-2xl mb-6">{aboutShop?.shop_description}git</p>
                        {/*<a*/}
                        {/*    href="#"*/}
                        {/*    className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-6 rounded transition duration-300"*/}
                        {/*>*/}
                        {/*    Get it Now*/}
                        {/*</a>*/}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Landing;
