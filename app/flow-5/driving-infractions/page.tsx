"use client"
import Image from "next/image"
import { Phone, Shield, Star, ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Flow5DrivingInfractionsPage() {
  const router = useRouter()
  const [hasTickets, setHasTickets] = useState<string>("")
  const [hasAccidents, setHasAccidents] = useState<string>("")

  const handleContinue = () => {
    if (hasTickets && hasAccidents) {
      router.push("/flow-5/date-of-birth")
    }
  }

  const canContinue = hasTickets && hasAccidents

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
              <span className="text-sm font-medium text-blue-600">90%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-500 h-2 rounded-full transition-all duration-300" style={{ width: "90%" }}></div>
            </div>
          </div>

          {/* Main Card */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-4 text-white text-center">
              <h1 className="text-xl font-bold mb-1">Driving History Check</h1>
              <p className="text-orange-100 text-sm">Honesty helps us find your best rates</p>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="text-center mb-6">
                <h2 className="text-lg font-bold text-gray-900 mb-3">Driving Infractions</h2>
                <p className="text-gray-600 text-sm">Select all that apply</p>
              </div>

              <div className="space-y-4">
                {/* Tickets Question */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-center mb-3 text-gray-800 font-medium">
                    Have you received any tickets in the last three (3) years?
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setHasTickets("Yes")}
                      className={`py-3 px-4 rounded-lg border text-center font-medium transition-all duration-150 ${
                        hasTickets === "Yes"
                          ? "bg-red-500 text-white border-red-500"
                          : "bg-white text-gray-700 border-gray-300 hover:border-red-400 hover:bg-red-50"
                      }`}
                    >
                      Yes
                    </button>
                    <button
                      onClick={() => setHasTickets("No")}
                      className={`py-3 px-4 rounded-lg border text-center font-medium transition-all duration-150 ${
                        hasTickets === "No"
                          ? "bg-green-500 text-white border-green-500"
                          : "bg-white text-green-700 border-green-300 hover:border-green-400 hover:bg-green-50"
                      }`}
                    >
                      No
                    </button>
                  </div>
                </div>

                {/* Accidents Question */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-center mb-3 text-gray-800 font-medium">
                    Have you been in any accidents in the last three (3) years?
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setHasAccidents("Yes")}
                      className={`py-3 px-4 rounded-lg border text-center font-medium transition-all duration-150 ${
                        hasAccidents === "Yes"
                          ? "bg-red-500 text-white border-red-500"
                          : "bg-white text-gray-700 border-gray-300 hover:border-red-400 hover:bg-red-50"
                      }`}
                    >
                      Yes
                    </button>
                    <button
                      onClick={() => setHasAccidents("No")}
                      className={`py-3 px-4 rounded-lg border text-center font-medium transition-all duration-150 ${
                        hasAccidents === "No"
                          ? "bg-green-500 text-white border-green-500"
                          : "bg-white text-green-700 border-green-300 hover:border-green-400 hover:bg-green-50"
                      }`}
                    >
                      No
                    </button>
                  </div>
                </div>

                {/* Continue Button */}
                <button
                  onClick={handleContinue}
                  disabled={!canContinue}
                  className="w-full bg-green-500 hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-4 px-6 rounded-lg text-center font-semibold shadow-md active:scale-95 transition-all duration-150 flex items-center justify-center gap-2"
                >
                  Continue <ArrowRight size={18} />
                </button>
              </div>

              {/* Reassurance */}
              <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-3 text-center">
                <div className="text-blue-700 text-xs">
                  <p className="font-medium">🔒 Don't worry - we find competitive rates for all drivers!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
