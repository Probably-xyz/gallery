import { GalleryNav } from '../components/nav.component';
import React from 'react'
import {SignOutBtn} from '../components/button.component';
import Card from '../components/card.component';
import { getPosts } from '../lib/getPosts';





export default async function Gallery()  {

  const { posts } = await getPosts()

  return (
    <div>
        <GalleryNav/>
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
