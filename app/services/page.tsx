import type { Metadata } from "next"
import ServiceHero from "@/components/service-hero"
import ServiceCard from "@/components/service-card"

export const metadata: Metadata = {
  title: "Our Services | Ephoreal Technologies",
  description: "Explore our comprehensive range of web development, UI/UX design, and technology solutions.",
}

export default function ServicesPage() {
  const services = [
    {
      title: "Static Website Development",
      description:
        "We create fast, secure, and lightweight websites with modern design. Our static websites are perfect for businesses looking for reliable, high-performance web presence without the complexity of dynamic sites.",
      icon: "code",
      features: [
        "Fast loading speeds",
        "Enhanced security",
        "Reliable hosting options",
        "Modern design principles",
        "Ideal for businesses and portfolios",
      ],
    },
    {
      title: "Custom Static Websites",
      description:
        "We develop tailored static sites that perfectly represent your brand with custom design and content. Using HTML, CSS, JavaScript, and modern static site generators, we create unique web experiences.",
      icon: "palette",
      features: [
        "Tailored brand representation",
        "Custom design and layouts",
        "Static site generators (Next.js, Gatsby, etc.)",
        "Content management integration",
        "Seamless deployment workflows",
      ],
    },
    {
      title: "UI/UX for Static Websites",
      description:
        "Our design team creates clean, responsive, and user-friendly interfaces for static sites. We focus on speed, aesthetics, and mobile-friendliness to ensure an optimal user experience across all devices.",
      icon: "settings",
      features: [
        "Responsive design for all devices",
        "Intuitive navigation",
        "Visual hierarchy optimization",
        "Accessibility compliance",
        "Mobile-first approach",
      ],
    },
    {
      title: "SEO & Performance Optimization",
      description:
        "We optimize static websites for search engines and faster loading speeds. Our optimization services improve visibility, accessibility, and overall user experience to help your site rank higher.",
      icon: "refresh-cw",
      features: [
        "Search engine optimization",
        "Performance tuning",
        "Page speed optimization",
        "Accessibility improvements",
        "Analytics integration",
      ],
    },
  ]

  return (
    <div className="flex flex-col w-full">
      <ServiceHero />
      <div className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </div>
  )
}

