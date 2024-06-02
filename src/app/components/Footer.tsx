// import Link from "next/link"
// import { LinkedinIcon, MountainIcon } from "lucide-react"
// import { merriweather } from "./ui/fonts"
// import Image from "next/image"
// import logo from '../../../public/images/4.png'
// export default function Footer() {
//   return (
//     <footer className="bg-gray-900 text-gray-300 py-12 md:py-16 snap-start mx-auto">
//       <div className="container mx-auto px-4 md:px-6 flex flex-wrap gap-12 place-content-center items-center">
//         <div className="space-y-4 flex-1 mx-auto grid place-content-center items-center">
//           <div className="flex place-content-center items-center space-x-2">
//             <Image src={logo} alt="logo" className="w-10 mr-2 rounded-sm"/>
//             <span className="text-lg font-bold"><span className={merriweather.className}>Vandana Singh & Associates</span></span>
//           </div>
//           <p className="text-sm leading-relaxed">
//             Providing expert legal advice and compliance solutions for businesses of all sizes.
//           </p>
//         </div>
//         <div className="space-y-2 flex-1">
//           <h4 className="text-lg font-semibold">Quick Links</h4>
//           <div className="space-y-1 grid grid-rows-4">
//             <Link className="hover:text-gray-50 transition-colors" href="#about">
//               About
//             </Link>
//             <Link className="hover:text-gray-50 transition-colors" href="#services">
//               Services
//             </Link>
//             <Link className="hover:text-gray-50 transition-colors" href="#contact">
//               Contact
//             </Link>
//             <Link className="hover:text-gray-50 transition-colors" href="/blog">
//               Blog
//             </Link>
//           </div>
//         </div>
//         {/* <div className="space-y-2 flex-1">
//           <h4 className="text-lg font-semibold">Contact</h4>
//           <div className="space-y-1 text-sm">
//             <p>123 Main St, Anytown USA</p>
//             <p>Phone: (123) 456-7890</p>
//             <p>Email: info@compliancelaw.com</p>
//           </div>
//         </div> */}
//         <div className="space-y-2 flex-1">
//           <h4 className="text-lg font-semibold">Follow Us</h4>
//           <div className="flex space-x-4">
//             <Link className="hover:text-gray-50 transition-colors text-lg" target="_blank" href="https://www.linkedin.com/company/vsingh-associates">
//               <p className="flex place-content-center items-center gap-1"><LinkedinIcon className="h-4"/><span className="">LinkedIn</span></p>
//             </Link>
//           </div>
//         </div>
//       </div>
//       <div className="container mx-auto px-4 md:px-6 mt-8 text-center text-sm">
//         <p>© 2024 Vandana Singh and Associates. All rights reserved.</p>
//       </div>
//     </footer>
//   )
// }

import Link from "next/link";
import { LinkedinIcon } from "lucide-react";
import { merriweather } from "./ui/fonts";
import Image from "next/image";
import logo from "../../../public/images/4.png";

export default function Footer() {
  return (
    <footer className="snap-start bg-gray-900 text-gray-300 py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6 flex flex-wrap flex-col sm:flex-row gap-12 justify-center items-center">
        <div className="space-y-4 text-center flex-1">
          <div className="flex justify-center items-center space-x-2">
            <Image src={logo} alt="logo" className="w-10 mr-2 rounded-sm" />
            <span className="text-lg font-bold">
              <span className={merriweather.className}>
                Vandana Singh & Associates
              </span>
            </span>
          </div>
          <p className="text-sm leading-relaxed">
            Providing expert legal advice and compliance solutions for
            businesses of all sizes.
          </p>
        </div>
        <div className="space-y-2 text-center flex-1">
          <h4 className="text-lg font-semibold">Quick Links</h4>
          <div className="space-y-1">
            <div>
              <Link
                className="hover:text-gray-50 transition-colors"
                href="#about"
              >
                About
              </Link>
            </div>
            <div>
              <Link
                className="hover:text-gray-50 transition-colors"
                href="#services"
              >
                Services
              </Link>
            </div>
            <div>
              <Link
                className="hover:text-gray-50 transition-colors"
                href="#contact"
              >
                Contact
              </Link>
            </div>
            <div>
              <Link
                className="hover:text-gray-50 transition-colors"
                href="/blog"
              >
                Blog
              </Link>
            </div>
          </div>
        </div>
        <div className="space-y-2 text-center flex-1">
          <h4 className="text-lg font-semibold">Follow Us</h4>
          <div className="flex justify-center space-x-4">
            <Link
              className="hover:text-gray-50 transition-colors text-lg"
              target="_blank"
              href="https://www.linkedin.com/company/vsingh-associates"
            >
              <p className="flex justify-center items-center gap-1">
                <LinkedinIcon className="h-4" />
                <span>LinkedIn</span>
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-6 mt-8 text-center text-sm">
        <p>© 2024 Vandana Singh and Associates. All rights reserved.</p>
      </div>
    </footer>
  );
}
