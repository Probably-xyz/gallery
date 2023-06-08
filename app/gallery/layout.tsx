import React from "react";
import "@/styles/globals.css"
import { Toaster } from "@/components/shared/toaster";

export default function GalleryLayout({
    children,
    modal, 
    props,
  }: {
    children: React.ReactNode;
    modal: React.ReactNode;
    props: React.ReactNode;
  }) {
    return (
      
     <html>
       <body>
          <Toaster/> 
          {modal}
          {children}
      </body>
     </html>
  
           

    );
  }