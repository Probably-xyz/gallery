"use client"

import React from 'react'
import { FC } from 'react'
import Link from "next/link"
import { useSession } from 'next-auth/react'
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent, useState } from "react";
import {Main, Sub} from "@/styles/fonts"
import Image from 'next/image'
import { Skeleton } from './shared/skeleton'
// import { getApproved } from '@/lib/approved-user'

interface PageProps{
  params: {
    name: string,
    tagline: string,
    logo: string,
    industry: string,
    investStage: string,
    stage: string,
    id: string,
  }
  
}

interface MouseMoveEvent {
  currentTarget: {
    getBoundingClientRect: () => DOMRect;
  };
  clientX: number;
  clientY: number;
}



const Card: FC<PageProps> = ({ params} ) => {

  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  const handleMouseMove = ({ currentTarget, clientX, clientY }: MouseMoveEvent) => {
    const { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };


  return (
   
    <Link href={`/gallery/post/${params.id}`}>
    <div
        className="group cursor-pointer flex flex-col card relative  shadow-2xl"
        onMouseMove={handleMouseMove}
      >
            <motion.div
          className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                350px circle at ${mouseX}px ${mouseY}px,
                rgba(221, 219, 219, 0.54),
                transparent 80%
              )
            `,
          }}
        />
          <div className="flex flex-row px-4 py-6 z-10">
                <div className="w-32 h-32 hidden md:block my-auto">
                  <Image className="hidden md:block" src={params.logo} width={100} height={100} alt={params.name}/>
                </div>
               
             
                <div className="flex flex-col">
                  <h1 className="ml-4 text-2xl text-prbly-dark font-bold" style={Main.style}> {params.name} </h1>

                  <div className="md:w-[350px] w-60 overflow-hidden whitespace-nowrap text-ellipsis">
                    <p className="ml-4 "> {params.tagline} </p> 
                  </div>
                  
                  <div className="flex flex-row px-4 pt-6">
                    <div className="industry-card flex"> <span className="text-xs text-prbly-dark flex m-auto items-center" style={Sub.style}> {params.industry} </span> </div>
                    <div className="industry-card flex"> <span className="text-xs text-prbly-dark flex m-auto items-center" style={Sub.style}> {params.stage} </span> </div>
                    <div className="industry-card flex"> <span className="text-xs text-prbly-dark flex m-auto items-center" style={Sub.style}> {params.investStage} </span> </div>
                </div>
                </div>
               
              </div>
      
      
      </div>
    </Link>
   
  
   
  )
}

export default Card


 export function CardSkeleton() {
  return (
    <div className="p-4">
      <div className="space-y-3">
        <Skeleton className="h-5 w-2/5" />
        <Skeleton className="h-4 w-4/5" />
      </div>
    </div>
  )
}

