import React from 'react'
import { FC } from "react"
// import getPostById from '@/app/lib/getPost'
import PostSlug from '@/app/components/slug.component'
import { notFound } from 'next/navigation'
import prisma from '@/app/lib/prisma'
import { NextPage } from 'next'


interface PageProps{
    params: {
      name: string,
      description: string,
      id: string,
      pitch: string
    }
    
  }

// type post = {

//   name: string,
//   description: string,
//   id?: string,
//   pitch: string

// }


    
    // async function getData({params}: PageProps) {
    //     const res = await fetch(`http://localhost:3000/api/post/` + params.id)

    //     if (!res.ok){
    //         return notFound()
    //     }

    //     return res.json()
    // }

    

    


   export default async function Slug({params}: PageProps) {


    const id = params.id

    let link = `http://localhost:3000/api/post/` + id

    console.log(link)

    async function getData(link: any) {
      const res = await fetch(link, {next: {revalidate: 10}})

      if (!res.ok){
          return notFound()
      }

      return res.json()
  }

      const data = await getData(link)



      return (
          <>
           <div> 
  
              <h1> {data.name} </h1>
              <h1> {data.description} </h1>
              <iframe src={data.pitch}/>
              
           </div>
          
          </>
         
      )
  }


