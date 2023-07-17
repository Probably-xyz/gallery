"use client"

import React from 'react'
import {Main, Sub} from "@/styles/fonts"
import { MainFooter, MainNav } from '@/components/nav.component';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { useRouter } from "next/navigation";



const Manifesto = () => {
    const router = useRouter()

  return (
    <div>
    {/* <IoIosArrowRoundBack className="md:text-4xl text-2xl md:flex hidden text-prbly-dark cursor-pointer top-20 left-20 fixed" onClick={() => router.back()}/> */}
    <div className="py-24">
    <div className="max-w-screen-2xl flex flex-col">
        <div className="mx-auto">
            <p className="text-slate-400 italic font-normal text-center" style={Sub.style}> Our Manifesto </p>
            <h1 className="md:text-6xl text-3xl text-center mt-2 font-medium" style={Main.style}> At the precipice of <br/> startup evolution </h1>
        </div>

        <div className="md:w-[48%] mx-auto pt-14 px-10">
            <h1 className="text-left text-prbly-accent font-medium text-base" style={Main.style}> Evolution not revolution </h1>
            <p className="mt-6 md:text-base text-xs font-light text-slate-600">In a world full of noise, talk, unrealized dreams, over estimated expectations, and underestimated creators. We forgot about the essence of what startups are. They aren’t numbers, a dot on the line, or the next investment opportunity. But rather they are the corpuscles of life, flowing through stone, metal, water, and air of cities. Breathing, breeding life. Creating opportunities, creating families, and creating chances. <br/> <br/>

            We believe in equal opportunities - that multiply competition. We believe in communities - that create chances. We believe in support systems - that generate results. We believe that when an individual, ambitious enough, passionate enough, smart enough wants to create something from nothing, they need to be supported. <br/> <br/>

            If they don’t get the support, the dream ends. We want dreams to become reality. We aren’t a business model and we aren’t a charity. We are the ones who are there when needed. Operating in the shadows - changing the game, step by step. <br/> <br />

            This is evolution, not revolution.
            <br/> <br/>

            A message by Probably.
            </p>
        </div>


        <div className="md:w-[46%] mx-auto pt-12">
            <h1 className="text-left text-prbly-accent font-medium text-base" style={Main.style}> Our Promise Points </h1>
            <ul className="list-disc mt-3 ml-8">
                <li className="md:text-base text-xs font-light text-slate-600">No Ghosting</li>
                <li className="md:text-base text-xs font-light text-slate-600">No forcing founders to pay any fee</li>
                <li className="md:text-base text-xs font-light text-slate-600">No taking extra equity from founders</li>
            </ul>
        </div>

    </div>
    </div>
    </div>
    
  )
}

export default Manifesto