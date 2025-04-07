import Link from "next/link"
import { Instagram, Linkedin, Phone, MapPin } from "lucide-react"
import { siteConfig } from "@/config/site"
import Logo from "@/components/logo"
import WhatsAppButton from "@/components/whatsapp-button"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-accent text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <Logo className="h-10 w-auto mb-4" textColor="text-white" />
            <p className="mt-4 text-gray-300 max-w-md">
              Providing modern, dynamic, and engaging web development, UI/UX design, and technology solutions for
              businesses.
            </p>
            <div className="flex space-x-4 mt-6">
              <Link
                href={siteConfig.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-secondary transition-colors"
              >
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-secondary transition-colors"
              >
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {siteConfig.mainNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-gray-300 hover:text-white transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-300">{siteConfig.links.address}</p>
                  <Link
                    href={siteConfig.links.maps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:underline mt-1 inline-block"
                  >
                    Get Directions
                  </Link>
                </div>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-secondary" />
                <Link href={siteConfig.links.phone} className="text-gray-300 hover:text-white transition-colors">
                  +91-9790176084
                </Link>
              </li>
              <li>
                <WhatsAppButton className="mt-2" />
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© {currentYear} by Ephoreal Technologies. All Rights Reserved.</p>
          <p className="text-gray-400 text-sm mt-2 md:mt-0">
            <Link href={siteConfig.links.email} className="hover:text-white transition-colors">
              {"Email: Info@Ephoreal.com"}
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

