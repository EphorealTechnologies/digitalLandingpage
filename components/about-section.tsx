"use client"

import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"
import { Code, Palette, Zap, Users } from "lucide-react"

export default function AboutSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const features = [
    {
      icon: <Code className="h-10 w-10 text-[#0a014f]" />,
      title: "Expert Development",
      description: "Our team of skilled developers creates robust, scalable solutions using the latest technologies.",
    },
    {
      icon: <Palette className="h-10 w-10 text-[#cd9fcc]" />,
      title: "Creative Design",
      description: "We craft visually stunning, intuitive interfaces that enhance user experience and engagement.",
    },
    {
      icon: <Zap className="h-10 w-10 text-[#f6caca]" />,
      title: "Rapid Delivery",
      description: "We follow agile methodologies to ensure efficient project management and timely delivery.",
    },
    {
      icon: <Users className="h-10 w-10 text-[#e4c2c6]" />,
      title: "Client-Focused",
      description: "We prioritize your business goals and work collaboratively to achieve the best results.",
    },
  ]

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a014f] mb-4">About Ephoreal Technologies</h2>
          <p className="text-lg text-[#0a014f]/70 max-w-2xl mx-auto">
            We are a team of passionate developers and designers dedicated to creating exceptional digital experiences
            that drive business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={cn(
                "bg-white p-6 rounded-lg shadow-lg border border-[#fae8eb] transition-all duration-500 hover:shadow-xl hover:translate-y-[-5px]",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-[#0a014f] mb-2">{feature.title}</h3>
              <p className="text-[#0a014f]/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

