"use client"

import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion, useInView } from "framer-motion"

const projects = [
  {
    title: "E-Commerce Website",
    category: "Web Development",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    title: "Corporate Branding",
    category: "UI/UX Design",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    title: "Mobile App Interface",
    category: "UI/UX Design",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    title: "Restaurant Website",
    category: "Web Development",
    image: "/placeholder.svg?height=600&width=800",
  },
]

export default function Portfolio() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="portfolio" className="py-20">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Portfolio</h2>
          <p className="text-gray-600">
            Explore our recent projects and see how we've helped businesses achieve their digital goals.
          </p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-lg group">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <p className="text-secondary text-sm font-medium mb-1">{project.category}</p>
                    <h3 className="text-white text-xl font-bold">{project.title}</h3>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  )
}

