"use client"


import Link from "next/link"
import { signOut, getSession, signIn, useSession } from "next-auth/react";
// import { prisma } from "../../../lib/prisma"
import {Main, Sub} from "../../styles/fonts"
import { RxDoubleArrowRight } from 'react-icons/rx';

import React from 'react'
import { useApprovedModal } from "@/components/layout/approved";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useRouter } from "next/navigation";
import useWindowSize from "@/lib/hooks/use-window-size";


const Approval = () => {
  const router = useRouter()
  const { isMobile, isDesktop } = useWindowSize();
  
  return (
    <main className='flex h-screen w-screen overflow-hidden'>
    {isDesktop && (
      <div className="flex justify-between m-auto auth-box-modal">
      <IoIosArrowRoundBack className="text-4xl text-prbly-dark cursor-pointer relative top-20 left-20" onClick={() => router.back()}/>
      <div className="flex flex-col m-auto">
          <h1 style={Main.style} className="text-7xl font-bold leading-tight text-center">  Looks like you’re not <br/>
  part of a club </h1>
          <p style={Sub.style} className="text-base text-center pt-4"> Select which category suits you best and submit the form to join <br/> our investors or founders club  </p>  
          <div className=" flex flex-row relative top-10 left-40">
            <Link href="https://airtable.com/shrpsJBwbCCItUeyP">
            <button className="gallery-btn-2 flex flex-row mr-10">
              <div className="flex my-auto shine-anim">
                <span style={Sub.style} className="text-prbly-dark text-base flex my-auto px-6 py-1"> Founder
                </span>
              </div>
            </button>
            </Link>
            <Link href="https://airtable.com/shrRQQgTrJHkduJjF">
            <button className="gallery-btn-2 flex flex-row" >
              <div className="flex my-auto shine-anim">
                <span style={Sub.style} className="text-prbly-dark text-base flex my-auto px-6 py-1"> Investor
                </span>
              </div>
            </button>
            </Link>
        </div>
      </div>
      </div>
    )}
    {isMobile && (
       <div className="flex justify-between m-auto auth-box-mobile-page">
       <IoIosArrowRoundBack className="text-4xl text-prbly-dark cursor-pointer relative top-20 left-20" onClick={() => router.back()}/>
       <div className="flex flex-col m-auto">
           <h1 style={Main.style} className="xl:text-7xl md:text-7xl text-4xl font-bold leading-tight text-center">  Looks like you’re not <br/>
   part of a club </h1>
           <p style={Sub.style} className="md:text-base text-sm text-center pt-4"> Select which category suits you best and submit the form to join <br/> our investors or founders club  </p>  
           <div className=" flex flex-row relative top-10 md:left-40 left-8">
           <Link href="https://airtable.com/shrpsJBwbCCItUeyP">
             <button className="gallery-btn-2 flex flex-row mr-10">
               <div className="flex my-auto shine-anim">
                 <span style={Sub.style} className="text-prbly-dark text-base flex my-auto px-6 py-1"> Founder
                 </span>
               </div>
             </button>
             </Link>
             <Link href="https://airtable.com/shrRQQgTrJHkduJjF">
             <button className="gallery-btn-2 flex flex-row" >
               <div className="flex my-auto shine-anim">
                 <span style={Sub.style} className="text-prbly-dark text-base flex my-auto px-6 py-1"> Investor
                 </span>
               </div>
             </button>
             </Link>
         </div>
       </div>
       </div>
    )}
    </main>
  )
}

export default Approval