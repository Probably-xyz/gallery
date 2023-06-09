import React from 'react'
import { FC } from "react"
import { notFound, redirect } from 'next/navigation'
import {IoIosArrowRoundBack} from "react-icons/io"
import {FaLinkedinIn} from "react-icons/fa"
import {BiLinkExternal} from "react-icons/bi"
import Link from 'next/link'
import { Main, Sub } from '@/styles/fonts'
import { EmailForm, FormSubmitBtn } from '@/components/button.component'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import prisma from '@/lib/prisma'


interface PageProps{
    params: {
      name: string,
      description: string,
      id: string,
      pitch: string,
      linkedin: string,
      website: string,
    }
    
  }


   export default async function Slug({params}: PageProps) {
    const session = getServerSession(authOptions)

  
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

      console.log(data)



      return (
          <>
           <div className="flex w-screen h-screen overflow-hidden">
        <div className="flex flex-col slug-box items-center m-auto">
            <div className="flex flex-row justify-between w-full px-10">
              <Link href="/gallery">
              <IoIosArrowRoundBack className="text-4xl text-prbly-dark mt-14 cursor-pointer" />
              </Link>
              <h1 className="text-6xl font-semibold text-prbly-dark mt-14 ml-20" style={Main.style}> {data.name} </h1>
              <ul className="flex flex-row mt-14">
                <li>
                  <Link href={data.linkedin} target="_blank">
                    <FaLinkedinIn className="text-2xl mr-10"/>
                  </Link>
                </li>
                {/* <Link href={data.website} target="_blank"> */}
                  <BiLinkExternal className="text-2xl mr-10"/>
                {/* </Link> */}
              </ul>
            </div>
            
            <div className="flex flex-row px-4 pt-6">
                  <div className="industry-card-2 flex"> <span className="text-sm text-prbly-dark flex m-auto items-center" style={Sub.style}> {data.industry} </span> </div>
                  <div className="industry-card-2 flex"> <span className="text-sm text-prbly-dark flex m-auto items-center" style={Sub.style}> {data.stage} </span> </div>
                  <div className="industry-card-2 flex"> <span className="text-sm text-prbly-dark flex m-auto items-center" style={Sub.style}> {data.investStage} </span> </div>
              </div>

               <div className="pitch-preview mt-10"> 
               
                <div className="pitch-deck">
                <iframe className="w-full h-full" src={data.pitch}/>
                </div>
                
             </div>
             <div className="flex mx-auto items-center mt-8">
                <EmailForm />
             </div>
        </div>
</div>
          
          </>
         
      )
  }


