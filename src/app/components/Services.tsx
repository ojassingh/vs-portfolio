"use client";
import React, { useRef } from "react";
import { merriweather } from "./ui/fonts";
import {
  FileIcon,
  HandshakeIcon,
  TrashIcon,
  SearchIcon,
  RocketIcon,
  BanknoteIcon,
  ChevronRight,
} from "lucide-react";
import { useInView } from "framer-motion";
import Link from "next/link";

export function Services() {
  const ref2 = useRef(null);
  const isInView2 = useInView(ref2, { once: true });

  const services = [
    {
      title: "Mergers and Acquisitions",
      features: [
        "Support through M&A transactions",
        "Comprehensive due diligence support",
        "Facilitation from initiation to completion",
      ],
      icon: HandshakeIcon,
    },
    {
      title: "Startup Registration",
      features: [
        "Expert registration guidance",
        "Compliance with Indian regulations",
        "Accelerating startup journeys",
      ],
      icon: RocketIcon,
    },
    {
      title: "FEMA and RBI Compliance",
      features: [
        "Compliance with FEMA and RBI regulations",
        "Expertise in foreign exchange and banking",
        "Navigational support in regulations",
      ],
      icon: BanknoteIcon,
    },
    {
      title: "Corporate Advisory",
      features: [
        "Guidance on corporate laws",
        "Expertise in Companies Act, SEBI, FEMA, FDI",
        "Navigating complex legal frameworks",
      ],
      icon: FileIcon,
    },
    {
      title: "Winding Up",
      features: [
        "Professional dissolution services",
        "Compliance with liquidation requirements",
        "Voluntary and compulsory liquidation",
      ],
      icon: TrashIcon,
    },
    {
      title: "Secretarial Auditing and Due Diligence",
      features: [
        "Corporate governance enhancement",
        "Detailed audits and due diligence",
        "Adherence to Companies Act, 2013",
      ],
      icon: SearchIcon,
    },
  ];

  return (
    <div
      id="services"
      className="snap-start min-h-screen rounded-md bg-[#f8f9fa] grid place-content-center"
      ref={ref2}
    >
      <section
        className="w-full px-4 py-10 md:py-20 px md:px-32"
        style={{
          transform: isInView2 ? "none" : "translateY(+200px)",
          opacity: isInView2 ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4 px-4 flex-1">
            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl text-[#353b48] tracking-wide">
              <span className={merriweather.className}>Our Legal Services</span>
            </h2>
            <p className="text-gray-500 text-base md:text-lg">
              Our team of experienced attorneys provides a wide range of legal
              services to meet your needs. Please reach out to us if you have
              any other needs.
            </p>
            <Link href="#contact" className="mx-auto">
              <button className="bg-gradient-to-r text-white from-indigo-600/[0.9] to-blue-600/[0.9] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] px-4 py-2 rounded-3xl my-5">
                Get in touch <ChevronRight className="inline-block h-fit" />
              </button>
            </Link>
          </div>
          <div className="flex-3">
            <div className="flex flex-wrap gap-2 mx-auto place-content-center ">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="w-[100%] md:w-[32%] py-6 px-8 bg-[#f8f9fa] rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:bg-blue-50"
                >
                  <service.icon className="w-6 h-6 text-[#273c75] text-center mx-auto" />
                  <h3 className="mt-4 text-lg font-semibold text-[#273c75] text-center">
                    {service.title}
                  </h3>
                  <ul className="text-base text-[#4a4a4a] pl-4 list-image-checkmark">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="mt-2 ">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
// list-image-[url(../../../../public/images/badge.svg)
