"use client";

import React, { useEffect, useState, useRef } from "react";
import { useSession } from "next-auth/react";
import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import VerticalDotsIcon from "@/app/(dashboard)/_components/icons/VerticalDotsIcon";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from 'next/link';

// Define the product interface
interface Product {
    product_uuid: string;
    product_title: string;
    regular_price: string;
    status: string;
}

// Helper function to format price
const formatPrice = (price: string) => {
    return parseFloat(price).toLocaleString();
};

export default function ProductList() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const { data: session } = useSession();
    const fetchingRef = useRef(false);

    useEffect(() => {
        const fetchProducts = async () => {
            if (fetchingRef.current) return;
            fetchingRef.current = true;

            try {
                const response = await fetch(
                    // 'http://localhost:8000/api/dashboard/products',
                    'https://api.shuamall.com/api/dashboard/products',
                    {
                        headers: {
                            'Authorization': `Bearer ${session?.accessToken}`
                        }
                    }
                );
                const data = await response.json();
                if (data.success) {
                    console.log(data.products);
                    setProducts(data.products);
                }
                setLoading(false);
            } catch (e) {
                console.error('Error fetching products:', e);
                setLoading(false);
            } finally {
                fetchingRef.current = false;
            }
        };

        if (session?.accessToken) {
            fetchProducts();
        }
    }, [session]);

    return (
        <Card>
            <Link className="button float-right p-2 bg-white ring rounded-[10px] mt-3 mr-3" href="products/create">New</Link>
            <CardHeader>
                <CardTitle>Products</CardTitle>
                <CardDescription>A list of your recent products.</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Product Name</TableHead>
                                <TableHead className="text-right">Price</TableHead>
                                <TableHead className="text-right">Status</TableHead>
                                <TableHead className="text-right">Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {products.map((product) => (
                                <TableRow key={product.product_uuid}>
                                    <TableCell className="font-medium">
                                        <Link href={`products/${product.product_uuid}`}>
                                            {product.product_title}
                                        </Link>
                                    </TableCell>
                                    <TableCell className="text-right">{formatPrice(product.regular_price)}/=</TableCell>
                                    <TableCell className="text-right">
                                        {product.status === "Active" ? (
                                            <Badge>{product.status}</Badge>
                                        ) : (
                                            <Badge variant="secondary">{product.status}</Badge>
                                        )}
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <div className="relative flex justify-end items-center gap-2">
                                            <DropdownMenu>
                                                <DropdownMenuTrigger>
                                                    <VerticalDotsIcon className="text-default-200" width={20} height={20} />
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent>
                                                    <DropdownMenuSeparator />
                                                    <DropdownMenuItem>Edit</DropdownMenuItem>
                                                    <DropdownMenuItem>Hold</DropdownMenuItem>
                                                    <DropdownMenuItem>Delete</DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                )}
            </CardContent>
        </Card>
    );
}
