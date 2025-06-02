"use client"
import Image from "next/image"
import { Phone, Shield, Clock, TrendingDown } from "lucide-react"
import { useRouter } from "next/navigation"

export default function Flow4InsuranceCompanyPage() {
  const router = useRouter()

  const insuranceCompanies = [
    { name: "AAA / Auto Club", logo: "/images/images (7).png" },
    { name: "Allstate", logo: "/images/images (7).png" },
    { name: "Farmers", logo: "/images/images (7).png" },
    { name: "GEICO", logo: "/images/images (7).png" },
    { name: "Liberty Mutual", logo: "/images/images (7).png" },
    { name: "Progressive", logo: "/images/images (7).png" },
    { name: "State Farm", logo: "/images/images (7).png" },
    { name: "USAA", logo: "/images/images (7).png" },
    { name: "Other", logo: "/images/images (7).png" },
    { name: "Not Currently Insured", logo: null },
  ]

  const handleSelection = (company: string) => {
    router.push("/flow-4/driving-license")
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

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Progress */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-600">Progress</span>
              <span className="text-sm font-medium text-blue-600">12.5% Complete</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 shadow-inner">
              <div
                className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full shadow-sm transition-all duration-300"
                style={{ width: "12.5%" }}
              ></div>
            </div>
          </div>

          {/* Main Card */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            {/* Card Header */}
            <div className="bg-gradient-to-r from-green-600 to-green-700 px-8 py-6 text-white">
              <div className="flex items-center justify-center gap-3">
                <TrendingDown className="w-8 h-8" />
                <div className="text-center">
                  <h1 className="text-2xl font-bold">Great! Let's Beat Your Current Rate</h1>
                  <p className="text-green-100">Most customers save $847+ per year</p>
                </div>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  What insurance company currently insures your primary vehicle?
                </h2>
                <p className="text-gray-600">This helps us compare rates and find better options</p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {insuranceCompanies.map((company) => (
                  <button
                    key={company.name}
                    onClick={() => handleSelection(company.name)}
                    className="bg-gray-50 hover:bg-blue-50 border-2 border-gray-200 hover:border-blue-300 rounded-xl p-6 text-center font-medium text-gray-700 hover:text-blue-700 transition-all duration-200 transform hover:-translate-y-1 hover:shadow-lg"
                  >
                    {company.logo ? (
                      <>
                        <div className="mb-2 h-12 flex items-center justify-center">
                          <Image
                            src={company.logo || "/placeholder.svg"}
                            alt={`${company.name} Logo`}
                            width={80}
                            height={40}
                            className="object-contain"
                          />
                        </div>
                        <span className="text-sm">{company.name}</span>
                      </>
                    ) : (
                      <span className="text-sm uppercase">NOT CURRENTLY INSURED</span>
                    )}
                  </button>
                ))}
              </div>

              {/* Trust Indicators */}
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="flex flex-col items-center">
                    <Shield className="w-8 h-8 text-green-500 mb-2" />
                    <div className="text-sm font-medium text-gray-700">Secure Process</div>
                    <div className="text-xs text-gray-500">Bank-level encryption</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <Clock className="w-8 h-8 text-blue-500 mb-2" />
                    <div className="text-sm font-medium text-gray-700">Quick & Easy</div>
                    <div className="text-xs text-gray-500">2 minutes to complete</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <TrendingDown className="w-8 h-8 text-purple-500 mb-2" />
                    <div className="text-sm font-medium text-gray-700">Guaranteed Savings</div>
                    <div className="text-xs text-gray-500">Or we'll find you $100</div>
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
