"use client"
import { useState } from "react"
import type React from "react"

import Link from "next/link"
import Image from "next/image"
import { Phone } from "lucide-react"

export default function Flow3FinalPage() {
  const [phoneNumber, setPhoneNumber] = useState("")

  const handleSubmit = () => {
    if (phoneNumber.length >= 10) {
      alert(`Flow 3 Complete! Phone: ${phoneNumber}`)
    }
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "")
    if (value.length <= 10) {
      setPhoneNumber(value)
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
            <div className="h-2 bg-gray-200 rounded-full">
              <div className="h-2 bg-[#1e3a8a] rounded-full w-[99%]"></div>
            </div>
            <div className="absolute left-[99%] -top-1 transform -translate-x-1/2">
              <div className="w-4 h-4 bg-red-500 rounded-sm flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 00-2 2v8a2 2 002 2h12a2 2 002-2V6a2 2 00-2-2H4z" />
                </svg>
              </div>
            </div>
          </div>
          <p className="text-center text-sm text-gray-600 mt-2">Progress: 99%</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-[#1e3a8a] text-center mb-8">Final Step! What is your phone number?</h2>

        <div className="max-w-2xl mx-auto space-y-6">
          <input
            type="tel"
            value={phoneNumber}
            onChange={handlePhoneChange}
            placeholder="e.g. (202) 555-1234"
            className="w-full bg-white border border-gray-300 rounded-lg p-4 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            onClick={handleSubmit}
            disabled={phoneNumber.length < 10}
            className="w-full bg-red-500 hover:bg-red-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-4 rounded-lg text-center font-medium flex items-center justify-center gap-2"
          >
            Get Quotes
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>

          <div className="text-xs text-gray-600 leading-tight">
            <p>
              By clicking Get Quotes and submitting this form, I am providing express written consent to being contacted
              by you,{" "}
              <Link href="#" className="text-blue-600 hover:underline">
                Marketing Partners
              </Link>
              , or by one or more agents or brokers of your partners which companies I agree may reach me to discuss my
              interest, including offers of insurance, at the phone number and/or email address I have provided to you
              in submitting this form and/or additional information obtained. I consent by electronic signature to being
              contacted by telephone (via call and/or text) for marketing/telemarketing purposes at the phone number I
              provided in this form, even if my phone number is listed on a Do Not Call Registry, and I agree that such
              contact may be made using an automatic telephone dialing system and/or an artificial or prerecorded voice
              (standard call, text message, and data rates apply). I can revoke my consent at any time. I also
              understand that my agreement to be contacted is not a condition of purchasing any property, goods or
              services, and that I may call 1-855-840-1737 to speak with someone about obtaining an insurance quote.By
              clicking Get Quotes and submitting this form, I affirm that I have read and agree to this website's{" "}
              <Link href="#" className="text-blue-600 hover:underline">
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link href="#" className="text-blue-600 hover:underline">
                Terms of Use
              </Link>
              ,including the arbitration provision and the{" "}
              <Link href="#" className="text-blue-600 hover:underline">
                E-SIGN Consent
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
