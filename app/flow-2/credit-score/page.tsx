"use client"
import Image from "next/image"
import { Phone, ArrowLeft, Info } from "lucide-react"
import { useRouter } from "next/navigation"

export default function Flow2CreditScorePage() {
  const router = useRouter()

  const creditOptions = ["Excellent", "Good", "Fair", "Poor"]

  const handleSelection = (score: string) => {
    router.push("/flow-2/driving-infractions")
  }

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
          <p className="text-sm text-gray-600 mb-2">65% complete</p>
          <div className="relative w-full bg-gray-200 h-2 rounded-full">
            <div className="absolute left-0 top-0 h-2 bg-red-600 rounded-full" style={{ width: "65%" }}></div>
            <div
              className="absolute bg-white border-2 border-gray-400 w-6 h-6 rounded-full -top-2"
              style={{ left: "65%", transform: "translateX(-50%)" }}
            >
              <div className="w-full h-full bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Question */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">What's your credit score?</h1>
        </div>

        {/* Info Text */}
        <div className="flex items-center justify-center gap-2 mb-8 text-gray-600 italic">
          <Info size={16} className="text-blue-500" />
          <p>It is ok to guess. 42% of Americans have an excellent credit score.</p>
        </div>

        {/* Credit Score Options */}
        <div className="space-y-4 max-w-md mx-auto">
          {creditOptions.map((option) => (
            <button
              key={option}
              onClick={() => handleSelection(option)}
              className="w-full bg-white border-2 border-blue-300 hover:border-blue-500 rounded-lg py-4 text-center text-gray-900 font-medium transition-colors"
            >
              {option}
            </button>
          ))}
        </div>

        {/* Back Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => router.push("/flow-2/vehicle-model")}
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
