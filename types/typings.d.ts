// types.ts
export type FormData = {
    shop_name: string;
    email: string;
    phone_number: string;
    country: string;
    password_confirmation: string;
    password: string;
    city: string;
    shop_description: string;
    business_type: string;
    location: string;
    established_date: string;
    product_type: string;
    tin: string;
    logo: string;
    subdomain: string;
    physical_address: string;
    error: string;
};

export type FormProps = {
    formData: FormData;
    setFormData: React.Dispatch<React.SetStateAction<FormData>>;
    isLoading: boolean;
    error: string;
    success: string;
    handleSubmit: (data: FormData) => Promise<void>;
};

import { DefaultSession } from "next-auth"

declare module "next-auth" {
    interface Session extends DefaultSession {
        user: {
            id: number;
            uuid: string;
            email: string;
            phone_number: string;
            role_id: number;
            country_id: number;
            email_verified_at: string | null;
            created_at: string;
            updated_at: string;
            name: string;
            role: string;
            token: string;
        },
        role: string;
        username: string;
    }
}

export interface CustomUser extends NextAuthUser {
    username?: string;
    role?: string;
    accessToken?: string;
    refreshToken?: string;
    id?: number;
    uuid?: string;
    phone_number?: string;
    country_id?: number;
    email_verified_at?: string | null;
    created_at?: string;
    updated_at?: string;
}

declare module "next-auth" {
    interface User {
        id: string
        email: string
        cognitoGroups: string[]
        accessToken: string
        refreshToken: string
        idToken: string
        exp: number
        role: string
    }

    interface Session {
        user: User & DefaultSession["user"]
        accessToken: string
        expires: string
        error: string
    }
}
