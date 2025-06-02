"use client"

import type React from "react"
import Image from "next/image"
import { Phone, ArrowRight, Trophy } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import Link from "next/link"

export default function Flow5PhoneNumberPage() {
  const router = useRouter()
  const [phoneNumber, setPhoneNumber] = useState("")

  const handleSubmit = () => {
    if (isValidPhoneNumber(phoneNumber)) {
      alert(`Flow 5 Complete! Phone: ${phoneNumber}`)
    }
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "")

    if (value.length <= 10) {
      let formattedValue = ""

      if (value.length > 0) {
        formattedValue = "+1 "

        if (value.length > 0) {
          formattedValue += "(" + value.substring(0, Math.min(3, value.length))
        }

        if (value.length > 3) {
          formattedValue += ") " + value.substring(3, Math.min(6, value.length))
        }

        if (value.length > 6) {
          formattedValue += "-" + value.substring(6, 10)
        }
      }

      setPhoneNumber(formattedValue)
    }
  }

  const isValidPhoneNumber = (phone: string) => {
    return phone.replace(/\D/g, "").length === 11
  }

  const canSubmit = isValidPhoneNumber(phoneNumber)

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
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
            <a href="tel:18665483035" className="text-green-600 font-bold text-lg flex items-center justify-end gap-1">
              <Phone size={16} className="text-green-500" />
              1-866-548-3035
            </a>
          </div>
        </div>
      </header>

      {/* Success Bar */}
      <div className="bg-green-500 py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center gap-4 text-xs text-white">
            <Trophy className="w-4 h-4" />
            <span className="font-medium">🎉 You Qualify for Premium Rates!</span>
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
              <span className="text-sm font-medium text-green-600">100% Complete!</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full w-full"></div>
            </div>
          </div>

          {/* Main Card */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 px-6 py-6 text-white text-center">
              <Trophy className="w-12 h-12 mx-auto mb-2 text-yellow-300" />
              <h1 className="text-xl font-bold mb-1">🎉 Congratulations!</h1>
              <p className="text-green-100 text-sm">You're matched with top providers!</p>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="text-center mb-6">
                <h2 className="text-lg font-bold text-gray-900 mb-3">What's your phone number?</h2>
                <p className="text-gray-600 text-sm">Get your quotes delivered instantly</p>
              </div>

              <div className="space-y-4">
                {/* Phone Input */}
                <div>
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={handlePhoneChange}
                    placeholder="+1 (555) 123-4567"
                    className="w-full py-4 px-4 border-2 border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-center font-semibold"
                  />
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    onClick={handleSubmit}
                    disabled={!canSubmit}
                    className="w-full bg-green-500 hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-4 px-6 rounded-lg text-center font-bold text-lg shadow-lg active:scale-95 transition-all duration-150 flex items-center justify-center gap-2"
                  >
                    🚀 Get My FREE Quotes! <ArrowRight size={20} />
                  </button>
                </div>
              </div>

              {/* Success Metrics */}
              <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="grid grid-cols-3 gap-3 text-center text-sm">
                  <div>
                    <div className="text-lg font-bold text-green-600">$500+</div>
                    <div className="text-gray-600">Avg. Savings</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-blue-600">50+</div>
                    <div className="text-gray-600">Insurers</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-purple-600">Free</div>
                    <div className="text-gray-600">No Cost</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Legal Disclaimer */}
          <div className="mt-4 text-xs text-gray-600 leading-tight bg-white rounded-lg p-4 shadow-sm">
            <p>
              By clicking 'Get My FREE Quotes!', I provide my eSign Act Electronic Signature and authorize you to share
              my information with one or more companies on your{" "}
              <Link href="#" className="text-blue-500 hover:underline">
                Partners
              </Link>{" "}
              list for marketing purposes. I agree to the{" "}
              <Link href="#" className="text-blue-500 hover:underline">
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link href="#" className="text-blue-500 hover:underline">
                Terms of Use
              </Link>
              .
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
