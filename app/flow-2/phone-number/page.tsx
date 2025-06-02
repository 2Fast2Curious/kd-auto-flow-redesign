"use client"

import type React from "react"
import Image from "next/image"
import { Phone, ArrowRight, Check } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import Link from "next/link"

export default function Flow2PhoneNumberPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [bundleInterest, setBundleInterest] = useState(true)

  const handleSubmit = () => {
    if (isValidEmail(email) && isValidPhoneNumber(phoneNumber)) {
      alert(`Flow 2 Complete! Email: ${email}, Phone: ${phoneNumber}`)
    }
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "")
    if (value.length <= 10) {
      setPhoneNumber(value)
    }
  }

  const isValidEmail = (email: string) => {
    return email.includes("@") && email.includes(".")
  }

  const isValidPhoneNumber = (phone: string) => {
    return phone.length === 10
  }

  const canSubmit = isValidEmail(email) && isValidPhoneNumber(phoneNumber)

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
              <span className="text-gray-900 font-bold">1-855-910-5785</span>
            </div>
            <p className="text-xs text-gray-500">Sun - Sat 8 AM - 8 PM EST</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12 max-w-2xl">
        {/* Progress */}
        <div className="text-center mb-8">
          <p className="text-sm text-gray-600 mb-2">100% complete</p>
          <div className="relative w-full bg-gray-200 h-2 rounded-full">
            <div className="absolute left-0 top-0 h-2 bg-red-600 rounded-full w-full"></div>
            <div
              className="absolute bg-white border-2 border-gray-400 w-6 h-6 rounded-full -top-2 right-0"
              style={{ transform: "translateX(50%)" }}
            >
              <div className="w-full h-full bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Question */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Almost done Tessy! Just a few more details to finalize your quote.
          </h1>
        </div>

        {/* Form */}
        <div className="space-y-6 max-w-md mx-auto">
          {/* Email Input */}
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full py-4 px-4 border-2 border-gray-300 rounded-lg text-lg focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Phone Input */}
          <div>
            <input
              type="tel"
              value={phoneNumber}
              onChange={handlePhoneChange}
              placeholder="Phone number"
              className="w-full py-4 px-4 border-2 border-gray-300 rounded-lg text-lg focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Bundle Checkbox */}
          <div className="flex items-start gap-3 py-4">
            <button
              onClick={() => setBundleInterest(!bundleInterest)}
              className={`w-5 h-5 rounded border-2 flex items-center justify-center mt-0.5 ${
                bundleInterest ? "bg-green-500 border-green-500" : "border-gray-300"
              }`}
            >
              {bundleInterest && <Check size={12} className="text-white" />}
            </button>
            <span className="text-sm text-gray-600 italic">
              I'm interested in bundling home + auto insurance for additional discounts
            </span>
          </div>

          {/* Consent Text */}
          <div className="py-4">
            <p className="text-sm text-gray-600 italic">
              By clicking the 'Get My Free Quotes' button, I agree to the consents below the button.
            </p>
          </div>

          {/* Submit Button */}
          <div>
            <button
              onClick={handleSubmit}
              disabled={!canSubmit}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-4 rounded-lg text-center font-medium flex items-center justify-center gap-2"
            >
              Get My Free Quotes <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="mt-8 text-xs text-gray-600 leading-tight">
          <p>
            By clicking the "Get My Free Quotes" button, I am providing my E-SIGN signature and express written consent
            to permit Excel Impact and multiple{" "}
            <Link href="#" className="text-blue-600 hover:underline">
              listed companies
            </Link>{" "}
            - and its agents, affiliates, partners, or third parties acting on their behalf - to contact me at the
            number listed above for marketing purposes or to obtain additional information for such purposes including
            through telephone call or text/SMS/MMS text message through the use of an automatic telephone dialing
            system, AI technology, prerecorded and/or artificial and email (even if my number is currently listed on any
            state, federal, local, or corporate Do Not Call list). I understand that my consent is not required as a
            condition of purchasing any goods or services and that I may revoke my consent at any time. Carrier message
            and data rates may apply. I also acknowledge that I have read and agree to the{" "}
            <Link href="#" className="text-blue-600 hover:underline">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link href="#" className="text-blue-600 hover:underline">
              Terms of Service
            </Link>
            , including mandatory arbitration.
          </p>
        </div>
      </main>
    </div>
  )
}
