import React from "react";
import { Metadata } from 'next';
import "@/styles/app.css";


export const metadata: Metadata = {
    title: 'Authentication',
    description: 'Authentication page for Shuamall'
};

const AuthLayout = ({children,}: Readonly<{children: React.ReactNode; }>) => {
    return (
        <>
            {/*<SessionProvider>*/}
            {/*    <NavBar navLinks={navLinks}/>*/}
            {/*</SessionProvider>*/}


                            {children}

        </>

    );
}

export default AuthLayout;
