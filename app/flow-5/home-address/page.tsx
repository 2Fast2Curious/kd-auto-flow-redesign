"use client"
import Image from "next/image"
import { Phone, Shield, Star, ArrowRight, MapPin } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Flow5HomeAddressPage() {
  const router = useRouter()
  const [address, setAddress] = useState("")
  const [zipCode, setZipCode] = useState("")

  const handleNext = () => {
    if (address.trim() && zipCode.trim()) {
      router.push("/flow-5/phone-number")
    }
  }

  const canContinue = address.trim() && zipCode.trim()

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
              <span className="text-sm font-medium text-blue-600">98%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-500 h-2 rounded-full transition-all duration-300" style={{ width: "98%" }}></div>
            </div>
          </div>

          {/* Main Card */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 px-6 py-4 text-white text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <MapPin className="w-5 h-5" />
                <h1 className="text-xl font-bold">Final Step!</h1>
              </div>
              <p className="text-cyan-100 text-sm">Your location affects your rates</p>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="text-center mb-6">
                <h2 className="text-lg font-bold text-gray-900 mb-3">What's your home address?</h2>
                <p className="text-gray-600 text-sm">We need this to find local providers</p>
              </div>

              <div className="space-y-4">
                {/* Address Input */}
                <div>
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Street Address"
                    className="w-full py-4 px-4 border-2 border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                {/* Zip Code Input */}
                <div>
                  <input
                    type="text"
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value.replace(/\D/g, "").slice(0, 5))}
                    placeholder="Zip Code"
                    className="w-full py-4 px-4 border-2 border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                {/* Continue Button */}
                <button
                  onClick={handleNext}
                  disabled={!canContinue}
                  className="w-full bg-green-500 hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-4 px-6 rounded-lg text-center font-semibold shadow-md active:scale-95 transition-all duration-150 flex items-center justify-center gap-2"
                >
                  Get My Quotes! <ArrowRight size={18} />
                </button>
              </div>

              {/* Final Benefits */}
              <div className="mt-6 bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-4">
                <div className="grid grid-cols-3 gap-3 text-center text-sm">
                  <div>
                    <div className="text-lg font-bold text-green-600">$500+</div>
                    <div className="text-gray-600">Savings</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-blue-600">Free</div>
                    <div className="text-gray-600">No Cost</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-purple-600">Fast</div>
                    <div className="text-gray-600">Results</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
