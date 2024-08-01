'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/custom/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {useSession} from "next-auth/react";

export function UserNav() {
  const {data: session} = useSession();

  // console.log("sessions "+ session?.accessToken);
  // const getInitials = (name:string | null | undefined ) => {
  //   // @ts-ignore
  //   const parts = name.split(' ');
  //   const firstName = parts[0];
  //   const lastName = parts.length > 1 ? parts[parts.length - 1] : '';
  //   return `${firstName.charAt(0)}${lastName.charAt(0)}`;
  // }

  return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant='ghost' className='relative h-8 w-8 rounded-full'>
            <Avatar className='h-8 w-8'>
              <AvatarImage src='/avatars/01.png' alt='@shadcn' />
              {/*<AvatarFallback>{getInitials(session?.user?.name)}</AvatarFallback>*/}
              <AvatarFallback>SM</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='w-56' align='end' forceMount>
          <DropdownMenuLabel className='font-normal'>
            <div className='flex flex-col space-y-1'>
              <p className='text-sm font-medium leading-none'>{session?.user.phone_number}dddd</p>
              <p className='text-xs leading-none text-muted-foreground'>
                {session?.user?.email}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              Profile
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Billing
              <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Settings
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>New Team</DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            Log out
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
  )
}

// import { Avatar, AvatarFallback, AvatarImage } from '@/_components/ui/avatar';
// import { Button } from '@/_components/ui/button';
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuGroup,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuShortcut,
//   DropdownMenuTrigger
// } from '@/_components/ui/dropdown-menu';
// import { signOut, useSession } from 'next-auth/react';

// export function UserNav() {
  // const { data: session } = useSession();
  // if (session) {
  //   return (
  //     <DropdownMenu>
  //       <DropdownMenuTrigger asChild>
  //         <Button variant="ghost" className="relative h-8 w-8 rounded-full">
  //           <Avatar className="h-8 w-8">
  //             <AvatarImage
  //               src={session.user?.image ?? ''}
  //               alt={session.user?.name ?? ''}
  //             />
  //             <AvatarFallback>{session.user?.name?.[0]}</AvatarFallback>
  //           </Avatar>
  //         </Button>
  //       </DropdownMenuTrigger>
  //       <DropdownMenuContent className="w-56" align="end" forceMount>
  //         <DropdownMenuLabel className="font-normal">
  //           <div className="flex flex-col space-y-1">
  //             <p className="text-sm font-medium leading-none">
  //               {session.user?.name}
  //             </p>
  //             <p className="text-xs leading-none text-muted-foreground">
  //               {session.user?.email}
  //             </p>
  //           </div>
  //         </DropdownMenuLabel>
  //         <DropdownMenuSeparator />
  //         <DropdownMenuGroup>
  //           <DropdownMenuItem>
  //             Profile
  //             <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
  //           </DropdownMenuItem>
  //           <DropdownMenuItem>
  //             Billing
  //             <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
  //           </DropdownMenuItem>
  //           <DropdownMenuItem>
  //             Settings
  //             <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
  //           </DropdownMenuItem>
  //           <DropdownMenuItem>New Team</DropdownMenuItem>
  //         </DropdownMenuGroup>
  //         <DropdownMenuSeparator />
  //         <DropdownMenuItem onClick={() => signOut()}>
  //           Log out
  //           <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
  //         </DropdownMenuItem>
  //       </DropdownMenuContent>
  //     </DropdownMenu>
  //   );
  // }
// }
