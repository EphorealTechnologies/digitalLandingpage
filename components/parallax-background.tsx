"use client"

import { useEffect, useState } from "react"

export default function ParallaxBackground() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none perspective">
      {/* Background Layer - Furthest back */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100"
        style={{
          transform: `translateZ(-10px) scale(2)`,
          zIndex: -3,
        }}
      />

      {/* Background Shapes */}
      <div
        className="absolute top-0 right-0 w-full h-full"
        style={{
          transform: `translateZ(-8px) scale(1.8) translateY(${scrollY * 0.02}px)`,
          zIndex: -2,
        }}
      >
        <img
          src="/images/parallax/bg-pattern.svg"
          alt="Background Pattern"
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      {/* Middle Layer - Geometric Shapes */}
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          transform: `translateZ(-5px) scale(1.5) translateY(${scrollY * 0.05}px)`,
          zIndex: -1,
        }}
      >
        <img
          src="/images/parallax/geometric-shapes.svg"
          alt="Geometric Shapes"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      {/* Foreground Layer - Closest to viewer */}
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          transform: `translateZ(-3px) scale(1.3) translateY(${scrollY * 0.08}px)`,
          zIndex: 0,
        }}
      >
        <img
          src="/images/parallax/dots-pattern.svg"
          alt="Dots Pattern"
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      {/* Hero Specific Elements */}
      <div
        className="absolute top-0 right-0 w-1/2 h-screen"
        style={{
          transform: `translateZ(-4px) scale(1.4) translate(${scrollY * 0.02}px, ${scrollY * -0.01}px)`,
          zIndex: -1,
        }}
      >
        <img
          src="/images/parallax/hero-element.svg"
          alt="Hero Element"
          className="w-full h-full object-contain opacity-20"
        />
      </div>
    </div>
  )
}

