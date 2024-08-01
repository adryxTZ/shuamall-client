import React from 'react';
import RegisterForm from "@/app/(auth)/(routes)/register/registerForm";
import AuthNav from "@/app/(auth)/_components/authNav";

const Page = () => {
    return (
        <>
            <AuthNav/>
            <section className="gi-register py-[40px] max-[767px]:py-[30px]">
                <div
                    className="flex flex-wrap justify-between items-center mx-auto min-[1600px]:max-w-[1600px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
                    <div
                        className="section-title-2 w-full mb-[20px] pb-[20px] flex flex-col justify-center items-center">
                        <h2 className="gi-title mb-[0] font-manrope text-[26px] font-semibold text-[#4b5966] relative inline p-[0] capitalize leading-[1]">Create
                            Your Shop Profile with Shuamall<span></span>
                        </h2>
                        <p className="max-w-[400px] mt-[15px] text-[14px] text-[#777] text-center leading-[23px]">List
                            Your Shop and Grow Your Business.</p>
                    </div>

                    <RegisterForm/>

                </div>
            </section>
        </>
    );
};

export default Page;