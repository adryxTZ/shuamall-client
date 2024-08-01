"use client"

import { cn } from '@/lib/utils';
import { MobileSidebar } from './mobile-sidebar';
import { UserNav } from './user-nav';
import ThemeToggle from "@/app/(dashboard)/_components/layout/ThemeToggle/theme-toggle";
import {Search} from "@/components/search";
import {MainLogo} from "@/shared";

export default function DashboadHeader() {
  return (
    <div className="supports-backdrop-blur:bg-background/60 fixed left-0 right-0 top-0 z-20 border-b bg-background/95 backdrop-blur">
      <nav className="flex h-14 items-center justify-between px-4">
        <div className="hidden lg:block">
          {/*<Link*/}
          {/*    href={'/'}*/}
          {/*    target="_blank"*/}
          {/*>*/}
          {/*  */}
          {/*</Link>*/}
          <MainLogo/>
        </div>
        <div className={cn('block lg:!hidden')}>
          <MobileSidebar/>
        </div>

        <div className='ml-auto flex items-center space-x-4'>
          <Search/>
          <ThemeToggle/>
          <UserNav/>
        </div>
      </nav>
    </div>
  );
}
