"use client"

import { useRef, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Clock } from "lucide-react"
import { siteConfig } from "@/config/site"
import { motion, useInView } from "framer-motion"
import WhatsAppButton from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const formRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Load HubSpot form script
    const script = document.createElement("script")
    script.src = "//js.hsforms.net/forms/embed/v2.js"
    script.charset = "utf-8"
    script.type = "text/javascript"
    document.body.appendChild(script)

    script.onload = () => {
      if (window.hbspt && formRef.current) {
        window.hbspt.forms.create({
          portalId: "47705130",
          formId: "0993df79-a748-4049-ba05-e73674ce8762",
          region: "na1",
          target: "#hubspot-form-container",
        })
      }
    }

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-600">Have a project in mind? Get in touch with us to discuss how we can help.</p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          <div className="space-y-6">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div className="ml-4">
                    <h3 className="font-medium text-lg mb-1">Our Office</h3>
                    <p className="text-gray-600 mb-2">{siteConfig.links.address}</p>
                    <a
                      href={siteConfig.links.maps}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div className="ml-4">
                    <h3 className="font-medium text-lg mb-1">Contact Information</h3>
                    <div className="flex flex-col sm:flex-row gap-3 mt-2">
                      <Button asChild variant="outline" className="flex items-center gap-2">
                        <a href={siteConfig.links.phone}>
                          <Phone className="h-4 w-4" />
                          <span>Call Us</span>
                        </a>
                      </Button>
                      <WhatsAppButton />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div className="ml-4">
                    <h3 className="font-medium text-lg mb-1">Business Hours</h3>
                    <p className="text-gray-600">
                      <strong>Monday-Friday:</strong> {siteConfig.businessHours.weekdays}
                    </p>
                    <p className="text-gray-600">
                      <strong>Saturday & Sunday:</strong> {siteConfig.businessHours.weekend}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg overflow-hidden">
              <CardContent className="p-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.9395618591375!2d79.80452207482293!3d11.909294588316834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5361890f0b23ff%3A0xea688f80c013ac13!2sEphoreal%20Technologies!5e0!3m2!1sen!2sin!4v1743147786882!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ephoreal Digital Office Location"
                ></iframe>
              </CardContent>
            </Card>
          </div>

          <Card className="border-none shadow-lg">
            <CardContent className="p-6">
              <h3 className="font-medium text-xl mb-6">Send Us a Message</h3>
              <div id="hubspot-form-container" ref={formRef}></div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

