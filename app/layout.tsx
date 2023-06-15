import "../styles/globals.css";
import { Inter } from "next/font/google";
import { NextAuthProvider } from "./providers";
import React from "react";
import { MainNav } from "@/components/nav.component";
import { Toaster } from "@/components/shared/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Probably",
  description: "Generated by create next app",
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
      <body className="overflow-hidden">
        <NextAuthProvider>
          <Toaster />
          {modal}
          {children}
        </NextAuthProvider>
      </body>
    </html>
  );
}
