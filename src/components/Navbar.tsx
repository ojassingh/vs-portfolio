"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Gavel } from "lucide-react";
import { merriweather } from "./ui/fonts";

export function NavbarDemo() {
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="z-[1000] bg-[#f8f9fa] w-screen absolute top-0 flex place-content-between px-20 py-2">
      <div className="text-lg font-medium py-2">
        <p className={merriweather.className}>
            Vandana Singh & Associates <Gavel className="h-7 inline-block" />
        </p>
      </div>
      <div className="flex">
      {navItems.map((item) => (
        <Link key={item.name} href={item.href}>
          <motion.div
            whileHover={{
              backgroundColor: '#A5B4FC',
              transition: {
                type: 'inertia',
                velocity: '40',
              },
            }}
            className="py-2 px-3 rounded-3xl text-lg text-neutral-900"
          >
            <p>{item.name}</p>
          </motion.div>
        </Link>
      ))}
      </div>
    </div>
  );
}

