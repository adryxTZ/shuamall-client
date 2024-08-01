"use client"
import {useState, useEffect} from 'react';
import axios from 'axios';
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {useSession} from "next-auth/react";
import {Skeleton} from "@/components/ui/skeleton";

export default function WebsiteInteractions() {
    const [viewsCount, setViewsCount] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const {data: session} = useSession();

    useEffect(() => {
        const source = axios.CancelToken.source();

        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios.get(
                    // 'http://127.0.0.1:8000/api/dashboard/productAnalytic',
                    'https://api.shuamall.com/api/dashboard/productAnalytic',
                    {
                        headers: {
                            Authorization: `Bearer ${session?.accessToken}`,
                            // Note: Do not set 'Content-Type' header here when using FormData, the browser will set it automatically
                        },
                    });
                if (response.data.success) {
                    // console.log(response);
                    setViewsCount(response.data.views_count);
                } else {
                    // @ts-ignore
                    setError(new Error("Failed to fetch data"));
                }
                setLoading(false);
            } catch (error) {
                if (axios.isCancel(error)) {
                    console.log('Request canceled', error.message);
                } else {
                    // @ts-ignore
                    setError(error);
                    setLoading(false);
                }
            }
        };
        if (session?.accessToken) {
            fetchData();
        }

        return () => {
            source.cancel('Operation canceled by the user.');
        };
    }, [session]);

    if (loading) {
        return (
            <Card>
                <CardHeader>
                    <Skeleton className="h-[20px]"/>
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">
                        <Skeleton className="h-[50px]"/>
                    </div>
                </CardContent>
            </Card>
        )
    }
    if (error) {
        return (
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                        Website interactions
                    </CardTitle>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="h-4 w-4 text-muted-foreground"
                    >
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                    </svg>

                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">0</div>
                    <p className="text-xs text-muted-foreground">
                        Views count from last month
                    </p>
                </CardContent>
            </Card>
        )
    }

    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                    Products interactions
                </CardTitle>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-muted-foreground"
                >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                </svg>

            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">{viewsCount}</div>
                <p className="text-xs text-muted-foreground">
                    Views count from last month
                </p>
            </CardContent>
        </Card>
    );
}