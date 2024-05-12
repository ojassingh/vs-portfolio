"use client";
import Link from "next/link";
import { motion } from "framer-motion";


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
    <div className="flex z-50 bg-neutral-100 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-3xl place-content-end">
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
            className="py-[10px] px-3 rounded-3xl text-lg text-neutral-900"
          >
            <p>{item.name}</p>
          </motion.div>
        </Link>
      ))}
    </div>
  );
}

