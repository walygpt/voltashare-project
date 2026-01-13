interface WeatherData {
  temp: number
  description: string
  humidity: number
  windSpeed: number
}

export async function getEnergyAdvice(weather: WeatherData, batteryLevel: number): Promise<string> {
  try {
    // جلب مفتاح الـ API من متغيرات البيئة
    const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY

    if (!apiKey) {
      console.error("Gemini API key is missing. Please check .env.local")
      throw new Error("Gemini API key is missing")
    }

    // تم التعديل لاستخدام الموديل 2.5 وإصدار v1beta لضمان العمل
    const model = "gemini-2.5-flash-preview-09-2025"
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`

    const prompt = `The weather in Lisbon is ${weather.description} and temp is ${weather.temp}°C. Battery is at ${batteryLevel}%. Give me a 2-sentence energy advice: SELL or STORE?`

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: prompt,
              },
            ],
          },
        ],
      }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error("[v0] Gemini API Error Details:", errorData)
      throw new Error(`API error: ${response.status}`)
    }

    const data = await response.json()
    console.log("[v0] Gemini Response:", data)
    
    // استخراج النص من استجابة جيمناي
    const advice = data.candidates?.[0]?.content?.parts?.[0]?.text || "Unable to generate advice"
    return advice
  } catch (error) {
    console.error("[v0] Error getting energy advice:", error)
    throw error
  }
}