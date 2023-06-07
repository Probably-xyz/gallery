import Link from "next/link"
import {Main, Sub} from "@/styles/fonts"
import { UserAuthForm } from "@/components/auth-form"



// export async function getServerSideProps(context: CtxOrReq | undefined) {
//   const csrfToken = await getCsrfToken(context)
//   return {
//     props: { csrfToken },
//   }
// }



export default async function SignIn() {



  return (
    
    <UserAuthForm/>
  )
}

