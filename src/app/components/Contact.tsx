"use client";
import React from "react";
import { merriweather } from "./ui/fonts";
import Footer from "./Footer";
import { Coffee } from "lucide-react";

export function Contact() {
  return (
    <div>
      <div
        id="contact"
        className="snap-start h-full w-full bg-[#f8f9fa] rounded-md p-32"
      >
        <h1 className="font-bold text-5xl text-black">
          <span className={merriweather.className}>Let&apos;s have a chat</span>
          <Coffee className="inline-block h-12 w-12 mx-4 mb-2" />
        </h1>
      </div>
      <Footer />
    </div>
  );
}
