import type { Metadata } from "next"
import ContactInfo from "@/components/contact-info"
import ContactForm from "@/components/contact-form"
import BusinessHours from "@/components/business-hours"
import MapSection from "@/components/map-section"

export const metadata: Metadata = {
  title: "Contact Us | Ephoreal Technologies",
  description: "Get in touch with our team for web development, UI/UX design, and technology solutions.",
}

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full">
      <div className="bg-gradient-to-r from-[#fae8eb] to-[#e4c2c6] py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0a014f] text-center mb-4">Get In Touch</h1>
          <p className="text-lg text-center max-w-2xl mx-auto text-[#0a014f]/80">
            Have a project in mind or want to learn more about our services? We'd love to hear from you.
          </p>
        </div>
      </div>

      <div className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <ContactInfo />
            <BusinessHours />
            <MapSection />
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}

