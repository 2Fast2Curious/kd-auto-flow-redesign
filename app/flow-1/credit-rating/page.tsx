"use client"
import Image from "next/image"
import { Phone } from "lucide-react"
import { useRouter } from "next/navigation"

export default function Flow1CreditRatingPage() {
  const router = useRouter()

  const creditOptions = [
    { label: "Excellent", color: "bg-green-500 hover:bg-green-600" },
    { label: "Good", color: "bg-blue-500 hover:bg-blue-600" },
    { label: "Fair", color: "bg-yellow-500 hover:bg-yellow-600" },
    { label: "Poor", color: "bg-red-500 hover:bg-red-600" },
  ]

  const handleSelection = (rating: string) => {
    router.push("/flow-1/driving-infractions")
  }

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
              <div className="bg-[#2048A8] h-full w-[87.5%]"></div>
            </div>
          </div>

          {/* Form Content */}
          <div className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">How would you describe your credit rating?</h2>
            </div>

            <div className="space-y-4 max-w-md mx-auto">
              {creditOptions.map((option) => (
                <button
                  key={option.label}
                  onClick={() => handleSelection(option.label)}
                  className={`w-full ${option.color} text-white py-4 rounded text-center font-medium`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
