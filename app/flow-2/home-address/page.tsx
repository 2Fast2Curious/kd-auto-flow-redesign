"use client"
import Image from "next/image"
import { Phone, ArrowLeft, ArrowRight, Info, Pencil, Check } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Flow2HomeAddressPage() {
  const router = useRouter()
  const [address, setAddress] = useState("")
  const [city, setCity] = useState("DEERFIELD BEACH FL, 33442")

  const handleNext = () => {
    if (address.trim()) {
      router.push("/flow-2/phone-number")
    }
  }

  const canContinue = address.trim().length > 0

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
      <main className="container mx-auto px-6 py-12 max-w-2xl">
        {/* Progress */}
        <div className="text-center mb-8">
          <p className="text-sm text-gray-600 mb-2">95% complete</p>
          <div className="relative w-full bg-gray-200 h-2 rounded-full">
            <div className="absolute left-0 top-0 h-2 bg-red-600 rounded-full" style={{ width: "95%" }}></div>
            <div
              className="absolute bg-white border-2 border-gray-400 w-6 h-6 rounded-full -top-2"
              style={{ left: "95%", transform: "translateX(-50%)" }}
            >
              <div className="w-full h-full bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Question */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">What's your home address?</h1>
        </div>

        {/* Info Text */}
        <div className="flex items-center justify-center gap-2 mb-8 text-gray-600">
          <Info size={16} className="text-blue-500" />
          <p>We verify your location to provide local quotes in your area.</p>
        </div>

        {/* Address Input */}
        <div className="max-w-md mx-auto mb-4">
          <div className="relative">
            <div className="bg-gray-50 px-4 py-2 border-b border-gray-200 rounded-t-lg">
              <p className="text-xs text-gray-500">Address</p>
            </div>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="1234 main street"
              className="w-full py-3 px-4 border-2 border-gray-300 rounded-b-lg text-lg focus:outline-none focus:border-blue-500"
            />
            {address && (
              <div className="absolute right-3 top-1/2 transform translate-y-1 text-green-500">
                <Check size={16} />
              </div>
            )}
          </div>
        </div>

        {/* City/State Display */}
        <div className="max-w-md mx-auto mb-8">
          <div className="flex justify-between items-center py-3 px-4">
            <p className="text-gray-700">{city}</p>
            <button className="text-gray-400 hover:text-gray-600">
              <Pencil size={16} />
              <span className="ml-1">EDIT</span>
            </button>
          </div>
        </div>

        {/* Next Button */}
        <div className="max-w-md mx-auto mb-12">
          <button
            onClick={handleNext}
            disabled={!canContinue}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-4 rounded-lg text-center font-medium flex items-center justify-center gap-2"
          >
            NEXT <ArrowRight size={18} />
          </button>
        </div>

        {/* Back Button */}
        <div className="text-center">
          <button
            onClick={() => router.push("/flow-2/date-of-birth")}
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
