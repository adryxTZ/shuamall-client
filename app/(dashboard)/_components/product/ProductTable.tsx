"use client";
import { useEffect, useState } from 'react';
import { DataTable } from '@/components/ui/data-table';
import { ColumnDef } from "@tanstack/react-table";
import { User } from "@/constants/data";
import { Checkbox } from "@/components/ui/checkbox";
import { CellAction } from "@/components/tables/user-tables/cell-action";
import { useSession } from "next-auth/react";

export default function ProductTable() {
    const columns: ColumnDef<User>[] = [
        {
            id: 'select',
            header: ({ table }) => (
                <Checkbox
                    checked={table.getIsAllPageRowsSelected()}
                    onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                    aria-label="Select all"
                />
            ),
            cell: ({ row }) => (
                <Checkbox
                    checked={row.getIsSelected()}
                    onCheckedChange={(value) => row.toggleSelected(!!value)}
                    aria-label="Select row"
                />
            ),
            enableSorting: false,
            enableHiding: false
        },
        {
            accessorKey: 'product_title',
            header: 'NAME'
        },
        {
            accessorKey: 'regular_price',
            header: 'PRICE'
        },
        {
            id: 'actions',
            cell: ({ row }) => <CellAction data={row.original} />
        }
    ];

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { data: session } = useSession();

    useEffect(() => {
        const fetchProducts = async () => {
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
                    console.log("hii");
                    console.log(data.products);
                    setProducts(data.products);
                }
                setLoading(false);
            } catch (error) {
                console.error('Error fetching products:', error);
                setLoading(false);
            }
        };

        if (session?.accessToken) {
            fetchProducts();
        }
    }, [session]);

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <DataTable searchKey="name" columns={columns} data={products} />
            )}
        </div>
    );
}

