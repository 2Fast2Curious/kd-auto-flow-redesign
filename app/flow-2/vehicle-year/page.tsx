"use client"
import Image from "next/image"
import { Phone, ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

export default function Flow2VehicleYearPage() {
  const router = useRouter()

  const vehicleYears = ["2025", "2024", "2023", "2022", "2021", "2020", "2019", "2018", "2017", "2016", "2015", "2014"]

  const handleSelection = (year: string) => {
    router.push("/flow-2/vehicle-make")
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
          <p className="text-sm text-gray-600 mb-2">30% complete</p>
          <div className="relative w-full bg-gray-200 h-2 rounded-full">
            <div className="absolute left-0 top-0 h-2 bg-red-600 rounded-full" style={{ width: "30%" }}></div>
            <div
              className="absolute bg-white border-2 border-gray-400 w-6 h-6 rounded-full -top-2"
              style={{ left: "30%", transform: "translateX(-50%)" }}
            >
              <div className="w-full h-full bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Question */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">Select Your Vehicle Year</h1>
        </div>

        {/* Vehicle Years Grid */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {vehicleYears.map((year) => (
            <button
              key={year}
              onClick={() => handleSelection(year)}
              className="bg-white border-2 border-blue-300 hover:border-blue-500 rounded-lg py-4 text-center text-gray-900 font-medium transition-colors"
            >
              {year}
            </button>
          ))}
        </div>

        {/* Other Vehicle Year */}
        <div className="max-w-2xl mx-auto mb-12">
          <button
            onClick={() => handleSelection("Other")}
            className="w-full bg-white border-2 border-gray-300 hover:border-gray-400 rounded-lg p-4 text-center transition-colors"
          >
            Other Vehicle Year
          </button>
        </div>

        {/* Back Button */}
        <div className="text-center">
          <button
            onClick={() => router.push("/flow-2/driving-license")}
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
