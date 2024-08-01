import React from 'react';
import {Truck, Shield, Smile, HelpCircle, ThumbsUp, LocateIcon, Pin, PhoneCall} from 'lucide-react';

const FeaturesAndProducts: React.FC = () => {
    return (
        <div className="container-x mx-auto  mb-[60px]">
            <div className="flex flex-col items-center bg-white">
                <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-4 p-6">
                    <div className="flex items-center space-x-2">
                        <Pin className="h-8 w-8 text-orange-500" />
                        <div>
                            <h3 className="font-bold">Visit Us</h3>
                            <p>Dar es Salaam, Kijitonyama</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Shield className="h-8 w-8 text-orange-500" />
                        <div>
                            <h3 className="font-bold">Safe Payment</h3>
                            <p>100% secure payment</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Smile className="h-8 w-8 text-orange-500" />
                        <div>
                            <h3 className="font-bold">Shop With Confidence</h3>
                            <p>If goods have problems</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <PhoneCall className="h-8 w-8 text-orange-500" />
                        <div>
                            <h3 className="font-bold">Contact Us</h3>
                            <p>+255 788 551 451</p>
                        </div>
                    </div>
                    {/*<div className="flex items-center space-x-2">*/}
                    {/*    <ThumbsUp className="h-8 w-8 text-orange-500" />*/}
                    {/*    <div>*/}
                    {/*        <h3 className="font-bold">Friendly Services</h3>*/}
                    {/*        <p>30 day satisfaction guarantee</p>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>

        </div>
    );
};

export default FeaturesAndProducts;
