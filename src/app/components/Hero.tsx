"use client";
import React from "react";
import { merriweather } from "./ui/fonts";
import Link from "next/link";
import {
  Gavel,
  ChevronRight,
  MapPin,
  ChevronDown,
  Scale,
  Rocket,
  FilePenLine,
} from "lucide-react";
import { WavyBackground } from "./ui/wavy-background";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import icsi from "../../../public/images/icsi.png";
import Image from "next/image";
import { motion } from "framer-motion";

import unicharm from "../../../public/images/unicharm.png";
import itochu from "../../../public/images/itochu.png";
import censhare from "../../../public/images/censhare.png";
import egelhof from "../../../public/images/egelhof.png";
import cpr from "../../../public/images/CPR.png";
import WordRotate from "./ui/word-rotate";

export function Hero() {
  return (
    <div
      id="home"
      className="!snap-start snap-y min-h-screen w-full rounded-md bg-[#f8f9fa] grid place-content-center relative"
    >
      <WavyBackground blur={60}>
        <div className="w-full mx-auto z-[100]">
          <Image
            src={icsi}
            alt="icsi logo"
            height={70}
            className="text-center mx-auto"
          />
          <p className="text-center text-neutral-500 text-xs sm:text-sm 2xl:text-lg">
            Trusted by Institute of Company Secretaries of India
          </p>
        </div>
        <div className=" mx-auto px-4 grid place-content-center gap-4">
          <motion.h3
            whileHover={{
              translateY: "-5px",
              transition: { ease: "linear", duration: 0.2 },
            }}
            className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] bg-gradient-to-r from-indigo-600/[0.8] to-blue-600/[0.8] text-white rounded-3xl text-center mx-auto px-3 py-1 my-4 text-xs sm:text-sm md:text-xl"
          >
            Compliance law firm based in New Delhi, India{" "}
            <MapPin size={16} className="inline-block -ml-0 mb-1" />
          </motion.h3>

          <TextGenerateEffect words={words} />
          <p className="text-neutral-900 max-w-xl mx-auto text-xl sm:text-xl md:text-2xl py-4 text-center relative z-10">
            Trusted legal experts providing comprehensive solutions for your
            business.
          </p>
          <div className="flex flex-wrap sm:flex-nowrap md:flex-nowrap place-content-center gap-2 sm:gap-4">
            <button className="text-white py-1 sm:py-2 text-xs sm:text-sm md:text-xl rounded-3xl bg-gradient-to-r from-indigo-600/[0.9] to-blue-600/[0.9] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] px-3 sm:px-5 font-light">
              <Link href="#contact">Get in Touch Now</Link>
              <ChevronRight className="inline-block h-fit" />
            </button>
            <Link
              href="#about"
              className="text-black py-1 sm:py-2 bg-neutral-200 outline outline-1 outline-indigo-500 text-xs sm:text-sm md:text-xl rounded-3xl px-3 sm:px-5 font-light shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
            >
              Learn more <ChevronDown className="inline-block h-fit" />
            </Link>
          </div>
        </div>

        <div className="grid place-content-center gap-10 mt-20 mx-auto inset-x-0 px-8 sm:px-0">
          <h1 className="text-md sm:text-xl text-center font-medium inline-block text-transparent bg-clip-text bg-gradient-to-r from-indigo-800 via-blue-800 to-pink-600 uppercase">
            Powering founders And companies all across the world
          </h1>
          <div className="flex flex-wrap sm:flex-nowrap gap-4 sm:gap-10 place-content-center items-center">
            {companies.map((company, i) => {
              return (
                <motion.a
                  target="_blank"
                  href={company.link}
                  whileHover={{
                    scale: 1.05,
                    transition: { ease: "linear", duration: 0.1 },
                  }}
                  key={i}
                  className="grid place-content-center justify-items-center items-center"
                >
                  <Image
                    src={company.src}
                    alt={company.name}
                    height={50}
                    width={150}
                    className="h-8 sm:h-full object-contain"
                  />
                </motion.a>
              );
            })}
          </div>
        </div>
      </WavyBackground>
    </div>
  );
}

const companies = [
  {
    name: "Unicharm",
    src: unicharm,
    link: "https://www.unicharm.co.in/",
  },
  {
    name: "Itochu",
    src: itochu,
    link: "https://www.itochu.co.jp/en/about/network/asia/index.html#anc5",
  },
  {
    name: "Censhare",
    src: censhare,
    link: "https://www.censhare.com/",
  },
  {
    name: "Egelhof",
    src: egelhof,
    link: "https://www.egelhof.com/",
  },
  {
    name: "Institute for Policy Research",
    src: cpr,
    link: "https://www.cprindia.org/",
  },
];
const words = "Compliance Expertise that You Can Trust";

{
  /* <motion.div
          whileHover={{
            rotate: 10,
            transition: { ease: "easeOut", duration: 0.2 },
          }}
          className="absolute top-20 left-20"
        >
          <Scale size={150} className=" text-neutral-600 rotate-[15deg]" />
        </motion.div>
        <motion.div
          whileHover={{
            rotate: -10,
            transition: { ease: "easeOut", duration: 0.2 },
          }}
          className="absolute bottom-20 right-20"
        >
          <Rocket size={150} className=" text-neutral-600 rotate-[-15deg]" />
        </motion.div>
        <motion.div
          whileHover={{
            rotate: -10,
            transition: { ease: "easeOut", duration: 0.2 },
          }}
          className="absolute bottom-20 left-20"
        >
          <Gavel size={150} className=" text-neutral-600 rotate-[15deg]" />
        </motion.div>
        <motion.div
          whileHover={{
            rotate: 10,
            transition: { ease: "easeOut", duration: 0.2 },
          }}
          className="absolute top-20 right-20"
        >
          <FilePenLine
            size={150}
            className=" text-neutral-600 rotate-[-15deg]"
          />
        </motion.div> */
}
