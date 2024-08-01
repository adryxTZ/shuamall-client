import {CalendarDateRangePicker} from '@/components/date-range-picker';
import {Overview} from '@/components/overview';
import {RecentSales} from '@/components/recent-sales';
import {Button} from '@/components/ui/button';

import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {ScrollArea} from "@/components/ui/scroll-area";
import {SessionProvider} from "next-auth/react";
import WebsiteInteractions from "@/app/(dashboard)/_components/reportWidgets/WebsiteInteractions";
import ActiveProducts from "@/app/(dashboard)/_components/reportWidgets/ActiveProducts";
import ProductInteractions from "@/app/(dashboard)/_components/reportWidgets/ProductInteractions";

export default function page() {
    return (
        <ScrollArea className="h-full">
            <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
                <div className="flex items-center justify-between space-y-2">
                    <h2 className="text-3xl font-bold tracking-tight">
                        Hi, Welcome back 👋
                    </h2>
                    <div className="hidden items-center space-x-2 md:flex">
                        <CalendarDateRangePicker/>
                        <Button>Download</Button>
                    </div>
                </div>
                <Tabs defaultValue="overview" className="space-y-4">
                    <TabsList>
                        <TabsTrigger value="overview">Overview</TabsTrigger>
                        <TabsTrigger value="analytics" disabled>
                            Analytics
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value="overview" className="space-y-4">
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                            <SessionProvider>
                                <WebsiteInteractions/>

                                <ProductInteractions/>

                                <Card>
                                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                        <CardTitle className="text-sm font-medium">Contact Views</CardTitle>
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
                                            <rect width="20" height="14" x="2" y="5" rx="2"/>
                                            <path d="M2 10h20"/>
                                        </svg>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-2xl font-bold">+12,234</div>
                                        <p className="text-xs text-muted-foreground">
                                            +19% from last month
                                        </p>
                                    </CardContent>
                                </Card>

                                <ActiveProducts/>
                            </SessionProvider>

                        </div>
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-7">
                            <Card className="col-span-4">
                                <CardHeader>
                                    <CardTitle>Overview</CardTitle>
                                </CardHeader>
                                <CardContent className="pl-2">
                                    <Overview/>
                                </CardContent>
                            </Card>
                            <Card className="col-span-4 md:col-span-3">
                                <CardHeader>
                                    <CardTitle>Recent Sales</CardTitle>
                                    <CardDescription>
                                        You made 265 sales this month.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <RecentSales/>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </ScrollArea>
    );
}
