// "use client"
// import React, { useState, ChangeEvent, FormEvent } from "react";
// import {
//     Dialog,
//     DialogContent,
//     DialogDescription,
//     DialogFooter,
//     DialogHeader,
//     DialogTitle,
//     DialogTrigger
// } from "@/components/ui/dialog";
// import { Upload, Trash2 } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Label } from "@/components/ui/label";
// import { Input } from "@/components/ui/input";
// import { useSession } from "next-auth/react";
//
// interface UploadProductImageProps {
//     productID: string;
// }
//
// const UploadProductImage: React.FC<UploadProductImageProps> = ({ productID }) => {
//     const { data: session } = useSession();
//     const [selectedImages, setSelectedImages] = useState<File[]>([]);
//
//     const handleImageSelect = (event: ChangeEvent<HTMLInputElement>) => {
//         const files = Array.from(event.target.files || []);
//         setSelectedImages((prevImages) => [...prevImages, ...files]);
//     };
//
//     const handleRemoveImage = (index: number) => {
//         setSelectedImages((prevImages) => prevImages.filter((_, i) => i !== index));
//     };
//
//     const handleSubmit = async (event: FormEvent) => {
//         event.preventDefault();
//         if (!productID) {
//             console.error('Product ID not set');
//             return;
//         }
//
//         const formData = new FormData();
//         selectedImages.forEach((image) => {
//             formData.append("photos", image);
//         });
//
//         try {
//             const response = await fetch(
//                 // `https://api.shuamall.com/api/dashboard/products/uploadImage/${productID}`,
//                 `http://localhost:8000/api/dashboard/products/uploadImage/${productID}`,
//                 {
//                     method: 'POST',
//                     headers: {
//                         'Authorization': `Bearer ${session?.accessToken}`
//                     },
//                     body: formData
//                 }
//             );
//             const data = await response.json();
//             if (data.success) {
//                 console.log("Images uploaded successfully:", data.products);
//                 // Perform any additional actions with data.products
//             }
//         } catch (e) {
//             console.error('Error uploading images:', e);
//         }
//     };
//
//     return (
//         <Dialog>
//             <DialogTrigger className="w-[100px] border border-3 rounded-[10px] float-right mt-2 mr-2">
//                 <div className="flex my-auto p-3 text-sm">
//                     <Upload className="mr-1" size={18} />
//                     <p>Upload</p>
//                 </div>
//             </DialogTrigger>
//
//             <DialogContent>
//                 <DialogHeader>
//                     <DialogTitle>Upload Product Image</DialogTitle>
//                     <DialogDescription>Fill form to upload product image</DialogDescription>
//                 </DialogHeader>
//                 <form onSubmit={handleSubmit}>
//                     <div className="grid gap-4 py-4">
//                         <div className="items-center gap-4">
//                             <div className="grid w-full max-w-sm items-center gap-1.5">
//                                 <Label htmlFor="file">Attach Image</Label>
//                                 <Input
//                                     name="file"
//                                     id="file"
//                                     type="file"
//                                     multiple
//                                     onChange={handleImageSelect}
//                                 />
//                             </div>
//
//                             <div className="flex">
//                                 {selectedImages.map((image, index) => (
//                                     <div key={index} className="relative mt-3 p-2">
//                                         <img
//                                             src={URL.createObjectURL(image)}
//                                             alt={`Selected ${index}`}
//                                             className="h-[80px] object-cover"
//                                         />
//                                         <Button
//                                             type="button"
//                                             onClick={() => handleRemoveImage(index)}
//                                             className="absolute top-0 right-0 bg-white rounded-[40px] hover:bg-gray-50 p-3"
//                                         >
//                                             <Trash2 color="black" />
//                                         </Button>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>
//                     <DialogFooter>
//                         <Button type="submit">Save changes</Button>
//                     </DialogFooter>
//                 </form>
//             </DialogContent>
//         </Dialog>
//     );
// };
//
// export default UploadProductImage;



"use client"
import React, { useState, ChangeEvent, FormEvent } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import { Upload, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useSession } from "next-auth/react";

interface UploadProductImageProps {
    productID: string;
}

const UploadProductImage: React.FC<UploadProductImageProps> = ({ productID }) => {
    const { data: session } = useSession();
    const [selectedImages, setSelectedImages] = useState<File[]>([]);
    const [previewImages, setPreviewImages] = useState<string[]>([]);

    const handleImageSelect = (event: ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(event.target.files || []);
        setSelectedImages((prevImages) => [...prevImages, ...files]);

        const filePreviews = files.map(file => URL.createObjectURL(file));
        setPreviewImages((prevPreviews) => [...prevPreviews, ...filePreviews]);
    };

    const handleRemoveImage = (index: number) => {
        setSelectedImages((prevImages) => prevImages.filter((_, i) => i !== index));
        setPreviewImages((prevPreviews) => prevPreviews.filter((_, i) => i !== index));
    };

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        if (!productID) {
            console.error('Product ID not set');
            return;
        }

        const formData = new FormData();
        selectedImages.forEach((image) => {
            formData.append("photos", image);
        });

        try {
            const response = await fetch(
                `https://api.shuamall.com/api/dashboard/products/uploadImage/${productID}`,
                // `http://localhost:8000/api/dashboard/products/uploadImage/${productID}`,
                {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${session?.accessToken}`
                    },
                    body: formData
                }
            );
            const data = await response.json();
            if (data.success) {
                console.log("Images uploaded successfully:", data.products);
                // Perform any additional actions with data.products
            }
        } catch (e) {
            console.error('Error uploading images:', e);
        }
    };

    return (
        <Dialog>
            <DialogTrigger className="w-[100px] border border-3 rounded-[10px] float-right mt-2 mr-2">
                <div className="flex my-auto p-3 text-sm">
                    <Upload className="mr-1" size={18} />
                    <p>Upload</p>
                </div>
            </DialogTrigger>

            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Upload Product Image</DialogTitle>
                    <DialogDescription>Fill form to upload product image</DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit}>
                    <div className="grid gap-4 py-4">
                        <div className="items-center gap-4">
                            <div className="grid w-full max-w-sm items-center gap-1.5">
                                <Label htmlFor="file">Attach Image</Label>
                                <Input
                                    name="file"
                                    id="file"
                                    type="file"
                                    multiple
                                    onChange={handleImageSelect}
                                />
                            </div>

                            <div className="flex flex-wrap">
                                {previewImages.map((image, index) => (
                                    <div key={index} className="relative mt-3 p-2">
                                        <img
                                            src={image}
                                            alt={`Selected ${index}`}
                                            className="h-[80px] object-cover"
                                        />
                                        <Button
                                            type="button"
                                            onClick={() => handleRemoveImage(index)}
                                            className="absolute top-0 right-0 bg-white rounded-[40px] hover:bg-gray-50 p-3"
                                        >
                                            <Trash2 color="black" />
                                        </Button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit">Save changes</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default UploadProductImage;
