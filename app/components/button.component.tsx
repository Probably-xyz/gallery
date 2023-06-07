"use client"

import React from 'react'
import { signIn, signOut } from "next-auth/react"




export const SignInBtn = () => {
  return (
    <button onClick={() => signIn()}> 
        <h1> TEST SIGN IN </h1>
    </button>
  )
}



export const SignOutBtn = () => {
    return (
      <button onClick={() => signOut()}> 
          <h1> TEST SIGN OUT </h1>
      </button>

    )
  }
  
