'use client'
import React, {useRef} from "react";
import { merriweather } from "./ui/fonts";
import {
  FileIcon,
  HandshakeIcon,
  TrashIcon,
  SearchIcon,
  RocketIcon,
  BanknoteIcon,
  ChevronRight
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
      className="snap-start h-screen w-full rounded-md bg-[#f8f9fa] grid place-content-center"
      ref={ref2}
      style={{
        transform: isInView2 ? "none" : "translateX(+400px)",
        opacity: isInView2 ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
    >
      <section className="w-full py-20 px-32">
        <div className="flex items-center justify-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4 w-[40%]">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#353b48] tracking-wide">
              <span className={merriweather.className}>Our Legal Services</span>
            </h2>
            <p className="text-gray-500 text-xl">
              Our team of experienced attorneys provides a wide range of legal
              services to meet your needs. Please reach out to us if you have
              any other needs.
            </p>
            <Link href="#contact">
              <button className="bg-gradient-to-r from-blue-700 via-indigo-500 to-pink-400 py-2 px-4 text-white rounded-3xl my-5">
                Get in touch <ChevronRight className="inline-block h-fit" />
              </button>
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 w-[60%]">
            {services.map((service, index) => (
              <div
                key={index}
                className="py-6 px-8 bg-[#f8f9fa] rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:bg-blue-50"
              >
                <service.icon className="w-6 h-6 text-[#273c75] text-center mx-auto" />
                <h3 className="mt-4 text-lg font-semibold text-[#273c75] text-center">
                  {service.title}
                </h3>
                <ul className="text-base text-[#4a4a4a]] pl-4 list-image-checkmark">
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
      </section>
    </div>
  );
}
// list-image-[url(../../../../public/images/badge.svg)