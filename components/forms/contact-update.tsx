// 'use client';
// import { Button } from '@/components/ui/button';
// import {
//     Form,
//     FormControl,
//     FormField,
//     FormItem,
//     FormLabel,
//     FormMessage
// } from '@/components/ui/form';
// import { Heading } from '@/components/ui/heading';
// import { Input } from '@/components/ui/input';
// import { Separator } from '@/components/ui/separator';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { Trash, Facebook, Instagram } from 'lucide-react';
// import { useParams, useRouter } from 'next/navigation';
// import React, { useEffect, useState, useRef } from 'react';
// import { useForm } from 'react-hook-form';
// import * as z from 'zod';
// import { useToast } from '../ui/use-toast';
// import { useLoadScript } from '@react-google-maps/api';
// import axios from 'axios';
//
// const formSchema = z.object({
//     shop_phone_number: z.string(),
//     shop_phone_number2: z.string().optional(),
//     shop_facebook_url: z.string().optional(),
//     shop_instagram_url: z.string().optional(),
//     city: z.string(),
//     physical_address: z.string(),
//     map_location: z.string()
// });
//
// type ContactFormValues = z.infer<typeof formSchema>;
//
// interface ContactFormProps {
//     initialData: any | null;
// }
//
// const libraries = ["places"];
//
// export const ContactUpdateForm: React.FC<ContactFormProps> = ({
//                                                                   initialData
//                                                               }) => {
//     const params = useParams();
//     const router = useRouter();
//     const { toast } = useToast();
//     const [open, setOpen] = useState(false);
//     const [loading, setLoading] = useState(false);
//     const inputRef = useRef(null);
//     const title = initialData ? 'Edit Contact' : 'Create Contact';
//     const description = initialData ? 'Edit a Contact.' : 'Add a new Contact';
//     const toastMessage = initialData ? 'Contact updated.' : 'Contact created.';
//     const action = initialData ? 'Save changes' : 'Create';
//
//     const { isLoaded, loadError } = useLoadScript({
//         googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
//         libraries,
//     });
//
//     const form = useForm<ContactFormValues>({
//         resolver: zodResolver(formSchema),
//         defaultValues: initialData || {
//             shop_phone_number: '',
//             shop_phone_number2: '',
//             shop_facebook_url: '',
//             shop_instagram_url: '',
//             city: '',
//             physical_address: '',
//             map_location: ''
//         }
//     });
//
//     const onSubmit = async (data: ContactFormValues) => {
//         try {
//             setLoading(true);
//             if (initialData) {
//                 await axios.post(`http://localhost:8000/api/dashboard/editShopContact`, data, {
//                     headers: {
//                         Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE3MTk4MTc2MjQsImV4cCI6MTcxOTgyMTIyNCwibmJmIjoxNzE5ODE3NjI0LCJqdGkiOiJCa0hFZ3lRUlZCekpLUHRqIiwic3ViIjoiMSIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.bGqtCOLKuLqISwxLMVzxEUgDmsZiMvg18zuRUQ5RArw`
//                     }
//                 });
//             } else {
//                 await axios.post(`http://localhost:8000/api/dashboard/createShopContact`, data, {
//                     headers: {
//                         Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE3MTk4MTc2MjQsImV4cCI6MTcxOTgyMTIyNCwibmJmIjoxNzE5ODE3NjI0LCJqdGkiOiJCa0hFZ3lRUlZCekpLUHRqIiwic3ViIjoiMSIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.bGqtCOLKuLqISwxLMVzxEUgDmsZiMvg18zuRUQ5RArw`
//                     }
//                 });
//             }
//             router.refresh();
//             router.push(`/dashboard/contacts`);
//             toast({
//                 variant: 'default',
//                 title: 'Success',
//                 description: toastMessage
//             });
//         } catch (error: any) {
//             toast({
//                 variant: 'destructive',
//                 title: 'Uh oh! Something went wrong.',
//                 description: 'There was a problem with your request.'
//             });
//         } finally {
//             setLoading(false);
//         }
//     };
//
//     useEffect(() => {
//         if (!isLoaded || loadError) return;
//
//         const options = {
//             componentRestrictions: { country: "ng" },
//             fields: ["address_components", "geometry"],
//         };
//
//         const autocomplete = new google.maps.places.Autocomplete(inputRef.current, options);
//         autocomplete.addListener("place_changed", () => handlePlaceChanged(autocomplete));
//
//     }, [isLoaded, loadError]);
//
//     const handlePlaceChanged = (autocomplete) => {
//         const place = autocomplete.getPlace();
//
//         if (!place || !place.geometry) {
//             form.setValue("map_location", "");
//             return;
//         }
//
//         const addressComponents = place.address_components;
//
//         const componentMap = {
//             subPremise: "",
//             premise: "",
//             street_number: "",
//             route: "",
//             country: "",
//             postal_code: "",
//             administrative_area_level_2: "",
//             administrative_area_level_1: "",
//         };
//
//         for (const component of addressComponents) {
//             const componentType = component.types[0];
//             if (componentMap.hasOwnProperty(componentType)) {
//                 componentMap[componentType] = component.long_name;
//             }
//         }
//
//         const formattedAddress =
//             `${componentMap.subPremise} ${componentMap.premise} ${componentMap.street_number} ${componentMap.route}`.trim();
//         const latitude = place.geometry.location.lat();
//         const longitude = place.geometry.location.lng();
//
//         form.setValue("physical_address", formattedAddress);
//         form.setValue("city", componentMap.administrative_area_level_2);
//         form.setValue("map_location", `${latitude}, ${longitude}`);
//     };
//
//     return (
//         <>
//             <div className="flex items-center justify-between">
//                 <Heading title={title} description={description}/>
//             </div>
//             <Separator/>
//             <Form {...form}>
//                 <form
//                     onSubmit={form.handleSubmit(onSubmit)}
//                     className="w-full space-y-8">
//                     <h4 className="scroll-m-20 text-2xl font-semibold tracking-tight">Mobile</h4>
//                     <div className="gap-8 md:grid md:grid-cols-2">
//                         <FormField
//                             control={form.control}
//                             name="shop_phone_number"
//                             render={({field}) => (
//                                 <FormItem>
//                                     <FormLabel>Phone Number</FormLabel>
//                                     <FormControl>
//                                         <Input
//                                             disabled={loading}
//                                             placeholder="Phone Number"
//                                             {...field}
//                                         />
//                                     </FormControl>
//                                     <FormMessage/>
//                                 </FormItem>
//                             )}
//                         />
//
//                         <FormField
//                             control={form.control}
//                             name="shop_phone_number2"
//                             render={({field}) => (
//                                 <FormItem>
//                                     <FormLabel>Phone Number 2</FormLabel>
//                                     <FormControl>
//                                         <Input
//                                             disabled={loading}
//                                             placeholder="Phone Number 2"
//                                             {...field}
//                                         />
//                                     </FormControl>
//                                     <FormMessage/>
//                                 </FormItem>
//                             )}
//                         />
//                     </div>
//
//                     <h4 className="scroll-m-20 text-2xl font-semibold tracking-tight">Social Media</h4>
//                     <div className="gap-8 md:grid md:grid-cols-2">
//
//                         <FormField
//                             control={form.control}
//                             name="shop_facebook_url"
//                             render={({field}) => (
//                                 <FormItem>
//                                     <Facebook className="h-4 w-4"/>
//                                     <FormLabel>Facebook Page</FormLabel>
//                                     <FormControl>
//                                         <Input
//                                             disabled={loading}
//                                             placeholder="Facebook Page"
//                                             {...field}
//                                         />
//                                     </FormControl>
//                                     <FormMessage/>
//                                 </FormItem>
//                             )}
//                         />
//
//                         <FormField
//                             control={form.control}
//                             name="shop_instagram_url"
//                             render={({field}) => (
//                                 <FormItem>
//                                     <Instagram className="h-4 w-4"/>
//                                     <FormLabel>Instagram Page</FormLabel>
//                                     <FormControl>
//                                         <Input
//                                             disabled={loading}
//                                             placeholder="Instagram Page"
//                                             {...field}
//                                         />
//                                     </FormControl>
//                                     <FormMessage/>
//                                 </FormItem>
//                             )}
//                         />
//                     </div>
//
//
//                     <h4 className="scroll-m-20 text-2xl font-semibold tracking-tight">Location</h4>
//                     <div className="gap-8 md:grid md:grid-cols-2">
//
//                         <FormField
//                             control={form.control}
//                             name="city"
//                             render={({field}) => (
//                                 <FormItem>
//                                     <FormLabel>City Name</FormLabel>
//                                     <FormControl>
//                                         <Input
//                                             disabled={loading}
//                                             placeholder="City Name"
//                                             {...field}
//                                         />
//                                     </FormControl>
//                                     <FormMessage/>
//                                 </FormItem>
//                             )}
//                         />
//
//                         <FormField
//                             control={form.control}
//                             name="physical_address"
//                             render={({field}) => (
//                                 <FormItem>
//                                     <FormLabel>Physical Address</FormLabel>
//                                     <FormControl>
//                                         <Input
//                                             disabled={loading}
//                                             placeholder="Physical Address"
//                                             {...field}
//                                         />
//                                     </FormControl>
//                                     <FormMessage/>
//                                 </FormItem>
//                             )}
//                         />
//                     </div>
//
//                     <FormField
//                         control={form.control}
//                         name="map_location"
//                         render={({field}) => (
//                             <FormItem>
//                                 <FormLabel>Map Location</FormLabel>
//                                 <FormControl>
//                                     <Input
//                                         ref={inputRef}
//                                         disabled={loading}
//                                         placeholder="Map Location....."
//                                         {...field}
//                                     />
//                                 </FormControl>
//                                 <FormMessage/>
//                             </FormItem>
//                         )}
//                     />
//
//                     <div className="flex justify-end">
//                         <Button disabled={loading} type="submit">
//                             {action}
//                         </Button>
//                     </div>
//                 </form>
//             </Form>
//         </>
//     );
// };
//
'use client'
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
import {Trash, Facebook, Instagram} from 'lucide-react';
import {useParams, useRouter} from 'next/navigation';
import React, {useEffect, useState, useRef} from 'react';
import {useForm} from 'react-hook-form';
import * as z from 'zod';
import {useToast} from '@/components/ui/use-toast';
import {useLoadScript} from '@react-google-maps/api';
import axios from 'axios';
import {useSession} from "next-auth/react";

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

