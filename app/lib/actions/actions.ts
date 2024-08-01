"use server"

import {signIn, signOut} from "@/auth";
import {DEFAULT_LOGIN_REDIRECT} from "@/routes";
import {AuthError} from "next-auth";
import {LoginSchema, RegisterSchema} from "@/schemas";
import {TypeOf} from "zod";
import axios from "axios";

// export async function registerAction(formData: TypeOf<typeof RegisterSchema>, callbackUrl?: string) {
//     const validatedFields = RegisterSchema.parse(formData);
//     // const { shop_name, email, phone_number, country,password, password_confirmation,city, shop_description, business_type, location,
//     //     established_date, tin, physical_address,subdomain } = validatedFields;
//
//     const endpoint = process.env.API_BASE_URL;
//
//     try {
//         // const response = await fetch(endpoint + "/signup", {
//         //     method: "POST",
//         //     headers: {
//         //         "Content-Type": "application/json",
//         //     },
//         //     body: JSON.stringify({
//         //         shop_name,
//         //         email,
//         //         phone_number,
//         //         country,
//         //         password,
//         //         password_confirmation,
//         //         city,
//         //         shop_description,
//         //         business_type,
//         //         location,
//         //         established_date,
//         //         // product_type,
//         //         tin,
//         //         logo,
//         //         subdomain,
//         //         physical_address
//         //     }),
//         // });
//
//         const formData = new FormData();
//         formData.append('shop_name', validatedFields.shop_name);
//         formData.append('email', validatedFields.email);
//         formData.append('phone_number', validatedFields.phone_number);
//         formData.append('country', validatedFields.country);
//         formData.append('password', validatedFields.password);
//         formData.append('password_confirmation', validatedFields.password_confirmation);
//         formData.append('city', validatedFields.city);
//         formData.append('shop_description', validatedFields.shop_description);
//         formData.append('business_type', validatedFields.business_type);
//         formData.append('location', validatedFields.location);
//         formData.append('established_date', validatedFields.established_date);
//         formData.append('tin', validatedFields.tin);
//         formData.append('subdomain', validatedFields.subdomain);
//
//         // Append logo file if valid
//         if (validatedFields.logo.length) {
//             const file = validatedFields.logo[0];
//             formData.append('logo', file);
//         }
//
//         const response = await axios.post(
//             // endpoint + "/signup",
//             "http://localhost:8000/api/auth/signup",
//             formData,
//             {
//                 headers: {
//                     // Authorization: `Bearer ${token}`
//                     Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE3MTg5MTU4NjgsImV4cCI6MTcxODkxOTQ2OCwibmJmIjoxNzE4OTE1ODY4LCJqdGkiOiJ1UGFlUmR4SDJxSEZ3TjBhIiwic3ViIjoiMSIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ._JwBukkAn0gippQDGFwTWM0YtbyH-LcAEb8bxX9PTZ4`
//                 }
//             }
//         );
//
//         if (response.data.success){
//             // Redirect to home page
//             window.location.href = "/";
//             return { success: "Registration completed successfully!" };
//         } else {
//             return { error: "Failed to sign up!" };
//         }
//     } catch (error) {
//         throw error;
//     }
// }

export async function registerAction(formData: TypeOf<typeof RegisterSchema>, callbackUrl?: string) {
    const validatedFields = RegisterSchema.parse(formData);

    const endpoint = process.env.API_BASE_URL;

    try {
        const formData = new FormData();
        formData.append('shop_name', validatedFields.shop_name);
        formData.append('email', validatedFields.email);
        formData.append('phone_number', validatedFields.phone_number);
        formData.append('country', validatedFields.country);
        formData.append('password', validatedFields.password);
        formData.append('password_confirmation', validatedFields.password_confirmation);
        formData.append('city', validatedFields.city);
        formData.append('shop_description', validatedFields.shop_description);
        formData.append('business_type', validatedFields.business_type);
        formData.append('location', validatedFields.location);
        // formData.append('established_date', validatedFields.established_date);
        formData.append('tin', validatedFields.tin);
        formData.append('subdomain', validatedFields.subdomain);

        // Append logo file if valid
        if (validatedFields.logo && validatedFields.logo.length > 0) {
            const file = validatedFields.logo[0];
            formData.append('logo', file);
        }

        const response = await axios.post(
            // `${endpoint}/signup`,
            "https://api.shuamall.com/api/auth/signup",
            // "http://localhost:8000/api/auth/signup",
            formData,
        );

        if (response.data.success) {
            // Redirect to home page
            window.location.href = "/";
            return { success: "Registration completed successfully!" };
        } else {
            return { error: "Failed to sign up!" };
        }
    } catch (error) {
        throw error;
    }
}


export async function loginAction(formData: TypeOf<typeof LoginSchema>, callbackUrl?: string) {
    const validatedFields = LoginSchema.parse(formData);
    console.log("validated " + validatedFields.email_or_phone, validatedFields.password);
    const {email_or_phone , password } = validatedFields

    try {
        await signIn("credentials", {
            email_or_phone,
            password,
            redirectTo: callbackUrl || DEFAULT_LOGIN_REDIRECT,
        })
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case "CredentialsSignin":
                    return {error: "Invalid credentials!"}
                default:
                    return {error: "Wrong Email or Password"}
            }
        }
        throw error;
    }
}


export async function signOutAction() {
    await signOut()
}

