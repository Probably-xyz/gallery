"use client"

import React from 'react'
import { FC } from 'react'
import Link from "next/link"
import { useSession } from 'next-auth/react'
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent, useState } from "react";
import {Main, Sub} from "@/styles/fonts"

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


  const { data: session } = useSession()

  return (
   <div className="card text-prbly-accent">
    <Link href={`/gallery/post/` + params.id}>
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
            
                <Image src={"https:" + logo.fields.file.url} width={100} height={100} alt={name}/>
             
                <div className="flex flex-col">
                  <h1 className="ml-4 text-2xl text-prbly-dark font-bold" style={Main.style}> {name} </h1>
                  <p className="ml-4"> {tagline} </p>
                  <div className="flex flex-row px-4 pt-6">
                    <div className="industry-card flex"> <span className="text-xs text-prbly-dark flex m-auto items-center" style={Sub.style}> {industry} </span> </div>
                    <div className="industry-card flex"> <span className="text-xs text-prbly-dark flex m-auto items-center" style={Sub.style}> {stage} </span> </div>
                    <div className="industry-card flex"> <span className="text-xs text-prbly-dark flex m-auto items-center" style={Sub.style}> {investStage} </span> </div>
                </div>
                </div>
               
              </div>
      
      
      </div>
    </Link>
   
   </div>
   
  )
}

export default Card