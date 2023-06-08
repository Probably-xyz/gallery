import React from "react";
import "@/styles/globals.css"
import { Toaster } from "@/components/shared/toaster";

export default function GalleryLayout({
    children,
    pop, 
    props,
  }: {
    children: React.ReactNode;
    pop: React.ReactNode;
    props: React.ReactNode;
  }) {
    return (
      
     <html>
       <body>
          <Toaster/> 
          {pop}
          {children}
          
      </body>
     </html>
  
           

    );
  }