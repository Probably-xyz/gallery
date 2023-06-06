"use client"

import React from 'react'
import { FC } from 'react'
import Link from "next/link"

interface PageProps{
  params: {
    name: string,
    description: string,
    id: string,
  }
  
}



const Card: FC<PageProps> = ({ params }) => {



  return (
   <div className="card text-prbly-accent">
    <Link href={`/gallery/` + params.id}>
        <h1> {params.name} </h1>
        <p> {params.description} </p>
    </Link>
   
   </div>
   
  )
}

export default Card