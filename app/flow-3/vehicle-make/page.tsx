"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Phone } from "lucide-react"

export default function Flow3VehicleMakePage() {
  const router = useRouter()

  const vehicleMakes = [
    { name: "Buick", logo: "/images/buick-logo.avif" },
    { name: "Chevrolet", logo: "/images/buick-logo.avif" },
    { name: "Chrysler", logo: "/images/buick-logo.avif" },
    { name: "Dodge", logo: "/images/buick-logo.avif" },
    { name: "Ford", logo: "/images/buick-logo.avif" },
    { name: "GMC", logo: "/images/buick-logo.avif" },
    { name: "Honda", logo: "/images/buick-logo.avif" },
    { name: "Hyundai", logo: "/images/buick-logo.avif" },
    { name: "Jeep", logo: "/images/buick-logo.avif" },
    { name: "Kia", logo: "/images/buick-logo.avif" },
    { name: "Nissan", logo: "/images/buick-logo.avif" },
    { name: "Toyota", logo: "/images/buick-logo.avif" },
  ]

  const handleMakeSelect = (make: string) => {
    router.push("/flow-3/vehicle-model")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white py-3 px-4 shadow-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="relative h-12 w-48">
            <Image
              src="/images/logo.png"
              alt="QualifyAuto.com Logo"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-600">CALL TOLL-FREE M-F 7AM-7PM CST</p>
            <a href="tel:18445541262" className="text-[#2048A8] font-bold text-lg flex items-center justify-end gap-1">
              <Phone size={16} className="text-[#2048A8]" />
              1-844-554-1262 <span className="font-normal">(TTY 711)</span>
            </a>
          </div>
        </div>
      </header>

      {/* Progress Section */}
      <div className="bg-white py-4 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-center text-[#1e3a8a] font-medium mb-3">
            Drivers in Deerfield Beach can save up to $610 per year!
          </p>
          <div className="relative">
            <div className="bg-gray-200 h-2 relative">
              <div className="bg-red-500 h-full w-[62.5%]"></div>
            </div>
            <div className="absolute left-[3%] -top-1 transform -translate-x-1/2">
              <div className="w-4 h-4 bg-red-500 rounded-sm flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4z" />
                </svg>
              </div>
            </div>
          </div>
          <p className="text-center text-sm text-gray-600 mt-2">Progress: 62.5%</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-[#1e3a8a] text-center mb-8">What is your vehicle make?</h2>

        <div className="grid grid-cols-4 gap-4 mb-6">
          {vehicleMakes.map((make) => (
            <button
              key={make.name}
              onClick={() => handleMakeSelect(make.name)}
              className="bg-white border border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center hover:border-blue-500 transition-colors"
            >
              <div className="mb-3 h-12 flex items-center justify-center">
                <Image
                  src={make.logo || "/placeholder.svg"}
                  alt={`${make.name} logo`}
                  width={60}
                  height={40}
                  className="object-contain"
                />
              </div>
              <span className="text-[#1e3a8a] font-medium">{make.name}</span>
            </button>
          ))}
        </div>

        <button className="w-full bg-white border border-gray-300 rounded-lg py-4 px-6 text-left text-gray-500 flex items-center justify-between hover:border-blue-500 transition-colors">
          <span>Select other make</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </div>
  )
}
