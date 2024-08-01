import React from 'react';
import {Card} from "@/components/ui/card";
import {MainLogo} from "@/shared";
import AuthNav from "@/app/(auth)/_components/authNav";
import Link from "next/link";
import LoginForm from "@/app/(auth)/(routes)/sign-in/loginForm";

const Page = () => {
    return (
        <>
            <AuthNav/>
            <section className="gi-register py-[40px] max-[767px]:py-[30px]">
                <div
                    className="flex flex-wrap justify-between items-center mx-auto min-[1600px]:max-w-[1600px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
                    <div
                        className="section-title-2 p-4 w-full flex flex-col justify-center items-center">
                        <h2 className=" text-center gi-title mb-[0] font-manrope text-[26px] font-semibold text-[#4b5966] relative inline p-[0] capitalize leading-[1]">
                            Welcome Back to Shuamall<span></span>
                        </h2>

                        <p className="max-w-[400px] mt-[15px] mb-0 text-[14px] text-[#777] text-center leading-[23px]">List
                            Get access to your account by entering your email and password below.
                            .</p>
                    </div>


                </div>
                <div className='container grid flex-col items-center justify-center round lg:px-0'>
                    <div className='mx-auto flex flex-col justify-center space-y-2 sm:w-[480px] lg:p-8'>
                        <div className='mb-4 flex items-center justify-center'>

                        </div>
                        <Card className='p-6'>
                            <div className='flex flex-col space-y-2 text-center'>
                                <h1 className='text-2xl text-[#4b5966] font-semibold tracking-tight'>Login To Your Account</h1>
                                <p className='text-sm text-muted-foreground'>
                                    Dont have and account? <Link className="text-primarys-600" href="/register">Register Now</Link>
                                </p>
                            </div>
                            <LoginForm />
                            <p className='px-8 text-center text-sm text-muted-foreground'>
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

            </section>

        </>
    );
};

export default Page;