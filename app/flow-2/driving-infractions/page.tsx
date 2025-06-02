"use client"
import Image from "next/image"
import { Phone, ArrowLeft, ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Flow2DrivingInfractionsPage() {
  const router = useRouter()
  const [hasTickets, setHasTickets] = useState<string>("")
  const [hasAccidents, setHasAccidents] = useState<string>("")

  const handleContinue = () => {
    if (hasTickets && hasAccidents) {
      router.push("/flow-2/date-of-birth")
    }
  }

  const canContinue = hasTickets && hasAccidents

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
              <span className="text-gray-900 font-bold">1-844-900-1765</span>
            </div>
            <p className="text-xs text-gray-500">Sun - Sat 8 AM - 8 PM EST</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12 max-w-2xl">
        {/* Progress */}
        <div className="text-center mb-8">
          <p className="text-sm text-gray-600 mb-2">75% complete</p>
          <div className="relative w-full bg-gray-200 h-2 rounded-full">
            <div className="absolute left-0 top-0 h-2 bg-red-600 rounded-full" style={{ width: "75%" }}></div>
            <div
              className="absolute bg-white border-2 border-gray-400 w-6 h-6 rounded-full -top-2"
              style={{ left: "75%", transform: "translateX(-50%)" }}
            >
              <div className="w-full h-full bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Question */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Driving Infractions</h1>
          <p className="text-gray-600 mt-2">Select all that apply</p>
        </div>

        {/* Tickets Question */}
        <div className="mb-8">
          <p className="text-center mb-4 text-gray-800">Have you received any tickets in the last three (3) years?</p>
          <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
            <button
              onClick={() => setHasTickets("Yes")}
              className={`py-3 px-4 rounded-lg border-2 text-center transition-colors ${
                hasTickets === "Yes"
                  ? "bg-gray-500 text-white border-gray-500"
                  : "bg-white text-gray-700 border-gray-300 hover:border-gray-400"
              }`}
            >
              Yes
            </button>
            <button
              onClick={() => setHasTickets("No")}
              className={`py-3 px-4 rounded-lg border-2 text-center transition-colors ${
                hasTickets === "No"
                  ? "bg-blue-500 text-white border-blue-500"
                  : "bg-white text-blue-500 border-blue-500 hover:border-blue-600"
              }`}
            >
              No
            </button>
          </div>
        </div>

        {/* Accidents Question */}
        <div className="mb-8">
          <p className="text-center mb-4 text-gray-800">
            Have you been involved in any accidents in the last three (3) years?
          </p>
          <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
            <button
              onClick={() => setHasAccidents("Yes")}
              className={`py-3 px-4 rounded-lg border-2 text-center transition-colors ${
                hasAccidents === "Yes"
                  ? "bg-gray-500 text-white border-gray-500"
                  : "bg-white text-gray-700 border-gray-300 hover:border-gray-400"
              }`}
            >
              Yes
            </button>
            <button
              onClick={() => setHasAccidents("No")}
              className={`py-3 px-4 rounded-lg border-2 text-center transition-colors ${
                hasAccidents === "No"
                  ? "bg-blue-500 text-white border-blue-500"
                  : "bg-white text-blue-500 border-blue-500 hover:border-blue-600"
              }`}
            >
              No
            </button>
          </div>
        </div>

        {/* Continue Button */}
        <div className="max-w-md mx-auto mb-12">
          <button
            onClick={handleContinue}
            disabled={!canContinue}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-4 rounded-lg text-center font-medium flex items-center justify-center gap-2"
          >
            NEXT <ArrowRight size={18} />
          </button>
        </div>

        {/* Back Button */}
        <div className="text-center">
          <button
            onClick={() => router.push("/flow-2/credit-score")}
            className="flex items-center gap-2 text-gray-400 hover:text-gray-600 mx-auto"
          >
            <ArrowLeft size={16} />
            BACK
          </button>
        </div>
      </main>
    </div>
  )
}
