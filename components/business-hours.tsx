import { Clock } from "lucide-react"

export default function BusinessHours() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-bold text-[#0a014f] mb-6">Business Hours</h2>
      <div className="bg-[#fae8eb] p-6 rounded-lg">
        <div className="flex items-center mb-4">
          <Clock className="h-6 w-6 text-[#cd9fcc] mr-3" />
          <h3 className="text-lg font-medium text-[#0a014f]">Working Hours</h3>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-[#0a014f]/70">Monday - Friday:</span>
            <span className="font-medium text-[#0a014f]">9:00 AM – 6:00 PM</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#0a014f]/70">Saturday & Sunday:</span>
            <span className="font-medium text-[#0a014f]">Closed</span>
          </div>
        </div>
      </div>
    </div>
  )
}

