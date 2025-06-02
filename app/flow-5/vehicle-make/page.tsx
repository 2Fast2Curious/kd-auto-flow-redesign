"use client"
import Image from "next/image"
import { Phone, Shield, Star } from "lucide-react"
import { useRouter } from "next/navigation"

export default function Flow5VehicleMakePage() {
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
  ]

  const handleSelection = (make: string) => {
    router.push("/flow-5/vehicle-model")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white py-4 px-4 shadow-sm border-b border-gray-200">
        <div className="container mx-auto flex justify-between items-center">
          <div className="relative h-10 w-40">
            <Image
              src="/images/logo.png"
              alt="QualifyAuto.com Logo"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
          <div className="text-right">
            <a href="tel:18445541262" className="text-blue-600 font-bold text-lg flex items-center justify-end gap-1">
              <Phone size={16} className="text-green-500" />
              1-844-554-1262
            </a>
          </div>
        </div>
      </header>

      {/* Trust Bar */}
      <div className="bg-white py-2 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center gap-6 text-xs text-gray-600">
            <div className="flex items-center gap-1">
              <Shield className="w-3 h-3 text-green-500" />
              <span>Secure</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-3 h-3 text-yellow-500" />
              <span>4.8/5 Rating</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-lg mx-auto">
          {/* Progress */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-600">Progress</span>
              <span className="text-sm font-medium text-blue-600">62.5%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                style={{ width: "62.5%" }}
              ></div>
            </div>
          </div>

          {/* Main Card */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 px-6 py-4 text-white text-center">
              <h1 className="text-xl font-bold mb-1">Almost There!</h1>
              <p className="text-indigo-100 text-sm">Vehicle make affects your premium</p>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="text-center mb-6">
                <h2 className="text-lg font-bold text-gray-900 mb-3">What make is your vehicle?</h2>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {vehicleMakes.map((make) => (
                  <button
                    key={make.name}
                    onClick={() => handleSelection(make.name)}
                    className="bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-300 py-3 px-2 rounded-lg text-center font-medium text-gray-700 hover:text-blue-700 active:scale-95 transition-all duration-150 flex flex-col items-center"
                  >
                    <div className="mb-1 h-6 flex items-center justify-center">
                      <Image
                        src={make.logo || "/placeholder.svg"}
                        alt={`${make.name} logo`}
                        width={30}
                        height={15}
                        className="object-contain"
                      />
                    </div>
                    <span className="text-xs">{make.name}</span>
                  </button>
                ))}
              </div>

              <button
                onClick={() => handleSelection("Other")}
                className="w-full bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-300 py-3 px-4 rounded-lg text-center font-medium text-gray-700 hover:text-blue-700 active:scale-95 transition-all duration-150 mt-3"
              >
                Other Make
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
