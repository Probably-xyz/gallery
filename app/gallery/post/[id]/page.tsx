
/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { FC } from "react"
import { notFound, redirect } from 'next/navigation'
import {IoIosArrowRoundBack} from "react-icons/io"
import {FaLinkedinIn} from "react-icons/fa"
import {BiLinkExternal} from "react-icons/bi"
import Link from 'next/link'
import { Main, Sub } from '@/styles/fonts'
import { EmailForm, FormSubmitBtn } from '@/components/button.component'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import prisma from '@/lib/prisma'
import Slug from '@/components/layout/slug'



interface PageProps{
    params: {
      name: string,
      description: string,
      id: string,
      pitch: string,
      linkedin: string,
      website: string,
      email: any,
    }
  }

  

   export default async function SlugPage({params}: PageProps) {
    const session = await getServerSession(authOptions)

    const email = session?.user.email

    const user = await prisma.user.findUnique({
      where: {email: email!}
    })




    if (!user?.approved) {

      redirect("/unAuth")

    }


    const id = params.id

    let link = `/api/post/` + id
    


    async function getData(link: any) {
      const res = await fetch(link, {next: {revalidate: 80}})

      if (!res.ok){
          return notFound()
      }

      return res.json()
  }

      const data = await getData(link)


      return (
          <>
          
          <Slug params={{
            name: `${data.name}`,
            linkedin: `${data.linkedin}`,
            website: `${data.website}`,
            logo: `${data.logo}`,
            investStage: `${data.investStage}`,
            industry: `${data.industry}`,
            pitch: `${data.pitch}`,
            stage: `${data.stage}`,
            id: `${data.id}`
          }}/>
          
          </>
         
      )
  }


