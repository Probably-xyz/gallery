/* eslint-disable @next/next/no-img-element */
import { CardSkeleton } from '@/components/card.component'
import { Loader } from 'lucide-react'
import React from 'react'

const loading = () => {
  return (
    <>
    {/* <div className="flex w-screen text-prbly-accent text-7xl">
        <div className="flex items-center mx-auto my-auto pt-44">
          <Loader size={70}/>
        </div>
    </div> */}

    <div className="flex w-screen text-prbly-accent text-7xl">
        <div className="flex items-center mx-auto my-auto pt-44">
          <img src="/loading.svg" alt="loading"/>
        </div>
    </div>
  
        
    </>
  )
}

export default loading