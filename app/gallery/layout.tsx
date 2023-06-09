import React from "react";
import "@/styles/globals.css"

export default function GalleryLayout({
    children, 
    props,
  }: {
    children: React.ReactNode;
    props: React.ReactNode;
  }) {
    return (
      
     <html>
       <body>
          {children}
      </body>
     </html>
  
           

    );
  }