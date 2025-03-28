import Link from "next/link"
import { Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0a014f] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Ephoreal<span className="text-[#cd9fcc]">Tech</span>
            </h3>
            <p className="text-white/70 mb-4">
              Transforming ideas into digital reality with cutting-edge web development and UI/UX design solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/ephorealtech/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#cd9fcc] transition-colors"
                aria-label="Instagram"
              >
                <Instagram />
              </a>
              <a
                href="https://www.linkedin.com/company/ephoreal-technologies/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#cd9fcc] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white/70 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/70 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-white/70 hover:text-white transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/70 hover:text-white transition-colors">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/70 hover:text-white transition-colors">
                  Custom Software Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/70 hover:text-white transition-colors">
                  Digital Transformation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="mr-2 h-5 w-5 text-[#cd9fcc] shrink-0 mt-0.5" />
                <span>+91-9790176084</span>
              </li>
              <li className="flex items-start">
                <Mail className="mr-2 h-5 w-5 text-[#cd9fcc] shrink-0 mt-0.5" />
                <a href="mailto:info@ephoreal.com" className="hover:text-[#cd9fcc] transition-colors">
                  info@ephoreal.com
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-[#cd9fcc] shrink-0 mt-0.5" />
                <address className="not-italic text-white/70">
                  No: 14, Rajaji Street, 2nd Floor, Sudhana Nagar, Nainarmandapam, Puducherry – 605004
                </address>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 text-center text-white/60">
          <p>&copy; {currentYear} Ephoreal Technologies (OPC) Private Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

