import { CardSkeleton } from '@/components/card.component'
import React from 'react'

const loading = () => {
  return (
    <>
        <div className="fixed z-30 overflow-hidden">
        
            <div className="flex items-center w-screen">
                <div className="flex flex-col mx-auto">
              
                <div className="divider  flex mx-auto"> </div>
                </div>
            </div>
        </div>    
    
        <div className="overflow-y-scroll  overflow-x-hidden grid-gallery">
        <div className="flex flex-col w-screen mx-auto items-center pt-14">
            <CardSkeleton/>
            <CardSkeleton/>

            <CardSkeleton/>

            <CardSkeleton/>

        </div>
        </div>
    </>
  )
}

export default loading