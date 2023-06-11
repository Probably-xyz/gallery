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
    
    <div className="max-w-screen-2xl flex flex-row justify-between px-24 py-44 2xl:py-56">
      <div className="flex flex-col">
        <div className={Main.className}>
          <h1 className="text-7xl hero uppercase leading-tight font-bold">
            The place to get <br /> Founded and Funded
          </h1>
          <p className="text-prbly-gray pt-2">
            A platform that supports, connects, and nurtures entreprenuers
          </p>
        </div>
      </div>

      {session ? (
        <Link href="/gallery">
          <ExploreBtnHero />
        </Link>
      ) : !session ? (
        <Link href="/signin">
          <ExploreBtnHero />
        </Link>
      ) : null}
    </div>
  );
};

export default Hero;
