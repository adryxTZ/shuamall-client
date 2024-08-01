'use client';

import {Button} from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form';
import {Heading} from '@/components/ui/heading';
import {Input} from '@/components/ui/input';
import {Separator} from '@/components/ui/separator';
import {zodResolver} from '@hookform/resolvers/zod';
import {useParams, useRouter} from 'next/navigation';
import React, {useEffect, useState, useRef} from 'react';
import {useForm} from 'react-hook-form';
import * as z from 'zod';
import {useToast} from '@/components/ui/use-toast';
import {useLoadScript} from '@react-google-maps/api';
import axios from 'axios';
import Link from "next/link";

const formSchema = z.object({
    shop_phone_number: z.string(),
    shop_phone_number2: z.string().optional(),
    shop_facebook_url: z.string().optional(),
    shop_instagram_url: z.string().optional(),
    city: z.string(),
    physical_address: z.string(),
    map_location: z.string()
});

type ContactFormValues = z.infer<typeof formSchema>;

interface ContactFormProps {
    initialContactData: ContactFormValues | null;
}

const libraries = ["places"];

const ContactUpdateForm: React.FC<ContactFormProps> = ({ initialContactData }) => {
    const params = useParams();
    const router = useRouter();
    const {toast} = useToast();
    const [loading, setLoading] = useState(false);
    const [contactData, setContactData] = useState<ContactFormValues | null>(initialContactData);
    const inputRef = useRef(null);
    const title = contactData ? 'Edit Contact' : 'Create Contact';
    const description = contactData ? 'Edit a Contact.' : 'Add a new Contact';
    const toastMessage = contactData ? 'Contact updated.' : 'Contact created.';
    const action = contactData ? 'Save changes' : 'Create';

    const {isLoaded, loadError} = useLoadScript({
        // @ts-ignore
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
        // @ts-ignore
        libraries,
    });

    const form = useForm<ContactFormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: contactData || {
            shop_phone_number: '',
            shop_phone_number2: '',
            shop_facebook_url: '',
            shop_instagram_url: '',
            city: '',
            physical_address: '',
            map_location: ''
        }
    });

    useEffect(() => {
        const fetchInitialData = async () => {
            try {
                const response = await axios.get(
                    `https://api.shuamall.com/api/dashboard/getShopContact`,
                    // `http://localhost:8000/api/dashboard/getShopContact`,
                    {
                        headers: {
                            Authorization: "Bearer YOUR_TOKEN_HERE",
                        }
                    }
                );
                setContactData(response.data);
                form.reset(response.data); // Reset form with fetched data
            } catch (error) {
                console.error('Error fetching initial data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchInitialData();
    }, [params.id]);

    const onSubmit = async (data: ContactFormValues) => {
        try {
            setLoading(true);
            if (contactData) {
                // await axios.post("http://localhost:8000/api/dashboard/editShopContact", data, {
                await axios.post("https://api.shuamall.com/api/dashboard/editShopContact", data, {
                    headers: {
                        Authorization: "Bearer ",
                    }
                });
            }

            toast({
                description: toastMessage
            });

            router.push(`/dashboard/contacts`);
            router.refresh();
        } catch (error) {
            toast({
                variant: 'destructive',
                title: 'Something went wrong.',
                description: 'Your contact was not updated. Please try again.'
            });
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (inputRef.current) {
            // @ts-ignore
            // console.log(inputRef.current.getBoundingClientRect().width);
        }
    }, []);

    return (
        <>
            <div className="p-8">
                <div className="flex items-center justify-between">
                    <Heading title={title} description={description}/>
                </div>
                <Separator className="my-4"/>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <FormField
                                control={form.control}
                                name="city"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>City</FormLabel>
                                        <FormControl>
                                            <Input disabled={loading} placeholder="City" {...field} />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="physical_address"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Physical Address</FormLabel>
                                        <FormControl>
                                            <Input disabled={loading} placeholder="Physical Address" {...field} />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="map_location"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Map Location</FormLabel>
                                        <FormControl>
                                            <Input
                                                disabled={loading}
                                                placeholder="Map Location"
                                                {...field}
                                                ref={inputRef}
                                            />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="shop_phone_number"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Shop Phone Number</FormLabel>
                                        <FormControl>
                                            <Input disabled={loading} placeholder="Shop Phone Number" {...field} />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="shop_phone_number2"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Shop Phone Number 2</FormLabel>
                                        <FormControl>
                                            <Input disabled={loading} placeholder="Shop Phone Number 2" {...field} />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="shop_facebook_url"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Facebook</FormLabel>
                                        <FormControl>
                                            <Input disabled={loading} placeholder="Facebook URL" {...field} />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="shop_instagram_url"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Instagram</FormLabel>
                                        <FormControl>
                                            <Input disabled={loading} placeholder="Instagram URL" {...field} />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                        </div>
                        <Button disabled={loading} className="ml-auto float-right" type="submit">
                            {action}
                        </Button>

                        <Link
                            href="dashboard/contacts"
                            className="px-4 py-2 bg-blue-500 text-white rounded float-right mr-2">
                            back
                        </Link>

                    </form>
                </Form>
            </div>
        </>
    );
};

export default ContactUpdateForm;
