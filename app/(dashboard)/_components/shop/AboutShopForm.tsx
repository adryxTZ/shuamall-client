"use client"
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Textarea } from '@/components/ui/textarea';
import axios from 'axios';
import { Separator } from '@/components/ui/separator';
import { z } from 'zod';
import { useSession } from "next-auth/react";

const formSchema = z.object({
    about_shop: z.string(),
});

type ContactFormValues = z.infer<typeof formSchema>;

export default function AboutShopForm() {
    const [loading, setLoading] = useState(true);
    const [initialData, setInitialData] = useState<ContactFormValues | null>(null);

    const form = useForm<ContactFormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            about_shop: '', // Set a default value
        },
    });

    const { data: session } = useSession();

    useEffect(() => {
        const fetchInitialData = async () => {
            try {
                const response = await axios.get(
                    `https://api.shuamall.com/api/dashboard/aboutShop`,
                    // `http://localhost:8000/api/dashboard/aboutShop`,
                    {
                        headers: {
                            Authorization: `Bearer ${session?.accessToken}`,
                        },
                    }
                );
                console.log(response.data);
                // Assuming response.data contains { about_shop: "Some text" }
                form.reset({ about_shop: response.data.about_shop }); // Reset form with fetched data
                setInitialData(response.data);
            } catch (error) {
                console.error('Error fetching initial data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchInitialData();
    }, [form, session]);

    const onSubmit = async (data: ContactFormValues) => {
        try {
            setLoading(true);
            await axios.post(
                "https://api.shuamall.com/api/dashboard/editAboutShop",
                // "http://localhost:8000/api/dashboard/editAboutShop",
                data,
                {
                    headers: {
                        Authorization: `Bearer ${session?.accessToken}`,
                    },
                }
            );
            console.log('Form submitted successfully:', data);
            // Handle success, e.g., show toast, redirect, etc.
        } catch (error) {
            console.error('Error submitting form:', error);
            // Handle error, e.g., show error message
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Separator className="my-4" />
            {loading ? (
                <p>Loading...</p>
            ) : (
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8">
                        <div>
                            <label>About us</label>
                            <br />
                            <Textarea
                                disabled={loading}
                                placeholder="About us"
                                {...form.register('about_shop')}
                            />
                        </div>
                    </div>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                        Submit
                    </button>
                </form>
            )}
        </>
    );
}
