import React from 'react';
import ContactUpdateForm from "@/components/forms/contact-update";
import {SessionProvider} from "next-auth/react";

const Page = () => {
    const initialData = {
        shop_phone_number: '',
        shop_phone_number2: '',
        shop_facebook_url: '',
        shop_instagram_url: '',
        city: '',
        physical_address: '',
        map_location: ''
    };

    return (
        <div>
            <SessionProvider>
                <ContactUpdateForm initialData={initialData}/>
            </SessionProvider>
        </div>
    );
};

export default Page;
