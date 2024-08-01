'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import ContactUpdateForm from '@/components/forms/contact-update';
import { useSession } from 'next-auth/react';
import { SessionProvider } from 'next-auth/react';

interface InitialData {
    physical_address: string;
    shop_phone_number2: string;
    shop_instagram_url: string;
    city: string;
    shop_phone_number: string;
    map_location: string;
    shop_facebook_url: string
}

const ContactDisplay: React.FC = () => {
    const [initialData, setInitialData] = useState<InitialData | null>(null);
    const [loading, setLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const { data: session } = useSession();

    const token = session?.accessToken;
    console.log("TOkennene" + token)
    console.log("TOkennene 222" + session?.accessToken)

    useEffect(() => {
        const fetchInitialData = async () => {
            try {
                const headers: HeadersInit = token ? { 'Authorization': `Bearer ${token}` } : {};
                const response = await fetch('https://api.shuamall.com/api/dashboard/getShopContact', { headers });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data: InitialData = await response.json();
                setInitialData(data);
            } catch (error) {
                console.error('Error fetching initial data:', error);
            } finally {
                setLoading(false);
            }
        };

        if (token) {
            fetchInitialData();
        } else {
            console.error('No access token found');
            setLoading(false);
        }
    }, [token]);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex-1 space-y-4 p-8 pt-6 md:p-8">
            {!isEditing && (
                <Link
                    href="contacts/update"
                    className="px-4 py-2 bg-blue-500 text-white rounded float-right"
                >
                    Edit
                </Link>
            )}

            {isEditing ? (
                <SessionProvider>
                    <ContactUpdateForm initialData={initialData} />
                </SessionProvider>
            ) : (
                initialData && (
                    <div className="bg-white shadow-md rounded p-6 space-y-4">
                        {[
                            { label: 'City', value: initialData.city },
                            { label: 'Location', value: initialData.map_location },
                            { label: 'Physical Address', value: initialData.physical_address },
                            { label: 'Shop Phone Number', value: initialData.shop_phone_number || 'N/A' },
                            { label: 'Shop Phone Number 2', value: initialData.shop_phone_number2 || 'N/A' },
                            { label: 'Shop Facebook URL', value: initialData.shop_facebook_url || 'N/A' },
                            { label: 'Shop Instagram URL', value: initialData.shop_instagram_url || 'N/A' }
                        ].map((item, index) => (
                            <div key={index} className="flex justify-between py-2 border-b last:border-b-0">
                                <div className="text-gray-600 font-medium">{item.label}:</div>
                                <div className="text-gray-900">{item.value}</div>
                            </div>
                        ))}
                    </div>
                )
            )}
        </div>
    );
};

export default ContactDisplay;
