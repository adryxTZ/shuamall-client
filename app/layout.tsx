import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import {ThemeProvider} from "next-themes";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shuamall",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" suppressHydrationWarning>
      <body className="">
      <NextTopLoader
          color="#334d3a"
          initialPosition={0.08}
          crawlSpeed={200}
          height={4}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={300}
      />
      <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
      >
      {/*<shopHeader/>*/}
      {children}
      {/*<Footer/>*/}
      </ThemeProvider>
      </body>
      </html>
  );
}
