"use client"
import Image from "next/image"
import { Phone, Shield, Star, Users, ArrowRight, Calendar } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Flow4DateOfBirthPage() {
  const router = useRouter()
  const [month, setMonth] = useState("")
  const [day, setDay] = useState("")
  const [year, setYear] = useState("")

  const handleNext = () => {
    if (isValidDate()) {
      router.push("/flow-4/home-address")
    }
  }

  const isValidDate = () => {
    return month.length === 2 && day.length === 2 && year.length === 4
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
              <span className="text-sm font-medium text-blue-600">95% Complete</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 shadow-inner">
              <div
                className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full shadow-sm transition-all duration-300"
                style={{ width: "95%" }}
              ></div>
            </div>
          </div>

          {/* Main Card */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            {/* Card Header */}
            <div className="bg-gradient-to-r from-violet-600 to-violet-700 px-8 py-6 text-white">
              <div className="flex items-center justify-center gap-3">
                <Calendar className="w-8 h-8" />
                <div className="text-center">
                  <h1 className="text-2xl font-bold">Almost Done!</h1>
                  <p className="text-violet-100">Just need a few personal details</p>
                </div>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">What is your date of birth?</h2>
                <p className="text-gray-600">Your age helps us calculate accurate premiums</p>
              </div>

              <div className="space-y-6">
                {/* Date of Birth Inputs */}
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Month</label>
                    <input
                      type="text"
                      value={month}
                      onChange={(e) => setMonth(e.target.value.replace(/\D/g, "").slice(0, 2))}
                      placeholder="MM"
                      className="w-full py-4 px-4 border-2 border-gray-300 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-center font-semibold"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Day</label>
                    <input
                      type="text"
                      value={day}
                      onChange={(e) => setDay(e.target.value.replace(/\D/g, "").slice(0, 2))}
                      placeholder="DD"
                      className="w-full py-4 px-4 border-2 border-gray-300 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-center font-semibold"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Year</label>
                    <input
                      type="text"
                      value={year}
                      onChange={(e) => setYear(e.target.value.replace(/\D/g, "").slice(0, 4))}
                      placeholder="YYYY"
                      className="w-full py-4 px-4 border-2 border-gray-300 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-center font-semibold"
                    />
                  </div>
                </div>

                {/* Continue Button */}
                <div>
                  <button
                    onClick={handleNext}
                    disabled={!isValidDate()}
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed text-white py-5 px-6 rounded-xl text-center font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    Continue to Address <ArrowRight size={20} />
                  </button>
                </div>
              </div>

              {/* Security Notice */}
              <div className="mt-8 bg-green-50 border border-green-200 rounded-xl p-4 text-center">
                <div className="flex items-center justify-center gap-2 text-green-700">
                  <Shield className="w-5 h-5" />
                  <span className="font-medium text-sm">Your personal information is encrypted and secure</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
