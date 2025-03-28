import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Code, Palette, Settings, RefreshCw } from "lucide-react"

interface ServiceFeature {
  title: string
  description: string
  icon: string
  features: string[]
}

interface ServiceCardProps {
  service: ServiceFeature
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "code":
        return <Code className="h-8 w-8 text-[#0a014f]" />
      case "palette":
        return <Palette className="h-8 w-8 text-[#cd9fcc]" />
      case "settings":
        return <Settings className="h-8 w-8 text-[#0a014f]" />
      case "refresh-cw":
        return <RefreshCw className="h-8 w-8 text-[#cd9fcc]" />
      default:
        return <Code className="h-8 w-8 text-[#0a014f]" />
    }
  }

  return (
    <Card className="overflow-hidden border-[#fae8eb] hover:shadow-lg transition-all duration-300">
      <CardHeader className="bg-gradient-to-r from-[#fae8eb] to-[#e4c2c6] p-6">
        <div className="flex items-center gap-4">
          <div className="bg-white/80 p-3 rounded-full">{getIcon(service.icon)}</div>
          <h3 className="text-2xl font-bold text-[#0a014f]">{service.title}</h3>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <p className="text-[#0a014f]/80 mb-6">{service.description}</p>
        <div>
          <h4 className="text-lg font-semibold text-[#0a014f] mb-3">Key Features:</h4>
          <ul className="space-y-2">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-[#cd9fcc]"></div>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}

