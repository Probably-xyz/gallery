"use client"

import React, { MouseEventHandler } from 'react';
import {FC} from "react"
import { signIn, signOut } from "next-auth/react"
import {RxDoubleArrowRight} from "react-icons/rx"
import {Sub, Main} from "@/styles/fonts"


export const SignInBtn = () => {
  return (
    <button onClick={() => signIn()}> 
        <h1> TEST SIGN IN </h1>
    </button>
  )
}

export const ExploreBtnHero = () => {
  return(
    <button className="gallery-btn-3 flex flex-row">
    <div className="flex my-auto shine-anim shine-anim-2">
      <span style={Sub.style}   className="text-prbly-dark xl:text-2xl lg:text-lg sm:text-2xl text-lg flex my-auto ml-3"> Enter Gallery
        <RxDoubleArrowRight className="flex my-auto text-2xl text-prbly-dark ml-6"/>
      </span>
    </div>
    </button>
  )
}


export const FormSubmitBtn = () => {
  return (
    <button className="gallery-btn flex flex-row">
      <div className="flex my-auto shine-anim">
        <span style={Sub.style} className="text-prbly-dark text-base flex my-auto ml-3"> Submit 
          <RxDoubleArrowRight className="flex my-auto text-base text-prbly-dark ml-3"/>
        </span>
      </div>
    </button>
  )
}

interface EmailProps{
  params: {
    name: string,
    image: string,
  }
}



export const EmailForm:FC <EmailProps> = ({params}) => {

  async function handleOnSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();

  

    await fetch('/api/email', {
      method: 'POST',
      body: JSON.stringify({
        name: params.name,
        image: params.image,
      })
    })

    
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <button className="gallery-btn flex flex-row" type="submit">
      <div className="flex my-auto shine-anim">
        <span style={Sub.style} className="text-prbly-dark text-base flex my-auto ml-3"> Request more information 
          <RxDoubleArrowRight className="flex my-auto text-base text-prbly-dark ml-3"/>
        </span>
      </div>
    </button> 
    </form>
   
  )
}
  



export const SignOutBtn = () => {
    return (
      <button onClick={() => signOut()}> 
          <h1> TEST SIGN OUT </h1>
      </button>

    )
  }
  
