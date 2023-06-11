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

const ApprovedModal = ({
  showApprovedModal,
  setShowApprovedModal,
}: {
  showApprovedModal: boolean;
  setShowApprovedModal: Dispatch<SetStateAction<boolean>>;
 
}) => {
  const [signInClicked, setSignInClicked] = useState(false);

  const router = useRouter()

  return (
    <Modal showModal={showApprovedModal} setShowModal={setShowApprovedModal}>
        <div className="flex justify-between m-auto auth-box-modal">
        <IoIosArrowRoundBack className="text-4xl text-prbly-dark cursor-pointer relative top-20 left-20" onClick={() => router.back()}/>
        <div className="flex flex-col m-auto">
            <h1 style={Main.style} className="text-7xl font-bold leading-tight text-center">  Looks like you’re not <br/>
part of a club </h1>
            <p style={Sub.style} className="text-base text-center pt-4"> Select which category suits you best and submit the form to join <br/> our investors or founders club  </p>  
            <div className=" flex flex-row relative top-10 left-40">
              <button className="gallery-btn-2 flex flex-row mr-10">
                <div className="flex my-auto shine-anim">
                  <span style={Sub.style} className="text-prbly-dark text-base flex my-auto px-6 py-1"> Founder
                  </span>
                </div>
              </button>
              <Link href="https://airtable.com/embed/shrpsJBwbCCItUeyP?backgroundColor=purple">
              <button className="gallery-btn-2 flex flex-row" >
                <div className="flex my-auto shine-anim">
                  <span style={Sub.style} className="text-prbly-dark text-base flex my-auto px-6 py-1"> Investor
                  </span>
                </div>
              </button>
              </Link>
             
              
          </div>
        </div>
        </div>


    </Modal>
  );
};

export function useApprovedModal() {
  const [showApprovedModal, setShowApprovedModal] = useState(true);

  

  const ApprovedModalCallback = useCallback(() => {
    return (
      <ApprovedModal
            showApprovedModal={showApprovedModal}
            setShowApprovedModal={setShowApprovedModal}/>
    );
  }, [showApprovedModal, setShowApprovedModal]);

  return useMemo(
    () => ({ setShowApprovedModal, ApprovedModal: ApprovedModalCallback }),
    [setShowApprovedModal, ApprovedModalCallback],
  );
}

