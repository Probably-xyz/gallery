import React from 'react'
import { FC } from "react"
import { notFound } from 'next/navigation'



interface PageProps{
    params: {
      name: string,
      description: string,
      id: string,
      pitch: string
    }
    
  }


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


