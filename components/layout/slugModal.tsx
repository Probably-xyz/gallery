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

const SlugModal = ({
  showSlugModal,
  setShowSlugModal,
}: {
  showSlugModal: boolean;
  setShowSlugModal: Dispatch<SetStateAction<boolean>>;
 
}) => {
  const [slugClicked, setSlugClicked] = useState(false);

  return (
    <Modal showModal={showSlugModal} setShowModal={setShowSlugModal}>
      
        <h1> HELLO </h1>

     
    </Modal>
  );
};

export function useSlugModal() {
  const [showSlugModal, setShowSlugModal] = useState(true);

  

  const SlugModalCallback = useCallback(() => {
    return (
      <SlugModal
            showSlugModal={showSlugModal}
            setShowSlugModal={setShowSlugModal}/>
    );
  }, [showSlugModal, setShowSlugModal]);

  return useMemo(
    () => ({ setShowSlugModal, SlugModal: SlugModalCallback }),
    [setShowSlugModal, SlugModalCallback],
  );
}

