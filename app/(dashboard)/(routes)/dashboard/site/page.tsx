'use client'
import React from 'react';
import {ScrollArea} from "@/components/ui/scroll-area";
import BreadCrumb from "@/components/breadcrumb";

import {Button} from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import {HomeDetailEdit} from "@/app/(dashboard)/_components/site/forms/HomeDetailEdit";
import {AboutDetailEdit} from "@/app/(dashboard)/_components/site/forms/AboutDetailEdit";
import {ContactDetailEdit} from "@/app/(dashboard)/_components/site/forms/ContactDetailEdit";
import {SessionProvider} from "next-auth/react";

const breadcrumbItems = [{title: 'Products', link: '/dashboard/Website Configuration'}];

export default function Page() {
    // @ts-ignore
    return (
        <ScrollArea className="h-full">
            <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
                <BreadCrumb items={breadcrumbItems}/>
                {/*//SIDEBAR*/}

                {/*<Tabs defaultValue="account" className="w-[600px]">*/}
                <Tabs defaultValue="home" className="w-full">

                    <TabsList className="grid w-[400px] grid-cols-3">
                        <TabsTrigger value="home">Home</TabsTrigger>
                        <TabsTrigger value="about">About</TabsTrigger>
                        <TabsTrigger value="contact">Contact</TabsTrigger>
                    </TabsList>

                    <TabsContent value="home">
                        <Card>
                            <CardHeader>
                                <CardTitle>Home Page</CardTitle>
                                <CardDescription>
                                    Customize your home page preferences. Save your changes to update your settings.
                                </CardDescription>
                            </CardHeader>

                            <CardContent className="space-y-2">
                                <SessionProvider>
                                    <HomeDetailEdit/>
                                </SessionProvider>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="about">
                        <Card>
                            <CardHeader>
                                <CardTitle>About</CardTitle>
                                <CardDescription>
                                    Change your password here. After saving, you'll be logged out.
                                </CardDescription>
                            </CardHeader>

                            <CardContent className="space-y-2">
                                <SessionProvider>
                                    <AboutDetailEdit/>
                                </SessionProvider>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="contact">
                        <Card>
                            <CardHeader>
                                <CardTitle>Contact</CardTitle>
                                <CardDescription>
                                    Customize your Contact page preferences. Save your changes to update your settings.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <SessionProvider>
                                    <ContactDetailEdit/>
                                </SessionProvider>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </ScrollArea>
    );
}