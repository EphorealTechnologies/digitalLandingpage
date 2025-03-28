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
      title: "Web Development",
      description:
        "We create responsive, high-performance websites and web applications tailored to your business needs. Our development team uses cutting-edge technologies to deliver scalable and secure solutions.",
      icon: "code",
      features: [
        "Custom Website Development",
        "E-commerce Solutions",
        "Progressive Web Apps",
        "CMS Development",
        "API Integration",
      ],
    },
    {
      title: "UI/UX Design",
      description:
        "Our design team creates intuitive, engaging user experiences that delight your customers. We focus on user-centered design principles to ensure your digital products are both beautiful and functional.",
      icon: "palette",
      features: [
        "User Research & Analysis",
        "Wireframing & Prototyping",
        "Visual Design",
        "Interaction Design",
        "Usability Testing",
      ],
    },
    {
      title: "Custom Software Development",
      description:
        "We develop bespoke software solutions that address your unique business challenges. Our team delivers scalable, maintainable applications that drive efficiency and growth.",
      icon: "settings",
      features: [
        "Enterprise Applications",
        "Mobile App Development",
        "Cloud Solutions",
        "Database Design",
        "System Integration",
      ],
    },
    {
      title: "Digital Transformation",
      description:
        "We help businesses evolve in the digital age by implementing innovative technology solutions that improve processes, enhance customer experiences, and drive growth.",
      icon: "refresh-cw",
      features: [
        "Digital Strategy Consulting",
        "Process Automation",
        "Legacy System Modernization",
        "Data Analytics Solutions",
        "Cloud Migration",
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

