"use client"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Phone } from "lucide-react"

export default function Flow3VehicleYearPage() {
  const router = useRouter()

  const vehicleYears = [
    "2026",
    "2025",
    "2024",
    "2023",
    "2022",
    "2021",
    "2020",
    "2019",
    "2018",
    "2017",
    "2016",
    "2015",
    "2014",
    "2013",
    "2012",
    "2011",
    "2010",
    "2009",
    "2008",
    "2007",
    "2006",
    "2005",
    "2004",
    "2003",
    "2002",
    "2001",
    "2000",
    "1999",
  ]

  const handleYearSelect = (year: string) => {
    router.push("/flow-3/vehicle-make")
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
              <div className="bg-red-500 h-full w-[50%]"></div>
            </div>
            <div className="absolute left-[1%] -top-1 transform -translate-x-1/2">
              <div className="w-4 h-4 bg-red-500 rounded-sm flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4z" />
                </svg>
              </div>
            </div>
          </div>
          <p className="text-center text-sm text-gray-600 mt-2">Progress: 50%</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-[#1e3a8a] text-center mb-8">What is your vehicle year?</h2>

        <div className="grid grid-cols-4 gap-4 mb-6">
          {vehicleYears.map((year) => (
            <button
              key={year}
              onClick={() => handleYearSelect(year)}
              className="bg-white border border-gray-300 rounded-lg py-4 px-6 text-center text-[#1e3a8a] font-medium hover:border-blue-500 transition-colors"
            >
              {year}
            </button>
          ))}
        </div>

        <button className="w-full bg-white border border-gray-300 rounded-lg py-4 px-6 text-left text-gray-500 flex items-center justify-between hover:border-blue-500 transition-colors">
          <span>Select other year</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </div>
  )
}
