"use client"
import { useRouter } from "next/navigation"
import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Phone } from "react-feather"

export default function Flow3DateOfBirthPage() {
  const router = useRouter()
  const [dateValue, setDateValue] = useState("")

  const handleSubmit = () => {
    if (dateValue.length >= 8) {
      router.push("/flow-3/home-address")
    }
  }

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
          <p className="text-center text-[#1e3a8a] font-medium mb-3">See How Much We Can Save You!</p>
          <div className="relative">
            <div className="h-2 bg-gray-200 rounded-full">
              <div className="h-2 bg-red-500 rounded-full w-[59%]"></div>
            </div>
          </div>
          <p className="text-center text-sm text-gray-600 mt-2">Progress: 59%</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-[#1e3a8a] text-center mb-8">What is your date of birth?</h2>

        <div className="max-w-2xl mx-auto space-y-6">
          <div className="bg-white border border-gray-300 rounded-lg p-4 flex items-center">
            <input
              type="text"
              value={dateValue}
              onChange={handleDateChange}
              placeholder="MM / DD / YYYY"
              className="flex-1 text-lg text-center border-none focus:outline-none text-gray-600"
              maxLength={10}
            />
          </div>

          <button
            onClick={handleSubmit}
            disabled={dateValue.length < 8}
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
