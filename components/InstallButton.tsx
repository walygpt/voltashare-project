"use client"

import { useState } from "react"

interface BeforeInstallPromptEvent extends Event {
  prompt: () => void
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>
}

export default function InstallButton({
  deferredPrompt,
  setDeferredPrompt,
}: {
  deferredPrompt: BeforeInstallPromptEvent | null
  setDeferredPrompt: (prompt: BeforeInstallPromptEvent | null) => void
}) {
  const [installing, setInstalling] = useState(false)

  const handleInstall = async () => {
    if (!deferredPrompt) return

    setInstalling(true)
    deferredPrompt.prompt()

    const { outcome } = await deferredPrompt.userChoice
    if (outcome === "accepted") {
      console.log("PWA installed successfully")
    }

    setDeferredPrompt(null)
    setInstalling(false)
  }

  return (
    <div className="bg-gradient-to-r from-emerald-500 to-blue-600 rounded-2xl p-4 sm:p-6 shadow-lg mb-6 text-white">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
            <svg
              className="w-6 h-6 text-emerald-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
            </svg>
          </div>
          <div>
            <p className="font-semibold">Install VoltaShare</p>
            <p className="text-sm opacity-90">Get offline access and faster loading</p>
          </div>
        </div>
        <button
          onClick={handleInstall}
          disabled={installing}
          className="bg-white text-emerald-600 font-semibold px-6 py-2 rounded-lg hover:bg-gray-100 disabled:opacity-50 transition-colors whitespace-nowrap"
        >
          {installing ? "Installing..." : "Install"}
        </button>
      </div>
    </div>
  )
}
