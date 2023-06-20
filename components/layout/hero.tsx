"use client";

import React from "react";
// import {Main, Sub} from "../styles/fonts"
// import ExploreBtn from './ExploreBtn'
import Link from "next/link";

import { Familjen_Grotesk, Inter } from "next/font/google";
import { ExploreBtnHero } from "@/components/button.component";
import { useSession } from "next-auth/react";

const Main = Familjen_Grotesk({ subsets: ["latin"] });
const Sub = Inter({ subsets: ["latin"] });

const Hero = () => {
  const { data: session } = useSession();

  return (
    
    <div className="max-w-screen-2xl flex lg:flex-row flex-col justify-between lg:px-24 md:px-12 2xl:pt-56 xl:pt-44 md:pt-40 pt-36">
      <div className="flex flex-col lg:mx-0 mx-auto">
        <div className={Main.className}>
          <h1 className="2xl:text-7xl xl:text-7xl lg:text-5xl md:text-5xl text-3xl hero uppercase leading-tight font-bold lg:text-left text-center">
            The place to get <br /> Founded and Funded
          </h1>
          <p className="text-prbly-gray pt-2 text-sm sm:text-base lg:text-left text-center">
              Submit your startup and showcase it to a group of investors, it’s that easy.
          </p>
        </div>
      </div>

      <div className="mx-auto lg:mx-0">
        <Link href="/signin">
          <ExploreBtnHero />
        </Link>
      </div>
        
     
       
    </div>
  );
};

export default Hero;
