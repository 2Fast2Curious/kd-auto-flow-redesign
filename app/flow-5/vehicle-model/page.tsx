"use client"
import Image from "next/image"
import { Phone, Shield, Star, ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Flow5VehicleModelPage() {
  const router = useRouter()
  const [selectedModel, setSelectedModel] = useState("")

  const handleNext = () => {
    if (selectedModel) {
      router.push("/flow-5/credit-rating")
    }
  }

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
              <span className="text-sm font-medium text-blue-600">75%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-500 h-2 rounded-full transition-all duration-300" style={{ width: "75%" }}></div>
            </div>
          </div>

          {/* Main Card */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-teal-500 to-teal-600 px-6 py-4 text-white text-center">
              <h1 className="text-xl font-bold mb-1">Final Vehicle Details</h1>
              <p className="text-teal-100 text-sm">We're calculating your personalized rates</p>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="text-center mb-6">
                <h2 className="text-lg font-bold text-gray-900 mb-3">What model is your vehicle?</h2>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  {["Accord", "Civic", "CR-V", "Pilot", "Odyssey", "Ridgeline"].map((model) => (
                    <button
                      key={model}
                      onClick={() => setSelectedModel(model)}
                      className={`py-4 px-4 rounded-lg text-center font-medium border-2 transition-all duration-150 active:scale-95 ${
                        selectedModel === model
                          ? "bg-blue-500 text-white border-blue-500"
                          : "bg-gray-50 hover:bg-blue-50 border-gray-200 hover:border-blue-300 text-gray-700 hover:text-blue-700"
                      }`}
                    >
                      {model}
                    </button>
                  ))}
                </div>

                <button
                  onClick={handleNext}
                  disabled={!selectedModel}
                  className="w-full bg-green-500 hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-4 px-6 rounded-lg text-center font-semibold shadow-md active:scale-95 transition-all duration-150 flex items-center justify-center gap-2"
                >
                  Continue <ArrowRight size={18} />
                </button>
              </div>

              {/* Benefits */}
              <div className="mt-6 bg-gray-50 rounded-lg p-4">
                <div className="grid grid-cols-3 gap-3 text-center text-sm">
                  <div>
                    <div className="text-lg font-bold text-green-600">$500+</div>
                    <div className="text-gray-600">Savings</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-blue-600">1 min</div>
                    <div className="text-gray-600">Left</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-purple-600">Free</div>
                    <div className="text-gray-600">No Cost</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
