import "../styles/globals.css";
import { Inter } from "next/font/google";
import { NextAuthProvider } from "./providers";
import React from "react";
import { MainNav } from "@/components/nav.component";
import { Toaster } from "@/components/shared/toaster";
import { Analytics } from '@vercel/analytics/react';

import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Probably",
  description: "The place to get founded & funded 🔎",
  icons: {
    icon: '/5.png',
  },
  openGraph: {
    title: "Probably",
    description:
      "The place to get founded & funded 🔎",
    url: "https://www.prbly.xyz",
    images: [
      {
        url: "https://www.prbly.xyz The place to get founded & funded 🔎",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Probably",
    description:
      "The place to get founded & funded 🔎",
    images: [
      "https://www.prbly.xyz The place to get founded & funded 🔎",
    ],
  },
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="favicon.ico" sizes="any"/>
      </head>
      <body >
        <NextAuthProvider>
          <Toaster />
          {modal}
          {children}
        </NextAuthProvider>
        <Analytics />
      </body>
    </html>
  );
}
