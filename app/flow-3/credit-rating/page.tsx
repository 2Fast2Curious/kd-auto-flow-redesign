"use client"
import { useRouter } from "next/navigation"
import { useState } from "react"
import Image from "next/image"
import { Phone } from "lucide-react"

export default function Flow3CreditRatingPage() {
  const router = useRouter()
  const [selectedRating, setSelectedRating] = useState<string>("")

  const creditOptions = [
    { label: "Excellent (720+)", value: "excellent" },
    { label: "Good (680 - 719)", value: "good" },
    { label: "Average (580 - 679)", value: "average" },
    { label: "Poor (Below 580)", value: "poor" },
  ]

  const handleSelection = (value: string) => {
    setSelectedRating(value)
    // Auto-navigate after selection
    setTimeout(() => {
      router.push("/flow-3/driving-infractions")
    }, 300)
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
              <div className="bg-red-500 h-full w-[87.5%]"></div>
            </div>
            <div className="absolute left-[87.5%] -top-1 transform -translate-x-1/2">
              <div className="w-4 h-4 bg-red-500 rounded-sm flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4z" />
                </svg>
              </div>
            </div>
          </div>
          <p className="text-center text-sm text-gray-600 mt-2">Progress: 87.5%</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-[#1e3a8a] text-center mb-8">What is your credit score?</h2>

        <div className="space-y-4 max-w-2xl mx-auto">
          {creditOptions.map((option) => (
            <label
              key={option.value}
              className="flex items-center justify-between bg-white border border-gray-300 rounded-lg p-4 cursor-pointer hover:border-blue-500 transition-colors"
            >
              <span className="text-[#1e3a8a] font-medium">{option.label}</span>
              <input
                type="radio"
                name="credit"
                value={option.value}
                checked={selectedRating === option.value}
                onChange={() => handleSelection(option.value)}
                className="w-5 h-5 text-blue-600"
              />
            </label>
          ))}
        </div>
      </div>
    </div>
  )
}
