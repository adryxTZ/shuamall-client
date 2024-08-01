"use client"

import * as z from 'zod';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Trash } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Separator } from '@/components/ui/separator';
import { Heading } from '@/components/ui/heading';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import FileUpload from '@/components/file-upload'; // Assuming this component handles file uploads correctly
import { useToast } from '../ui/use-toast';
import { Textarea } from '@/components/ui/textarea';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ImgSchema = z.object({
    fileName: z.string(),
    fileSize: z.number(),
    fileKey: z.string(),
    fileUrl: z.string(),
});
export const IMG_MAX_LIMIT = 3;
const formSchema = z.object({
    name: z.string().min(3, { message: 'Product Name must be at least 3 characters' }),
    imgUrl: z
        .array(ImgSchema) // Updated to use ImgSchema for array validation
        .max(IMG_MAX_LIMIT, { message: 'You can only add up to 3 images' })
        .min(1, { message: 'At least one image must be added.' }),
    description: z.string().min(3, { message: 'Product description must be at least 3 characters' }),
    price: z.coerce.number(),
    subcategory: z.string().min(1, { message: 'Please select a category' }),
});

type ProductFormValues = z.infer<typeof formSchema>;

interface ProductFormProps {
    initialData: any | null;
    categories: any[];
}

export const ProductForm: React.FC<ProductFormProps> = ({ initialData, categories }) => {
    const params = useParams();
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const title = initialData ? 'Edit product' : 'Create product';
    const description = initialData ? 'Edit a product.' : 'Add a new product';
    const toastMessage = initialData ? 'Product updated.' : 'Product created.';
    const action = initialData ? 'Save changes' : 'Create';

    const { data: session } = useSession();

    const defaultValues = initialData
        ? initialData
        : {
            name: '',
            description: '',
            price: 0,
            imgUrl: [], // Ensure imgUrl starts as an empty array
            subcategory: '',
        };

    const form = useForm<ProductFormValues>({
        resolver: zodResolver(formSchema),
        defaultValues,
    });

    const onSubmit = async (data: ProductFormValues) => {
        try {
            setLoading(true);
            console.log(data);
            const formData = new FormData();
            formData.append('title', data.name);
            formData.append('description', data.description);
            formData.append('regular_price', data.price.toString());
            formData.append('subcategory', data.subcategory);

            // Adjusting imgUrl to handle File objects correctly
            data.imgUrl.forEach((file) => {
                formData.append('photos[]', new File([file.fileKey], file.fileName));
            });

            const res = await axios.post(
                'https://api.shuamall.com//api/dashboard/createProduct',
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${session?.accessToken}`,
                    },
                }
            );
            if (res) {
                toast.success('Product Created Successfully');
                // Optionally navigate after successful creation
                // router.push(`/dashboard/products`);
            }
        } catch (error) {
            toast.error('There was a problem with your request');
        } finally {
            setLoading(false);
        }
    };

    const onDelete = async () => {
        try {
            setLoading(true);
            router.refresh();
            router.push(`/${params.storeId}/products`);
        } catch (error) {
            console.error('Error deleting product:', error);
        } finally {
            setLoading(false);
            setOpen(false);
        }
    };

    return (
        <>
          localhost  <div className="flex items-center justify-between">
                <Heading title={title} description={description} />
                {initialData && (
                    <Button
                        disabled={loading}
                        variant="destructive"
                        size="sm"
                        onClick={() => setOpen(true)}
                    >
                        <Trash className="h-4 w-4" />
                    </Button>
                )}
            </div>
            <Separator />
            <div className="p-8 md:grid md:grid-cols-2">
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="w-full space-y-8"
                        encType="multipart/form-data"
                    >
                        <div className="gap-8 md:grid w-full">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input
                                                disabled={loading}
                                                placeholder="Product name"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className="gap-8 md:grid w-full">
                            <FormField
                                control={form.control}
                                name="description"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Description</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                disabled={loading}
                                                placeholder="Product description"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className="gap-8 md:grid md:grid-cols-2">
                            <FormField
                                control={form.control}
                                name="price"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Price</FormLabel>
                                        <FormControl>
                                            <Input type="number" disabled={loading} {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="subcategory"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Category</FormLabel>
                                        <Select
                                            disabled={loading}
                                            onValueChange={field.onChange}
                                            value={field.value}
                                            defaultValue={field.value}
                                        >
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue
                                                        defaultValue={field.value}
                                                        placeholder="Select a category"
                                                    />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {categories.map((category) => (
                                                    <SelectItem
                                                        key={category._id}
                                                        value={String(category._id)}
                                                    >
                                                        {category.name}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <FormField
                            control={form.control}
                            name="imgUrl"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Images</FormLabel>
                                    <FormControl>
                                        <FileUpload
                                            onChange={(files) => {
                                                // Assuming FileUpload returns an array of { fileName, fileSize, fileKey, fileUrl }
                                                field.onChange(files);
                                                form.trigger('imgUrl');
                                            }}
                                            value={field.value.map((file) => ({
                                                fileName: file.fileName,
                                                fileSize: file.fileSize,
                                                fileKey: file.fileKey,
                                                fileUrl: file.fileUrl,
                                            }))}
                                            onRemove={(files) => {
                                                field.onChange(files);
                                                form.trigger('imgUrl');
                                            }}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button disabled={loading} className="ml-auto" type="submit">
                            {action}
                        </Button>
                    </form>
                </Form>
            </div>
        </>
    );
};
