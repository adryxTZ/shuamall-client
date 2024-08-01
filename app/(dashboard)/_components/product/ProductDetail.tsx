"use client";
import {SessionProvider, useSession} from "next-auth/react";
import React, {useEffect, useState} from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import Image from "next/image";
import {Trash2, Upload} from "lucide-react";
import UploadProductImage from "@/app/(dashboard)/_components/product/productImage/UploadProductImage";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ProductAnalytics from "@/app/(dashboard)/_components/product/ProductAnalytics";
import ProductCompareDonut from "@/app/(dashboard)/_components/product/productImage/ProductCompareDonut";
import DatePickerWithRange from "@/app/(dashboard)/_components/DatePicker/DatePickerWithRange";

// Define the product interface
interface Product {
    product_uuid: string;
    product_title: string;
    regular_price: string;
    product_description: string;
    status: string;
    subcategories: {
        subcategory_name: string;
    };
    product_thumbnails: {
        id: string;
        product_photo: string;
    }[];
}

// Helper function to format price
const formatPrice = (price: string) => {
    return parseFloat(price).toLocaleString();
};

const ProductDetail: React.FC<{ product_uuid: string }> = ({product_uuid}) => {
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);
    const {data: session} = useSession();
    const [requesting, setRequesting] = useState(false); // State to track ongoing request

    useEffect(() => {
        const fetchProduct = async () => {
            if (!product_uuid || requesting) return;

            setRequesting(true); // Set requesting to true to prevent subsequent requests

            try {
                const response = await fetch(
                    // `http://localhost:8000/api/dashboard/products/${product_uuid}`,
                    `https://api.shuamall.com/api/dashboard/products/${product_uuid}`,
                    {
                        headers: {
                            Authorization: `Bearer ${session?.accessToken}`,
                        },
                    }
                );
                const data = await response.json();
                if (data.success) {
                    console.log(data.products[0]);
                    setProduct(data.products[0]);
                }
                setLoading(false);
            } catch (e) {
                console.error("Error fetching product:", e);
                setLoading(false);
            } finally {
                setRequesting(false); // Reset requesting after request completes
            }
        };

        if (session?.accessToken) {
            fetchProduct();
        }
    }, [session, product_uuid]);

    const handleImageDelete = async (productThumbnailId: string) => {
        // Create a FormData object
        const formData = new FormData();
        formData.append("productThumbnailId", productThumbnailId.toString());

        try {
            const response = await fetch(
                // `http://localhost:8000/api/dashboard/product/deleteImage/${product_uuid}`,
                `https://api.shuamall.com/api/dashboard/product/dele/teImage/${product_uuid}`,
                {
                    method: "POST", // Use POST method
                    headers: {
                        Authorization: `Bearer ${session?.accessToken}`,
                        // Note: Do not set 'Content-Type' header here when using FormData, the browser will set it automatically
                    },
                    body: formData,
                }
            );

            if (response.ok) {
                toast.success("Image deleted successfully.");

                // Update the state to remove the deleted thumbnail
                setProduct((prevProduct) => {
                    if (prevProduct === null) return prevProduct;

                    return {
                        ...prevProduct,
                        product_thumbnails: prevProduct.product_thumbnails.filter(
                            (thumbnail) => thumbnail.id !== productThumbnailId
                        ),
                    };
                });
            } else {
                toast.error("Failed to delete image");
            }
        } catch (error) {
            toast.error("Error deleting image:" + error);
        }
    };

    return (
        <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
            {loading ? (
                <p>Loading...</p>
            ) : product ? (
                <>
                    <Card>
                        <CardHeader>
                            <CardTitle>{product.product_title}</CardTitle>
                            <CardDescription>Product Details</CardDescription>
                        </CardHeader>
                        <CardContent className="p-4 flex">
                            <div className="mr-4 ml-4 space-y-1 w-1/4">
                                <p className="text-sm font-medium leading-none">Product Name</p>
                                <p className="text-sm text-muted-foreground">
                                    {product.product_title}
                                </p>
                            </div>

                            <div className="mr-4 ml-4 space-y-1 w-1/4">
                                <p className="text-sm font-medium leading-none">Product Price</p>
                                <p className="text-sm text-muted-foreground">
                                    {formatPrice(product.regular_price)}/=
                                </p>
                            </div>

                            <div className="mr-4 ml-4 space-y-1 w-1/4">
                                <p className="text-sm font-medium leading-none">
                                    Product Subcategories
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    {product.subcategories.subcategory_name}
                                </p>
                            </div>

                            <div className="mr-4 ml-4 space-y-1 w-1/4">
                                <p className="text-sm font-medium leading-none">Olivia Martin</p>
                                <p className="text-sm text-muted-foreground">
                                    olivia.martin@email.com
                                </p>
                            </div>
                        </CardContent>
                        <CardContent>
                            <div className="mr-2 ml-2 space-y-1 mt-2">
                                <p className="text-md font-medium leading-none">
                                    Product Description
                                </p>
                                <p className="text-sm text-muted-foreground p-1 mt-1">
                                    {product.product_description}
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    <Tabs defaultValue="account" className="w-full">
                        <TabsList>
                            <TabsTrigger value="password">Analytics</TabsTrigger>
                            <TabsTrigger value="account">Images</TabsTrigger>
                        </TabsList>
                        <TabsContent value="account">
                            <Card>
                                <SessionProvider>
                                    <UploadProductImage productID={product_uuid}/>
                                </SessionProvider>
                                <CardHeader>
                                    <CardTitle>Product Images</CardTitle>
                                    <CardDescription>Product Details</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-wrap space-y-4">
                                        {product.product_thumbnails.map((thumbnail) => (
                                            <div key={thumbnail.product_photo} className="relative group">
                                                <Image
                                                    src={thumbnail.product_photo}
                                                    alt="Product Photo"
                                                    width={200}
                                                    height={200}
                                                    className="rounded-md border mr-4"
                                                />
                                                <button
                                                    className="absolute top-2 right-6 bg-red-500 text-white rounded-[5px] p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                                                    onClick={() => handleImageDelete(thumbnail.id)}
                                                >
                                                    <Trash2 className="h-4 w-4"/> {/* Use the Trash2 icon */}
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>
                        <TabsContent value="password">
                            <Card>
                                <CardContent className="p-5">
                                    <DatePickerWithRange className="float-right"/>
                                    <CardTitle>Product Analytics</CardTitle>
                                    <CardDescription>Customers Are noticing You</CardDescription>
                                </CardContent>
                            </Card>
                            {/*<div className={"flex flex-wrap space-y-4"}>*/}
                            <div className={"flex flex-wrap"}>
                                <Card className="w-1/3 p-3 border-0">
                                    <ProductAnalytics/>
                                </Card>

                                <Card className="w-1/3 p-3 border-0">
                                    <ProductCompareDonut/>
                                </Card>
                            </div>
                        </TabsContent>
                    </Tabs>
                </>
            ) : (
                <p>Product not found</p>
            )}
        </div>
    );
};

export default ProductDetail;
