"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="relative min-h-screen flex items-center bg-gradient-to-br from-[#fae8eb] via-white to-[#e4c2c6]">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#cd9fcc]/20 blur-3xl"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 rounded-full bg-[#f6caca]/20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 pt-16 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`${isVisible ? "animate-fade-in" : "opacity-0"}`}>
            <h1 className="text-4xl md:text-6xl font-bold text-[#0a014f] mb-6 leading-tight">
              Transforming Ideas Into <span className="text-[#cd9fcc]">Digital Reality</span>
            </h1>
            <p className="text-lg md:text-xl text-[#0a014f]/80 mb-8 max-w-lg">
              We create cutting-edge web solutions, stunning UI/UX designs, and innovative technology solutions that
              help businesses thrive in the digital world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-[#0a014f] hover:bg-[#0a014f]/90 text-white">
                <Link href="/services">
                  Explore Our Services <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-[#cd9fcc] text-[#0a014f] hover:bg-[#cd9fcc]/10"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>

          <div className={`relative ${isVisible ? "animate-slide-in-right" : "opacity-0"}`}>
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-[#0a014f] to-[#cd9fcc] p-8 rounded-lg">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full max-w-md bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 shadow-xl">
                    <div className="w-full h-4 bg-white/20 rounded-full mb-4"></div>
                    <div className="w-3/4 h-4 bg-white/20 rounded-full mb-6"></div>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="h-20 bg-white/20 rounded-lg"></div>
                      <div className="h-20 bg-white/20 rounded-lg"></div>
                    </div>
                    <div className="w-full h-40 bg-white/20 rounded-lg mb-4"></div>
                    <div className="w-1/2 h-8 bg-white/30 rounded-full mx-auto"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#f6caca] rounded-full"></div>
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-[#e4c2c6] rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

