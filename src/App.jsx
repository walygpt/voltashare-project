"use client"

import { useEffect, useState } from "react"
import { initializeFirebase, logEnergyData } from "./services/firebase"
import Header from "./components/Header"
import CurrentStatus from "./components/CurrentStatus"
import WeatherWidget from "./components/WeatherWidget"
import GeminiAdvisor from "./components/GeminiAdvisor"
import InstallButton from "./components/InstallButton"

export default function App() {
  const [batteryLevel, setBatteryLevel] = useState(85)
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(true)
  const [deferredPrompt, setDeferredPrompt] = useState(null)

  useEffect(() => {
    // Initialize Firebase
    initializeFirebase()
    logEnergyData()

    // Handle PWA install prompt
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault()
      setDeferredPrompt(e)
    }

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt)

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-emerald-50">
      <Header />

      <main className="max-w-2xl mx-auto px-4 py-6 sm:py-8">
        {/* Install Button - Only show if PWA can be installed */}
        {deferredPrompt && <InstallButton deferredPrompt={deferredPrompt} setDeferredPrompt={setDeferredPrompt} />}

        {/* Current Status Card */}
        <CurrentStatus batteryLevel={batteryLevel} />

        {/* Weather Widget */}
        <WeatherWidget weather={weather} setWeather={setWeather} setLoading={setLoading} />

        {/* Gemini Energy Advisor */}
        <GeminiAdvisor batteryLevel={batteryLevel} weather={weather} loading={loading} />
      </main>
    </div>
  )
}
