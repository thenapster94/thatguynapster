import type { Metadata } from "next";
import { Inter, League_Spartan } from "next/font/google";

import { config } from "@/configs";
import "./globals.css";

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
        className={` bg-[url('/img/page-background.webp')]  bg-top sm:bg-top bg-no-repeat`}
      >
        {children}
      </body>
    </html>
  );
}
