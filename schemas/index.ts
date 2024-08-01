import * as z from 'zod'

export const LoginSchema = z.object({
    email_or_phone: z.string().email({
        message: "Email is required"
    }),
    password: z.string().min(1, {
        message: "Password is required",
    }),
})
export const RegisterSchema = z.object({
    shop_name: z.string().min(2, {
        message: "Enter Shop Name",
    }),
    email: z.string().email({
        message: "Email is required"
    }),
    country: z.string().min(1, {
        message: "Enter Country",
    }),

    phone_number: z.string().min(10, {
        message: "Enter a correct Phone Number",
    }),
    tin: z.string().min(11, {
        message: "Enter a correct Tin Number, (000-000-000)",
    }),

    business_type: z.string().min(1, {
        message: "Enter Business Type",
    }),

    city: z.string().min(5, {
        message: "Enter City",
    }),

    location: z.string().min(1, {
        message: "Enter Location",
    }),

    shop_description: z.string().min(20, {
        message: "Enter Description",
    }),
    // established_date: z.string().min(5, {
    //     message: "Enter a Correct Establishment Date",
    // }),

    // product_type: z.string().min(1, {
    //     message: "Enter Product Type",
    // }),

    password: z.string().min(5, {
        message: "Password is required",
    }),
    password_confirmation: z.string().min(5, {
        message: "Password is required",
    }),
    subdomain: z.string().min(5, {
        message: "Subdomain is required",
    }),
    physical_address: z.string().min(5, {
        message: "Physical Address is required",
    }),

    logo: z.string().min(0, {
        message: "Upload Logo",
    }),
}).refine((data) => data.password === data.password_confirmation, {
    message: "Passwords do not match",
    path: ["password_confirmation"], // The path of the error field
});