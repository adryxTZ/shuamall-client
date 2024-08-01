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

const FormSchema = z.object({
    shop_phone_number: z.string().min(10, {
        message: "Shop phone number must be at least 10 characters.",
    }),
    shop_phone_number2: z.string().min(10, {
        message: "Shop phone number 2 must be at least 10 characters.",
    }),
    physical_address: z.string().min(1, {
        message: "Physical Address must be at least 1 characters.",
    }),
    city: z.string().min(1, {
        message: "City must be at least 1 characters.",
    }),
    location: z.string().min(1, {
        message: "location must be at least 1 characters.",
    }),
    shop_facebook_url: z.string().min(2, {
        message: "Facebook URL must be at least 2 characters.",
    }),
    shop_instagram_url: z.string().min(2, {
        message: "Instagram URL must be at least 2 characters.",
    })
})

interface contactDetailsProps {
    shop_phone_number: string,
    shop_phone_number2: string,
    physical_address: string,
    city: string,
    location: string,
    shop_facebook_url: string,
    shop_instagram_url: string,
}

export function ContactDetailEdit() {
    const [editMode, setEditMode] = useState(false)
    const [initialData, setInitialData] = useState<contactDetailsProps>()
    const {data: session} = useSession();

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            shop_phone_number: "",
            shop_phone_number2: "",
            physical_address: "",
            city: "",
            location: "",
            shop_facebook_url: "",
            shop_instagram_url: "",
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
                // "http://localhost:8000/api/dashboard/editShopContact",
                "https://api.shuamall.com/api/dashboard/editShopContact",
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
                toast.warning("Update Failed")
            }


        } catch (error) {
            // console.error("Error updating data:", error)
            toast.success("Update Failed")
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
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                <div className="flex">
                                    <div className="w-1/2">
                                        <FormField
                                            control={form.control}
                                            name="shop_phone_number"
                                            render={({field}) => (
                                                <FormItem>
                                                    <FormLabel>Phone Number</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Phone Number" {...field}
                                                               defaultValue={initialData.shop_phone_number}/>
                                                    </FormControl>
                                                    <FormDescription>
                                                        This is your Shop Phone number.
                                                    </FormDescription>
                                                    <FormMessage/>
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    <div className="w-1/2 ml-5">
                                        <FormField
                                            control={form.control}
                                            name="shop_phone_number2"
                                            render={({field}) => (
                                                <FormItem>
                                                    <FormLabel>Phone Number 2</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Phone Number 2" {...field}
                                                               defaultValue={initialData.shop_phone_number2}/>
                                                    </FormControl>
                                                    <FormDescription>
                                                        This is your Shop Alternative Phone Number.
                                                    </FormDescription>
                                                    <FormMessage/>
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                </div>


                                <div className="flex">
                                    <div className="w-1/3">
                                        <FormField
                                            control={form.control}
                                            name="physical_address"
                                            render={({field}) => (
                                                <FormItem>
                                                    <FormLabel>Shop Physical Address</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Physical Address" {...field}
                                                               defaultValue={initialData.physical_address}/>
                                                    </FormControl>
                                                    <FormDescription>
                                                        This is your Shop Pysical Location.
                                                    </FormDescription>
                                                    <FormMessage/>
                                                </FormItem>
                                            )}
                                        />
                                    </div>

                                    <div className="w-1/3 ml-5">
                                        <FormField
                                            control={form.control}
                                            name="city"
                                            render={({field}) => (
                                                <FormItem>
                                                    <FormLabel>Shop City</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Shop City" {...field}
                                                               defaultValue={initialData.city}/>
                                                    </FormControl>
                                                    <FormDescription>
                                                        This is your Shop City.
                                                    </FormDescription>
                                                    <FormMessage/>
                                                </FormItem>
                                            )}
                                        />
                                    </div>


                                    <div className="w-1/3 ml-5">
                                        <FormField
                                            control={form.control}
                                            name="location"
                                            render={({field}) => (
                                                <FormItem>
                                                    <FormLabel>Shop Location</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Shop Location" {...field}
                                                               defaultValue={initialData.location}/>
                                                    </FormControl>
                                                    <FormDescription>
                                                        This is your Shop Location.
                                                    </FormDescription>
                                                    <FormMessage/>
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <FormField
                                        control={form.control}
                                        name="shop_facebook_url"
                                        render={({field}) => (
                                            <FormItem>
                                                <FormLabel>Shop Facebook (url)</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Shop Facebook Url" {...field}
                                                           defaultValue={initialData.shop_facebook_url}/>
                                                </FormControl>
                                                <FormDescription>
                                                    This is your Facebook URL.
                                                    <a href={initialData.shop_facebook_url} target="_blank">Click Here</a>
                                                </FormDescription>
                                                <FormMessage/>
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <div>
                                    <FormField
                                        control={form.control}
                                        name="shop_instagram_url"
                                        render={({field}) => (
                                            <FormItem>
                                                <FormLabel>Shop Instagram (url)</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Shop Facebook Url" {...field}
                                                           defaultValue={initialData.shop_instagram_url}/>
                                                </FormControl>
                                                <FormDescription>
                                                    This is your Instagram URL.
                                                    <a href={initialData.shop_instagram_url} target="_blank">Click Here</a>
                                                </FormDescription>
                                                <FormMessage/>
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <Button
                                    className="bg-[#fff7f7] hover:bg-[#bfbfbf] text-black-600 border-2 float-right"
                                    type="button" onClick={() => setEditMode(false)}>Cancel</Button>
                                <Button className="float-right mr-2" type="submit">Update</Button>
                            </form>
                        </Form>

                    </>
                ) : (
                    <>
                        <Form {...form}>
                            <div className="flex">
                                <div className="w-1/2">
                                    <FormField
                                        control={form.control}
                                        name="shop_phone_number"
                                        render={({field}) => (
                                            <FormItem>
                                                <FormLabel>Phone Number</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Phone Number" {...field}
                                                           value={initialData.shop_phone_number} disabled={true}/>
                                                </FormControl>

                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className="w-1/2 ml-5">
                                    <FormField
                                        control={form.control}
                                        name="shop_phone_number2"
                                        render={({field}) => (
                                            <FormItem>
                                                <FormLabel>Phone Number 2</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Phone Number 2" {...field}
                                                           value={initialData.shop_phone_number2} disabled={true}/>
                                                </FormControl>

                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </div>


                            <div className="flex mt-4">
                                <div className="w-1/3">
                                    <FormField
                                        control={form.control}
                                        name="physical_address"
                                        render={({field}) => (
                                            <FormItem>
                                                <FormLabel>Shop Physical Address</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Physical Address" {...field}
                                                           value={initialData.physical_address} disabled={true}/>
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <div className="w-1/3 ml-5">
                                    <FormField
                                        control={form.control}
                                        name="city"
                                        render={({field}) => (
                                            <FormItem>
                                                <FormLabel>Shop City</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Shop City" {...field}
                                                           value={initialData.city} disabled={true}/>
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                </div>


                                <div className="w-1/3 ml-5">
                                    <FormField
                                        control={form.control}
                                        name="location"
                                        render={({field}) => (
                                            <FormItem>
                                                <FormLabel>Shop Location</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Shop Location" {...field}
                                                           value={initialData.location} disabled={true}/>
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </div>

                            <div className="mt-4">
                                <FormField
                                    control={form.control}
                                    name="shop_facebook_url"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Shop Facebook (url)</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Shop Facebook Url" {...field}
                                                       value={initialData.shop_facebook_url} disabled={true}/>
                                            </FormControl>
                                            <FormDescription>
                                                This is your Facebook URL.
                                                <a href={initialData.shop_facebook_url} target="_blank">Click Here</a>
                                            </FormDescription>
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <div className="mt-4">
                                <FormField
                                    control={form.control}
                                    name="shop_instagram_url"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Shop Instagram (url)</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Shop Facebook Url" {...field}
                                                       value={initialData.shop_instagram_url} disabled={true}/>
                                            </FormControl>
                                            <FormDescription>
                                                This is your Instagram URL.
                                                <a href={initialData.shop_instagram_url} target="_blank">Click Here</a>
                                            </FormDescription>

                                        </FormItem>
                                    )}
                                />
                            </div>

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
