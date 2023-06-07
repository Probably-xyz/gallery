import React from 'react'
import { FC } from "react"
import { notFound } from 'next/navigation'
import { UserAuthForm } from '@/components/auth-form'



interface PageProps{
    params: {
      name: string,
      description: string,
      id: string,
      pitch: string
    }
    
  }


   export default async function SlugModal({params}: PageProps) {


  //   const id = params.id

  //   let link = `http://localhost:3000/api/post/` + id

  //   console.log(link)

  //   async function getData(link: any) {
  //     const res = await fetch(link, {next: {revalidate: 10}})

  //     if (!res.ok){
  //         return null
  //     }

  //     return res.json()
  // }

  //     const data = await getData(link)



      return (
          <>
          <UserAuthForm/>
          
          </>
         
      )
  }


