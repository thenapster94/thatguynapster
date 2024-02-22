import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";

import { config } from "@/configs";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const spartan = League_Spartan({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: config.title,
  description: config.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <body
        className={`text-white bg-[url('/img/page-background.webp')]  bg-top sm:bg-top bg-no-repeat`}
      >
        <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
        {children}
      </body>
    </html>
  );
}
