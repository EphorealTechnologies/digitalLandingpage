import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  showText?: boolean
  textColor?: string
}

export default function Logo({ className, showText = true, textColor = "text-accent" }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <img src="/images/DigitalLogo.svg" alt="Ephoreal Digital Logo" className="h-full w-auto" />
      {showText && <span className={cn("font-bold text-lg", textColor)}>Ephoreal Digital</span>}
    </div>
  )
}

