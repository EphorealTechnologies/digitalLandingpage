"use client"

import { useState, useEffect } from "react"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show the button after scrolling down a bit
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    // Show the button after a delay even if no scroll
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 3000)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearTimeout(timer)
    }
  }, [])

  return (
    <a
      aria-label="Chat on WhatsApp"
      href={siteConfig.links.whatsapp}
      className={cn(
        "fixed bottom-6 right-6 z-50 transition-all duration-300 transform hover:scale-110",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
      )}
    >
      <div className="bg-[#25D366] text-white p-3 rounded-full shadow-lg flex items-center justify-center">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.5027 3.49786C18.2877 1.28093 15.3063 0 12.1397 0C5.50357 0 0.11 5.39286 0.11 12.0286C0.11 14.1429 0.66357 16.2 1.70643 18.0214L0 24L6.10714 22.3214C7.86429 23.2714 9.98214 23.7857 12.1397 23.7857C18.7759 23.7857 24.1694 18.3929 24.1694 11.7571C24.1694 8.59071 22.7178 5.71479 20.5027 3.49786ZM12.1397 21.7714C10.3429 21.7714 8.54643 21.2571 6.99357 20.3071L6.61714 20.0357L2.86714 21.0714L3.90286 17.4214L3.63143 17.0143C2.57143 15.3857 2.02429 13.4786 2.02429 11.5714C2.02429 6.48214 6.59 2.01429 12.1397 2.01429C14.7563 2.01429 17.2143 3.05714 19.0527 4.89643C20.8911 6.73571 21.9268 9.19286 21.9268 11.8071C21.9268 16.8964 17.6893 21.7714 12.1397 21.7714ZM17.6893 14.5714C17.3643 14.4 15.8714 13.6643 15.5464 13.5429C15.2214 13.4214 14.9857 13.3714 14.75 13.6964C14.5143 14.0214 13.9268 14.6786 13.7304 14.9143C13.5339 15.15 13.3375 15.1714 13.0125 15C12.6875 14.8286 11.7375 14.5 10.6143 13.5C9.73571 12.7214 9.13929 11.7714 8.94286 11.4464C8.74643 11.1214 8.92143 10.9464 9.09643 10.7714C9.25 10.6179 9.43214 10.3714 9.59286 10.175C9.75357 9.97857 9.80357 9.83571 9.92143 9.6C10.0393 9.36429 9.98929 9.16071 9.90357 8.98929C9.81786 8.81786 9.19286 7.325 8.90714 6.675C8.62143 6.025 8.33571 6.13929 8.13929 6.13929C7.94286 6.13929 7.70714 6.11071 7.47143 6.11071C7.23571 6.11071 6.85214 6.19643 6.52714 6.52143C6.20214 6.84643 5.41786 7.58214 5.41786 9.075C5.41786 10.5679 6.49857 12.0107 6.65929 12.2464C6.82 12.4821 9.13929 16.0179 12.6393 17.3036C13.4236 17.6464 14.0304 17.8536 14.5054 18.0036C15.2911 18.2607 16.0089 18.2321 16.5768 18.1464C17.2125 18.0321 18.4027 17.3821 18.6884 16.6107C18.9741 15.8393 18.9741 15.1893 18.8884 15.0536C18.8027 14.9179 18.5884 14.8429 18.2634 14.6714L17.6893 14.5714Z"
            fill="white"
          />
        </svg>
      </div>
    </a>
  )
}

