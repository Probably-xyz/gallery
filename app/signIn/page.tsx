import Link from "next/link"
import { getCsrfToken } from "next-auth/react"
import {Main, Sub} from "@/app/styles/fonts"
// import ExploreBtn from "@/components/ExploreBtn"
import { CtxOrReq } from "next-auth/client/_utils"


// export async function getServerSideProps(context: CtxOrReq | undefined) {
//   const csrfToken = await getCsrfToken(context)
//   return {
//     props: { csrfToken },
//   }
// }



export default async function SignIn(context: CtxOrReq | undefined) {

  const csrfToken  = await getCsrfToken(context)

  return (
      <main className='flex un-approved h-screen w-screen overflow-hidden'>

        <div className="flex justify-between m-auto auth-box">

          <div className="flex flex-col my-auto px-24">
              <h1 className="text-5xl font-semibold" style={Main.style}> 
                Enter your email
              </h1>
              <p style={Sub.style} className="text-base text-prbly-dark mt-5">  
              Please log in or sign up to get full access to Probably
              </p>

              <a href="#" style={Sub.style} 
              className="link link--elara auth-button text-base text-prbly-black font-light" data-text="Contact Us">
						      <span> Contact Us</span>
					    </a>

          </div>

          <div className="flex flex-col my-auto px-36">
              <form method="post" className="flex flex-col" action="/api/auth/signin/email">
                  <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
                
                  <input placeholder="hello@prbly.xyz" className="email-form mb-8 mt-10" type="email" id="email" name="email" />
                
                  <button type="submit"> Submit </button>
              </form>

              <Link href="/" style={Sub.style} 
              className="link link--elara auth-button-home text-base text-prbly-black font-light" data-text="Contact Us">
						      <span> Home </span>
					    </Link>

          </div>

        

        </div>

      </main>
  )
}

