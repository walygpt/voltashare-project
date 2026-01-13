"use client"

import { useState, useEffect } from "react"
import { getEnergyAdvice } from "@/services/gemini"

interface WeatherData {
  temp: number
  description: string
  humidity: number
  windSpeed: number
}

export default function GeminiAdvisor({
  batteryLevel,
  weather,
  loading,
}: {
  batteryLevel: number
  weather: WeatherData | null
  loading: boolean
}) {
  const [advice, setAdvice] = useState("")
  const [adviceLoading, setAdviceLoading] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    if (weather && !loading) {
      getAdvice()
    }
  }, [weather, loading])

  const getAdvice = async () => {
    if (!weather) return

    setAdviceLoading(true)
    setError("")
    try {
      const response = await getEnergyAdvice(weather, batteryLevel)
      setAdvice(response)
    } catch (err) {
      console.error("Error getting advice:", err)
      setError("Failed to get energy advice. Please try again.")
      setAdvice("")
    } finally {
      setAdviceLoading(false)
    }
  }

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-gray-600 text-sm font-semibold uppercase tracking-wide">Gemini Energy Advisor</h2>
        <button
          onClick={getAdvice}
          disabled={adviceLoading}
          className="text-emerald-600 hover:text-emerald-700 disabled:opacity-50 transition-colors"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2" />
          </svg>
        </button>
      </div>

      {adviceLoading ? (
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
          <span className="text-gray-500 text-sm ml-2">Analyzing weather and energy...</span>
        </div>
      ) : error ? (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700 text-sm">{error}</div>
      ) : advice ? (
        <div className="bg-emerald-50 border-l-4 border-emerald-500 rounded-lg p-4">
          <p className="text-emerald-900 leading-relaxed text-sm">{advice}</p>
        </div>
      ) : (
        <p className="text-gray-400 text-sm">Waiting for weather data...</p>
      )}
    </div>
  )
}
