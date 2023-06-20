import Image from 'next/image'
import { getServerSession } from "next-auth";
import { authOptions } from '@/lib/auth';
import { redirect } from "next/navigation";
import Link from "next/link"
import { MainFooter, MainNav } from '@/components/nav.component';
import Hero from '@/components/layout/hero';


export default async function Home() {
  const session = await getServerSession(authOptions);

  // if (session) {
  //   redirect("/gallery");
  // }


  return (
   <div>
      <MainNav/>
      <Hero/>
      <MainFooter/>
   </div>
  )
}
