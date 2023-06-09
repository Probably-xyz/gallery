"use client"

import Link from "next/link"
import {Main, Sub} from "@/styles/fonts"
import { UserAuthForm } from "@/components/auth-form"
import React from "react"
import { IoIosArrowRoundBack } from "react-icons/io"
import { useRouter } from "next/navigation"


export default function SignIn() {
  const router = useRouter()

  return (
    <>
      <main className='flex un-approved h-screen w-screen overflow-hidden'>
          <div className="flex justify-between m-auto auth-box-2">
              <div className="flex flex-col my-auto px-24">
                  <h1 className="text-5xl xl:text-7xl font-semibold" style={Main.style}> 
                    Enter your email
                  </h1>
                  <p style={Sub.style} className="text-base xl:text-lg text-prbly-dark mt-5">  
                  Please log in or sign up to get full access to Probably
                  </p>
                  <a href="#" style={Sub.style} 
                  className="link link--elara auth-button text-base text-prbly-black font-light" data-text="Contact Us">
                      <span> Contact Us</span>
                  </a>
              </div>
            <UserAuthForm/>
          </div>
      </main>
    </>
  )
}

