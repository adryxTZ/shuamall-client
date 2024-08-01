// app/(shops)/(routes)/[shopId]/page.tsx
import { Suspense } from 'react';
import ShopDetails from './_components/shopDetails';
import { notFound } from 'next/navigation';

const ShopPage = ({ params }: { params: { shopId: number } }) => {
    if (!params.shopId) {
        notFound();
    }

    return (
        <div>
            <Suspense fallback={<div>Loading shop details...</div>}>
                <ShopDetails shopId={params.shopId} />
            </Suspense>
        </div>
    );
};

export default ShopPage;