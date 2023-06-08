import { GalleryNav, MainFooter } from '@/components/nav.component';
import React from 'react'
import {SignOutBtn} from '@/components/button.component';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import Card from '@/components/card.component';
import { getPosts } from '@/lib/getPosts';
import {Main, Sub} from "@/styles/fonts"
import { redirect } from 'next/navigation';




export default async function Gallery()  {

  // const session = await getServerSession(authOptions);

  //  if (!session) {
  //   redirect("/");
  // }

  const { posts } = await getPosts()

  return (
    <>
    <div>
   
    <main className="fixed z-30 overflow-hidden">
        <GalleryNav/>

        <div className="flex items-center w-screen">
            <div className="flex flex-col mx-auto">
              <h1 className="flex mx-auto pt-24 pb-8 leading-tight text-4xl uppercase text-prbly-dark text-center font-bold" style={Main.style}> 
              Browse through our gallery of <br/> groundbreaking projects
              </h1>
              <div className="divider  flex mx-auto"> </div>
            </div>
        </div>
    </main>    
   
    <div className="overflow-y-scroll  overflow-x-hidden grid-gallery">
    <div className="flex flex-col w-screen mx-auto items-center pt-14">
        { posts?.map((post) =>(


         <Card key={post.id} params={{
          name: post.name,
          logo: post.logo,
          id: post.id,
          tagline: post.tagline,
          stage: post.stage,
          investStage: post.investStage,
          industry: post.industry,
        }}/>


        ))}
        </div>
    </div>
      
      
    </div>
    
    </>
  )
}
