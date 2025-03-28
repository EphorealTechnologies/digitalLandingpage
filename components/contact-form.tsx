"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

declare global {
  interface Window {
    hbspt: {
      forms: {
        create: (options: {
          portalId: string
          formId: string
          region: string
          target?: string
        }) => void
      }
    }
  }
}

export default function ContactForm() {
  const formContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Wait for the HubSpot script to load
    const loadHubSpotForm = () => {
      if (window.hbspt && formContainerRef.current) {
        window.hbspt.forms.create({
          portalId: "47705130",
          formId: "0993df79-a748-4049-ba05-e73674ce8762",
          region: "na1",
          target: "#hubspot-form-container",
        })
      } else {
        // If HubSpot script is not loaded yet, try again after a delay
        setTimeout(loadHubSpotForm, 500)
      }
    }

    loadHubSpotForm()
  }, [])

  return (
    <Card className="border-[#fae8eb]">
      <CardHeader className="bg-gradient-to-r from-[#fae8eb] to-[#e4c2c6]">
        <CardTitle className="text-2xl font-bold text-[#0a014f]">Contact Our Team</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div id="hubspot-form-container" ref={formContainerRef}></div>
      </CardContent>
    </Card>
  )
}

