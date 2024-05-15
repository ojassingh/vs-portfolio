"use client";
import { merriweather } from "./ui/fonts";
import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
export function Extras() {
  return (
    <div
      id="testimonials"
      className="snap-start rounded-md bg-[#f8f9fa]  py-20"
    >
      <div className="text-center">
        <h1 className="text-2xl font-medium mb-10">
          <span className="bg-clip-text text-transparent bg-gradient-to-b to-indigo-600 from-blue-600">WHAT DO THEY SAY?</span>
        </h1>
        <h1 className="text-5xl font-semibold text-neutral-700">
          <span className={merriweather.className}>Our Clients' Kind Words</span>
        </h1>
        <p className="py-6 mt-4 text-xl text-neutral-500">
          Hear from the people we've helped with our services.
        </p>
      </div>
      <div className=" rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
      <div className=" rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="left"
          speed="slow"
        />
      </div>
    </div>
  );
}

const testimonials = [
  {
    quote:
      "I collaborated with Vandana at ACT Fibernet, where she was GM & Company Secretary and played a pivotal role in launching Astravise LLP to aid startups. She is a consummate professional with deep expertise in secretarial practices. Her team is known for delivering high-quality, timely results, ensuring every interaction remains positive, regardless of the complexity involved.",
    name: "Venkatesh Bhat",
    title: "Managing Partner @ Astravise LLP",
  },
  {
    quote:
      "Vandana is an expert in company law and secretarial practices, consistently updated with the latest changes. She analyzes issues holistically, offering pragmatic solutions. Working with her is always enlightening, and I look forward to more collaborations.",
    name: "Deepak Gupta",
    title: "Founding Partner @ Astravise LLP",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];
