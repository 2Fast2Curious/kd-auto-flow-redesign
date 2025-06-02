"use client"
import Image from "next/image"
import type React from "react"

import { Phone, Shield, Star, ArrowRight, Calendar } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Flow5DateOfBirthPage() {
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
      router.push("/flow-5/home-address")
    }
  }

  const isValidDate = () => {
    return dateValue.length >= 8
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
              <span className="text-sm font-medium text-blue-600">95%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-500 h-2 rounded-full transition-all duration-300" style={{ width: "95%" }}></div>
            </div>
          </div>

          {/* Main Card */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-violet-500 to-violet-600 px-6 py-4 text-white text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Calendar className="w-5 h-5" />
                <h1 className="text-xl font-bold">Almost Done!</h1>
              </div>
              <p className="text-violet-100 text-sm">Just need a few personal details</p>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="text-center mb-6">
                <h2 className="text-lg font-bold text-gray-900 mb-3">What's your date of birth?</h2>
                <p className="text-gray-600 text-sm">Your age helps us calculate accurate premiums</p>
              </div>

              <div className="space-y-4">
                {/* Date of Birth Input */}
                <div>
                  <input
                    type="text"
                    value={dateValue}
                    onChange={handleDateChange}
                    placeholder="MM/DD/YYYY"
                    className="w-full py-4 px-4 border-2 border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-center font-semibold"
                    maxLength={10}
                  />
                </div>

                {/* Continue Button */}
                <button
                  onClick={handleNext}
                  disabled={!isValidDate()}
                  className="w-full bg-green-500 hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-4 px-6 rounded-lg text-center font-semibold shadow-md active:scale-95 transition-all duration-150 flex items-center justify-center gap-2"
                >
                  Continue <ArrowRight size={18} />
                </button>
              </div>

              {/* Security Notice */}
              <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-3 text-center">
                <div className="flex items-center justify-center gap-2 text-green-700 text-xs">
                  <Shield className="w-3 h-3" />
                  <span className="font-medium">Your information is encrypted and secure</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
