import Credentials from "next-auth/providers/credentials";
import NextAuth, {User} from "next-auth";
import {authConfig} from "@/auth.config";
import {SignInResponse} from "@/types";


export const {handlers, auth, signIn, signOut} = NextAuth({
    ...authConfig, providers: [Credentials({
        name: "Credentials", credentials: {
            email_or_phone: {label: "Email or Phone Number", type: "text", placeholder: ""}, password: {label: "Password", type: "password"},
        }, authorize: async (credentials) => {
            // external api for users to log in, change it with your own endpoint

            console.log("credentials", JSON.stringify(credentials))
            try {
                const formData = new FormData();
                // @ts-ignore
                formData.append("email_or_phone", credentials.email_or_phone);
                // @ts-ignore
                formData.append("password", credentials.password);

                // const res = await fetch(`http://localhost:8000/api/auth/login`, {
                const res = await fetch(`https://api.shuamall.com/api/auth/login`, {
                    method: "POST",
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                    },
                    body: formData,
                })
                const user: SignInResponse = await res.json();

                if (user.user) {
                    return {
                        ...user.user,
                        id: user.user.id,
                        email: user.user.email,
                        accessToken: user.token,
                        username: user.username,
                        // refreshToken: user.token,
                        role: user.role
                    } as unknown as User
                }

            } catch (e) {
                console.error("AuthError: ", e)
            }

            return null;
        }
    }),],
});



