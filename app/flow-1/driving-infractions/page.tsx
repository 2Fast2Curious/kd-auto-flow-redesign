"use client"
import Image from "next/image"
import { Phone, ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Flow1DrivingInfractionsPage() {
  const router = useRouter()
  const [hasTickets, setHasTickets] = useState<string>("")
  const [hasAccidents, setHasAccidents] = useState<string>("")

  const handleContinue = () => {
    if (hasTickets && hasAccidents) {
      router.push("/flow-1/date-of-birth")
    }
  }

  const canContinue = hasTickets && hasAccidents

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
            <a href="tel:18445541262" className="text-[#2048A8] font-bold text-lg flex items-center justify-end gap-1">
              <Phone size={16} className="text-[#2048A8]" />
              1-844-554-1262 <span className="font-normal">(TTY 711)</span>
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
              <p className="text-center text-sm text-gray-700">Almost there, let's calculate your savings!</p>
            </div>
            <div className="bg-gray-200 h-2 relative">
              <div className="bg-[#2048A8] h-full w-[90%]"></div>
            </div>
          </div>

          {/* Form Content */}
          <div className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">Driving Infractions</h2>
              <p className="text-gray-600">Select all that apply</p>
            </div>

            <div className="space-y-8 max-w-md mx-auto">
              {/* Tickets Question */}
              <div>
                <p className="text-center mb-4 text-gray-800">
                  Have you received any tickets in the last three (3) years?
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => setHasTickets("Yes")}
                    className={`py-3 px-4 rounded border-2 text-center ${
                      hasTickets === "Yes"
                        ? "bg-gray-500 text-white border-gray-500"
                        : "bg-white text-gray-700 border-gray-300 hover:border-gray-400"
                    }`}
                  >
                    Yes
                  </button>
                  <button
                    onClick={() => setHasTickets("No")}
                    className={`py-3 px-4 rounded border-2 text-center ${
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
              <div>
                <p className="text-center mb-4 text-gray-800">
                  Have you been involved in any accidents in the last three (3) years?
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => setHasAccidents("Yes")}
                    className={`py-3 px-4 rounded border-2 text-center ${
                      hasAccidents === "Yes"
                        ? "bg-gray-500 text-white border-gray-500"
                        : "bg-white text-gray-700 border-gray-300 hover:border-gray-400"
                    }`}
                  >
                    Yes
                  </button>
                  <button
                    onClick={() => setHasAccidents("No")}
                    className={`py-3 px-4 rounded border-2 text-center ${
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
              <div>
                <button
                  onClick={handleContinue}
                  disabled={!canContinue}
                  className="w-full bg-green-500 hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-4 rounded text-center font-medium flex items-center justify-center gap-2"
                >
                  Continue <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
