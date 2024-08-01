import {Categories, Footer, Header} from "@/shared";
import React from "react";
import "@/styles/app.css";



const MainLayout = ({children,}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className="dark:bg-dark">
            <Header/>
            <Categories/>
            {children}
            <Footer/>
        </div>

    );
}

export default MainLayout;
