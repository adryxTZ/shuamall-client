import {Icons} from '@/components/icons';
import NextAuth from "next-auth";
import Products from "@/app/(root)/_components/productSection/products";

export interface NavItem {
    title: string;
    href?: string;
    disabled?: boolean;
    external?: boolean;
    icon?: keyof typeof Icons;
    label?: string;
    description?: string;
}

export interface NavItemWithChildren extends NavItem {
    items: NavItemWithChildren[];
}

export interface NavItemWithOptionalChildren extends NavItem {
    items?: NavItemWithChildren[];
}

export interface FooterItem {
    title: string;
    items: {
        title: string;
        href: string;
        external?: boolean;
    }[];
}

export type MainNavItem = NavItemWithOptionalChildren;

export type SidebarNavItem = NavItemWithChildren;

export interface Shop {
    id: number;
    uuid: string;
    shop_logo: string;
    logo_format: string;
    shop_name: string;
    username: string;
    shop_description: string;
    site_link: string;
    physical_address: string;
    established_date: string;
    is_verified: number;
    is_featured: number;
    featured_created_at: string | null;
    featured_expires_at: string | null;
    is_active: number;
    city: string;
    location: string;
    tin_number: string;
    shop_motto: string | null;
    shop_banner: string | null;
    banner_format: string | null;
    package_subscription_id: number;
    business_category_id: number;
    user_id: number;
    created_at: string;
    updated_at: string;
    shop_phone_number: string;
    shop_phone_number2: string | null;
    shop_facebook_url: string | null;
    shop_instagram_url: string | null;
}

export interface Shops {
    // identifier_id: string;
    id: number;
    uuid: string;
    shop_logo: string;
    logo_format: string;
    shop_name: string;
    username: string;
    shop_description: string;
    site_link: string;
    physical_address: string;
    established_date: string;
    is_verified: number;
    is_featured: number;
    featured_created_at: string | null;
    featured_expires_at: string | null;
    is_active: number;
    city: string;
    location: string;
    tin_number: string;
    shop_motto: string | null;
    shop_banner: string | null;
    banner_format: string | null;
    package_subscription_id: number;
    business_category_id: number;
    user_id: number;
    created_at: string;
    updated_at: string;
    shop_phone_number: string;
    shop_phone_number2: string | null;
    shop_facebook_url: string | null;
    shop_instagram_url: string | null;
}

export interface CategoriesProps {
    id: number;
    category_name: string;
    icon1: string;
    icon2: string;

}

// export interface Shops {
//   shops: Shop[];
// }

export interface User {
    id: number;
    uuid: string;
    email: string;
    phone_number: string;
    role_id: number;
    country_id: number;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
}

export interface SignInResponse {
    token: string;
    user: User;
    role: string;
    username: string;
}

export interface Subcategory {
    id: number;
    subcategory_name: string;
    product_category_id: number;
    user_id: number;
    created_at: string;
    updated_at: string;
}

export interface Products {
    id: number,
    product_uuid: string,
    product_title: string,
    product_description: string,
    regular_price: string,
    selling_price: string | null,
    stock_status_id: number,
    product_subcategory_id: number,
    shop_id: number,
    created_at: string,
    updated_at: string,
    shops: Shops,
    subcategories: Subcategory,
    ratings: any[],
    product_thumbnails: Product_thumbnails[]
    product?: Products
}

interface Product_thumbnails {
    id: number,
    photo_name: string,
    product_photo: string,
    photo_format: string,
    product_id: number,
    created_at: string,
    updated_at: string,
}
interface ProductsResponse {
    products: Products[];
}

interface Data {
    shop: Shop;
    products: Products[];
}

export interface ShopDetail {
    success: boolean;
    data: Data;
}


export interface AboutShop {
    shop_name: string;
    username: string;
    shop_description: string;
    physical_address: string;
    shop_motto: string | null;
}
