"use client"

import { useState, useEffect } from "react"
import { MessageCircle } from "lucide-react"

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <a
      aria-label="Chat on WhatsApp"
      href="https://wa.me/919790176084"
      className={`fixed bottom-6 right-6 z-50 bg-green-500 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:bg-green-600 hover:scale-110 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  )
}

