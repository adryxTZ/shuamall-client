import React from 'react';
import {Card} from "@/components/ui/card";
import {MainLogo} from "@/shared";
import LoginForm from "@/app/(auth)/(routes)/sign-in/loginForm";

const Page = () => {
    return (
        <>
            <div className='container grid h-svh flex-col items-center justify-center bg-primary-foreground lg:max-w-none lg:px-0'>
                <div className='mx-auto flex w-full flex-col justify-center space-y-2 sm:w-[480px] lg:p-8'>
                    <div className='mb-4 flex items-center justify-center'>
                        <div>
                            <MainLogo />
                        </div>

                    </div>
                    <Card className='p-6'>
                        <div className='flex flex-col space-y-2 text-center'>
                            <h1 className='text-2xl font-semibold tracking-tight'>Login To Your Account</h1>
                            <p className='text-sm text-muted-foreground'>
                                Get access to your account by entering your email and password below.
                            </p>
                        </div>
                        <LoginForm/>
                        <p className='mt-4 px-8 text-center text-sm text-muted-foreground'>
                            By clicking login, you agree to our{' '}
                            <a
                                href='/terms'
                                className='underline underline-offset-4 hover:text-primary'
                            >
                                Terms of Service
                            </a>{' '}
                            and{' '}
                            <a
                                href='/privacy'
                                className='underline underline-offset-4 hover:text-primary'
                            >
                                Privacy Policy
                            </a>
                            .
                        </p>
                    </Card>
                </div>
            </div>

        </>
    );
};

export default Page;