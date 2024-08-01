"use client";

import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormMessage, FormLabel } from "@/components/ui/form";
import { PenLine, LoaderCircle } from "lucide-react";
import { RegisterSchema } from "@/schemas";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FormError from "@/app/(auth)/_components/formError/form-error";
import FormSuccess from "@/app/(auth)/_components/formSuccess/form-success";
import { z } from "zod";

// Function to extract up to two words from the shop name for the subdomain
const generateSubdomain = (shopName: string) => {
    const words = shopName.trim().split(" ");
    return words.slice(0, 2).join("-").toLowerCase();
};

const RegisterForm: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | undefined>('');
    const [success, setSuccess] = useState<string | undefined>('');
    const [logoPreview, setLogoPreview] = useState<string | null>(null);
    const [logoFile, setLogoFile] = useState<File | null>(null);
    const [countries, setCountries] = useState([]);
    const [businessCategories, setBusinessCategories] = useState([]);
    const router = useRouter();

    const form = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            shop_name: "",
            email: "",
            phone_number: "",
            business_type: "",
            logo: "",
            shop_description: "",
            country: "",
            city: "",
            location: "",
            tin: "",
            physical_address: "",
            password: "",
            password_confirmation: "",
            subdomain: ""
        }
    });

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await axios.get("https://api.shuamall.com/api/config/countries");
                setCountries(response.data);
            } catch (error) {
                console.error("Failed to fetch countries", error);
            }
        };

        const fetchBusinessCategories = async () => {
            try {
                const response = await axios.get("https://api.shuamall.com/api/config/business_categories");
                setBusinessCategories(response.data);
            } catch (error) {
                console.error("Failed to fetch business categories", error);
            }
        };

        fetchCountries();
        fetchBusinessCategories();
    }, []);

    const handleLogoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            if (!file.type.startsWith('image/')) {
                setError('The logo field must be an image.');
                setLogoPreview(null);
                return;
            }
            const reader = new FileReader();
            reader.onloadend = () => {
                setLogoPreview(reader.result as string);
            };
            reader.readAsDataURL(file);
            setLogoFile(file);
        } else {
            setLogoPreview(null);
            setLogoFile(null);
        }
    };

    useEffect(() => {
        const subscription = form.watch((value, { name }) => {
            if (name === 'shop_name' && value.shop_name) {
                form.setValue('subdomain', generateSubdomain(value.shop_name));
            }
        });
        return () => subscription.unsubscribe();
    }, [form.watch, form.setValue]);

    const onSubmit = async (data: z.infer<typeof RegisterSchema>) => {
        setIsLoading(true);
        setError('');
        setSuccess('');
        try {
            const formData = new FormData();
            Object.keys(data).forEach((key) => {
                if (key === "logo" && logoFile) {
                    formData.append(key, logoFile);
                    formData.append('file', logoFile);
                } else {
                    // @ts-ignore
                    formData.append(key, data[key]);
                }
            });

            const response = await axios.post(
                "https://api.shuamall.com/api/auth/signup",
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    }
                },
            );

            if (response.data.message === "User Successfully Registered") {
                setSuccess("Registration successful!");
                toast.success("Your shop has been registered successfully.");
                toast.success("Email has been sent to the provided address, Please Verify Your Account.");
                await router.push(`/sign-in`);
            } else {
                setError("Registration failed. Please try again.");
                toast.error("Something went wrong. Please try again later.");
            }
        } catch (error) {
            setError("Registration failed. Please try again.");
            toast.error("Something went wrong. Please try again later.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex flex-wrap w-full">
            <div className="gi-register-wrapper max-w-[934px] my-[0] mx-auto px-[12px]">
                <div className="gi-register-container border-[1px] border-solid border-[#eee] p-[30px] text-left bg-[#fff] rounded-[5px] max-[575px]:p-[15px] dark:bg-dark">
                    <div className="gi-register-form">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-row flex-wrap mx-[-15px]" encType="multipart/form-data">
                                <div className={"w-full"}>
                                    <FormError message={error}/>
                                    <FormSuccess message={success}/>
                                </div>
                                <FormField control={form.control} name="shop_name" render={({ field }) => (
                                    <span className="gi-register-wrap gi-register-half mb-4 w-[50%] px-[15px]">
                                        <FormItem>
                                            <FormLabel className="inline-block text-[#4b5966] text-[15px] mb-4 font-medium tracking-[0] leading-[1]">Shop Name*</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="text"
                                                    placeholder="Enter the name of your shop"
                                                    className="w-full bg-transparent border-[1px] border-solid border-[#eee] text-[#777] text-[14px] mb-[26px] px-[15px] outline-[0] rounded-[5px] h-[50px]"
                                                    required
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    </span>
                                )}/>
                                <FormField control={form.control} name="email" render={({ field }) => (
                                    <span className="gi-register-wrap gi-register-half w-[50%] px-[15px]">
                                        <FormItem>
                                            <FormLabel className="inline-block mb-[9px] text-[#4b5966] text-[15px] font-medium tracking-[0] leading-[1]">Email*</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="email"
                                                    placeholder="Enter your email address"
                                                    className="w-full bg-transparent border-[1px] border-solid border-[#eee] text-[#777] text-[14px] mb-[26px] px-[15px] outline-[0] rounded-[5px] h-[50px]"
                                                    required
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    </span>
                                )}/>
                                <FormField control={form.control} name="phone_number" render={({ field }) => (
                                    <span className="gi-register-wrap gi-register-half mb-4 w-[50%] px-[15px]">
                                        <FormItem>
                                            <FormLabel className="inline-block mb-[9px] text-[#4b5966] text-[15px] font-medium tracking-[0] leading-[1]">Phone Number*</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="text"
                                                    placeholder="Enter your phone number"
                                                    className="w-full bg-transparent border-[1px] border-solid border-[#eee] text-[#777] text-[14px] mb-[26px] px-[15px] outline-[0] rounded-[5px] h-[50px]"
                                                    required
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    </span>
                                )}/>
                                <FormField control={form.control} name="business_type" render={({ field }) => (
                                    <span className="gi-register-wrap gi-register-half mb-4 w-[50%] px-[15px]">
                                        <FormItem>
                                            <FormLabel className="inline-block mb-[9px] text-[#4b5966] text-[15px] font-medium tracking-[0] leading-[1]">What are you selling *</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger className="px-[10px] text-[#777] font-light cursor-pointer">
                                                        <SelectValue placeholder="Select business type"/>
                                                    </SelectTrigger>
                                                </FormControl>
                                                <FormMessage/>
                                                <SelectContent>
                                                    {businessCategories.map((category: any) => (
                                                        <SelectItem key={category.id} value={String(category.id)}>{category.business_category_name}</SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </FormItem>
                                    </span>
                                )}/>
                                <FormField control={form.control} name="logo" render={({ field }) => (
                                    <span className="gi-register-wrap gi-register-half mb-4 w-[50%] px-[15px]">
                                        <FormItem>
                                            <FormLabel className="inline-block mb-[9px] text-[#4b5966] text-[15px] font-medium tracking-[0] leading-[1]">Upload your logo</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="file"
                                                    placeholder="Upload your logo"
                                                    id="logo"
                                                    className="w-full bg-transparent border-[1px] border-solid border-[#eee] text-[#777] text-[14px] mb-[26px] px-[15px] outline-[0] rounded-[5px] h-[50px]"
                                                    {...field}
                                                    onChange={(e) => {
                                                        field.onChange(e);
                                                        handleLogoChange(e);
                                                    }}
                                                />
                                            </FormControl>
                                            <FormMessage/>
                                            {logoPreview && (
                                                <div className="mt-4">
                                                    <img src={logoPreview} alt="Logo Preview" className="w-24 h-24 object-cover rounded-full"/>
                                                </div>
                                            )}
                                        </FormItem>
                                    </span>
                                )}/>
                                <FormField control={form.control} name="shop_description" render={({ field }) => (
                                    <span className="gi-register-wrap w-[50%] px-[15px]">
                                        <FormLabel className="inline-block mb-[9px] text-[#4b5966] text-[15px] font-medium tracking-[0] leading-[1]">Shop Description</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder="Enter your shop summary about your shop"
                                                className="w-full bg-transparent border-[1px] border-solid border-[#eee] text-[#777] text-[14px] mb-[26px] px-[15px] outline-[0] rounded-[5px] h-[100px]"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage/>
                                    </span>
                                )}/>
                                <FormField control={form.control} name="country" render={({ field }) => (
                                    <span className="gi-register-wrap gi-register-half mb-4 w-[50%] px-[15px]">
                                        <FormItem>
                                            <FormLabel className="inline-block mb-[9px] text-[#4b5966] text-[15px] font-medium tracking-[0] leading-[1]">Country*</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger className="px-[10px] text-[#777] font-light cursor-pointer">
                                                        <SelectValue placeholder="Select your country"/>
                                                    </SelectTrigger>
                                                </FormControl>
                                                <FormMessage/>
                                                <SelectContent>
                                                    {countries.map((country: any) => (
                                                        <SelectItem key={country.id} value={String(country.id)}>{country.country_name} ({country.country_currency})</SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </FormItem>
                                    </span>
                                )}/>
                                <FormField control={form.control} name="city" render={({ field }) => (
                                    <span className="gi-register-wrap gi-register-half w-[50%] px-[15px]">
                                        <FormLabel className="inline-block mb-[9px] text-[#4b5966] text-[15px] font-medium tracking-[0] leading-[1]">City</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="text"
                                                placeholder="e.g. Dar es Salaam"
                                                className="w-full bg-transparent border-[1px] border-solid border-[#eee] text-[#777] text-[14px] mb-[26px] px-[15px] outline-[0] rounded-[5px] h-[50px]"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage/>
                                    </span>
                                )}/>
                                <FormField control={form.control} name="location" render={({ field }) => (
                                    <span className="gi-register-wrap w-[50%] px-[15px]">
                                        <FormLabel className="inline-block mb-[9px] text-[#4b5966] text-[15px] font-medium tracking-[0] leading-[1]">Location*</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="text"
                                                placeholder="e.g., Kariako - Msimbazi"
                                                className="w-full bg-transparent border-[1px] border-solid border-[#eee] text-[#777] text-[14px] mb-[26px] px-[15px] outline-[0] rounded-[5px] h-[50px]"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage/>
                                    </span>
                                )}/>
                                <FormField control={form.control} name="tin" render={({ field }) => (
                                    <span className="gi-register-wrap gi-register-half w-[50%] px-[15px]">
                                        <FormLabel
                                            className="inline-block mb-[9px] text-[#4b5966] text-[15px] font-medium tracking-[0] leading-[1]">TIN Number (000-000-000) </FormLabel>
                                        <FormControl>
                                            <Input
                                                type="text"
                                                placeholder="Enter TIN number"
                                                className="w-full bg-transparent border-[1px] border-solid border-[#eee] text-[#777] text-[14px] mb-[26px] px-[15px] outline-[0] rounded-[5px] h-[50px]"
                                                {...field}
                                            />
                                        </FormControl>

                                        <FormMessage/>
                                    </span>
                                )}/>
                                <FormField control={form.control} name="physical_address" render={({ field }) => (
                                    <span className="gi-register-wrap gi-register-half w-[50%] px-[15px]">
                                        <FormLabel className="inline-block mb-[9px] text-[#4b5966] text-[15px] font-medium tracking-[0] leading-[1]">Physical Address*</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="text"
                                                placeholder="eg P.O.Box 118.."
                                                className="w-full bg-transparent border-[1px] border-solid border-[#eee] text-[#777] text-[14px] mb-[26px] px-[15px] outline-[0] rounded-[5px] h-[50px]"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage/>
                                    </span>
                                )}/>
                                <FormField control={form.control} name="password" render={({ field }) => (
                                    <span className="gi-register-wrap gi-register-half w-[50%] px-[15px]">
                                        <FormLabel className="inline-block mb-[9px] text-[#4b5966] text-[15px] font-medium tracking-[0] leading-[1]">Password*</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="password"
                                                placeholder="Enter your password"
                                                className="w-full bg-transparent border-[1px] border-solid border-[#eee] text-[#777] text-[14px] mb-[26px] px-[15px] outline-[0] rounded-[5px] h-[50px]"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage/>
                                    </span>
                                )}/>
                                <FormField control={form.control} name="password_confirmation" render={({ field }) => (
                                    <span className="gi-register-wrap gi-register-half w-[50%] px-[15px]">
                                        <FormLabel className="inline-block mb-[9px] text-[#4b5966] text-[15px] font-medium tracking-[0] leading-[1]">Confirm Password*</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="password"
                                                placeholder="Confirm your password"
                                                className="w-full bg-transparent border-[1px] border-solid border-[#eee] text-[#777] text-[14px] mb-[26px] px-[15px] outline-[0] rounded-[5px] h-[50px]"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage/>
                                    </span>
                                )}/>
                                <FormField control={form.control} name="subdomain" render={({ field }) => (
                                    <span className="gi-register-wrap w-[50%] px-[15px]">
                                        <FormLabel className="inline-block mb-[9px] text-[#4b5966] text-[15px] font-medium tracking-[0] leading-[1]">Subdomain ( shop.shuamall.com )</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="text"
                                                placeholder="e.g., shop.shuamall.com"
                                                className="w-full bg-transparent border-[1px] border-solid border-[#eee] text-[#777] text-[14px] mb-[26px] px-[15px] outline-[0] rounded-[5px] h-[50px]"
                                                {...field}
                                                readOnly
                                            />
                                        </FormControl>
                                        <FormMessage/>
                                    </span>
                                )}/>

                                <div className="flex w-full px-[15px] justify-between mt-4">
                                    {isLoading ? (
                                        <Button
                                            id="btn-form"
                                            className="i-btn-1 py-[8px] px-[25px] flex bg-primary text-[#fff] border-[0] transition-all duration-\[0.3s\] ease-in-out overflow-hidden text-center text-[14px] font-semibold relative rounded-[5px] hover:bg-[#5caf90]"
                                            disabled
                                        >
                                            Registering..
                                            <LoaderCircle className="animate-spin ml-2 text-white"/>
                                        </Button>
                                    ) : (
                                        <Button
                                            type="submit"
                                            id="btn-form"
                                            className="i-btn-1 py-[8px] px-[25px] flex bg-primary text-[#fff] border-[0] transition-all duration-\[0.3s\] ease-in-out overflow-hidden text-center text-[14px] font-semibold relative rounded-[5px] hover:bg-[#5caf90]"
                                        >
                                            Register Shop <PenLine className="ml-2" size={16}/>
                                        </Button>
                                    )}
                                </div>
                            </form>
                        </Form>
                        <ToastContainer position="bottom-right"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterForm;
