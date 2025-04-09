"use client"

import { useState, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { motion, useInView } from "framer-motion"

// Pricing data
const basePrice = 10000
const baseServices = [
  {
    title: "Website Development (Design & Coding)",
    details: "Includes design and coding",
  },
  {
    title: "Hosting & Domain (First Year)",
    details: "Covers domain registration, hosting setup, server cost, and SSL certificate (first year)",
  },
  {
    title: "Content & Optimization",
    details: "Includes copywriting, images, Page Speed Optimization",
  },
  {
    title: "Customer Contact Features",
    details: 'Contact us page, WhatsApp and "Call us" phone redirect buttons',
  },
  {
    title: "Enterprise-Grade Cybersecurity with Cloudflare",
    details: "DDoS Attack Protection, Bot Traffic Filtering, CAPTCHA Challenge Support, Always-on Monitoring 24/7",
  },
]

const addOns = [
  {
    category: "Design Customizations",
    items: [
      { id: "custom-ui-ux", label: "Custom UI/UX Design", price: 7000 },
      { id: "parallax", label: "Parallax Effects", price: 1000 },
      { id: "dark-mode", label: "Dark Mode & Theme Switcher", price: 1000 },
      { id: "branding", label: "Branding Package (Logo, Colors, Fonts)", price: 5000 },
    ],
  },
  {
    category: "Functional Customizations",
    items: [
      { id: "custom-forms", label: "Custom Forms with API Integration", price: 5000 },
      { id: "multi-language", label: "Multi-language Support", price: 5000 },
      { id: "live-chat", label: "Live Chat Integration", price: 3000 },
    ],
  },
  {
    category: "Analytics, Performance Enhancements",
    items: [
      { id: "google-analytics", label: "Google Analytics", price: 500 },
      { id: "search-console", label: "Search Console Setup", price: 3000 },
    ],
  },
  {
    category: "Hosting Maintenance",
    items: [
      { id: "domain-hosting", label: "Domain & Hosting Setup (from second year)", price: 2000 },
      { id: "monthly-maintenance", label: "Monthly Maintenance", price: 2000, isMonthly: true },
    ],
  },
  {
    category: "CMS & Content Management",
    items: [
      { id: "headless-cms", label: "Headless CMS Integration", price: 10000 },
      { id: "wordpress", label: "WordPress Integration", price: 15000 },
    ],
  },
]

export default function Pricing() {
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([])
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const handleAddOnChange = (id: string) => {
    setSelectedAddOns((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const calculateTotal = () => {
    let total = basePrice

    selectedAddOns.forEach((id) => {
      const addOn = addOns.flatMap((category) => category.items).find((item) => item.id === id)

      if (addOn) {
        total += addOn.price
      }
    })

    return total
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price)
  }

  const getMonthlyAddOns = () => {
    return addOns
      .flatMap((category) => category.items)
      .filter((item) => item.isMonthly && selectedAddOns.includes(item.id))
      .reduce((total, item) => total + item.price, 0)
  }

  return (
    <section id="pricing" className="py-20">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Pricing Calculator</h2>
          <p className="text-white">Customize your website package to fit your specific needs and budget.</p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {/* Base Package */}
          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle>Base Package</CardTitle>
              <CardDescription>Everything you need to get started</CardDescription>
              <div className="mt-4 text-3xl font-bold text-primary">{formatPrice(basePrice)}</div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {baseServices.map((service, index) => (
                  <li key={index} className="space-y-1">
                    <div className="flex items-center">
                      <div className="h-5 w-5 mr-2 flex items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-3.5 w-3.5 text-primary"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span className="font-medium">{service.title}</span>
                    </div>
                    <div className="ml-7 text-sm text-gray-500">{service.details}</div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Add-ons */}
          <Card className="border-none shadow-lg lg:col-span-2">
            <CardHeader>
              <CardTitle>Customize Your Package</CardTitle>
              <CardDescription>Select additional features to enhance your website</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {addOns.map((category, categoryIndex) => (
                  <div key={categoryIndex}>
                    <h3 className="font-medium text-lg mb-3">{category.category}</h3>
                    <div className="space-y-3">
                      {category.items.map((item) => (
                        <div key={item.id} className="flex items-start">
                          <Checkbox
                            id={item.id}
                            checked={selectedAddOns.includes(item.id)}
                            onCheckedChange={() => handleAddOnChange(item.id)}
                            className="mt-1"
                          />
                          <div className="ml-3 flex-1">
                            <Label
                              htmlFor={item.id}
                              className="text-sm font-medium cursor-pointer flex justify-between"
                            >
                              <span>{item.label}</span>
                              <span className="text-primary font-semibold">
                                {formatPrice(item.price)}
                                {item.isMonthly && "/month"}
                              </span>
                            </Label>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Base Price:</span>
                  <span>{formatPrice(basePrice)}</span>
                </div>
                {selectedAddOns.length > 0 && (
                  <div className="border-t border-gray-200 pt-2 mt-2">
                    <p className="font-medium mb-2">Selected Add-ons:</p>
                    <ul className="space-y-1">
                      {selectedAddOns.map((id) => {
                        const addOn = addOns.flatMap((category) => category.items).find((item) => item.id === id)

                        return addOn ? (
                          <li key={id} className="flex justify-between text-sm">
                            <span>{addOn.label}</span>
                            <span>
                              {formatPrice(addOn.price)}
                              {addOn.isMonthly && "/month"}
                            </span>
                          </li>
                        ) : null
                      })}
                    </ul>
                  </div>
                )}
                <div className="border-t border-gray-200 pt-4 mt-4 flex justify-between items-center font-bold text-lg">
                  <span>Total:</span>
                  <div>
                    <div>{formatPrice(calculateTotal())}</div>
                    {getMonthlyAddOns() > 0 && (
                      <div className="text-sm font-normal text-gray-500">+ {formatPrice(getMonthlyAddOns())}/month</div>
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <Button className="w-full" size="lg" asChild>
                  <a href="#contact">Get Started</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
