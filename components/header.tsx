"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"
import Logo from "@/components/logo"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Function to handle smooth scrolling
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()

    // If it's just "/" then scroll to top
    if (href === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
      return
    }

    // Extract the ID from the href
    const id = href.replace(/.*#/, "")
    const element = document.getElementById(id)

    if (element) {
      const yOffset = -80 // Header height offset
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset

      window.scrollTo({
        top: y,
        behavior: "smooth",
      })
    }

    // Close mobile menu if open
    if (isOpen) {
      setIsOpen(false)
    }
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-white/90 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4",
      )}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2" onClick={(e) => scrollToSection(e, "/")}>
          <Logo className="h-10 w-auto" textColor={scrolled ? "text-accent" : "text-white"} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {siteConfig.mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors",
                scrolled ? "hover:text-primary" : "text-white hover:text-secondary",
              )}
              onClick={(e) => scrollToSection(e, item.href)}
            >
              {item.title}
            </Link>
          ))}
          <Button asChild variant={scrolled ? "default" : "secondary"}>
            <Link href="/#contact" onClick={(e) => scrollToSection(e, "/#contact")}>
              Get in Touch
            </Link>
          </Button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <Button variant="ghost" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className={scrolled ? "" : "text-white"} /> : <Menu className={scrolled ? "" : "text-white"} />}
        </Button>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden">
            <nav className="flex flex-col p-4">
              {siteConfig.mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="py-2 text-sm font-medium transition-colors hover:text-primary"
                  onClick={(e) => {
                    scrollToSection(e, item.href)
                  }}
                >
                  {item.title}
                </Link>
              ))}
              <Button asChild className="mt-4">
                <Link href="/#contact" onClick={(e) => scrollToSection(e, "/#contact")}>
                  Get in Touch
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

