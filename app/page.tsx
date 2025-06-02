"use client"
import Image from "next/image"
import { Phone } from "lucide-react"
import { useRouter } from "next/navigation"

export default function FlowSelection() {
  const router = useRouter()

  const handleFlowSelection = (flowNumber: string) => {
    if (flowNumber === "1") {
      router.push(`/flow-${flowNumber}`)
    } else {
      router.push(`/flow-${flowNumber}/insurance-company`)
    }
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
            <a href="tel:18665483035" className="text-[#2048A8] font-bold text-lg flex items-center justify-end gap-1">
              <Phone size={16} className="text-[#2048A8]" />
              1-866-548-3035 <span className="font-normal">(TTY 711)</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto bg-white rounded-md shadow-lg border border-gray-200 overflow-hidden">
          {/* Progress Bar */}
          <div>
            <div className="bg-gray-200 h-2 relative">
              <div className="bg-[#2048A8] h-full w-[0%]"></div>
            </div>
          </div>

          {/* Form Content */}
          <div className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">Select Your Flow</h2>
              <p className="text-gray-600">Choose which flow variation you'd like to test</p>
            </div>

            <div className="space-y-4 max-w-md mx-auto">
              <button
                onClick={() => handleFlowSelection("1")}
                className="w-full bg-[#2048A8] hover:bg-blue-700 text-white py-4 rounded text-center"
              >
                Flow 1
              </button>

              <button
                onClick={() => handleFlowSelection("2")}
                className="w-full bg-[#2048A8] hover:bg-blue-700 text-white py-4 rounded text-center"
              >
                Flow 2
              </button>

              <button
                onClick={() => handleFlowSelection("3")}
                className="w-full bg-[#2048A8] hover:bg-blue-700 text-white py-4 rounded text-center"
              >
                Flow 3
              </button>

              <button
                onClick={() => handleFlowSelection("4")}
                className="w-full bg-[#2048A8] hover:bg-blue-700 text-white py-4 rounded text-center"
              >
                Flow 4
              </button>

              <button
                onClick={() => handleFlowSelection("5")}
                className="w-full bg-[#2048A8] hover:bg-blue-700 text-white py-4 rounded text-center"
              >
                Flow 5
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
