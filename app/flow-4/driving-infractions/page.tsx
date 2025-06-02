"use client"
import Image from "next/image"
import { Phone, Shield, Star, Users, ArrowRight, AlertTriangle } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Flow4DrivingInfractionsPage() {
  const router = useRouter()
  const [hasTickets, setHasTickets] = useState<string>("")
  const [hasAccidents, setHasAccidents] = useState<string>("")

  const handleContinue = () => {
    if (hasTickets && hasAccidents) {
      router.push("/flow-4/date-of-birth")
    }
  }

  const canContinue = hasTickets && hasAccidents

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white py-4 px-4 shadow-md border-b-2 border-blue-200">
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
              href="tel:18445541262"
              className="text-blue-600 font-bold text-xl flex items-center justify-end gap-2 hover:text-blue-700 transition-colors"
            >
              <Phone size={18} className="text-green-500" />
              1-844-554-1262 <span className="font-normal text-sm">(TTY 711)</span>
            </a>
          </div>
        </div>
      </header>

      {/* Trust Indicators */}
      <div className="bg-white py-3 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-500" />
              <span>100% Secure & Private</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-500" />
              <span>4.8/5 Customer Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-blue-500" />
              <span>2M+ Drivers Served</span>
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
              <span className="text-sm font-medium text-blue-600">90% Complete</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 shadow-inner">
              <div
                className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full shadow-sm transition-all duration-300"
                style={{ width: "90%" }}
              ></div>
            </div>
          </div>

          {/* Main Card */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            {/* Card Header */}
            <div className="bg-gradient-to-r from-orange-600 to-orange-700 px-8 py-6 text-white">
              <div className="flex items-center justify-center gap-3">
                <AlertTriangle className="w-8 h-8" />
                <div className="text-center">
                  <h1 className="text-2xl font-bold">Driving History Check</h1>
                  <p className="text-orange-100">Honesty helps us find your best rates</p>
                </div>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Driving Infractions</h2>
                <p className="text-gray-600">Select all that apply - we still find great rates!</p>
              </div>

              <div className="space-y-8">
                {/* Tickets Question */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <p className="text-center mb-6 text-gray-800 font-medium text-lg">
                    Have you received any tickets in the last three (3) years?
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      onClick={() => setHasTickets("Yes")}
                      className={`py-4 px-6 rounded-xl border-2 text-center font-semibold transition-all duration-200 ${
                        hasTickets === "Yes"
                          ? "bg-red-500 text-white border-red-500 shadow-lg"
                          : "bg-white text-gray-700 border-gray-300 hover:border-red-400 hover:bg-red-50"
                      }`}
                    >
                      Yes
                    </button>
                    <button
                      onClick={() => setHasTickets("No")}
                      className={`py-4 px-6 rounded-xl border-2 text-center font-semibold transition-all duration-200 ${
                        hasTickets === "No"
                          ? "bg-green-500 text-white border-green-500 shadow-lg"
                          : "bg-white text-green-700 border-green-300 hover:border-green-400 hover:bg-green-50"
                      }`}
                    >
                      No
                    </button>
                  </div>
                </div>

                {/* Accidents Question */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <p className="text-center mb-6 text-gray-800 font-medium text-lg">
                    Have you been involved in any accidents in the last three (3) years?
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      onClick={() => setHasAccidents("Yes")}
                      className={`py-4 px-6 rounded-xl border-2 text-center font-semibold transition-all duration-200 ${
                        hasAccidents === "Yes"
                          ? "bg-red-500 text-white border-red-500 shadow-lg"
                          : "bg-white text-gray-700 border-gray-300 hover:border-red-400 hover:bg-red-50"
                      }`}
                    >
                      Yes
                    </button>
                    <button
                      onClick={() => setHasAccidents("No")}
                      className={`py-4 px-6 rounded-xl border-2 text-center font-semibold transition-all duration-200 ${
                        hasAccidents === "No"
                          ? "bg-green-500 text-white border-green-500 shadow-lg"
                          : "bg-white text-green-700 border-green-300 hover:border-green-400 hover:bg-green-50"
                      }`}
                    >
                      No
                    </button>
                  </div>
                </div>

                {/* Continue Button */}
                <div>
                  <button
                    onClick={handleContinue}
                    disabled={!canContinue}
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed text-white py-5 px-6 rounded-xl text-center font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    Continue to Personal Info <ArrowRight size={20} />
                  </button>
                </div>
              </div>

              {/* Reassurance */}
              <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-4 text-center">
                <div className="text-blue-700 text-sm">
                  <p className="font-medium">🔒 Don't worry - even with infractions, we find competitive rates!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
