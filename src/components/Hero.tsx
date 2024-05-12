"use client";
import React from "react";
import { merriweather, source_serif_4, pt_serif} from "./ui/fonts";
import Link from "next/link";
import { Highlight } from "./ui/highlight";
import { Gavel, ChevronRight, MapPin } from "lucide-react";
import { WavyBackground } from "./ui/wavy-background";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import icsi from "../../public/images/icsi.png";
import Image from "next/image";
export function Hero() {
  const words = " Compliance Expertise that You Can Trust"
  return (
    <div
      id="home"
      className="!snap-start snap-y h-screen w-full rounded-md bg-neutral-100  grid place-content-center sticky"
    >
      <div className="absolute top-5 left-10 z-[1000] text-xl font-medium ">
        <p className={merriweather.className}>
          Vandana Singh & Associates <Gavel className="h-7 inline-block" />
        </p>
      </div>
      <div className="absolute top-0 right-0 inset-x-0 w-max left-0 w-full mx-auto z-[1000]">
        <Image src={icsi} alt="icsi logo" height={90} className="text-center mx-auto"/>
        <p className="text-center text-neutral-500">Trusted by Institute of Company Secretaries of India</p>
      </div>
      <WavyBackground blur={60}>
        <div className="max-w-2xl mx-auto p-4 grid place-content-center gap-4">
          <h3 className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] bg-gradient-to-r from-indigo-600/[0.8] via-blue-600/[0.8] to-pink-600/[0.8] text-white rounded-3xl text-center mx-auto px-3 py-1 my-4">
          Compliance law firm based in New Delhi, India <MapPin size={20} className="inline-block -ml-0 mb-1" />
        </h3>
        
          <TextGenerateEffect words={words} />
          <p className="text-neutral-900 max-w-lg mx-auto my-2 text-2xl py-4 text-center relative z-10">
            Trusted legal experts providing comprehensive solutions for your
            business.
          </p>
          <div className="flex place-content-center gap-4">
            <button className="text-white py-2 text-lg rounded-3xl bg-gradient-to-r  from-indigo-600/[0.9] to-blue-600/[0.9] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] px-5 font-light shadow-2xl">
              Book your consultation{" "}
              <ChevronRight className="inline-block h-fit" />
            </button>
            <Link
              href="#services"
              // variant="default"
              className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] text-black py-2 bg-neutral-200 outline outline-1 outline-indigo-500 text-lg rounded-3xl px-5 font-light shadow-2xl"
            >
              Browse our services
            </Link>
          </div>
        </div>
      </WavyBackground>
    </div>
  );
}


// <p className=" w-[15em] tracking-wide relative z-10 text-7xl bg-clip-text text-transparent bg-gradient-to-b to-neutral-700 from-neutral-900 text-center font-bold md:leading-[5.6rem]">
// <span className={merriweather.className}>
//   {/* Compliance Expertise that{"  "} You Can Trust */}
//    {/* Compliance Expertise that{"  "} You Can Trust */}
//    <TextGenerateEffect words={words} />
// </span>
// </p>