// interface ContactFormProps {
//     // initialData: any | null,
//     initialData?: {
//         physical_address: string;
//         shop_phone_number2: string;
//         shop_instagram_url: string;
//         city: string;
//         shop_phone_number: string;
//         map_location: string;
//         shop_facebook_url: string
//     }
// }
interface InitialData {
    physical_address: string;
    shop_phone_number2: string;
    shop_instagram_url: string;
    city: string;
    shop_phone_number: string;
    map_location: string;
    shop_facebook_url: string
}
interface InitialDatas {
    initialData: InitialData | null;
}
const libraries = ["places"];

const ContactUpdateForm: React.FC<InitialDatas> = ({
                                                           initialData,
                                                       }) => {
    const params = useParams();
    const router = useRouter();
    const {toast} = useToast();
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const inputRef = useRef(null);
    const title = initialData ? 'Edit Contact' : 'Create Contact';
    const description = initialData ? 'Edit a Contact.' : 'Add a new Contact';
    const toastMessage = initialData ? 'Contact updated.' : 'Contact created.';
    const action = initialData ? 'Save changes' : 'Create';

    const {isLoaded, loadError} = useLoadScript({
// @ts-ignore
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
        // @ts-ignore
        libraries,
    });

    const {data: session} = useSession();

    const form = useForm<ContactFormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: initialData || {
            shop_phone_number: '',
            shop_phone_number2: '',
            shop_facebook_url: '',
            shop_instagram_url: '',
            city: '',
            physical_address: '',
            map_location: ''
        }
    });

    const onSubmit = async (data: ContactFormValues) => {
        try {
            setLoading(true);
            if (initialData) {
                // await axios.post("http://localhost:8000/api/dashboard/editShopContact", data, {
                await axios.post("https://api.shuamall.com/api/dashboard/editShopContact", data, {
                    headers: {
                        Authorization: `Bearer ${session?.accessToken}`,
                    },
                });
            } else {
                await axios.post("https://api.shuamall.com/api/dashboard/createShopContact", data, {
                    // await axios.post("http://localhost:8000/api/dashboard/createShopContact", data, {
                    headers: {
                        Authorization: `Bearer ${session?.accessToken}`,
                    },
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
            // console.log(inputRef.current.getBoundingClientRect().width);
        }
    }, []);

    return (
        <>
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
                                    <FormLabel>
                                        Shop Facebook URL
                                        <a href="https://www.facebook.com/" target="_blank"
                                           rel="noopener noreferrer" className="pl-2">
                                            <Facebook size={16} className="inline-block"/>
                                        </a>
                                    </FormLabel>
                                    <FormControl>
                                        <Input disabled={loading} placeholder="Shop Facebook URL" {...field} />
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
                                    <FormLabel>
                                        Shop Instagram URL
                                        <a href="https://www.instagram.com/" target="_blank"
                                           rel="noopener noreferrer" className="pl-2">
                                            <Instagram size={16} className="inline-block"/>
                                        </a>
                                    </FormLabel>
                                    <FormControl>
                                        <Input disabled={loading} placeholder="Shop Instagram URL" {...field} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                    </div>
                    <Button disabled={loading} className="ml-auto" type="submit">
                        {action}
                    </Button>
                </form>
            </Form>
        </>
    )
        ;
};

export default ContactUpdateForm;
