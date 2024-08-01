import BreadCrumb from '@/components/breadcrumb';
import {SessionProvider} from "next-auth/react";
import React from "react";
import ProductList from "@/app/(dashboard)/_components/table/ProductList";
import {ScrollArea} from "@/components/ui/scroll-area";

const breadcrumbItems = [{title: 'Products', link: '/dashboard/products'}];

export default function Page() {
    return (
        <ScrollArea className="h-full">
        <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
            <BreadCrumb items={breadcrumbItems}/>
            <SessionProvider>
                <ProductList/>
            </SessionProvider>
        </div>
        </ScrollArea>
    );
}
