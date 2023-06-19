"use client"

import { Main, Sub } from '@/styles/fonts'
import Link from 'next/link'
import React, {FC} from 'react'
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
    }
}

const Slug: FC <SlugProps> = ({params}) => {

    async function handleOnSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
        e.preventDefault();
    
      
    
        await fetch('/api/email', {
          method: 'POST',
         
        })
    
        
      }

  return (
    <div className="flex w-screen h-screen overflow-hidden">
    <div className="flex flex-col slug-box items-center m-auto">
        <div className="flex flex-row justify-between w-full px-10">
          <Link href="/gallery">
          <IoIosArrowRoundBack className="text-4xl text-prbly-dark mt-14 cursor-pointer" />
          </Link>
          <h1 className="text-6xl font-semibold text-prbly-dark mt-14 ml-20" style={Main.style}> {params.name} </h1>
          <ul className="flex flex-row mt-14">
            <li>
              <Link href={params.linkedin} target="_blank">
                <FaLinkedinIn className="text-2xl mr-10"/>
              </Link>
            </li>
            {/* <Link href={data.website} target="_blank"> */}
              <BiLinkExternal className="text-2xl mr-10"/>
            {/* </Link> */}
          </ul>
        </div>
        
        <div className="flex flex-row px-4 pt-6">
              <div className="industry-card-2 flex"> <span className="text-sm text-prbly-dark flex m-auto items-center" style={Sub.style}> {params.industry} </span> </div>
              <div className="industry-card-2 flex"> <span className="text-sm text-prbly-dark flex m-auto items-center" style={Sub.style}> {params.stage} </span> </div>
              <div className="industry-card-2 flex"> <span className="text-sm text-prbly-dark flex m-auto items-center" style={Sub.style}> {params.investStage} </span> </div>
          </div>

           <div className="pitch-preview mt-10"> 
           
            <div className="pitch-deck">
              <iframe className="w-full h-full" src={params.pitch}/>
            </div>
            
         </div>
         <form onSubmit={handleOnSubmit} className="flex mx-auto items-center mt-8">
            <button className="gallery-btn flex flex-row" type="submit">
                <div className="flex my-auto shine-anim">
                    <span style={Sub.style} className="text-prbly-dark text-base flex my-auto ml-3"> Request more information 
                    <RxDoubleArrowRight className="flex my-auto text-base text-prbly-dark ml-3"/>
                    </span>
                </div>
             </button>
         </form>
    </div>
</div>
  )
}

export default Slug