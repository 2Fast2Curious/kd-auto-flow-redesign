"use client"
import Image from "next/image"
import { Phone, Shield, Star, Users, CreditCard } from "lucide-react"
import { useRouter } from "next/navigation"

export default function Flow4CreditRatingPage() {
  const router = useRouter()

  const creditOptions = [
    { label: "Excellent", color: "from-green-500 to-green-600 hover:from-green-600 hover:to-green-700", icon: "⭐" },
    { label: "Good", color: "from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700", icon: "👍" },
    { label: "Fair", color: "from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700", icon: "👌" },
    { label: "Poor", color: "from-red-500 to-red-600 hover:from-red-600 hover:to-red-700", icon: "💪" },
  ]

  const handleSelection = (rating: string) => {
    router.push("/flow-4/driving-infractions")
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
              <span className="text-sm font-medium text-blue-600">87.5% Complete</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 shadow-inner">
              <div
                className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full shadow-sm transition-all duration-300"
                style={{ width: "87.5%" }}
              ></div>
            </div>
          </div>

          {/* Main Card */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            {/* Card Header */}
            <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 px-8 py-6 text-white">
              <div className="flex items-center justify-center gap-3">
                <CreditCard className="w-8 h-8" />
                <div className="text-center">
                  <h1 className="text-2xl font-bold">Credit Check Time!</h1>
                  <p className="text-emerald-100">Better credit = Better rates (usually!)</p>
                </div>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">How would you describe your credit rating?</h2>
                <p className="text-gray-600">Don't worry - we work with all credit types!</p>
              </div>

              <div className="space-y-4">
                {creditOptions.map((option) => (
                  <button
                    key={option.label}
                    onClick={() => handleSelection(option.label)}
                    className={`w-full bg-gradient-to-r ${option.color} text-white py-5 px-6 rounded-xl text-center font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-3`}
                  >
                    <span className="text-2xl">{option.icon}</span>
                    {option.label}
                  </button>
                ))}
              </div>

              {/* Reassurance */}
              <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
                <div className="text-blue-700">
                  <p className="font-medium">💡 Pro Tip: Even with poor credit, you can still save hundreds!</p>
                  <p className="text-sm mt-2">We specialize in finding great rates for everyone.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
