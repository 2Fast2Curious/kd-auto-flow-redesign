"use client"

import type React from "react"
import Image from "next/image"
import { Phone, ArrowRight, Shield, Star, Trophy } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import Link from "next/link"

export default function Flow4PhoneNumberPage() {
  const router = useRouter()
  const [phoneNumber, setPhoneNumber] = useState("")

  const handleSubmit = () => {
    if (isValidPhoneNumber(phoneNumber)) {
      alert(`Flow 4 Complete! Phone: ${phoneNumber}`)
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
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Header */}
      <header className="bg-white py-4 px-4 shadow-md border-b-2 border-green-200">
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
              href="tel:18665483035"
              className="text-green-600 font-bold text-xl flex items-center justify-end gap-2 hover:text-green-700 transition-colors"
            >
              <Phone size={18} className="text-green-500" />
              1-866-548-3035 <span className="font-normal text-sm">(TTY 711)</span>
            </a>
          </div>
        </div>
      </header>

      {/* Success Indicators */}
      <div className="bg-white py-4 border-b border-green-200">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Trophy className="w-4 h-4 text-gold-500" />
              <span>Congratulations! You Qualify!</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-500" />
              <span>Premium Rates Available</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-500" />
              <span>100% Secure Process</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          {/* Progress */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-600">Progress</span>
              <span className="text-sm font-medium text-green-600">100% Complete!</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 shadow-inner">
              <div className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full shadow-sm w-full animate-pulse"></div>
            </div>
          </div>

          {/* Main Card */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            {/* Card Header */}
            <div className="bg-gradient-to-r from-green-600 to-emerald-700 px-8 py-8 text-white text-center">
              <div className="mb-4">
                <Trophy className="w-16 h-16 mx-auto mb-4 text-yellow-300" />
                <h1 className="text-3xl font-bold mb-2">🎉 Congratulations!</h1>
                <p className="text-green-100 text-lg">You've been matched with top-rated providers!</p>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">What is your phone number?</h2>
                <p className="text-gray-600">Get your personalized quotes delivered instantly</p>
              </div>

              <div className="space-y-6">
                {/* Phone Input */}
                <div>
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={handlePhoneChange}
                    placeholder="+1 (555) 123-4567"
                    className="w-full py-5 px-6 border-2 border-gray-300 rounded-xl text-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-center font-semibold"
                  />
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    onClick={handleSubmit}
                    disabled={!canSubmit}
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed text-white py-6 px-6 rounded-xl text-center font-bold text-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-200 flex items-center justify-center gap-3 animate-pulse-custom"
                  >
                    🚀 Get My FREE Quotes Now! <ArrowRight size={24} />
                  </button>
                </div>
              </div>

              {/* Success Metrics */}
              <div className="mt-8 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-green-600">$847</div>
                    <div className="text-gray-600">Average Savings</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-600">50+</div>
                    <div className="text-gray-600">Top Insurers</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-600">2 min</div>
                    <div className="text-gray-600">To Complete</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Legal Disclaimer */}
          <div className="mt-6 text-xs text-gray-600 leading-tight bg-white rounded-xl p-6 shadow-sm">
            <p className="mb-3">
              By clicking 'Get My FREE Quotes Now!', I provide my eSign Act Electronic Signature and authorize you to
              share my information with one or more companies (and their agents) on your{" "}
              <Link href="#" className="text-blue-500 hover:underline">
                Partners
              </Link>{" "}
              list, so they may process and respond to my request and contact me for marketing/telemarketing purposes at
              the number, address and email address I have provided, including my wireless number if provided, using
              live operators, automatic telephone dialing system and artificial or prerecorded voice messages, text
              messages and/or emails.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
