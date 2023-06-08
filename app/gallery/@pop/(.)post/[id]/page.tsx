"use client"

import React from 'react'
import { useSlugModal} from "@/components/layout/slugModal";


const Slug = () => {
  const { SlugModal, setShowSlugModal } = useSlugModal();

  return (
    <>
      <SlugModal />      

    </>
  )
}

export default Slug