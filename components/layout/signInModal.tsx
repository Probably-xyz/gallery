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
import useWindowSize from "@/lib/hooks/use-window-size";

const SignInModal = ({
  showSignInModal,
  setShowSignInModal,
}: {
  showSignInModal: boolean;
  setShowSignInModal: Dispatch<SetStateAction<boolean>>;
 
}) => {
  const [signInClicked, setSignInClicked] = useState(false);

  const router = useRouter()

  const { isMobile, isDesktop } = useWindowSize();

  return (
    <>

{isDesktop && (
    <Modal showModal={showSignInModal} setShowModal={setShowSignInModal}>
            <div className="flex justify-between m-auto auth-box-modal">
        <div className="flex lg:flex-col flex-row px-24 ">
          <IoIosArrowRoundBack className="lg:text-4xl text-6xl text-prbly-dark cursor-pointer relative top-20" onClick={() => router.back()} />


          <div className="my-auto">
              <h1 className="2xl:text-6xl xl:text-4xl lg:text-4xl font-semibold" style={Main.style}>
                Enter your email
              </h1>
              <p style={Sub.style} className="xl:text-base lg:text-xs text-prbly-dark mt-5 ">
                Please log in or sign up to get full access to Probably
              </p>
          </div>


        </div>

        <UserAuthForm />

      </div>

    </Modal>
   )}
      
{isMobile && (
  <Modal showModal={showSignInModal} setShowModal={setShowSignInModal}>
  <div className="auth-box-mobile flex items-center">
    <div className="flex flex-col m-auto px-4">
    <div className="flex flex-col">
      <IoIosArrowRoundBack className="text-4xl text-prbly-dark cursor-pointer relative" onClick={() => router.back()} />
      <div className="m-auto">
          <h1 className="text-3xl font-semibold text-center pt-10" style={Main.style}>
            Enter your email
          </h1>
          <p style={Sub.style} className="text-base mt-2 text-prbly-dark text-center">
            Please log in or sign up to get full access to Probably
          </p>
      </div>
    </div>
    <UserAuthForm />
    </div>
  </div>
</Modal>
)}
    

   
  
    

      
    
    </>
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

