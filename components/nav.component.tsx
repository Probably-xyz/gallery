"use client";
import { Main, Sub } from "@/styles/fonts";
import Link from "next/link";
import React from "react";
import { signOut, useSession } from "next-auth/react";
import { authOptions } from "@/lib/auth";

export const MainNav = () => {
  return (
    <>
      <nav className="flex items-center w-screen mx-auto">
        <div className="flex flex-row justify-between mx-auto w-screen px-28 ">
          <Link
            style={Sub.style}
            href="/"
            className="text-2xl text-prbly-black pt-10 font-medium"
          >
            Prbly.<span className="text-base text-prbly-accent logo">beta</span>
          </Link>

          <li className="content__item">
            <a
              href="#"
              style={Sub.style}
              className="link link--elara text-base text-prbly-black font-light mt-10"
              data-text="Contact Us"
            >
              <span> Contact Us</span>
            </a>
          </li>
        </div>
      </nav>
    </>
  );
};

export const GalleryNav = () => {
  return (
    <nav className="flex items-center w-screen mx-auto">
      <div className="flex flex-row justify-between mx-auto w-screen px-28">
        <Link
          style={Sub.style}
          href="/"
          className="text-2xl text-prbly-black pt-10 font-medium"
        >
          Prbly.
          <span className="text-base text-prbly-accent logo">gallery</span>
        </Link>

        <ul className="flex flex-row">
          <li className="content__item mr-10">
            <a
              onClick={() => signOut()}
              href="#"
              style={Sub.style}
              className="link link--elara text-base text-prbly-black font-light mt-10"
              data-text="Contact Us"
            >
              <span> Signout</span>
            </a>
          </li>

          <li className="content__item">
            <a
              href="#"
              style={Sub.style}
              className="link link--elara text-base text-prbly-black font-light mt-10"
              data-text="Contact Us"
            >
              <span> Contact Us</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export const MainFooter = () => {
  return (
    <footer className="flex items-center w-screen mx-auto relative top-24 border-t border-prbly-dark shadow-inner">
      <div className="flex flex-row justify-between mx-auto w-screen px-24 pt-10">
        <h1 style={Sub.style} className="text-base text-prbly-gray font-light ">
          Copyright © 2023 Probably
        </h1>

        <div className="switch-text">
          <span
            style={Sub.style}
            className="text-base text-prbly-black font-light text-1"
          >
            Entrepreneurs are 50% more likely to have mental health conditions
          </span>

          <span
            style={Sub.style}
            className="text-base text-prbly-black font-light text-1"
          >
            Entrepreneurs are 50% more likely to have mental health conditions
          </span>

          <span
            style={Sub.style}
            className="text-base text-prbly-black font-light text-1"
          >
            Entrepreneurs are 50% more likely to have mental health conditions
          </span>

          <span
            style={Sub.style}
            className="text-base text-prbly-black font-light text-1"
          >
            Entrepreneurs are 50% more likely to have mental health conditions
          </span>

          <span
            style={Sub.style}
            className="text-base text-prbly-black font-light text-1"
          >
            Entrepreneurs are 50% more likely to have mental health conditions
          </span>
        </div>

        <ul
          style={Sub.style}
          className="text-base font-normal flex md:space-x-5 "
        >
          <li className="content__item">
            <a
              href="#"
              style={Sub.style}
              className="link link--elara text-base text-prbly-black font-light"
            >
              <span> Linkedin </span>
            </a>
          </li>
          <li className="content__item">
            <a
              href="#"
              style={Sub.style}
              className="link link--elara text-base text-prbly-black font-light"
            >
              <span> Twitter </span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};