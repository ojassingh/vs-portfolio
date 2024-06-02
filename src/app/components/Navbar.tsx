"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FileCog,
  Gavel,
  Heart,
  Home,
  Newspaper,
  Phone,
  SearchSlash,
} from "lucide-react";
import logo from "../../../public/images/4.png";
import Image from "next/image";
import { DropdownMenuDemo } from "./ui/Dropdown";

export function NavbarDemo() {
  const navItems = [
    {
      name: "Home",
      href: "/#home",
      logo: <Home className="inline-block h-5" />,
    },
    {
      name: "About",
      href: "/#about",
      logo: <SearchSlash className="inline-block h-5" />,
    },
    {
      name: "Services",
      href: "/#services",
      logo: <FileCog className="inline-block h-5" />,
    },
    {
      name: "Testimonials",
      href: "/#testimonials",
      logo: <Heart className="inline-block h-5" />,
    },
    {
      name: "Contact",
      href: "/#contact",
      logo: <Phone className="inline-block h-5" />,
    },
    {
      name: "Blog",
      href: "/blog",
      logo: <Newspaper className="inline-block h-5" />,
    },
  ];

  return (
    <div className="z-[1000] bg-[#f8f9fa] top-0 flex place-content-between items-center px-4 sm:px-12 md:px-20 py-2 mx-auto inset-x-0 sm:sticky">
      <div className="text-xl text-black font-medium">
        <Link href="/#home">
          <Image src={logo} alt="logo" className="w-16" />
        </Link>
      </div>
      <div className="hidden sm:hidden md:inline-block">
        <div className="flex">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href}>
              <motion.div
                whileHover={{
                  backgroundColor: "#d3d3d3",
                  transition: {
                    type: "inertia",
                    velocity: "40",
                  },
                }}
                className="py-2 px-3 rounded-3xl text-lg text-neutral-900 hover:text-blue-500 mx-auto"
              >
                <p className="flex place-content-center items-center gap-2 mx-auto">
                  {item.logo}
                  {item.name}
                </p>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
      <div className="inline-block sm:inline-block md:hidden z-[1000]">
        <DropdownMenuDemo />
      </div>
    </div>
  );
}
