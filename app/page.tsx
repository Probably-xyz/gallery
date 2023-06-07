import Image from 'next/image'
import  {SignInBtn}  from "./components/button.component"
import { getServerSession } from "next-auth";
import { authOptions } from './lib/auth';
import { redirect } from "next/navigation";
import Link from "next/link"
import { MainNav } from './components/nav.component';


export default async function Home() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/gallery");
  }
  return (
   <div>
      <MainNav/>
      <SignInBtn />
      <pre>{JSON.stringify(session)}</pre>
      <Link href="/signIn">
        Test link 
      </Link>
   </div>
  )
}
