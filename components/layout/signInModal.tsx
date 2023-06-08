"use client"

import Modal from "@/components/shared/modal";
import { signIn } from "next-auth/react";
import {
  useState,
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
} from "react";
import {Sub, Main} from "@/styles/fonts"
import Link from "next/link";
import { UserAuthForm } from "../auth-form";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useRouter } from "next/navigation";
import { redirect } from "next/navigation";

const SignInModal = ({
  showSignInModal,
  setShowSignInModal,
}: {
  showSignInModal: boolean;
  setShowSignInModal: Dispatch<SetStateAction<boolean>>;
 
}) => {
  const [signInClicked, setSignInClicked] = useState(false);

  const router = useRouter()

  return (
    <Modal showModal={showSignInModal} setShowModal={setShowSignInModal}>
      <div className="flex justify-between m-auto auth-box">
       
     

          <div className="flex flex-col px-24">

          <IoIosArrowRoundBack className="text-4xl text-prbly-dark cursor-pointer relative top-20" onClick={() => router.back()}/>


          <div className="my-auto">
          <h1 className="text-5xl xl:text-7xl font-semibold" style={Main.style}> 
              Enter your email
            </h1>
            <p style={Sub.style} className="text-base xl:text-lg text-prbly-dark mt-5">  
            Please log in or sign up to get full access to Probably
            </p>
          </div>
         

            <a href="#" style={Sub.style} 
            className="link link--elara auth-button text-base text-prbly-black font-light" data-text="Contact Us">
                <span> Contact Us</span>
            </a>

            {/* <Link href="/" style={Sub.style} 
                className="link link--elara auth-button-home text-base text-prbly-black font-light" data-text="Contact Us">
                <span> Home </span>
            </Link> */}

        </div>

        
        

<UserAuthForm/>

</div>

     
    </Modal>
  );
};

export function useSignInModal() {
  const [showSignInModal, setShowSignInModal] = useState(true);

  

  const SignInModalCallback = useCallback(() => {
    return (
      <SignInModal
            showSignInModal={showSignInModal}
            setShowSignInModal={setShowSignInModal}/>
    );
  }, [showSignInModal, setShowSignInModal]);

  return useMemo(
    () => ({ setShowSignInModal, SignInModal: SignInModalCallback }),
    [setShowSignInModal, SignInModalCallback],
  );
}

