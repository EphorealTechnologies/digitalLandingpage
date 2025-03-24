import Hero from "@/components/hero"
import AboutSection from "@/components/about-section"
import ServicesOverview from "@/components/services-overview"
import ContactCTA from "@/components/contact-cta"

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <AboutSection />
      <ServicesOverview />
      <ContactCTA />
    </div>
  )
}

