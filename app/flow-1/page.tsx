"use client"
import Image from "next/image"
import { Phone } from "lucide-react"
import { useRouter } from "next/navigation"

export default function Flow1Home() {
  const router = useRouter()

  const handleSubmit = (option: string) => {
    // Navigate directly to the next step
    router.push("/flow-1/insurance-company")
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
              <p className="text-center text-sm text-gray-700">
                Tip: Currently Insured Drivers Will Get Better Rates On Auto Insurance
              </p>
            </div>
            <div className="bg-gray-200 h-2 relative">
              <div className="bg-[#2048A8] h-full w-[12.5%]"></div>
            </div>
          </div>

          {/* Form Content */}
          <div className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">
                Do you currently have an auto insurance policy on your primary vehicle?
              </h2>
            </div>

            <div className="space-y-4 max-w-md mx-auto">
              <button
                onClick={() => handleSubmit("yes")}
                className="w-full bg-[#2048A8] hover:bg-blue-700 text-white py-4 rounded text-center"
              >
                Yes, I am currently insured
              </button>

              <button
                onClick={() => handleSubmit("no")}
                className="w-full bg-[#2048A8] hover:bg-blue-700 text-white py-4 rounded text-center"
              >
                No, I'm uninsured
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
