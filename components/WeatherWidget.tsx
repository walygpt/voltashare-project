"use client"

import { useEffect } from "react"
import { fetchWeather } from "@/services/weather"

interface WeatherData {
  temp: number
  description: string
  humidity: number
  windSpeed: number
}

const WEATHER_ICONS: Record<string, string> = {
  "clear sky": "☀️",
  "few clouds": "🌤️",
  "scattered clouds": "☁️",
  "broken clouds": "☁️",
  "shower rain": "🌧️",
  rain: "🌧️",
  thunderstorm: "⛈️",
  snow: "❄️",
  mist: "🌫️",
}

export default function WeatherWidget({
  weather,
  setWeather,
  setLoading,
}: {
  weather: WeatherData | null
  setWeather: (weather: WeatherData) => void
  setLoading: (loading: boolean) => void
}) {
  useEffect(() => {
    fetchWeather()
      .then((data) => {
        setWeather(data)
        setLoading(false)
      })
      .catch((err) => {
        console.error("Weather fetch error:", err)
        setLoading(false)
      })
  }, [setWeather, setLoading])

  const getWeatherIcon = (description: string) => {
    const desc = description.toLowerCase()
    return Object.entries(WEATHER_ICONS).find(([key]) => desc.includes(key))?.[1] || "🌤️"
  }

  if (!weather) return null

  return (
    <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl p-6 shadow-lg border border-blue-100 mb-6">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-gray-600 text-sm font-semibold uppercase tracking-wide mb-3">Lisbon Weather</h2>
          <div className="flex items-center gap-4">
            <div className="text-5xl">{getWeatherIcon(weather.description)}</div>
            <div>
              <p className="text-3xl font-bold text-blue-900">{Math.round(weather.temp)}°C</p>
              <p className="text-gray-600 text-sm capitalize mt-1">{weather.description}</p>
            </div>
          </div>
        </div>
        <div className="text-right">
          <p className="text-xs text-gray-500 mb-2">Humidity</p>
          <p className="text-2xl font-bold text-emerald-600">{weather.humidity}%</p>
        </div>
      </div>
    </div>
  )
}
