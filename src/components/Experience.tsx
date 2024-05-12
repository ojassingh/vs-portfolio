"use client";
import React from "react";
import { Button } from "./ui/button";
import { ibm_serif } from "./ui/fonts";

export function Experience() {
    return (
      <div id="experiences" className="snap-start h-screen w-full rounded-md bg-neutral-100 grid place-content-center">
        <div className="max-w-2xl mx-auto p-4 grid place-content-center">
          <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b to-neutral-600 from-neutral-900 text-center font-['IBM Plex Serif'] font-bold">
            <span className={ibm_serif.className}>Vandana Singh and Associates</span>
          </h1>
          <p className="text-neutral-500 max-w-lg mx-auto my-2 text-xl text-center relative z-10">
            Trusted legal experts providing comprehensive solutions for your business.
          </p>
          <Button variant="default" className="bg-blue-500 text-lg mx-auto inline-block">Book a consultation</Button>
        </div>
      </div>
    );
  }
  