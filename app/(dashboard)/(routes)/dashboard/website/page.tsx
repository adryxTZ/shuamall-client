'use client'
import React from 'react';
import BreadCrumb from '@/components/breadcrumb';
import {SessionProvider} from "next-auth/react";
import AboutShopForm from "@/app/(dashboard)/_components/shop/AboutShopForm";
import {ScrollArea} from "@/components/ui/scroll-area";


const breadcrumbItems = [{title: 'Products', link: '/dashboard/Website Configuration'}];

export default function Page() {
    return (
        <ScrollArea className="h-full">
        <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
            <BreadCrumb items={breadcrumbItems}/>
            <SessionProvider>
                <AboutShopForm/>
            </SessionProvider>
        </div>
        </ScrollArea>
    );
}

