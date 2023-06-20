"use client"

import Link from "next/link"
import {Main, Sub} from "@/styles/fonts"
import { UserAuthForm } from "@/components/auth-form"
import React from "react"
import { IoIosArrowRoundBack } from "react-icons/io"
import { useRouter, redirect } from "next/navigation"
import { useSession } from "next-auth/react"
import { authOptions } from "@/lib/auth"
import useWindowSize from "@/lib/hooks/use-window-size";


export default function SignIn() {
  const router = useRouter()

  const { data: session } = useSession();

  if (session) {
    redirect("/gallery")
  }

  const { isMobile, isDesktop } = useWindowSize();


  return (
    <>
      <main className='flex h-screen w-screen overflow-hidden'>

      {isDesktop && (
      <div className="flex justify-between m-auto auth-box">
       
     

       <div className="flex flex-col px-24">

       <IoIosArrowRoundBack className="text-4xl text-prbly-dark cursor-pointer relative top-20" onClick={() => router.back()}/>


       <div className="my-auto">
       <h1 className="text-6xl 2xl:text-7xl font-semibold" style={Main.style}> 
           Enter your email
         </h1>
         <p style={Sub.style} className="text-base xl:text-lg text-prbly-dark mt-5">  
         Please log in or sign up to get full access to Probably
         </p>
       </div>
      

         <a href="#" style={Sub.style} 
         className="link link--elara auth-button text-base text-prbly-black font-light" data-text="Contact Us">
             <span> Contact Us</span>
         </a>


     </div>

    
     
     

   <UserAuthForm/>

 </div>
      )}
      
{isMobile && (
 <div className="auth-box-mobile-page flex items-center">
        <div className="flex flex-col m-auto px-4">
        <div className="flex flex-col">
          <IoIosArrowRoundBack className="text-4xl text-prbly-dark cursor-pointer relative" onClick={() => router.back()} />
          <div className="m-auto">
              <h1 className="text-3xl font-semibold text-center pt-10" style={Main.style}>
                Enter your email
              </h1>
              <p style={Sub.style} className="text-base mt-2 text-prbly-dark text-center">
                Please log in or sign up to get full access to Probably
              </p>
          </div>
        </div>
        <UserAuthForm/>
        </div>
      </div>

)}

      </main>
    </>
  )
}

