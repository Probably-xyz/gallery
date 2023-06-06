

import React from 'react'
import { authOptions } from "../lib/auth";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import {SignOutBtn} from '../components/button.component';
import prisma from '../lib/prisma';
import { useSession } from "next-auth/react";
import Card from '../components/card.component';
import { getPosts } from '../lib/getPosts';





export default async function Gallery()  {
    // const session = await getServerSession(authOptions);

    


    // if (!session) {
    //   redirect("/api/auth/signin");
    // }

    // const user = await prisma.user.findUnique({
    //   where: {email: session?.user?.email}
    // })


  const { posts } = await getPosts()

  return (
    <div>
        <SignOutBtn />
        <div>
        { posts?.map((post) =>(
         <Card key={post.id} params={{
          name: post.name,
          description: post.description,
          id: post.id,
        }}/>
        ))}

       </div>
    </div>
  )
}
