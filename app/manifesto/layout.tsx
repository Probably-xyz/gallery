import { Inter } from "next/font/google";
// import { NextAuthProvider } from "./providers";
import React from "react";
import { MainNav } from "@/components/nav.component";
import { Toaster } from "@/components/shared/toaster";
import { Analytics } from '@vercel/analytics/react';

import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Probably",
  description: "Submit your startup and showcase it to a group of investors, it’s that easy.",
  icons: {
    icon: '/5.png',
  },
  openGraph: {
    title: "Probably",
    description:
      "Submit your startup and showcase it to a group of investors, it’s that easy.",
    url: "https://www.prbly.xyz",
    images: [
      {
        url: "https://uawwnkwoyhkmotmoncgk.supabase.co/storage/v1/object/public/logo/F0GW8gBXwAAfq6t.jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Probably",
    description:
      "Submit your startup and showcase it to a group of investors, it’s that easy.",
      url: "https://www.prbly.xyz",
    images: [
      "https://uawwnkwoyhkmotmoncgk.supabase.co/storage/v1/object/public/logo/F0GW8gBXwAAfq6t.jpeg",
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="favicon.ico" sizes="any"/>
      </head>
      <body>
          <Toaster />
          <MainNav/>
          {children}
        <Analytics />
      </body>
    </html>
  );
}
