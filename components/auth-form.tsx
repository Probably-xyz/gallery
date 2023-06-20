"use client"

import * as React from "react"
import { useSearchParams } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { signIn } from "next-auth/react"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { cn } from "@/lib/utils"
import { userAuthSchema } from "@/lib/validations/auth"
import { buttonVariants } from "@/components/shared/button"
import { Input } from "@/components/shared/input"
// import { toast } from "@/components/shared/use-toast"
import { FormSubmitBtn } from "./button.component"
import toast, { Toaster } from 'react-hot-toast';

const successToast = () => toast.success("Check your email for a magiclink")
const errorToast = () => toast.error("Something went wrong")
const loadingToast = () => toast.loading("We're sending that email")

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

type FormData = z.infer<typeof userAuthSchema>

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(userAuthSchema),
  })
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [isGitHubLoading, setIsGitHubLoading] = React.useState<boolean>(false)
  const searchParams = useSearchParams()

  async function onSubmit(data: FormData) {

    
    const toastLoad = toast.loading("We're sending that email")

    setIsLoading(true)

    const signInResult = await signIn("email", {
      email: data.email.toLowerCase(),
      redirect: false,
      callbackUrl: searchParams?.get("from") || "/gallery",
    })


    if (signInResult?.ok || !signInResult?.ok){
      toast.remove(toastLoad)
    }
    
    
   

    if (!signInResult?.ok) {
      return toast.error("Something went wrong")
    }

    if (signInResult.ok) {
      return toast.success(`Email sent to ${data.email}`)
  }

}

  return (
    <div className="flex flex-col my-auto 2xl:px-40 xl:px-36 lg:px-24 mx-auto">
      <Toaster />
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading || isGitHubLoading}
              {...register("email")}
             
            />
            {errors?.email && (
              <p className="px-1 text-xs text-red-600">
                {errors.email.message}
              </p>
            )}
         
          <FormSubmitBtn />
           
          
      </form>
    </div>
  )
}
