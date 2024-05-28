
import Link from "next/link"
import { LinkedinIcon, MountainIcon } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <MountainIcon className="h-6 w-6 text-gray-400" />
            <span className="text-lg font-bold">Compliance Law</span>
          </div>
          <p className="text-sm leading-relaxed">
            Providing expert legal advice and compliance solutions for businesses of all sizes.
          </p>
        </div>
        <div className="space-y-2">
          <h4 className="text-lg font-semibold">Quick Links</h4>
          <nav className="space-y-1">
            <Link className="hover:text-gray-50 transition-colors" href="#">
              About
            </Link>
            <Link className="hover:text-gray-50 transition-colors" href="#">
              Services
            </Link>
            <Link className="hover:text-gray-50 transition-colors" href="#">
              Contact
            </Link>
            <Link className="hover:text-gray-50 transition-colors" href="#">
              Privacy Policy
            </Link>
          </nav>
        </div>
        <div className="space-y-2">
          <h4 className="text-lg font-semibold">Contact</h4>
          <div className="space-y-1 text-sm">
            <p>123 Main St, Anytown USA</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@compliancelaw.com</p>
          </div>
        </div>
        <div className="space-y-2">
          <h4 className="text-lg font-semibold">Follow Us</h4>
          <div className="flex space-x-4">
            <Link className="hover:text-gray-50 transition-colors" href="#">
              <LinkedinIcon className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-6 mt-8 text-center text-sm">
        <p>© 2024 Compliance Law. All rights reserved.</p>
      </div>
    </footer>
  )
}
