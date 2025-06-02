"use client"
import Image from "next/image"
import type React from "react"

import { Phone, ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Flow1DateOfBirthPage() {
  const router = useRouter()
  const [dateValue, setDateValue] = useState("")

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "")
    if (value.length >= 2) {
      value = value.substring(0, 2) + "/" + value.substring(2)
    }
    if (value.length >= 5) {
      value = value.substring(0, 5) + "/" + value.substring(5, 9)
    }
    setDateValue(value)
  }

  const handleNext = () => {
    if (isValidDate()) {
      router.push("/flow-1/home-address")
    }
  }

  const isValidDate = () => {
    return dateValue.length >= 8
  }

  return (
    <div className="min-h-screen bg-gray-100">
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

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto bg-white rounded-md shadow-lg border border-gray-200 overflow-hidden">
          {/* Status Message and Progress Bar */}
          <div>
            <div className="bg-gray-100 py-2 px-4 border-b">
              <p className="text-center text-sm text-gray-700">
                You've been matched with providers ready to lower your auto insurance rate.
              </p>
            </div>
            <div className="bg-gray-200 h-2 relative">
              <div className="bg-[#2048A8] h-full w-[95%]"></div>
            </div>
          </div>

          {/* Form Content */}
          <div className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">What is your date of birth?</h2>
              <p className="text-gray-600">Personal information is safe & secure.</p>
            </div>

            <div className="max-w-md mx-auto space-y-6">
              {/* Date of Birth Input */}
              <div>
                <input
                  type="text"
                  value={dateValue}
                  onChange={handleDateChange}
                  placeholder="MM/DD/YYYY"
                  className="w-full py-4 px-4 border border-gray-300 rounded text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  maxLength={10}
                />
              </div>

              {/* Continue Button */}
              <div>
                <button
                  onClick={handleNext}
                  disabled={!isValidDate()}
                  className="w-full bg-green-500 hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-4 rounded text-center font-medium flex items-center justify-center gap-2"
                >
                  Continue <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
