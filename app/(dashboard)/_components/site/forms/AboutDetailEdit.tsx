"use client"

import {useState, useEffect, useRef} from "react"
import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import {z} from "zod"
import axios from "axios"

import {Button} from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {Input} from "@/components/ui/input"
import {Textarea} from "@/components/ui/textarea"
import {useSession} from "next-auth/react";
import {Card, CardContent, CardHeader} from "@/components/ui/card";
import {Skeleton} from "@/components/ui/skeleton";
import {Space} from "lucide";
import {Separator} from "@radix-ui/react-menu";
import {toast} from "react-toastify";
import {Shop} from "@/types";

const FormSchema = z.object({
    shop_name: z.string().min(2, {
        message: "Shop name must be at least 2 characters.",
    }),
    shop_description: z.string().min(2, {
        message: "Shop Description must be at least 2 characters.",
    }),
    about_shop: z.string().min(2, {
        message: "About Shop must be at least 2 characters.",
    }),
    shop_motto: z.string().min(2, {
        message: "Shop Motto must be at least 2 characters.",
    })
})

interface shopAboutProp {
    shop_name: string,
    shop_description: string,
    about_shop: string,
    shop_motto: string,

}
export function AboutDetailEdit() {
    const [editMode, setEditMode] = useState(false)
    const [initialData, setInitialData] = useState<shopAboutProp>()
    const {data: session} = useSession();

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            shop_name: "",
            shop_description: "",
            about_shop: "",
            shop_motto: "",
        },
    })
    const [loading, setLoading] = useState(true);
    const isFetching = useRef(false); // Use ref to track request status

    useEffect(() => {
        if (isFetching.current) return; // Do not proceed if a request is already in progress
        async function fetchData() {
            try {
                setLoading(true);
                isFetching.current = true;

                const response = await axios.get(
                    // 'http://localhost:8000/api/dashboard/getHomeDetails',
                    'https://api.shuamall.com/api/dashboard/getHomeDetails',
                    {
                        headers: {
                            Authorization: `Bearer ${session?.accessToken}`,
                        },
                    })

                console.log("come on")
                console.log(response)
                console.log("Come on")

                if (response.data.success) {
                    setInitialData(response.data.shop)
                    form.reset(response.data)
                } else {
                    // @ts-ignore
                    setError(new Error("Failed to fetch data"));
                }
                setLoading(false);
            } catch (error) {
                console.error("Error fetching initial data:", error)
            } finally {
                isFetching.current = false; // Mark request as completed
            }
        }

        if (session?.accessToken) {
            fetchData();
        }
    }, [form, session])

    async function onSubmit(data: z.infer<typeof FormSchema>) {
        try {
            console.log(data)
            const response = await axios.post(
                // "http://localhost:8000/api/dashboard/editAboutShop",
                "https://api.shuamall.com/api/dashboard/editAboutShop",
                data, {
                    headers: {
                        Authorization: `Bearer ${session?.accessToken}`,
                    },
                })

            if (response.data.success) {
                setInitialData(response.data.shop)
                form.reset(response.data)
                toast.success("Update Successful");
                setEditMode(false)

            } else {
                // @ts-ignore
                // setError(new Error("Failed to fetch data"));
                toast.warning( "Update Failed","There was an error updating your data.")
            }



        } catch (error) {
            // console.error("Error updating data:", error)
            toast.success( "Update Failed")
        }
    }

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

    if (initialData) {
        return (
            <div className="w-[720px] p-6 mb-8">
                {editMode ? (
                    <>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="w-3/4 space-y-6">
                                <div>
                                <FormField
                                    control={form.control}
                                    name="shop_name"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Shop Name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Shop Name" {...field} defaultValue={initialData.shop_name} />
                                            </FormControl>
                                            <FormDescription>
                                                This is your Shop Name.
                                            </FormDescription>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />
                                </div>

                                <div className="mt-6">
                                <FormField
                                    control={form.control}
                                    name="shop_description"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Shop Description</FormLabel>
                                            <FormControl>
                                                <Textarea placeholder="Shop Description" {...field} defaultValue={initialData.shop_description} />
                                            </FormControl>
                                            <FormDescription>
                                                This is your Shop Description.
                                            </FormDescription>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />
                                </div>

                                <div className="mt-6">
                                <FormField
                                    control={form.control}
                                    name="about_shop"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>About Shop</FormLabel>
                                            <FormControl>
                                                <Textarea placeholder="About Shop" {...field} defaultValue={initialData.about_shop}/>
                                            </FormControl>
                                            <FormDescription>
                                                This is your Website About Shop Description.
                                            </FormDescription>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />
                                </div>

                                <div className="mt-6">
                                <FormField
                                    control={form.control}
                                    name="shop_motto"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Shop Motto</FormLabel>
                                            <FormControl>
                                                <Textarea placeholder="Shop Motto" {...field} defaultValue={initialData.shop_motto}/>
                                            </FormControl>
                                            <FormDescription>
                                                This is your Website About Shop Motto.
                                            </FormDescription>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />
                                </div>
                                <Button className="bg-[#fff7f7] hover:bg-[#bfbfbf] text-black-600 border border-2 float-right" type="button" onClick={() => setEditMode(false)}>Cancel</Button>
                                <Button className="float-right mr-2" type="submit">Update</Button>
                            </form>
                        </Form>

                    </>
                ) : (
                    <>
                        <Form {...form}>
                            <FormField
                                control={form.control}
                                name="shop_name"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Shop Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Shop Name" {...field} defaultValue={initialData.shop_name} disabled={true}/>
                                        </FormControl>
                                        <FormDescription>
                                            This is your Shop Name.
                                        </FormDescription>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="shop_description"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Shop Description</FormLabel>
                                        <FormControl>
                                            <Textarea placeholder="Shop Description" {...field} defaultValue={initialData.shop_description} disabled={true}/>
                                        </FormControl>
                                        <FormDescription>
                                            This is your Shop Description.
                                        </FormDescription>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="about_shop"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>About Shop</FormLabel>
                                        <FormControl>
                                            <Textarea placeholder="About Shop" {...field} defaultValue={initialData.about_shop} disabled={true}/>
                                        </FormControl>
                                        <FormDescription>
                                            This is your Website About Shop Description.
                                        </FormDescription>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="shop_motto"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Shop Motto</FormLabel>
                                        <FormControl>
                                            <Textarea placeholder="Shop Motto" {...field} defaultValue={initialData.shop_motto} disabled={true}/>
                                        </FormControl>
                                        <FormDescription>
                                            This is your Website About Shop Motto.
                                        </FormDescription>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                        </Form>

                        <div className="mt-4 mb-4">
                            <Button className="float-right" onClick={() => setEditMode(true)}>Edit</Button>
                        </div>
                    </>
                )}
            </div>
        )
    }
}
