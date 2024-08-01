"use client";

import React, { HTMLAttributes, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/custom/button'
import { PasswordInput } from '@/components/custom/password-input'
import { cn } from '@/lib/utils'
import Link from "next/link";
import {loginAction} from "@/app/lib/actions/actions";
import {useToast} from "@/components/ui/use-toast";
import FormError from "@/app/(auth)/_components/formError/form-error";
import FormSuccess from "@/app/(auth)/_components/formSuccess/form-success";
import {LoginSchema} from "@/schemas";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

// interface LoginFormProps extends HTMLAttributes<HTMLDivElement> {}

const LoginForm = () => {
    const [isLoading, setIsLoading] = useState(false);

    const [error, setError] = useState<string | undefined>('');
    const [success, setSuccess] = useState<string | undefined>('');

    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email_or_phone: '',
            password: '',
        },
    })

    const onSubmit = async (formData: z.infer<typeof LoginSchema>) => {
        setIsLoading(true);
        setError('');
        setSuccess('');
        // console.log("formdatata ", formData);
        try {
            const data = await loginAction(formData);
            setError(data?.error);
            // @ts-ignore
            setSuccess(data?.success);
            if (!data?.error) {
                toast.success("Sign in success.");
                // toast.success("You are now logged in");
            }

        } catch (e) {
            setError("Invalid Email or Password");
            toast.error("Something went wrong. Please try again later.");

        } finally {
            setIsLoading(false);
        }
        // setTimeout(() => {
        //     setIsLoading(false)
        // }, 3000)
    }

    return (
        <div className={cn('grid gap-6')}>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FormError message={error} />
                    <FormSuccess message={success} />
                    <div className='grid gap-2'>
                        <FormField
                            control={form.control}
                            name='email_or_phone'
                            render={({ field }) => (
                                <FormItem className='space-y-1'>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder='name@shuamall.com' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='password'
                            render={({ field }) => (
                                <FormItem className='space-y-1'>
                                    <div className='flex items-center justify-between'>
                                        <FormLabel>Password</FormLabel>
                                        <Link
                                            href='#'
                                            className='text-sm font-medium text-muted-foreground hover:opacity-75'
                                        >
                                            Forgot password?
                                        </Link>
                                    </div>
                                    <FormControl>
                                        <PasswordInput placeholder='********' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className='mt-2 bg-primarys-500 hover:bg-primarys-600' loading={isLoading}>
                            Login
                        </Button>

                    </div>
                </form>
            </Form>
            <ToastContainer position="bottom-right"/>
        </div>
    )
}
export default LoginForm;

