import React from "react";
import "@/styles/globals.css"

export default function GalleryLayout({
    children,
    modal, 
  }: {
    children: React.ReactNode;
    modal: React.ReactNode;
  }) {
    return (
      
     <html>
       <body>
       {modal}
          {children}
      </body>
     </html>
  
           

    );
  }