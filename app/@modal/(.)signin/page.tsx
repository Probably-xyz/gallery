"use client"

import React from 'react'
import { useSignInModal } from "@/components/layout/signInModal";


const Signin = () => {
  const { SignInModal, setShowSignInModal } = useSignInModal();

  return (
    <>
      <SignInModal />      
    </>
  )
}

export default Signin