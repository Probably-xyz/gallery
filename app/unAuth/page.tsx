"use client"


import Link from "next/link"
import { signOut, getSession, signIn, useSession } from "next-auth/react";
// import { prisma } from "../../../lib/prisma"
import {Main, Sub} from "../../styles/fonts"
import { RxDoubleArrowRight } from 'react-icons/rx';

import React from 'react'
import { useApprovedModal } from "@/components/layout/approved";



const Approval = () => {
  const { ApprovedModal, setShowApprovedModal } = useApprovedModal();

  return (
      <ApprovedModal/>
  )
}

export default Approval