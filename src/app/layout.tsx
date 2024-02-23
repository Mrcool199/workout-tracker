import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { SplashAnimation } from "@/components/SplashAnimation";
import { Providers } from "./providers";
import GoogleTagManager from "@/components/GoogleTagManager"; // Import your GoogleTagManager component

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "workout tracker",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <GoogleTagManager />
      </head>
      <body className={inter.className}>
        <Providers>
          <SplashAnimation />
          {children}
        </Providers>
        <Toaster />
      </body>
    </html>
  );
}
