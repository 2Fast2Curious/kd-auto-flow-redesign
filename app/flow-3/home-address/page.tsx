"use client"
import { useRouter } from "next/navigation"
import { useState } from "react"
import Image from "next/image"
import { Phone } from "lucide-react"

export default function Flow3HomeAddressPage() {
  const router = useRouter()
  const [zipCode, setZipCode] = useState("33442")
  const [streetAddress, setStreetAddress] = useState("")

  const handleSubmit = () => {
    if (zipCode && streetAddress) {
      router.push("/flow-3/phone-number")
    }
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
              <div className="bg-red-500 h-full w-[96%]"></div>
            </div>
            <div className="absolute left-[96%] -top-1 transform -translate-x-1/2">
              <div className="w-4 h-4 bg-red-500 rounded-sm flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4z" />
                </svg>
              </div>
            </div>
          </div>
          <p className="text-center text-sm text-gray-600 mt-2">Progress: 96%</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-[#1e3a8a] text-center mb-8">What is your street address?</h2>

        <div className="max-w-2xl mx-auto space-y-6">
          <div>
            <label className="block text-[#1e3a8a] font-medium mb-2">ZIP Code</label>
            <input
              type="text"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value.replace(/\D/g, "").slice(0, 5))}
              className="w-full bg-white border border-gray-300 rounded-lg p-4 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-[#1e3a8a] font-medium mb-2">Street Address</label>
            <input
              type="text"
              value={streetAddress}
              onChange={(e) => setStreetAddress(e.target.value)}
              placeholder="e.g. 1 Main Street"
              className="w-full bg-white border border-gray-300 rounded-lg p-4 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <p className="text-[#1e3a8a] font-medium">Deerfield Beach, FL 33442</p>
          </div>

          <button
            onClick={handleSubmit}
            disabled={!zipCode || !streetAddress}
            className="w-full bg-red-500 hover:bg-red-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-4 rounded-lg text-center font-medium flex items-center justify-center gap-2"
          >
            Continue
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
