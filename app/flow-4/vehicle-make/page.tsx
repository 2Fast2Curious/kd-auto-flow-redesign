"use client"
import Image from "next/image"
import { Phone, Shield, Star, Users, Car } from "lucide-react"
import { useRouter } from "next/navigation"

export default function Flow4VehicleMakePage() {
  const router = useRouter()

  const vehicleMakes = [
    "BUICK",
    "CHEVROLET",
    "CHRYSLER",
    "DODGE",
    "FORD",
    "GMC",
    "HONDA",
    "HYUNDAI",
    "KIA",
    "MAZDA",
    "MITSUBISHI",
    "NISSAN",
    "TOYOTA",
    "VOLKSWAGEN",
    "OTHER",
  ]

  const handleSelection = (make: string) => {
    router.push("/flow-4/vehicle-model")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white py-4 px-4 shadow-md border-b-2 border-blue-200">
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
            <p className="text-xs text-gray-600 font-medium">CALL TOLL-FREE M-F 7AM-7PM CST</p>
            <a
              href="tel:18445541262"
              className="text-blue-600 font-bold text-xl flex items-center justify-end gap-2 hover:text-blue-700 transition-colors"
            >
              <Phone size={18} className="text-green-500" />
              1-844-554-1262 <span className="font-normal text-sm">(TTY 711)</span>
            </a>
          </div>
        </div>
      </header>

      {/* Trust Indicators */}
      <div className="bg-white py-3 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-500" />
              <span>100% Secure & Private</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-500" />
              <span>4.8/5 Customer Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-blue-500" />
              <span>2M+ Drivers Served</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Progress */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-600">Progress</span>
              <span className="text-sm font-medium text-blue-600">62.5% Complete</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 shadow-inner">
              <div
                className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full shadow-sm transition-all duration-300"
                style={{ width: "62.5%" }}
              ></div>
            </div>
          </div>

          {/* Main Card */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            {/* Card Header */}
            <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 px-8 py-6 text-white">
              <div className="flex items-center justify-center gap-3">
                <Car className="w-8 h-8" />
                <div className="text-center">
                  <h1 className="text-2xl font-bold">Almost There!</h1>
                  <p className="text-indigo-100">Your vehicle make affects your premium</p>
                </div>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">What is the make of your primary vehicle?</h2>
                <p className="text-gray-600">Select your vehicle manufacturer from the options below</p>
              </div>

              <div className="grid grid-cols-5 gap-4 mb-8">
                {vehicleMakes.map((make) => (
                  <button
                    key={make}
                    onClick={() => handleSelection(make)}
                    className="bg-gray-50 hover:bg-blue-50 border-2 border-gray-200 hover:border-blue-300 rounded-xl p-4 text-center font-medium text-gray-700 hover:text-blue-700 transition-all duration-200 transform hover:-translate-y-1 hover:shadow-lg flex flex-col items-center justify-center min-h-[100px]"
                  >
                    <div className="mb-2 h-8 flex items-center justify-center">
                      <Image
                        src="/images/buick-logo.avif"
                        alt={`${make} logo`}
                        width={40}
                        height={20}
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm">{make}</span>
                  </button>
                ))}
              </div>

              {/* Security Notice */}
              <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center">
                <div className="flex items-center justify-center gap-2 text-green-700">
                  <Shield className="w-5 h-5" />
                  <span className="font-medium">Your information is protected with 256-bit encryption</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
