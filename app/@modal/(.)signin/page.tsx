"use client"

import React from 'react'
import { useSignInModal } from "@/components/layout/signInModal";
import {useSession} from "next-auth/react"
import { redirect } from 'next/navigation';


const Signin = () => {
  const { SignInModal, setShowSignInModal } = useSignInModal();
  const { data: session } = useSession();

  if (session) {
    redirect("/gallery")
  }

  
  return (
    <>
      <SignInModal />      
    </>
  )
}

export default Signin