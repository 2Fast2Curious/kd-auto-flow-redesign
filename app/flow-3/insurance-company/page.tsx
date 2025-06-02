"use client"
import Image from "next/image"
import { Phone } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Flow3InsuranceCompanyPage() {
  const router = useRouter()
  const [selectedCompany, setSelectedCompany] = useState<string>("")

  const insuranceCompanies = [
    "AAA / Auto Club",
    "Allstate",
    "Farmers",
    "GEICO",
    "Liberty Mutual",
    "Progressive",
    "State Farm",
    "USAA",
    "Other",
    "Not Currently Insured",
  ]

  const handleSubmit = () => {
    if (selectedCompany) {
      router.push("/flow-3/driving-license")
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
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

      {/* Progress Section */}
      <div className="bg-white py-4 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-center text-[#1e3a8a] font-medium mb-3">
            Drivers in Deerfield Beach can save up to $610 per year!
          </p>
          <div className="relative">
            <div className="bg-gray-200 h-2 relative">
              <div className="bg-red-500 h-full w-[12.5%]"></div>
            </div>
            <div className="absolute left-[12.5%] -top-1 transform -translate-x-1/2">
              <div className="w-4 h-4 bg-red-500 rounded-sm flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4z" />
                </svg>
              </div>
            </div>
          </div>
          <p className="text-center text-sm text-gray-600 mt-2">Progress: 12.5%</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-[#1e3a8a] text-center mb-8">
          What insurance company currently insures your primary vehicle?
        </h2>

        <div className="space-y-4 max-w-lg mx-auto">
          {insuranceCompanies.map((company) => (
            <button
              key={company}
              onClick={() => setSelectedCompany(company)}
              className={`w-full border border-gray-300 rounded-lg py-4 px-6 text-center text-[#1e3a8a] font-medium transition-colors ${
                selectedCompany === company ? "border-blue-500 bg-blue-50" : "bg-white hover:border-blue-500"
              }`}
            >
              {company}
            </button>
          ))}

          <button
            onClick={handleSubmit}
            disabled={!selectedCompany}
            className="w-full bg-red-500 hover:bg-red-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-4 rounded-lg text-center font-medium flex items-center justify-center gap-2 mt-8"
          >
            Continue
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
