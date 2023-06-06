import Image from 'next/image'
// import { SignInBtn } from "./components/button.component"
import  {SignInBtn}  from "./components/button.component"
import { getServerSession } from "next-auth";
import { authOptions } from './lib/auth';
import { redirect } from "next/navigation";
import Link from "next/link"


export default async function Home() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/gallery");
  }
  return (
   <div>
      <SignInBtn />
      <pre>{JSON.stringify(session)}</pre>
      <Link href="/signIn">
        Test link 
      </Link>
   </div>
  )
}
