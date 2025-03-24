"use client"

import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Code, Palette, Settings, RefreshCw, ArrowRight } from "lucide-react"

export default function ServicesOverview() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const services = [
    {
      icon: <Code className="h-12 w-12 text-[#0a014f]" />,
      title: "Static Website Development",
      description: "Fast, secure, and lightweight websites with modern design.",
      color: "from-[#fae8eb] to-[#f6caca]",
    },
    {
      icon: <Palette className="h-12 w-12 text-[#cd9fcc]" />,
      title: "Custom Static Websites",
      description: "Tailored static sites for your brand with custom design and content.",
      color: "from-[#e4c2c6] to-[#cd9fcc]",
    },
    {
      icon: <Settings className="h-12 w-12 text-[#0a014f]" />,
      title: "UI/UX for Static Websites",
      description: "Clean, responsive, and user-friendly design for static sites.",
      color: "from-[#fae8eb] to-[#e4c2c6]",
    },
    {
      icon: <RefreshCw className="h-12 w-12 text-[#cd9fcc]" />,
      title: "SEO & Performance Optimization",
      description: "Optimize static websites for search engines and faster loading speeds.",
      color: "from-[#e4c2c6] to-[#cd9fcc]",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#fae8eb]" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a014f] mb-4">Our Services</h2>
          <p className="text-lg text-[#0a014f]/70 max-w-2xl mx-auto">
            We offer a comprehensive range of technology solutions to help your business thrive in the digital
            landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className={cn(
                "rounded-lg overflow-hidden shadow-lg transition-all duration-500 hover:shadow-xl hover:translate-y-[-5px]",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`bg-gradient-to-r ${service.color} p-8`}>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full inline-block mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-[#0a014f] mb-2">{service.title}</h3>
                <p className="text-[#0a014f]/80 mb-4">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-[#0a014f] hover:bg-[#0a014f]/90 text-white">
            <Link href="/services">
              View All Services <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

