import {NextAuthConfig} from 'next-auth';
import {headers} from "next/headers";

// @ts-ignore
export const authConfig = {
    pages: {
        signIn: '/sign-in',
    },
    providers: [
        // added later in route.ts since it requires bcrypt which is only compatible with Node.js
        // while this file is also used in non-Node.js environments
    ],
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            let isLoggedIn = !!auth?.user;
            let isOnDashboard = nextUrl.pathname.startsWith('/dashboard');

            if (isOnDashboard) {
                return isLoggedIn;
                // Redirect unauthenticated users to login page
            } else if (isLoggedIn) {
                // don't redirect authenticated users to dashboard, let them go to the page they requested
                // return Response.redirect(new URL('/dashboard', nextUrl));
            }

            return true;
        },
        // @ts-ignore
        async session({session, token}) {
            return {
                ...session,
                ...token
            }
        },

        async jwt({ token, user, account }) {
            if (account && user) {

                const accessToken = user?.accessToken;
                const refreshToken = user?.refreshToken;

                if (accessToken) {
                    token.accessToken = accessToken;
                    token.refreshToken = refreshToken;
                    token.id = user?.id;
                    token.name = user?.name;
                    token.email = user?.email;

                    try {
                        const decodedAccessToken = JSON.parse(Buffer.from(accessToken.split(".")[1], "base64").toString());
                        if (decodedAccessToken) {
                            token.userId = decodedAccessToken["sub"] as string;
                            token.accessTokenExpires = decodedAccessToken["exp"] * 1000;
                        }
                    } catch (e) {
                        console.error("Error decoding access token:", e);
                        token.error = "InvalidAccessToken";
                    }
                } else {
                    console.error("Access token is undefined");
                    token.error = "UndefinedAccessToken";
                }

                return token;
            }

            // if our access token has not expired yet, return all information except the refresh token
            if (token.accessTokenExpires && (Date.now() < Number(token.accessTokenExpires))) {
                const { refreshToken, ...rest } = token;

                return rest;
            }

            // if our access token has expired, refresh it and return the result
            return await refreshAccessToken(token);
        },
    },
} satisfies NextAuthConfig;

// @ts-ignore
async function refreshAccessToken(token) {
    console.log("Now refreshing the expired token...");
    try {
        const formData = new URLSearchParams();
        formData.append('refresh', token.refreshToken);

        const res = await fetch(`${process.env.API_BASE_URL}/refresh_token`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                // Add any additional headers required by your API
            },
            body: formData.toString()
        });

        const { success, data } = await res.json();

        if (!success) {
            console.log("The token could not be refreshed!");
            throw data;
        }

        console.log("The token has been refreshed successfully.");

        // get some data from the new access token such as exp (expiration time)
        const decodedAccessToken = JSON.parse(Buffer.from(data.accessToken.split(".")[1], "base64").toString());

        return {
            ...token,
            accessToken: data.accessToken,
            refreshToken: data.refreshToken ?? token.refreshToken,
            accessTokenExpires: decodedAccessToken["exp"] * 1000,
            error: "",
        };
    } catch (error) {
        console.log(error);

        // return an error if something goes wrong
        return {
            ...token,
            error: "RefreshAccessTokenError", // attention!
        };
    }
}
