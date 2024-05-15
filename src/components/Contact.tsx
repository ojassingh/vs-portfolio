"use client";
import React from "react";
import { merriweather } from "./ui/fonts";

export function Contact() {
    return (
      <div id="contact" className="snap-start h-screen w-full rounded-md bg-neutral-100 p-32">
        <h1 className="font-bold text-5xl "><span className={merriweather.className}>Let's have a chat!</span></h1>

      </div>
    );
  }
  