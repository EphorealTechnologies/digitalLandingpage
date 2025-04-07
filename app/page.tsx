import Hero from "@/components/hero"
import Services from "@/components/services"
import Contact from "@/components/contact"
import Pricing from "@/components/pricing"
// import Testimonials from "@/components/testimonials"
// import Portfolio from "@/components/portfolio"
import VideoBackground from "@/components/video-background"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <VideoBackground />
      <div className="relative z-10">
        <Hero />
        <Services />
        {/* Portfolio section commented out as requested */}
        {/* <Portfolio /> */}
        {/* Testimonials section commented out as requested */}
        {/* <Testimonials /> */}
        <Pricing />
        <Contact />
      </div>
    </main>
  )
}

