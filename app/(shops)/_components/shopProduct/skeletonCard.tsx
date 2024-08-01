import React from 'react';
import {Skeleton} from "@/components/ui/skeleton";

const SkeletonCard = () => {
    return (
        <div className="max-w-[350px] rounded-lg">
            <div className="h-[196px]">
                <Skeleton className="h-full w-full rounded-lg"/>
            </div>
            <div className="space-y-3 mt-3">
                <div className="flex items-center justify-between space-x-4">

                        {/*<Skeleton className="h-4 w-12"/>*/}
                        <Skeleton className="h-4 w-50"/>
                    <Skeleton className="h-10 w-10 rounded-full"/>

                </div>
                <Skeleton className="h-4 w-[20%] rounded"/>
                <Skeleton className="h-4 w-[20%] rounded"/>

                {/*<Skeleton className="h-6 w-[80%] rounded"/>*/}
                <Skeleton className="h-6 w-[20%] rounded"/>

            </div>
        </div>
    );
};

export default SkeletonCard;