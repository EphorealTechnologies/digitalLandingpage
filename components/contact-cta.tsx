import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Phone, Mail } from "lucide-react"

export default function ContactCTA() {
  return (
    <section className="py-20 bg-[#0a014f]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Digital Presence?</h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Contact our team today to discuss your project requirements and discover how we can help you achieve your
            business goals.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Button asChild size="lg" className="bg-white text-[#0a014f] hover:bg-white/90">
              <Link href="/contact">Get in Touch</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-black bg-white hover:bg-white/90">
              <a href="tel:+919790176084">
                <Phone className="mr-2 h-4 w-4" /> +91-9790176084
              </a>
            </Button>
          </div>

          <div className="flex items-center justify-center">
            <Mail className="text-[#cd9fcc] mr-2 h-5 w-5" />
            <a href="mailto:info@ephoreal.com" className="text-white hover:text-[#cd9fcc] transition-colors">
              info@ephoreal.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

