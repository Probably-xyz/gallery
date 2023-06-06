"use client"

import React from "react"


interface PostProps {
    name?:string
    description?:string
    id?:string
    pitch?:string
}


export default function PostSlug({name, description, id, pitch}: PostProps) {
   
    return (
        <>
         <div> 

            <h1> {name} </h1>
            <h1> {description} </h1>
            
         </div>
        
        </>
       
    )
}


