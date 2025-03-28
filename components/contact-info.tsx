import { Phone, Mail, MapPin } from "lucide-react"

export default function ContactInfo() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-bold text-[#0a014f] mb-6">Contact Information</h2>
      <div className="space-y-6">
        <div className="flex items-start">
          <Phone className="h-6 w-6 text-[#cd9fcc] mr-4 mt-1" />
          <div>
            <h3 className="text-lg font-medium text-[#0a014f]">Phone</h3>
            <a href="tel:+919790176084" className="text-[#0a014f]/70 hover:text-[#cd9fcc] transition-colors">
              +91-9790176084
            </a>
          </div>
        </div>

        <div className="flex items-start">
          <Mail className="h-6 w-6 text-[#cd9fcc] mr-4 mt-1" />
          <div>
            <h3 className="text-lg font-medium text-[#0a014f]">Email</h3>
            <a href="mailto:info@ephoreal.com" className="text-[#0a014f]/70 hover:text-[#cd9fcc] transition-colors">
              info@ephoreal.com
            </a>
          </div>
        </div>

        <div className="flex items-start">
          <MapPin className="h-6 w-6 text-[#cd9fcc] mr-4 mt-1" />
          <div>
            <h3 className="text-lg font-medium text-[#0a014f]">Office Address</h3>
            <address className="not-italic text-[#0a014f]/70">
              No: 14, Rajaji Street, 2nd Floor, Sudhana Nagar, Nainarmandapam, Puducherry – 605004
            </address>
            <a
              href="https://www.google.com/maps?q=No:14,Rajaji+Street,2nd+Floor,Sudhana+Nagar,Nainarmandapam,Puducherry-605004"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#cd9fcc] hover:underline mt-1 inline-block"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

