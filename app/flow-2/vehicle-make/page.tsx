"use client"
import Image from "next/image"
import { Phone, ArrowLeft, ChevronDown } from "lucide-react"
import { useRouter } from "next/navigation"

export default function Flow2VehicleMakePage() {
  const router = useRouter()

  const vehicleMakes = [
    { name: "BUICK", logo: "/images/buick-logo.avif" },
    { name: "CHEVROLET", logo: "/images/buick-logo.avif" },
    { name: "CHRYSLER", logo: "/images/buick-logo.avif" },
    { name: "DODGE", logo: "/images/buick-logo.avif" },
    { name: "FORD", logo: "/images/buick-logo.avif" },
    { name: "GMC", logo: "/images/buick-logo.avif" },
    { name: "HONDA", logo: "/images/buick-logo.avif" },
    { name: "HYUNDAI", logo: "/images/buick-logo.avif" },
    { name: "KIA", logo: "/images/buick-logo.avif" },
    { name: "MAZDA", logo: "/images/buick-logo.avif" },
    { name: "MITSUBISHI", logo: "/images/buick-logo.avif" },
    { name: "NISSAN", logo: "/images/buick-logo.avif" },
    { name: "TOYOTA", logo: "/images/buick-logo.avif" },
    { name: "VOLKSWAGEN", logo: "/images/buick-logo.avif" },
  ]

  const handleSelection = (make: string) => {
    router.push("/flow-2/vehicle-model")
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white py-4 px-6 border-b border-gray-200">
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
            <div className="flex items-center gap-2">
              <span className="text-gray-700 text-sm">Call for FREE quotes</span>
              <Phone size={16} className="text-blue-600" />
              <span className="text-gray-900 font-bold">1-844-900-1765</span>
            </div>
            <p className="text-xs text-gray-500">Sun - Sat 8 AM - 8 PM EST</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12 max-w-4xl">
        {/* Progress */}
        <div className="text-center mb-8">
          <p className="text-sm text-gray-600 mb-2">10% complete</p>
          <div className="relative w-full bg-gray-200 h-2 rounded-full">
            <div className="absolute left-0 top-0 h-2 bg-red-600 rounded-full" style={{ width: "10%" }}></div>
            <div
              className="absolute bg-white border-2 border-gray-400 w-6 h-6 rounded-full -top-2"
              style={{ left: "10%", transform: "translateX(-50%)" }}
            >
              <div className="w-full h-full bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Question */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">What's the vehicle make?</h1>
        </div>

        {/* Vehicle Makes Grid */}
        <div className="grid grid-cols-5 gap-4 mb-8">
          {vehicleMakes.map((make) => (
            <button
              key={make.name}
              onClick={() => handleSelection(make.name)}
              className="bg-white border-2 border-blue-300 hover:border-blue-500 rounded-lg p-4 flex flex-col items-center justify-center min-h-[100px] transition-colors"
            >
              <div className="mb-2 h-8 flex items-center justify-center">
                <Image
                  src={make.logo || "/placeholder.svg"}
                  alt={`${make.name} logo`}
                  width={60}
                  height={32}
                  className="object-contain"
                />
              </div>
              <span className="text-xs font-medium text-gray-900 text-center">{make.name}</span>
            </button>
          ))}
        </div>

        {/* Browse Other Makes */}
        <div className="max-w-2xl mx-auto mb-12">
          <button className="w-full bg-white border-2 border-gray-300 hover:border-gray-400 rounded-lg p-4 flex items-center justify-between transition-colors">
            <div className="text-left">
              <p className="text-xs text-gray-500 mb-1">Browse other makes</p>
              <p className="text-gray-900 font-medium">Browse other makes</p>
            </div>
            <ChevronDown size={20} className="text-gray-400" />
          </button>
        </div>

        {/* Back Button */}
        <div className="text-center">
          <button
            onClick={() => router.push("/flow-2/vehicle-year")}
            className="flex items-center gap-2 text-gray-400 hover:text-gray-600 mx-auto"
          >
            <ArrowLeft size={16} />
            BACK
          </button>
        </div>
      </main>
    </div>
  )
}
