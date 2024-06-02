"use client";
import React from "react";
import { merriweather } from "./ui/fonts";
import Footer from "./Footer";
import ContactForm from "./ui/ContactForm";
import Image from "next/image";
import gavel from "../../../public/images/gavel.jpeg";
import Link from "next/link";
import { ArrowUpRight, Linkedin, Hand} from "lucide-react";

export function Contact() {
  return (
    <div id="contact" className="snap-start h-screen py-10 sm:py-20">
      <div className="w-full bg-[#f8f9fa] rounded-md px-4 sm:px-4 md:px-32 pb-20 sm:pt-10">
        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl text-black text-center sm:text-left">
          <span className={merriweather.className}>Let&apos;s have a chat</span>
          <Hand className="inline-block w-8 h-8 sm:h-12 sm:w-12 mx-4 mb-2 rotate-45" />
        </h1>

        <div className="flex flex-wrap-reverse sm:flex-nowrap md:flex-nowrap mx-auto p-6 sm:p-10 md:w-[80%]  shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-2xl mt-10 place-content-center items-center ">
          <div className="sm:flex-1 bg-gradient-to-r from-blue-500 to-indigo-500 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-2xl p-4 sm:p-10 relative overflow-hidden z-100 my-auto">
            <h1 className="text-white text-lg sm:text-xl md:text-2xl font-semibold">
              Get in touch with us today!
            </h1>
            <p className="mt-10 text-neutral-200 text-md md:text-lg">
              We&apos;d love to help you out. Please fill in the form and we will get
              back to you as soon as possible.
            </p>
            <div className="my-10">
              <Link href="https://www.linkedin.com/company/vsingh-associates" target="_blank" className="text-white text-sm sm:text-md md:text-lg underline">
                <Linkedin className="inline-block h-5 mr-2 " />
                Follow Us on LinkedIn <ArrowUpRight className="inline-block h-5"/>
              </Link>
            </div>{" "}
            <div className="sm:py-16">
            <Image
              src={gavel}
              alt="gavel-image"
              className="object-contain rounded-tl-2xl absolute bottom-0 -right-[20%] z-0 hidden sm:inline-block"
            />
            </div>
          </div>

          <div className="sm:flex-1 p-4 sm:p-10">
            <ContactForm />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
