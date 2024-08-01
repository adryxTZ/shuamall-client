"use client";

import BreadCrumb from "@/components/breadcrumb";
import { ProductForm } from "@/components/forms/product-form";
import { ScrollArea } from "@/components/ui/scroll-area";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { SessionProvider } from "next-auth/react";

// Define Category interface
interface Category {
    category_name: string;
    category_id: number;
    category_icon1: string;
    icon2: string;
    id: number;
    subcategory_name: string;
}

export default function CreateProduct() {
    const [categories, setCategories] = useState<{ _id: number, name: string }[]>([]);

    const breadcrumbItems = [
        { title: "Product", link: "/dashboard/products" },
        { title: "Create", link: "/dashboard/products/create" }
    ];

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get("https://api.shuamall.com/api/category/get_all_subcategories");
                // Transform categories to the required format
                const transformedCategories = response.data.subcategories.map((category: Category) => ({
                    _id: category.id,
                    name: category.subcategory_name
                }));
                setCategories(transformedCategories);
            } catch (error) {
                console.error("Failed to fetch categories", error);
            }
        };
        fetchCategories();
    }, []);

    return (
        <ScrollArea className="h-full">
            <div className="flex-1 space-y-4 p-5">
                <BreadCrumb items={breadcrumbItems} />
                <SessionProvider>
                    <ProductForm
                        categories={categories}
                        initialData={null}
                        key={null}
                    />
                </SessionProvider>
            </div>
        </ScrollArea>
    );
}
