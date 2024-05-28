"use client";
import { merriweather } from "./ui/fonts";
import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export function Testimonials() {
  return (
    <div
      id="testimonials"
      className="snap-start rounded-md bg-[#f8f9fa]  py-20"
    >
      <div className="text-center">
        <h1 className="text-2xl font-medium mb-10">
          <span className="bg-clip-text text-transparent bg-gradient-to-b to-indigo-600 from-blue-600">
            WHAT DO THEY SAY?
          </span>
        </h1>
        <h1 className="text-5xl font-semibold text-neutral-700">
          <span className={merriweather.className}>
            Our Clients' Kind Words
          </span>
        </h1>
        <p className="py-6 mt-4 text-xl text-neutral-500">
          Hear from the people we've helped with our services.
        </p>
      </div>
      <div className=" rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
        {/* <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        /> */}
        <div className="flex flex-wrap gap-4 place-content-center mx-auto p-2 list-none">
          {testimonials.map((item, idx) => (
            <motion.li
              whileHover={{
                scale: 1.01,
                transition: { ease: "linear", duration: 0.1 },
              }}
              className="bg-gradient-to-r from-blue-500 to-indigo-500 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] w-[350px] max-w-full relative rounded-2xl flex-shrink-0 px-8 py-6 md:w-[450px]"
              key={item.name}
            >
              <blockquote>
                <div
                  aria-hidden="true"
                  className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                ></div>
                <div className="relative z-20 flex flex-row items-center">
                  <span className="flex flex-col gap-1">
                    <span className=" text-lg leading-[1.6] text-white font-bold">
                      {item.name}
                    </span>
                    <span className=" text-md leading-[1.6] text-white font-semibold">
                      {item.role} @{" "}
                      {item.src ? <a target="_blank" href={item.src}><span className="underline">{item.company} <ArrowUpRight className="inline-block h-5" /></span></a> : item.company}
                    </span>
                  </span>
                </div>
                <span className=" relative z-20 text-md leading-[1.6] text-white font-normal">
                  "{item.quote}"
                </span>
              </blockquote>
            </motion.li>
          ))}
        </div>
      </div>
    </div>
  );
}

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  src?: string;
};

const testimonials = [
  {
    quote:
      "I collaborated with Vandana at ACT Fibernet, where she was GM & Company Secretary and played a pivotal role in launching Astravise LLP to aid startups. She is a consummate professional with deep expertise in secretarial practices. Her team is known for delivering high-quality, timely results, ensuring every interaction remains positive, regardless of the complexity involved.",
    name: "Venkatesh Bhat",
    role: "Managing Partner",
    company: "AstraVise LLP",
    src: "https://www.astravise.com",
  },
  {
    quote:
      "We've been working with Vandana & Associates for years now, and their expertise continues to impress us. From routine filings to strategic advice, they consistently exceed our expectations. Highly commendable service!!!",
    name: "Divyani Kaushik",
    role: "Company Secretary",
    company: "Unicharm",
    src: "https://www.unicharm.co.in",
  },
  {
    quote:
      "Vandana is a thorough professional, with wealth of  knowledge and experience in the domain of company law and secretarial practises! She devotes time and energy to solve all our problems and brings innovative solutions to help our business! Very proactive and dependable ! Highly recommended!!",
    name: "Madhavan ",
    role: "President",
    company: "Institute for Policy Research",
    src: "https://www.cprindia.org",
  },
  {
    quote:
      "We partnered with Vandana and her team during the inception of our startup, and they've been instrumental in guiding us through every step of our journey. Their professionalism, expertise, and commitment to keeping us compliant have been invaluable, ensuring we stay on track and reach our goals seamlessly. ",
    name: "Gopi V",
    role: "Founder",
    company: "Rodeo Digital",
    src: "https://www.rodeodigital.com",
  },
  {
    quote:
      "Vandana is an expert in company law and secretarial practices, consistently updated with the latest changes. She analyzes issues holistically, offering pragmatic solutions. Working with her is always enlightening, and I look forward to more collaborations.",
    name: "Deepak Gupta",
    role: "Founding Partner",
    company: "AstraVise LLP",
    src: "https://www.astravise.com",
  },
  {
    quote:
      "Vandana Singh & Associates is a trustworthy and reliable firm for secretarial matters. Vandana is very professional. She has an in-depth knowledge of subject matter and her work approach is always solution oriented.",
    name: "Anjali Grover",
    role: "County Legal Head",
    company: "Itochu India Pvt. Ltd.",
    src: "https://www.itochu.co.jp/en/about/network/asia/index.html#anc5",
  }
];
