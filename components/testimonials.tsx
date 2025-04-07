"use client"

import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { motion, useInView } from "framer-motion"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Ephoreal Digital transformed our online presence with a stunning website that perfectly captures our brand identity.",
    author: "Sarah Johnson",
    position: "CEO, StyleHub",
  },
  {
    quote: "The team's attention to detail and creative approach resulted in a website that exceeded our expectations.",
    author: "Michael Chen",
    position: "Marketing Director, TechNova",
  },
  {
    quote: "Working with Ephoreal Digital was a seamless experience from start to finish. Highly recommended!",
    author: "Priya Sharma",
    position: "Founder, Wellness Collective",
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-gray-600">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-lg h-full">
              <CardContent className="p-8 flex flex-col h-full">
                <Quote className="h-10 w-10 text-primary/20 mb-4" />
                <p className="text-gray-700 mb-6 flex-grow">{testimonial.quote}</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-gray-500 text-sm">{testimonial.position}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

