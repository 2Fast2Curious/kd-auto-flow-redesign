"use client"

import type React from "react"

import Image from "next/image"
import { Phone, ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import Link from "next/link"

export default function Flow1PhoneNumberPage() {
  const router = useRouter()
  const [phoneNumber, setPhoneNumber] = useState("")

  const handleSubmit = () => {
    if (isValidPhoneNumber(phoneNumber)) {
      alert(`Flow 1 Complete! Phone: ${phoneNumber}`)
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
            <a href="tel:18665483035" className="text-[#2048A8] font-bold text-lg flex items-center justify-end gap-1">
              <Phone size={16} className="text-[#2048A8]" />
              1-866-548-3035 <span className="font-normal">(TTY 711)</span>
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
              <div className="bg-[#2048A8] h-full w-[100%]"></div>
            </div>
          </div>

          {/* Form Content */}
          <div className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">What is your home or mobile phone number?</h2>
              <p className="text-gray-600">Personal information is safe & secure.</p>
            </div>

            <div className="max-w-md mx-auto space-y-6">
              {/* Phone Input */}
              <div>
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={handlePhoneChange}
                  placeholder="+1 (111) 111-1111"
                  className="w-full py-4 px-4 border border-gray-300 rounded text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  onClick={handleSubmit}
                  disabled={!canSubmit}
                  className="w-full bg-green-500 hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-4 rounded text-center font-medium flex items-center justify-center gap-2"
                >
                  Get My Free Quotes <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="max-w-2xl mx-auto mt-4 text-xs text-gray-600 leading-tight">
          <p className="mb-3">
            By clicking 'Get My Free Quotes', I provide my eSign Act Electronic Signature and authorize you to share my
            information with one or more companies (and their agents) on your{" "}
            <Link href="#" className="text-blue-500 hover:underline">
              Partners
            </Link>{" "}
            list, so they may process and respond to my request and contact me for marketing/telemarketing purposes at
            the number, address and email address I have provided, including my wireless number if provided, using live
            operators, automatic telephone dialing system and artificial or prerecorded voice messages, text messages
            and/or emails.
          </p>
        </div>
      </main>
    </div>
  )
}
