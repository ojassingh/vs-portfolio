"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FileCog, Gavel, Heart, Home, Newspaper, Phone, SearchSlash } from "lucide-react";
import { merriweather } from "./ui/fonts";

export function NavbarDemo() {
  const navItems = [
    { name: 'Home', href: '/#home', logo: <Home className="inline-block mx-2 h-5"/>},
    { name: 'About', href: '/#about', logo: <SearchSlash className="inline-block mx-2 h-5"/>},
    { name: 'Services', href: '/#services', logo: <FileCog className="inline-block mx-2 h-5"/>},
    { name: 'Testimonials', href: '/#testimonials', logo: <Heart className="inline-block mx-2 h-5"/>},
    { name: 'Blog', href: '/blog', logo: <Newspaper className="inline-block mx-2 h-5"/>},
    { name: 'Contact', href: '/#contact', logo: <Phone className="inline-block mx-2 h-5"/>},
  ];

  return (
    <div className="z-[1000] bg-[#f8f9fa] top-0 flex place-content-between px-20 py-2 mx-auto inset-x-0 sticky">
      <div className="text-xl text-black font-medium py-2  ">
        <Link href="/#home"><p className={merriweather.className}>
            Vandana Singh & Associates <Gavel className="h-7 inline-block" />
        </p></Link>
      </div>
      <div className="flex">
      {navItems.map((item) => (
        <Link key={item.name} href={item.href}>
          <motion.div
            whileHover={{
              backgroundColor: '#d3d3d3',
              transition: {
                type: 'inertia',
                velocity: '40',
              },
            }}
            className="py-2 px-3 rounded-3xl text-lg text-neutral-900 hover:text-blue-500"
          >
            <p>{item.logo}{item.name}</p>
          </motion.div>
        </Link>
      ))}
      </div>
    </div>
  );
}

