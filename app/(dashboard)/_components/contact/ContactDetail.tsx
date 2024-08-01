// "use client"
// import React, {useEffect, useState} from 'react';
// import axios from 'axios';
// import Link from "next/link";
// import {SessionProvider, useSession} from "next-auth/react";
// import ContactUpdateForm from "@/components/forms/contact-update";
//
// export default function ContactDetail() {
//
//     interface InitialDatas {
//         city: string;
//         location: string;
//         physical_address: string;
//         shop_phone_number?: string;
//         shop_phone_number2?: string;
//         shop_facebook_url?: string;
//         shop_instagram_url?: string;
//     }
//
//     interface EditContactPageProps {
//         params: {
//             id: string;
//         };
//     }
//
// // @ts-ignore
//     const [initialData, setInitialData] = useState<InitialDatas | null>(null);
//     const [loading, setLoading] = useState(true);
//     const [isEditing, setIsEditing] = useState(false);
//     const {data: session} = useSession();
//     useEffect(() => {
//         const fetchInitialData = async () => {
//             try {
//                 const response = await axios.get(
//                     `http://localhost:8000/api/dashboard/getShopContact`,
//                     // `https://api.shuamall.com/api/dashboard/getShopContact`,
//                     {
//                         headers: {
//                             Authorization: `Bearer ${session?.accessToken}`
//                         }
//                     }
//                 );
//                 console.log(response.data);
//                 setInitialData(response.data);
//             } catch (error) {
//                 console.error('Error fetching initial data:', error);
//             } finally {
//                 setLoading(false);
//             }
//         };
//
//         fetchInitialData();
//     }, [params.id]);
//
//     const handleEditClick = () => {
//         setIsEditing(true);
//     };
//
//     if (loading) {
//         return <div>Loading...</div>;
//     }
//
//     // @ts-ignore
//     // @ts-ignore
//     return (
//         <div className="flex-1 space-y-4 p-8 pt-6 md:p-8">
//             {!isEditing && (
//                 <Link
//                     href="contacts/upadate"
//                     className="px-4 py-2 bg-blue-500 text-white rounded float-right">
//                     Edit
//                 </Link>
//             )}
//
//             {isEditing ? (
//                 <SessionProvider>
//                 <ContactUpdateForm initialData={initialData}/>
//                 </SessionProvider>
//             ) : (
//                 initialData && (
//                     // <div className="bg-white shadow-md rounded p-6 space-y-4">
//                     //     <div className="flex justify-between">
//                     //         <div><strong>City:</strong></div>
//                     //         <div>{initialData.city}</div>
//                     //     </div>
//                     //     <div className="flex justify-between">
//                     //         <div><strong>Location:</strong></div>
//                     //         <div>{initialData.location}</div>
//                     //     </div>
//                     //     <div className="flex justify-between">
//                     //         <div><strong>Physical Address:</strong></div>
//                     //         <div>{initialData.physical_address}</div>
//                     //     </div>
//                     //     <div className="flex justify-between">
//                     //         <div><strong>Shop Phone Number:</strong></div>
//                     //         <div>{initialData.shop_phone_number || 'N/A'}</div>
//                     //     </div>
//                     //     <div className="flex justify-between">
//                     //         <div><strong>Shop Phone Number 2:</strong></div>
//                     //         <div>{initialData.shop_phone_number2 || 'N/A'}</div>
//                     //     </div>
//                     //     <div className="flex justify-between">
//                     //         <div><strong>Shop Facebook URL:</strong></div>
//                     //         <div>{initialData.shop_facebook_url || 'N/A'}</div>
//                     //     </div>
//                     //     <div className="flex justify-between">
//                     //         <div><strong>Shop Instagram URL:</strong></div>
//                     //         <div>{initialData.shop_instagram_url || 'N/A'}</div>
//                     //     </div>
//                     // </div>
//
//                     <div className="bg-white shadow-md rounded p-6 space-y-4">
//                         {[
//                             {label: 'City', value: initialData.city},
//                             {label: 'Location', value: initialData.location},
//                             {label: 'Physical Address', value: initialData.physical_address},
//                             {label: 'Shop Phone Number', value: initialData.shop_phone_number || 'N/A'},
//                             {label: 'Shop Phone Number 2', value: initialData.shop_phone_number2 || 'N/A'},
//                             {label: 'Shop Facebook URL', value: initialData.shop_facebook_url || 'N/A'},
//                             {label: 'Shop Instagram URL', value: initialData.shop_instagram_url || 'N/A'}
//                         ].map((item, index) => (
//                             <div key={index} className="flex justify-between py-2 border-b last:border-b-0">
//                                 <div className="text-gray-600 font-medium">{item.label}:</div>
//                                 <div className="text-gray-900">{item.value}</div>
//                             </div>
//                         ))}
//                     </div>
//                 )
//             )}
//         </div>
//     );
// };
//

const ContactDetail = () => {
    return (
        <div>

        </div>
    );
};

export default ContactDetail;
