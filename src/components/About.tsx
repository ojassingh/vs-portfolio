"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { WobbleCard } from "./ui/wobble-card";
import headshot from "../../public/images/headshot.jpeg";
import { merriweather } from "./ui/fonts";
import { Hand, Linkedin, ChevronDown } from "lucide-react";
import cs from "../../public/images/cs.png";
import CountUp from "react-countup";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import Link from "next/link";

export function About() {
  const statistics = [
    {
      title: "Multinational Companies",
      stat: "200",
    },
    {
      title: "Years of Experience",
      stat: "20",
    },
    {
      title: "Capital Handled",
      stat: "50+",
    },
    {
      title: "Client Retention",
      stat: "90",
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      id="about"
      className="p-4 md:p-8 lg:p-20 snap-start bg-[#f8f9fa] grid gap-4 md:gap-0 h-screen"
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateX(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
    >
      <div className="flex flex-col md:flex-row gap-4 max-w-7xl mx-auto justify-center mt-4 ">
        <div className="w-full md:w-1/2 lg:w-[60%] h-[100%] rounded-3xl bg-[#f8f9fa]">
          <motion.div
            whileHover={{
              scale: 1.01,
              transition: { ease: "easeInOut", duration: 0.2 },
            }}
            className="bg-[#f8f9fa] h-[100%] shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-10 rounded-2xl"
          >
            <div className="grid place-content-center">
              <div>
                <h2 className="inline-block text-3xl lg:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-800 via-blue-800 to-pink-600">
                  <span className={merriweather.className}>More about us!</span>
                </h2>
              </div>
              <p className="py-4 text-lg lg:text-xl text-neutral-900">
                Our team of legal experts specializes in a wide range of
                corporate law practices, including mergers and acquisitions,
                corporate governance, regulatory compliance, and dispute
                resolution. We pride ourselves on our ability to provide
                tailored solutions that meet the unique needs of our clients.
              </p>
              <div className="flex gap-2">
                <Link href="#services">
                <button className="bg-gradient-to-r text-white from-indigo-600/[0.9] to-blue-600/[0.9] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] py-2 px-4 rounded-3xl">
                  Our Services <ChevronDown className="inline-block h-fit" />
                </button></Link>
                <a target="_blank" href="">
                  <button className="bg-gradient-to-r text-white from-indigo-600/[0.9] to-blue-600/[0.9] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] py-2 px-4 rounded-3xl">
                    <Linkedin />
                  </button>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="w-full md:w-1/2 lg:w-[40%] h-auto">
          <div className="grid grid-cols-2 gap-4 h-full rounded-3xl">
            {statistics.map((stat, i) => {
              return (
                <motion.div
                  whileHover={{
                    scale: 1.01,
                    transition: { ease: "easeInOut", duration: 0.2 },
                  }}
                  key={i}
                  className="bg-[#f8f9fa] shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-3xl text-center text-white grid place-content-center"
                >
                  {isInView && (
                    <p className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-700 to-pink-600 inline-block text-transparent bg-clip-text">
                      <CountUp end={parseInt(stat.stat)} />+
                    </p>
                  )}
                  <h2 className="text-md lg:text-lg text-black">
                    {stat.title}
                  </h2>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 max-w-7xl mx-auto justify-center mt-4 h-[80%]">
        <motion.div
          whileHover={{
            scale: 1.01,
            transition: { ease: "easeInOut", duration: 0.2 },
          }}
          className="w-full md:w-2/3 lg:w-3/4 "
        >
          <div className="bg-[#f8f9fa] shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-10 rounded-2xl">
            <div className="">
              <h2 className="text-2xl lg:text-4xl font-bold text-black underline">
                Meet our Founder
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/vandanacs/"
                >
                  <button className="text-white rounded-3xl bg-gradient-to-r  from-indigo-600/[0.9] to-blue-600/[0.9] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] py-2 px-4 mx-4">
                    <Linkedin />
                  </button>
                </a>
              </h2>
              <p className="mt-4 text-lg lg:text-xl text-black">
                <Image
                  src={cs}
                  alt="CS Member Logo"
                  height={16}
                  className="inline-block mr-1 mb-1"
                />
                Vandana Singh is a highly accomplished company secretary with
                over two decades of extensive experience. She specializes in
                advising businesses on secretarial compliance, formation and
                registration of both Indian and offshore companies, and a
                multitude of company law matters. Her profound expertise extends
                to acquisitions, restructuring, private equity, and joint
                ventures. She is adept at drafting agreements and conducting
                meticulous due diligence, making her an invaluable asset to
                numerous Indian businesses. Her unwavering dedication to her
                clients have earned her a reputation as one of India's leading
                company secretary.
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.01,
            transition: { ease: "easeInOut", duration: 0.2 },
          }}
          className="w-full md:w-1/3 lg:w-1/4"
        >
          <Image
              src={headshot}
              alt="linear demo image"
              className="object-cover w-full h-full top-0 bottom-0 right-0 left-0 rounded-2xl"
            />
        </motion.div>
      </div>
    </div>
  );
}
