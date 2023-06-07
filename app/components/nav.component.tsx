"use client"
import {Main, Sub} from "../styles/fonts"
import Link from "next/link"
import React from 'react'
// import { useSignInModal } from "./layout/signInModal";




export const MainNav = () => {
  return (
    <>
    
    <nav className="flex items-center w-screen mx-auto">
        <div className="flex flex-row justify-between mx-auto w-screen px-28">
            
        
            
        <Link style={Sub.style} href="/" className="text-2xl text-prbly-black pt-10 font-medium">
            Prbly.<span className="text-base text-prbly-accent logo">beta</span>
        </Link>
            
            
        {/* <a href="#" style={Sub.style} className="text-base text-prbly-black font-light pt-12">
            Contact us
        </a> */}
                {/* <button
                className="rounded-full border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black"
                onClick={() => setShowSignInModal(true)}
              >
                Sign In
              </button> */}

                <li className="content__item">
                    <a href="#" style={Sub.style} 
                    className="link link--elara text-base text-prbly-black font-light mt-10" data-text="Contact Us">
                        <span> Contact Us</span>
                    </a>
                </li>
            
        </div>
    </nav>
    </>
  )
}



export const GalleryNav = () => {
    return (
        <nav className="flex items-center w-screen mx-auto">
        <div className="flex flex-row justify-between mx-auto w-screen px-28">
            
        
            
        <Link style={Sub.style} href="/" className="text-2xl text-prbly-black pt-10 font-medium">
            Prbly.<span className="text-base text-prbly-accent logo">gallery</span>
        </Link>
            
            
        {/* <a href="#" style={Sub.style} className="text-base text-prbly-black font-light pt-12">
            Contact us
        </a> */}

                <li className="content__item">
                    <a href="#" style={Sub.style} 
                    className="link link--elara text-base text-prbly-black font-light mt-10" data-text="Contact Us">
                        <span> Contact Us</span>
                    </a>
                </li>
            
        </div>
    </nav>
    )
  }

  
  