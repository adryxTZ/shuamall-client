import Sidebar from '@/app/(dashboard)/_components/sideBar/sideBar';
import type {Metadata} from 'next';
import DashboadHeader from "@/app/(dashboard)/_components/layout/header";
import {SessionProvider} from "next-auth/react";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const metadata: Metadata = {
    title: 'Shuamall - Dashboard',
    description: 'Shuamall dashboard '
};

export default function DashboardLayout({children}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <SessionProvider>
                <DashboadHeader/>
            </SessionProvider>
            <div className="flex h-screen overflow-hidden">

                <Sidebar/>
                <main className="flex-1 overflow-hidden pt-16">{children}</main>
                <ToastContainer position="bottom-right"/>
            </div>
        </>
    );
}
