"use client"
import Image from "next/image"
import { Phone, Shield, Star, Users, ArrowRight, Zap } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Flow4VehicleModelPage() {
  const router = useRouter()
  const [selectedModel, setSelectedModel] = useState("")

  const handleNext = () => {
    if (selectedModel) {
      router.push("/flow-4/credit-rating")
    }
  }

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
              <span className="text-sm font-medium text-blue-600">75% Complete</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 shadow-inner">
              <div
                className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full shadow-sm transition-all duration-300"
                style={{ width: "75%" }}
              ></div>
            </div>
          </div>

          {/* Main Card */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            {/* Card Header */}
            <div className="bg-gradient-to-r from-teal-600 to-teal-700 px-8 py-6 text-white">
              <div className="flex items-center justify-center gap-3">
                <Zap className="w-8 h-8" />
                <div className="text-center">
                  <h1 className="text-2xl font-bold">Final Vehicle Details</h1>
                  <p className="text-teal-100">We're calculating your personalized rates</p>
                </div>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">What is the model of your primary vehicle?</h2>
                <p className="text-gray-600">Select your specific vehicle model to get accurate pricing</p>
              </div>

              <div className="space-y-6">
                <div>
                  <select
                    value={selectedModel}
                    onChange={(e) => setSelectedModel(e.target.value)}
                    className="w-full py-4 px-6 border-2 border-gray-300 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white shadow-sm"
                  >
                    <option value="">Select Model</option>
                    <option value="placeholder">Placeholder Model</option>
                  </select>
                </div>

                <div>
                  <button
                    onClick={handleNext}
                    disabled={!selectedModel}
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed text-white py-5 px-6 rounded-xl text-center font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    Continue to Credit Check <ArrowRight size={20} />
                  </button>
                </div>
              </div>

              {/* Benefits */}
              <div className="mt-8 bg-gray-50 rounded-xl p-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="text-sm">
                    <div className="text-2xl font-bold text-green-600">$500+</div>
                    <div className="text-gray-600">Avg. Savings</div>
                  </div>
                  <div className="text-sm">
                    <div className="text-2xl font-bold text-blue-600">1 min</div>
                    <div className="text-gray-600">Time Left</div>
                  </div>
                  <div className="text-sm">
                    <div className="text-2xl font-bold text-purple-600">Free</div>
                    <div className="text-gray-600">No Obligation</div>
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
