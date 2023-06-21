"use client"

import { Main, Sub } from '@/styles/fonts'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import React, {FC} from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { BiLinkExternal } from 'react-icons/bi'
import { FaLinkedinIn } from 'react-icons/fa'
import { IoIosArrowRoundBack } from 'react-icons/io'
import { RxDoubleArrowRight } from 'react-icons/rx'

interface SlugProps {
    params: {
        name: string,
        linkedin: string,
        website: string,
        logo: string,
        investStage: string,
        industry: string,
        pitch: string,
        stage: string,
        id: string,
        tagline: string,
    }
}

const Slug: FC <SlugProps> = ({params}) => {

  


  // let link = `http://localhost:3000/api/email` + id
  
  async function sendEmail() {


    const toastLoad = toast.loading("We're sending that email")

    const id = params.id

    console.log(id)


    let link = `https://www.prbly.xyz/api/email/` + id

    await fetch(link)


    toast.remove(toastLoad)
    toast.success("Email sent")

  
}



    
  return (
    <>
    <Toaster />
    <div className="flex w-screen h-screen">
      <div className="flex flex-col slug-box items-center m-auto">
        <div className="flex flex-row justify-between w-full px-10">
          <Link href="/gallery">
            <IoIosArrowRoundBack className="text-4xl text-prbly-dark mt-14 cursor-pointer" />
          </Link>
          <h1 className="text-6xl font-semibold text-prbly-dark mt-14 ml-20" style={Main.style}> {params.name} </h1>
          <ul className="flex flex-row mt-14">
            <li>
              <Link href={params.linkedin} target="_blank">
                <FaLinkedinIn className="text-2xl mr-10" />
              </Link>
            </li>
            <Link href={params.website} target="_blank">
            <BiLinkExternal className="text-2xl mr-10" />
            </Link>
          </ul>
        </div>

        <div className="flex flex-row px-4 pt-6">
          <div className="industry-card-2 flex"> <span className="text-sm text-prbly-dark flex m-auto items-center" style={Sub.style}> {params.industry} </span> </div>
          <div className="industry-card-2 flex"> <span className="text-sm text-prbly-dark flex m-auto items-center" style={Sub.style}> {params.stage} </span> </div>
          <div className="industry-card-2 flex"> <span className="text-sm text-prbly-dark flex m-auto items-center" style={Sub.style}> {params.investStage} </span> </div>
        </div>

        <div className="pitch-preview mt-10">

          <div className="pitch-deck">
            <iframe className="w-full h-full" src={params.pitch} />
          </div>

        </div>


        <button className="gallery-btn flex flex-row mx-auto mt-6" onClick={sendEmail}>
          <div className="flex my-auto shine-anim">
            <span style={Sub.style} className="text-prbly-dark text-base flex my-auto ml-3"> Request more information
              <RxDoubleArrowRight className="flex my-auto text-base text-prbly-dark ml-3" />
            </span>
          </div>
        </button>

      </div>

      <div className="flex flex-col slug-box-mobile items-center m-auto">
        <div className="flex flex-row justify-between w-full px-10">
          <Link href="/gallery">
            <IoIosArrowRoundBack className="text-4xl text-prbly-dark mt-8 cursor-pointer" />
          </Link>
          
            <h1 className="lg:text-6xl font-semibold text-prbly-dark mt-8 lg:ml-20 text-3xl md:ml-20 ml-16" style={Main.style}> 
            {params.name}
            </h1>
        

          <ul className="flex flex-row lg:mt-14 lg:ml-0 mt-10 ml-12">
            <li>
              <Link href={params.linkedin} target="_blank">
                <FaLinkedinIn className="lg:text-2xl text-lg md:mr-10 mr-6" />
              </Link>
            </li>
            <a href={params.website} target="_blank">
              <BiLinkExternal className="lg:text-2xl text-lg md:mr-10 mr-6" />
            </a>
          </ul>
        </div>

        <div className="flex flex-row px-4 pt-6">
          <div className="industry-card-2 flex"> <span className="text-sm text-prbly-dark flex m-auto items-center" style={Sub.style}> {params.industry} </span> </div>
          <div className="industry-card-2 flex"> <span className="text-sm text-prbly-dark flex m-auto items-center" style={Sub.style}> {params.stage} </span> </div>
          <div className="industry-card-2 flex"> <span className="text-sm text-prbly-dark flex m-auto items-center" style={Sub.style}> {params.investStage} </span> </div>
        </div>

        <div className="pitch-preview mt-10">

          <div className="pitch-deck">
            <iframe className="w-full h-full" src={params.pitch} />
          </div>

        </div>


        <button className="gallery-btn flex flex-row mx-auto mt-4" onClick={sendEmail}>
          <div className="flex my-auto shine-anim">
            <span style={Sub.style} className="text-prbly-dark text-base flex my-auto ml-3"> Request more information
              <RxDoubleArrowRight className="flex my-auto text-base text-prbly-dark ml-3" />
            </span>
          </div>
        </button>

      </div>
    </div>
    </>
  )
}

export default Slug