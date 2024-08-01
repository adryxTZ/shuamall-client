import React from 'react';
import ContactDisplay from "@/app/(dashboard)/_components/contactDisplay";
import {SessionProvider} from "next-auth/react";

const Page = () => {
    return (
        <>
            <SessionProvider>
           <ContactDisplay />
            </SessionProvider>
        </>
    );
};

export default Page;
