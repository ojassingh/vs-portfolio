"use client";
import React from "react";
import { merriweather} from "./ui/fonts";
import Link from "next/link";
import { Gavel, ChevronRight, MapPin, ChevronDown } from "lucide-react";
import { WavyBackground } from "./ui/wavy-background";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import icsi from "../../public/images/icsi.png";
import Image from "next/image";

export function Hero() {
  const words = "Compliance Expertise that You Can Trust";
  return (
    <div
      id="home"
      className="!snap-start snap-y h-screen w-full rounded-md bg-[#f8f9fa] grid place-content-center relative"
    >
      {/* <div className="absolute top-5 left-5 md:left-10 z-[1000] text-lg md:text-xl font-medium">
        <p className={merriweather.className}>
          Vandana Singh & Associates <Gavel className="h-5 md:h-7 inline-block" />
        </p>
      </div> */}

      <div className="mt-20 md:mt-0">
        <WavyBackground blur={60}>
          <div className=" mx-auto p-4 grid place-content-center gap-4">
            <h3 className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] bg-gradient-to-r from-indigo-600/[0.8] via-blue-600/[0.8] to-pink-600/[0.8] text-white rounded-3xl text-center mx-auto px-3 py-1 my-4 text-xs sm:text-sm md:text-base lg:text-lg">
              Compliance law firm based in New Delhi, India{" "}
              <MapPin size={16} className="inline-block -ml-0 mb-1" />
            </h3>

            <TextGenerateEffect words={words} />
            <p className="text-neutral-900 max-w-lg mx-auto my-2 text-sm sm:text-base md:text-lg lg:text-2xl py-4 text-center relative z-10">
              Trusted legal experts providing comprehensive solutions for your
              business.
            </p>
            <div className="flex place-content-center gap-2 sm:gap-4 flex-wrap">
              <a target="_blank" href="" className="">
                <button className="text-white py-1 sm:py-2 text-xs sm:text-sm md:text-lg rounded-3xl bg-gradient-to-r from-indigo-600/[0.9] to-blue-600/[0.9] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] px-3 sm:px-5 font-light shadow-2xl">
                  Book a 15 min call now{" "}
                  <ChevronRight className="inline-block h-fit" />
                </button>
              </a>
              <Link
                href="#about"
                className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] text-black py-1 sm:py-2 bg-neutral-200 outline outline-1 outline-indigo-500 text-xs sm:text-sm md:text-lg rounded-3xl px-3 sm:px-5 font-light shadow-2xl"
              >
                Learn more <ChevronDown className="inline-block h-fit" />
              </Link>
            </div>
          </div>
        </WavyBackground>
      </div>
      <div className="absolute bottom-5 md:bottom-10 2xl:bottom-20 right-0 inset-x-0 w-max left-0 w-full mx-auto z-[100]">
        <Image src={icsi} alt="icsi logo" height={70} className="text-center mx-auto" />
        <p className="text-center text-neutral-500 text-xs sm:text-sm md:text-base">
          Trusted by Institute of Company Secretaries of India
        </p>
      </div>
    </div>
  );
}
