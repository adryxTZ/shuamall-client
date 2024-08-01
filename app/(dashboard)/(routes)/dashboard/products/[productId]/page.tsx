import BreadCrumb from "@/components/breadcrumb";
import { useRouter } from "next/router";
import React from "react";
import ProductDetail from "@/app/(dashboard)/_components/product/ProductDetail";
import {SessionProvider} from "next-auth/react";
import {ScrollArea} from "@/components/ui/scroll-area";

const breadcrumbItems = [
    {title: 'Products', link: '/dashboard/products'},
    {title: 'Product Details', link: ''}
];

interface Params {
    productId: string;
}

const ProductDetailPage: React.FC<{ params: Params }> = ({ params }) => {
    return (
        <ScrollArea className="h-full">
        <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
            <BreadCrumb items={breadcrumbItems} />
            <SessionProvider>
                <ProductDetail product_uuid={params.productId} />
            </SessionProvider>
        </div>
        </ScrollArea>
    );
};

export default ProductDetailPage;